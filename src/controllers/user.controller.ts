import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { userSchema, loginSchema, updateUserSchema, userIdSchema } from '../validations/user.schema';
import { AuthService } from '../utils/auth';
import { createError } from '../middlewares/errorHandler';
import logger from '../utils/logger';

export const getUsers = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('👥 Fetching all users...');
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
    console.log(`✅ Found ${users.length} active users`);
    res.status(200).json({ message: 'Users fetched successfully', users });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = userIdSchema.parse({ id: req.params.id });
    const userId = parseInt(id);

    console.log(`🔍 Looking for user with ID: ${userId}`);
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
      console.log(`❌ User with ID ${userId} not found`);
      throw createError('User not found', 404);
    }

    console.log(`✅ Found user: ${user.username} (ID: ${user.id})`);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const addUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = userSchema.parse(req.body);

    console.log(`➕ Creating new user: ${data.username}`);

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
      console.log(`❌ User already exists: ${data.username}`);
      throw createError('Username or email already exists', 409);
    }

    // Hash password
    console.log('🔐 Hashing password...');
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

    console.log(`✅ User created successfully: ${user.username} (ID: ${user.id})`);
    logger.info('User created successfully', { userId: user.id, username: user.username });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = userIdSchema.parse({ id: req.params.id });
    const userId = parseInt(id);
    const data = updateUserSchema.parse(req.body);

    console.log(`✏️  Updating user with ID: ${userId}`);

    // Check if user exists and is active
    const existingUser = await prisma.user.findFirst({
      where: { id: userId, isActive: true }
    });

    if (!existingUser) {
      console.log(`❌ User with ID ${userId} not found`);
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
        console.log(`❌ Username/email conflict for user ID ${userId}`);
        throw createError('Username or email already exists', 409);
      }
    }

    // Hash password if provided
    let hashedPassword: string | undefined;
    if (data.password) {
      console.log('🔐 Hashing new password...');
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

    console.log(`✅ User updated successfully: ${user.username} (ID: ${user.id})`);
    logger.info('User updated successfully', { userId: user.id, username: user.username });
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = userIdSchema.parse({ id: req.params.id });
    const userId = parseInt(id);

    console.log(`🗑️  Soft deleting user with ID: ${userId}`);

    // Check if user exists and is active
    const existingUser = await prisma.user.findFirst({
      where: { id: userId, isActive: true }
    });

    if (!existingUser) {
      console.log(`❌ User with ID ${userId} not found`);
      throw createError('User not found', 404);
    }

    // Soft delete by setting isActive to false
    await prisma.user.update({
      where: { id: userId },
      data: { isActive: false }
    });

    console.log(`✅ User soft deleted successfully: ${existingUser.username} (ID: ${userId})`);
    logger.info('User deleted successfully', { userId });
    res.status(204).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = loginSchema.parse(req.body);

    console.log(`🔑 Login attempt for user: ${data.username}`);

    const user = await prisma.user.findFirst({
      where: {
        username: data.username,
        isActive: true
      }
    });

    if (!user) {
      console.log(`❌ Login failed: User not found - ${data.username}`);
      res.status(401).json({ message: 'Login failed User not found' });
      throw createError('Invalid credentials', 401);
    }

    console.log('🔐 Verifying password...');
    const isPasswordValid = await AuthService.comparePassword(data.password, user.password);

    if (!isPasswordValid) {
      console.log(`❌ Login failed: Invalid password for user - ${data.username}`);
      res.status(401).json({ message: 'Login failed Invalid password' });
      throw createError('Invalid credentials', 401);
    }

    console.log(`✅ Login successful: ${user.username} (ID: ${user.id})`);
    logger.info('User logged in successfully', { userId: user.id, username: user.username });
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        login: true,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    next(error);
  }
};
