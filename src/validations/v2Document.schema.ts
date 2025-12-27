import { z } from 'zod';

// Schema for creating a new V2 document
export const createV2DocumentSchema = z.object({
  vehicleNo: z.string()
    .min(1, 'Vehicle number is required')
    .max(50, 'Vehicle number must be less than 50 characters'),
  folderLink: z.string()
    .min(1, 'Folder link is required')
    .url('Folder link must be a valid URL'),
  description: z.string()
    .max(500, 'Description must be less than 500 characters')
    .optional()
});

// Schema for updating a V2 document
export const updateV2DocumentSchema = z.object({
  vehicleNo: z.string()
    .min(1, 'Vehicle number is required')
    .max(50, 'Vehicle number must be less than 50 characters')
    .optional(),
  folderLink: z.string()
    .min(1, 'Folder link is required')
    .url('Folder link must be a valid URL')
    .optional(),
  description: z.string()
    .max(500, 'Description must be less than 500 characters')
    .optional()
});

// Schema for V2 document ID parameter
export const v2DocumentIdSchema = z.object({
  id: z.string().cuid('Invalid document ID format')
});

// Schema for query parameters (pagination, search, etc.)
export const v2DocumentQuerySchema = z.object({
  page: z.string().regex(/^\d+$/).transform(Number).default(() => 1),
  limit: z.string().regex(/^\d+$/).transform(Number).default(() => 10),
  search: z.string().optional(),
  sortBy: z.enum(['vehicleNo', 'createdAt', 'updatedAt']).default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
});

export type CreateV2DocumentInput = z.infer<typeof createV2DocumentSchema>;
export type UpdateV2DocumentInput = z.infer<typeof updateV2DocumentSchema>;
export type V2DocumentIdInput = z.infer<typeof v2DocumentIdSchema>;
export type V2DocumentQueryInput = z.infer<typeof v2DocumentQuerySchema>;
