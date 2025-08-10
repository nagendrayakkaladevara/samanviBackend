import { z } from 'zod';

export const createBusSchema = z.object({
  registrationNo: z.string().min(1, 'Registration number is required'),
  model: z.string().optional(),
  manufacturer: z.string().optional(),
  yearOfMake: z.number().int().min(1900).max(new Date().getFullYear() + 1).optional(),
  ownerName: z.string().optional(),
});

export const updateBusSchema = z.object({
  registrationNo: z.string().min(1, 'Registration number is required').optional(),
  model: z.string().optional(),
  manufacturer: z.string().optional(),
  yearOfMake: z.number().int().min(1900).max(new Date().getFullYear() + 1).optional(),
  ownerName: z.string().optional(),
});

export const busIdSchema = z.object({
  id: z.string().min(1, 'Bus ID is required'),
});

export const busQuerySchema = z.object({
  page: z.string().regex(/^\d+$/).transform(Number).default(() => 1),
  limit: z.string().regex(/^\d+$/).transform(Number).default(() => 10),
  search: z.string().optional(),
});

export const busDocumentQuerySchema = z.object({
  page: z.string().regex(/^\d+$/).transform(Number).default(() => 1),
  limit: z.string().regex(/^\d+$/).transform(Number).default(() => 10),
});
