import { z } from 'zod';

// Schema for creating a new V2 user
export const createV2UserSchema = z.object({
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must be less than 50 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .max(255, 'Password must be less than 255 characters'),
  status: z.enum(['active', 'blocked']).default('active').optional()
});

// Schema for updating a V2 user
export const updateV2UserSchema = z.object({
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must be less than 50 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
    .optional(),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .max(255, 'Password must be less than 255 characters')
    .optional(),
  deviceId: z.preprocess(
    (val) => val === '' || val === null ? null : val,
    z.union([
      z.string().max(255, 'Device ID must be less than 255 characters'),
      z.null()
    ]).optional()
  ),
  status: z.enum(['active', 'blocked']).optional()
});

// Schema for user login
export const loginV2UserSchema = z.object({
  username: z.string()
    .min(1, 'Username is required'),
  password: z.string()
    .min(1, 'Password is required'),
  deviceId: z.string()
    .min(1, 'Device ID is required')
    .max(255, 'Device ID must be less than 255 characters')
});

// Schema for V2 user ID parameter
export const v2UserIdSchema = z.object({
  id: z.string().cuid('Invalid user ID format')
});

// Schema for query parameters (pagination, search, etc.)
export const v2UserQuerySchema = z.object({
  page: z.string().regex(/^\d+$/).transform(Number).default(() => 1),
  limit: z.string().regex(/^\d+$/).transform(Number).default(() => 10),
  search: z.string().optional(),
  status: z.enum(['active', 'blocked']).optional(),
  sortBy: z.enum(['username', 'createdAt', 'updatedAt']).default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
});

export type CreateV2UserInput = z.infer<typeof createV2UserSchema>;
export type UpdateV2UserInput = z.infer<typeof updateV2UserSchema>;
export type LoginV2UserInput = z.infer<typeof loginV2UserSchema>;
export type V2UserIdInput = z.infer<typeof v2UserIdSchema>;
export type V2UserQueryInput = z.infer<typeof v2UserQuerySchema>;

