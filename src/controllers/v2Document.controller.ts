import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { 
  createV2DocumentSchema, 
  updateV2DocumentSchema, 
  v2DocumentIdSchema,
  v2DocumentQuerySchema 
} from '../validations/v2Document.schema';

// GET /api/v2/documents - Get all V2 documents with pagination and search
export const getAllV2Documents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('📋 Fetching all V2 documents');
    
    const { page, limit, search, sortBy, sortOrder } = v2DocumentQuerySchema.parse(req.query);
    
    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Build where clause for search
    const where = search ? {
      OR: [
        { vehicleNo: { contains: search, mode: 'insensitive' as const } },
        { description: { contains: search, mode: 'insensitive' as const } }
      ]
    } : {};
    
    // Get total count for pagination
    const total = await prisma.v2Document.count({ where });
    
    // Get documents with pagination
    const documents = await prisma.v2Document.findMany({
      where,
      skip,
      take: limit,
      orderBy: { [sortBy]: sortOrder }
    });
    
    // Calculate pagination info
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    res.json({
      success: true,
      data: documents,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage,
        hasPrevPage
      }
    });
    
    console.log(`✅ Found ${documents.length} V2 documents (page ${page}/${totalPages})`);
  } catch (error) {
    next(error);
  }
};

// GET /api/v2/documents/:id - Get a specific V2 document by ID
export const getV2DocumentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = v2DocumentIdSchema.parse(req.params);
    
    console.log(`🔍 Looking for V2 document with ID: ${id}`);
    
    const document = await prisma.v2Document.findUnique({
      where: { id }
    });
    
    if (!document) {
      res.status(404).json({
        success: false,
        message: 'V2 document not found'
      });
      return;
    }
    
    res.json({
      success: true,
      data: document
    });
    
    console.log(`✅ V2 document found: ${document.vehicleNo}`);
  } catch (error) {
    next(error);
  }
};

// POST /api/v2/documents - Create a new V2 document
export const createV2Document = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const validatedData = createV2DocumentSchema.parse(req.body);
    
    console.log(`📝 Creating new V2 document for vehicle: ${validatedData.vehicleNo}`);
    
    // Check if vehicle number already exists
    const existingDocument = await prisma.v2Document.findUnique({
      where: { vehicleNo: validatedData.vehicleNo }
    });
    
    if (existingDocument) {
      res.status(409).json({
        success: false,
        message: 'A document for this vehicle number already exists'
      });
      return;
    }
    
    const document = await prisma.v2Document.create({
      data: validatedData
    });
    
    res.status(201).json({
      success: true,
      message: 'V2 document created successfully',
      data: document
    });
    
    console.log(`✅ V2 document created with ID: ${document.id}`);
  } catch (error) {
    next(error);
  }
};

// PUT /api/v2/documents/:id - Update a V2 document
export const updateV2Document = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = v2DocumentIdSchema.parse(req.params);
    const validatedData = updateV2DocumentSchema.parse(req.body);
    
    console.log(`📝 Updating V2 document with ID: ${id}`);
    
    // Check if document exists
    const existingDocument = await prisma.v2Document.findUnique({
      where: { id }
    });
    
    if (!existingDocument) {
      res.status(404).json({
        success: false,
        message: 'V2 document not found'
      });
      return;
    }
    
    // Check if vehicle number is being updated and if it already exists
    if (validatedData.vehicleNo && validatedData.vehicleNo !== existingDocument.vehicleNo) {
      const vehicleExists = await prisma.v2Document.findUnique({
        where: { vehicleNo: validatedData.vehicleNo }
      });
      
      if (vehicleExists) {
        res.status(409).json({
          success: false,
          message: 'A document for this vehicle number already exists'
        });
        return;
      }
    }
    
    const document = await prisma.v2Document.update({
      where: { id },
      data: validatedData
    });
    
    res.json({
      success: true,
      message: 'V2 document updated successfully',
      data: document
    });
    
    console.log(`✅ V2 document updated: ${document.vehicleNo}`);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/v2/documents/:id - Delete a V2 document
export const deleteV2Document = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = v2DocumentIdSchema.parse(req.params);
    
    console.log(`🗑️ Deleting V2 document with ID: ${id}`);
    
    // Check if document exists
    const existingDocument = await prisma.v2Document.findUnique({
      where: { id }
    });
    
    if (!existingDocument) {
      res.status(404).json({
        success: false,
        message: 'V2 document not found'
      });
      return;
    }
    
    await prisma.v2Document.delete({
      where: { id }
    });
    
    res.json({
      success: true,
      message: 'V2 document deleted successfully'
    });
    
    console.log(`✅ V2 document deleted: ${existingDocument.vehicleNo}`);
  } catch (error) {
    next(error);
  }
};

