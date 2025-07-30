import { z } from 'zod';

export const userSchema = z.object({
  username: z.string().min(3).max(50).regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  password: z.string().min(6).max(255),
  email: z.string().email().optional(),
});

export const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

export const updateUserSchema = z.object({
  username: z.string().min(3).max(50).regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores').optional(),
  password: z.string().min(6).max(255).optional(),
  email: z.string().email().optional(),
});

export const userIdSchema = z.object({
  id: z.string().regex(/^\d+$/, 'ID must be a number'),
});
