import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { userSchema, loginSchema, updateUserSchema, userIdSchema } from '../validations/user.schema';
import { AuthService } from '../utils/auth';
import { createError } from '../middlewares/errorHandler';
import logger from '../utils/logger';

export const getUsers = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await prisma.user.findMany({
      where: { isActive: true },
      select: { 
        id: true, 
        username: true, 
        email: true,
        createdAt: true,
        updatedAt: true 
      }
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = userIdSchema.parse({ id: req.params.id });
    const userId = parseInt(id);
    
    const user = await prisma.user.findFirst({
      where: { id: userId, isActive: true },
      select: { 
        id: true, 
        username: true, 
        email: true,
        createdAt: true,
        updatedAt: true 
      }
    });

    if (!user) {
      throw createError('User not found', 404);
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const addUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = userSchema.parse(req.body);
    
    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: data.username },
          ...(data.email ? [{ email: data.email }] : [])
        ]
      }
    });

    if (existingUser) {
      throw createError('Username or email already exists', 409);
    }

    // Hash password
    const hashedPassword = await AuthService.hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        username: data.username,
        password: hashedPassword,
        email: data.email,
      },
      select: { 
        id: true, 
        username: true, 
        email: true,
        createdAt: true 
      }
    });

    logger.info('User created successfully', { userId: user.id, username: user.username });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = userIdSchema.parse({ id: req.params.id });
    const userId = parseInt(id);
    const data = updateUserSchema.parse(req.body);

    // Check if user exists and is active
    const existingUser = await prisma.user.findFirst({
      where: { id: userId, isActive: true }
    });

    if (!existingUser) {
      throw createError('User not found', 404);
    }

    // Check for username/email conflicts
    if (data.username || data.email) {
      const conflictUser = await prisma.user.findFirst({
        where: {
          OR: [
            ...(data.username ? [{ username: data.username }] : []),
            ...(data.email ? [{ email: data.email }] : [])
          ],
          NOT: { id: userId }
        }
      });

      if (conflictUser) {
        throw createError('Username or email already exists', 409);
      }
    }

    // Hash password if provided
    let hashedPassword: string | undefined;
    if (data.password) {
      hashedPassword = await AuthService.hashPassword(data.password);
    }

    const updateData: any = {};
    if (data.username) updateData.username = data.username;
    if (data.email !== undefined) updateData.email = data.email;
    if (hashedPassword) updateData.password = hashedPassword;

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: { 
        id: true, 
        username: true, 
        email: true,
        updatedAt: true 
      }
    });

    logger.info('User updated successfully', { userId: user.id, username: user.username });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = userIdSchema.parse({ id: req.params.id });
    const userId = parseInt(id);

    // Check if user exists and is active
    const existingUser = await prisma.user.findFirst({
      where: { id: userId, isActive: true }
    });

    if (!existingUser) {
      throw createError('User not found', 404);
    }

    // Soft delete by setting isActive to false
    await prisma.user.update({
      where: { id: userId },
      data: { isActive: false }
    });

    logger.info('User deleted successfully', { userId });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = loginSchema.parse(req.body);
    
    const user = await prisma.user.findFirst({
      where: { 
        username: data.username,
        isActive: true 
      }
    });

    if (!user) {
      throw createError('Invalid credentials', 401);
    }

    const isPasswordValid = await AuthService.comparePassword(data.password, user.password);
    
    if (!isPasswordValid) {
      throw createError('Invalid credentials', 401);
    }

    logger.info('User logged in successfully', { userId: user.id, username: user.username });
    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    next(error);
  }
};
