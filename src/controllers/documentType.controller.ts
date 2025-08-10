import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { createDocumentTypeSchema, updateDocumentTypeSchema, documentTypeIdSchema } from '../validations/documentType.schema';
import { createError } from '../middlewares/errorHandler';
import logger from '../utils/logger';

export const createDocumentType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = createDocumentTypeSchema.parse(req.body);
    
    console.log(`📄 Creating new document type: ${data.name}`);
    
    // Check if document type with same name already exists
    const existingDocType = await prisma.documentType.findUnique({
      where: { name: data.name }
    });

    if (existingDocType) {
      console.log(`❌ Document type with name ${data.name} already exists`);
      throw createError('Document type with this name already exists', 409);
    }

    const docType = await prisma.documentType.create({
      data: {
        name: data.name,
        description: data.description,
      }
    });

    console.log(`✅ Document type created successfully: ${docType.name} (ID: ${docType.id})`);
    logger.info('Document type created successfully', { docTypeId: docType.id, name: docType.name });
    res.status(201).json(docType);
  } catch (error) {
    next(error);
  }
};

export const getDocumentTypes = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('📄 Fetching all document types...');
    
    const docTypes = await prisma.documentType.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: {
          select: { documents: true }
        }
      }
    });

    console.log(`✅ Found ${docTypes.length} document types`);
    res.json(docTypes);
  } catch (error) {
    next(error);
  }
};

export const updateDocumentType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = documentTypeIdSchema.parse({ id: req.params.id });
    const data = updateDocumentTypeSchema.parse(req.body);

    console.log(`✏️  Updating document type with ID: ${id}`);

    // Check if document type exists
    const existingDocType = await prisma.documentType.findUnique({
      where: { id }
    });

    if (!existingDocType) {
      console.log(`❌ Document type with ID ${id} not found`);
      throw createError('Document type not found', 404);
    }

    // Check for name conflict if updating
    if (data.name && data.name !== existingDocType.name) {
      const conflictDocType = await prisma.documentType.findUnique({
        where: { name: data.name }
      });

      if (conflictDocType) {
        console.log(`❌ Document type name conflict for ID ${id}`);
        throw createError('Document type with this name already exists', 409);
      }
    }

    const docType = await prisma.documentType.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
      }
    });

    console.log(`✅ Document type updated successfully: ${docType.name} (ID: ${docType.id})`);
    logger.info('Document type updated successfully', { docTypeId: docType.id, name: docType.name });
    res.json(docType);
  } catch (error) {
    next(error);
  }
};

export const deleteDocumentType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = documentTypeIdSchema.parse({ id: req.params.id });

    console.log(`🗑️  Deleting document type with ID: ${id}`);

    // Check if document type exists and has documents
    const existingDocType = await prisma.documentType.findUnique({
      where: { id },
      include: {
        _count: {
          select: { documents: true }
        }
      }
    });

    if (!existingDocType) {
      console.log(`❌ Document type with ID ${id} not found`);
      throw createError('Document type not found', 404);
    }

    // Check if document type is in use
    if (existingDocType._count.documents > 0) {
      console.log(`❌ Cannot delete document type with ${existingDocType._count.documents} documents`);
      throw createError('Cannot delete document type that is in use', 409);
    }

    await prisma.documentType.delete({
      where: { id }
    });

    console.log(`✅ Document type deleted successfully: ${existingDocType.name} (ID: ${id})`);
    logger.info('Document type deleted successfully', { docTypeId: id, name: existingDocType.name });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
