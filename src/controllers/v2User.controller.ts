import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { 
  createV2UserSchema, 
  updateV2UserSchema, 
  loginV2UserSchema,
  v2UserIdSchema,
  v2UserQuerySchema 
} from '../validations/v2User.schema';

// GET /api/v2/users - Get all V2 users with pagination and search
export const getAllV2Users = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('👥 Fetching all V2 users');
    
    const { page, limit, search, status, sortBy, sortOrder } = v2UserQuerySchema.parse(req.query);
    
    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Build where clause for search and filters
    const where: any = {};
    
    if (search) {
      where.OR = [
        { username: { contains: search, mode: 'insensitive' as const } }
      ];
    }
    
    if (status) {
      where.status = status;
    }
    
    // Get total count for pagination
    const total = await prisma.v2User.count({ where });
    
    // Get users with pagination (include password in response)
    const users = await prisma.v2User.findMany({
      where,
      skip,
      take: limit,
      orderBy: { [sortBy]: sortOrder },
      select: {
        id: true,
        username: true,
        password: true,
        deviceId: true,
        status: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    // Calculate pagination info
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    res.json({
      success: true,
      data: users,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage,
        hasPrevPage
      }
    });
    
    console.log(`✅ Found ${users.length} V2 users (page ${page}/${totalPages})`);
  } catch (error) {
    next(error);
  }
};

// GET /api/v2/users/:id - Get a specific V2 user by ID
export const getV2UserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = v2UserIdSchema.parse(req.params);
    
    console.log(`🔍 Looking for V2 user with ID: ${id}`);
    
    const user = await prisma.v2User.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        password: true,
        deviceId: true,
        status: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'V2 user not found'
      });
      return;
    }
    
    res.json({
      success: true,
      data: user
    });
    
    console.log(`✅ V2 user found: ${user.username}`);
  } catch (error) {
    next(error);
  }
};

// POST /api/v2/users - Create a new V2 user
export const createV2User = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const validatedData = createV2UserSchema.parse(req.body);
    
    console.log(`👤 Creating new V2 user: ${validatedData.username}`);
    
    // Check if username already exists
    const existingUser = await prisma.v2User.findUnique({
      where: { username: validatedData.username }
    });
    
    if (existingUser) {
      res.status(409).json({
        success: false,
        message: 'Username already exists'
      });
      return;
    }
    
    // Ensure status defaults to 'active' if not provided
    const userData = {
      username: validatedData.username,
      password: validatedData.password,
      status: validatedData.status || 'active'
    };
    
    const user = await prisma.v2User.create({
      data: userData,
      select: {
        id: true,
        username: true,
        password: true,
        deviceId: true,
        status: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    res.status(201).json({
      success: true,
      message: 'V2 user created successfully',
      data: user
    });
    
    console.log(`✅ V2 user created with ID: ${user.id}`);
  } catch (error) {
    next(error);
  }
};

// PUT /api/v2/users/:id - Update a V2 user
export const updateV2User = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = v2UserIdSchema.parse(req.params);
    const validatedData = updateV2UserSchema.parse(req.body);
    
    console.log(`📝 Updating V2 user with ID: ${id}`);
    
    // Check if user exists
    const existingUser = await prisma.v2User.findUnique({
      where: { id }
    });
    
    if (!existingUser) {
      res.status(404).json({
        success: false,
        message: 'V2 user not found'
      });
      return;
    }
    
    // Check if username is being updated and if it already exists
    if (validatedData.username && validatedData.username !== existingUser.username) {
      const usernameExists = await prisma.v2User.findUnique({
        where: { username: validatedData.username }
      });
      
      if (usernameExists) {
        res.status(409).json({
          success: false,
          message: 'Username already exists'
        });
        return;
      }
    }
    
    // Prepare update data - handle deviceId reset (null or empty string)
    const updateData: any = { ...validatedData };
    
    // If deviceId is explicitly provided as null or empty string, set it to null to reset
    if ('deviceId' in validatedData && (validatedData.deviceId === null || validatedData.deviceId === '')) {
      updateData.deviceId = null;
      console.log(`🔄 Resetting deviceId for user ${existingUser.username}`);
    }
    
    const user = await prisma.v2User.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        username: true,
        password: true,
        deviceId: true,
        status: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    res.json({
      success: true,
      message: 'V2 user updated successfully',
      data: user
    });
    
    console.log(`✅ V2 user updated: ${user.username}`);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/v2/users/:id - Delete a V2 user
export const deleteV2User = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = v2UserIdSchema.parse(req.params);
    
    console.log(`🗑️ Deleting V2 user with ID: ${id}`);
    
    // Check if user exists
    const existingUser = await prisma.v2User.findUnique({
      where: { id }
    });
    
    if (!existingUser) {
      res.status(404).json({
        success: false,
        message: 'V2 user not found'
      });
      return;
    }
    
    await prisma.v2User.delete({
      where: { id }
    });
    
    res.json({
      success: true,
      message: 'V2 user deleted successfully'
    });
    
    console.log(`✅ V2 user deleted: ${existingUser.username}`);
  } catch (error) {
    next(error);
  }
};

// POST /api/v2/users/login - User login with device management
export const loginV2User = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, password, deviceId } = loginV2UserSchema.parse(req.body);
    
    console.log(`🔐 V2 user login attempt: ${username} with device: ${deviceId}`);
    
    // Find user by username
    const user = await prisma.v2User.findUnique({
      where: { username }
    });
    
    // Validate username and password
    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      });
      return;
    }
    
    // Verify password (direct comparison)
    if (user.password !== password) {
      res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      });
      return;
    }
    
    // Check if user status is blocked
    if (user.status === 'blocked') {
      res.status(403).json({
        success: false,
        message: 'Account is blocked. Please contact administrator.'
      });
      return;
    }
    
    // Device management logic
    if (!user.deviceId) {
      // If user.deviceId is NULL → bind deviceId to user
      console.log(`📱 First login for ${username}, binding device ID: ${deviceId}`);
      
      const updatedUser = await prisma.v2User.update({
        where: { id: user.id },
        data: { deviceId },
        select: {
          id: true,
          username: true,
          password: true,
          deviceId: true,
          status: true,
          createdAt: true,
          updatedAt: true
        }
      });
      
      res.json({
        success: true,
        message: 'Login successful',
        data: updatedUser
      });
      
    } else if (user.deviceId !== deviceId) {
      // Else if user.deviceId !== request.deviceId → reject login
      console.log(`❌ Device mismatch for ${username}. Expected: ${user.deviceId}, Got: ${deviceId}`);
      
      res.status(403).json({
        success: false,
        message: 'This account is already in use on another device. Please contact admin.'
      });
      return;
      
    } else {
      // Else → allow login
      console.log(`✅ Device match for ${username}, login successful`);
      
      const userResponse = {
        id: user.id,
        username: user.username,
        password: user.password,
        deviceId: user.deviceId,
        status: user.status,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      };
      
      res.json({
        success: true,
        message: 'Login successful',
        data: userResponse
      });
    }
    
  } catch (error) {
    next(error);
  }
};
