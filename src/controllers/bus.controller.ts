import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { createBusSchema, updateBusSchema, busIdSchema, busQuerySchema } from '../validations/bus.schema';
import { createError } from '../middlewares/errorHandler';
import logger from '../utils/logger';

export const createBus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = createBusSchema.parse(req.body);
    
    console.log(`🚌 Creating new bus: ${data.registrationNo}`);
    
    // Check if bus with same registration number already exists
    const existingBus = await prisma.bus.findUnique({
      where: { registrationNo: data.registrationNo }
    });

    if (existingBus) {
      console.log(`❌ Bus with registration number ${data.registrationNo} already exists`);
      throw createError('Bus with this registration number already exists', 409);
    }

    const bus = await prisma.bus.create({
      data: {
        registrationNo: data.registrationNo,
        model: data.model,
        manufacturer: data.manufacturer,
        yearOfMake: data.yearOfMake,
        ownerName: data.ownerName,
      }
    });

    console.log(`✅ Bus created successfully: ${bus.registrationNo} (ID: ${bus.id})`);
    logger.info('Bus created successfully', { busId: bus.id, registrationNo: bus.registrationNo });
    res.status(201).json(bus);
  } catch (error) {
    next(error);
  }
};

export const getBuses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { page, limit, search } = busQuerySchema.parse(req.query);
    
    console.log(`🚌 Fetching buses - Page: ${page}, Limit: ${limit}, Search: ${search || 'none'}`);
    
    const skip = (page - 1) * limit;
    
    const where = search ? {
      OR: [
        { registrationNo: { contains: search, mode: 'insensitive' as const } },
        { model: { contains: search, mode: 'insensitive' as const } },
        { manufacturer: { contains: search, mode: 'insensitive' as const } },
        { ownerName: { contains: search, mode: 'insensitive' as const } },
      ]
    } : {};

    const [buses, total] = await Promise.all([
      prisma.bus.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          _count: {
            select: { documents: true }
          }
        }
      }),
      prisma.bus.count({ where })
    ]);

    console.log(`✅ Found ${buses.length} buses out of ${total} total`);
    
    res.json({
      buses,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getBusById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = busIdSchema.parse({ id: req.params.id });
    
    console.log(`🔍 Looking for bus with ID: ${id}`);
    
    const bus = await prisma.bus.findUnique({
      where: { id },
      include: {
        documents: {
          include: {
            docType: true
          },
          orderBy: { uploadedAt: 'desc' }
        }
      }
    });

    if (!bus) {
      console.log(`❌ Bus with ID ${id} not found`);
      throw createError('Bus not found', 404);
    }

    console.log(`✅ Found bus: ${bus.registrationNo} (ID: ${bus.id}) with ${bus.documents.length} documents`);
    res.json(bus);
  } catch (error) {
    next(error);
  }
};

export const updateBus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = busIdSchema.parse({ id: req.params.id });
    const data = updateBusSchema.parse(req.body);

    console.log(`✏️  Updating bus with ID: ${id}`);

    // Check if bus exists
    const existingBus = await prisma.bus.findUnique({
      where: { id }
    });

    if (!existingBus) {
      console.log(`❌ Bus with ID ${id} not found`);
      throw createError('Bus not found', 404);
    }

    // Check for registration number conflict if updating
    if (data.registrationNo && data.registrationNo !== existingBus.registrationNo) {
      const conflictBus = await prisma.bus.findUnique({
        where: { registrationNo: data.registrationNo }
      });

      if (conflictBus) {
        console.log(`❌ Registration number conflict for bus ID ${id}`);
        throw createError('Bus with this registration number already exists', 409);
      }
    }

    const bus = await prisma.bus.update({
      where: { id },
      data: {
        registrationNo: data.registrationNo,
        model: data.model,
        manufacturer: data.manufacturer,
        yearOfMake: data.yearOfMake,
        ownerName: data.ownerName,
      }
    });

    console.log(`✅ Bus updated successfully: ${bus.registrationNo} (ID: ${bus.id})`);
    logger.info('Bus updated successfully', { busId: bus.id, registrationNo: bus.registrationNo });
    res.json(bus);
  } catch (error) {
    next(error);
  }
};

export const deleteBus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = busIdSchema.parse({ id: req.params.id });

    console.log(`🗑️  Deleting bus with ID: ${id}`);

    // Check if bus exists
    const existingBus = await prisma.bus.findUnique({
      where: { id },
      include: {
        _count: {
          select: { documents: true }
        }
      }
    });

    if (!existingBus) {
      console.log(`❌ Bus with ID ${id} not found`);
      throw createError('Bus not found', 404);
    }

    // Check if bus has documents
    if (existingBus._count.documents > 0) {
      console.log(`❌ Cannot delete bus with ${existingBus._count.documents} documents`);
      throw createError('Cannot delete bus with existing documents', 409);
    }

    await prisma.bus.delete({
      where: { id }
    });

    console.log(`✅ Bus deleted successfully: ${existingBus.registrationNo} (ID: ${id})`);
    logger.info('Bus deleted successfully', { busId: id, registrationNo: existingBus.registrationNo });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
