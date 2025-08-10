import { z } from 'zod';

export const createBusDocumentSchema = z.object({
  docTypeId: z.string().min(1, 'Document type ID is required'),
  documentNumber: z.string().optional(),
  issueDate: z.string().datetime().optional(),
  expiryDate: z.string().datetime().optional(),
  remarks: z.string().optional(),
  fileUrl: z.string().url('File URL must be a valid URL').min(1, 'File URL is required'),
});

export const updateBusDocumentSchema = z.object({
  docTypeId: z.string().min(1, 'Document type ID is required').optional(),
  documentNumber: z.string().optional(),
  issueDate: z.string().datetime().optional(),
  expiryDate: z.string().datetime().optional(),
  remarks: z.string().optional(),
  fileUrl: z.string().url('File URL must be a valid URL').optional(),
});

export const busDocumentIdSchema = z.object({
  docId: z.string().min(1, 'Document ID is required'),
});

export const busIdParamSchema = z.object({
  busId: z.string().min(1, 'Bus ID is required'),
});

export const expiringDocumentsQuerySchema = z.object({
  withinDays: z.string().regex(/^\d+$/).transform(Number).default(() => 30),
});

export const missingRequiredQuerySchema = z.object({
  types: z.string().optional(), // comma-separated list
});
