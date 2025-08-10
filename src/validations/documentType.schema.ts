import { z } from 'zod';

export const createDocumentTypeSchema = z.object({
  name: z.string().min(1, 'Document type name is required'),
  description: z.string().optional(),
});

export const updateDocumentTypeSchema = z.object({
  name: z.string().min(1, 'Document type name is required').optional(),
  description: z.string().optional(),
});

export const documentTypeIdSchema = z.object({
  id: z.string().min(1, 'Document type ID is required'),
});
