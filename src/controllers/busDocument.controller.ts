import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { 
  createBusDocumentSchema, 
  updateBusDocumentSchema, 
  busDocumentIdSchema, 
  busIdParamSchema,
  expiringDocumentsQuerySchema,
  missingRequiredQuerySchema
} from '../validations/busDocument.schema';
import { createError } from '../middlewares/errorHandler';
import logger from '../utils/logger';

export const createBusDocument = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { busId } = busIdParamSchema.parse({ busId: req.params.busId });
    const data = createBusDocumentSchema.parse(req.body);
    
    console.log(`📄 Creating new document for bus: ${busId}`);
    
    // Check if bus exists
    const bus = await prisma.bus.findUnique({
      where: { id: busId }
    });

    if (!bus) {
      console.log(`❌ Bus with ID ${busId} not found`);
      throw createError('Bus not found', 404);
    }

    // Check if document type exists
    const docType = await prisma.documentType.findUnique({
      where: { id: data.docTypeId }
    });

    if (!docType) {
      console.log(`❌ Document type with ID ${data.docTypeId} not found`);
      throw createError('Document type not found', 404);
    }

    const document = await prisma.busDocument.create({
      data: {
        busId,
        docTypeId: data.docTypeId,
        documentNumber: data.documentNumber,
        issueDate: data.issueDate ? new Date(data.issueDate) : null,
        expiryDate: data.expiryDate ? new Date(data.expiryDate) : null,
        fileUrl: data.fileUrl,
        remarks: data.remarks,
      },
      include: {
        bus: true,
        docType: true
      }
    });

    console.log(`✅ Document created successfully: ${document.docType.name} for bus ${document.bus.registrationNo}`);
    logger.info('Bus document created successfully', { 
      documentId: document.id, 
      busId: document.busId, 
      docType: document.docType.name 
    });
    res.status(201).json(document);
  } catch (error) {
    next(error);
  }
};

export const getBusDocuments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { busId } = busIdParamSchema.parse({ busId: req.params.busId });
    
    console.log(`📄 Fetching documents for bus: ${busId}`);
    
    // Check if bus exists
    const bus = await prisma.bus.findUnique({
      where: { id: busId }
    });

    if (!bus) {
      console.log(`❌ Bus with ID ${busId} not found`);
      throw createError('Bus not found', 404);
    }

    const documents = await prisma.busDocument.findMany({
      where: { busId },
      include: {
        docType: true
      },
      orderBy: { uploadedAt: 'desc' }
    });

    console.log(`✅ Found ${documents.length} documents for bus ${bus.registrationNo}`);
    res.json(documents);
  } catch (error) {
    next(error);
  }
};

export const getDocumentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { docId } = busDocumentIdSchema.parse({ docId: req.params.docId });
    
    console.log(`🔍 Looking for document with ID: ${docId}`);
    
    const document = await prisma.busDocument.findUnique({
      where: { id: docId },
      include: {
        bus: true,
        docType: true
      }
    });

    if (!document) {
      console.log(`❌ Document with ID ${docId} not found`);
      throw createError('Document not found', 404);
    }

    console.log(`✅ Found document: ${document.docType.name} for bus ${document.bus.registrationNo}`);
    res.json(document);
  } catch (error) {
    next(error);
  }
};

export const updateBusDocument = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { docId } = busDocumentIdSchema.parse({ docId: req.params.docId });
    const data = updateBusDocumentSchema.parse(req.body);

    console.log(`✏️  Updating document with ID: ${docId}`);

    // Check if document exists
    const existingDocument = await prisma.busDocument.findUnique({
      where: { id: docId }
    });

    if (!existingDocument) {
      console.log(`❌ Document with ID ${docId} not found`);
      throw createError('Document not found', 404);
    }

    // Check if document type exists if updating
    if (data.docTypeId) {
      const docType = await prisma.documentType.findUnique({
        where: { id: data.docTypeId }
      });

      if (!docType) {
        console.log(`❌ Document type with ID ${data.docTypeId} not found`);
        throw createError('Document type not found', 404);
      }
    }

    const document = await prisma.busDocument.update({
      where: { id: docId },
      data: {
        docTypeId: data.docTypeId,
        documentNumber: data.documentNumber,
        issueDate: data.issueDate ? new Date(data.issueDate) : null,
        expiryDate: data.expiryDate ? new Date(data.expiryDate) : null,
        fileUrl: data.fileUrl,
        remarks: data.remarks,
      },
      include: {
        bus: true,
        docType: true
      }
    });

    console.log(`✅ Document updated successfully: ${document.docType.name} for bus ${document.bus.registrationNo}`);
    logger.info('Bus document updated successfully', { 
      documentId: document.id, 
      busId: document.busId, 
      docType: document.docType.name 
    });
    res.json(document);
  } catch (error) {
    next(error);
  }
};

export const deleteBusDocument = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { docId } = busDocumentIdSchema.parse({ docId: req.params.docId });

    console.log(`🗑️  Deleting document with ID: ${docId}`);

    // Check if document exists
    const existingDocument = await prisma.busDocument.findUnique({
      where: { id: docId },
      include: {
        bus: true,
        docType: true
      }
    });

    if (!existingDocument) {
      console.log(`❌ Document with ID ${docId} not found`);
      throw createError('Document not found', 404);
    }

    await prisma.busDocument.delete({
      where: { id: docId }
    });

    console.log(`✅ Document deleted successfully: ${existingDocument.docType.name} for bus ${existingDocument.bus.registrationNo}`);
    logger.info('Bus document deleted successfully', { 
      documentId: docId, 
      busId: existingDocument.busId, 
      docType: existingDocument.docType.name 
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const getExpiringDocuments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { withinDays } = expiringDocumentsQuerySchema.parse(req.query);
    
    console.log(`⏰ Fetching documents expiring within ${withinDays} days (including expired)`);
    
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + withinDays);

    const documents = await prisma.busDocument.findMany({
      where: {
        expiryDate: {
          lte: expiryDate
        }
      },
      include: {
        bus: true,
        docType: true
      },
      orderBy: { expiryDate: 'asc' }
    });

    console.log(`✅ Found ${documents.length} documents expiring within ${withinDays} days (including expired)`);
    res.json(documents);
  } catch (error) {
    next(error);
  }
};

export const getBusesMissingRequired = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { types } = missingRequiredQuerySchema.parse(req.query);
    
    console.log(`🔍 Finding buses missing required document types: ${types || 'all'}`);
    
    let requiredTypes: string[] = [];
    if (types) {
      requiredTypes = types.split(',').map(t => t.trim());
    } else {
      // Get all document types if none specified
      const allTypes = await prisma.documentType.findMany();
      requiredTypes = allTypes.map(t => t.name);
    }

    // Get all buses
    const buses = await prisma.bus.findMany({
      include: {
        documents: {
          include: {
            docType: true
          },
          where: {
            expiryDate: {
              gte: new Date() // Not expired
            }
          }
        }
      }
    });

    // Find buses missing required documents
    const missingRequired = buses.filter(bus => {
      const busDocTypes = bus.documents.map(doc => doc.docType.name);
      return requiredTypes.some(requiredType => !busDocTypes.includes(requiredType));
    });

    console.log(`✅ Found ${missingRequired.length} buses missing required documents`);
    res.json({
      buses: missingRequired,
      requiredTypes,
      total: missingRequired.length
    });
  } catch (error) {
    next(error);
  }
};
