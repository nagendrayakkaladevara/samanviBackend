import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import logger from '../utils/logger';

export const getDashboardStats = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('📊 Fetching dashboard statistics...');
    
    // Get total buses count
    const totalBuses = await prisma.bus.count();
    
    // Get total voice app users count (active users)
    const totalVoiceAppUsers = await prisma.user.count({
      where: {
        isActive: true
      }
    });
    
    // Get additional statistics for more comprehensive dashboard
    const totalDocuments = await prisma.busDocument.count();
    
    // Get documents expiring within 30 days
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    const expiringDocuments = await prisma.busDocument.count({
      where: {
        expiryDate: {
          lte: expiryDate
        }
      }
    });
    
    // Get expired documents count
    const expiredDocuments = await prisma.busDocument.count({
      where: {
        expiryDate: {
          lt: new Date()
        }
      }
    });
    
    // Get document types count
    const totalDocumentTypes = await prisma.documentType.count();
    
    const stats = {
      totalBuses,
      totalVoiceAppUsers,
      totalDocuments,
      expiringDocuments,
      expiredDocuments,
      totalDocumentTypes,
      lastUpdated: new Date().toISOString()
    };
    
    console.log(`✅ Dashboard stats fetched successfully:`);
    console.log(`   - Total Buses: ${totalBuses}`);
    console.log(`   - Total Voice App Users: ${totalVoiceAppUsers}`);
    console.log(`   - Total Documents: ${totalDocuments}`);
    console.log(`   - Expiring Documents (30 days): ${expiringDocuments}`);
    console.log(`   - Expired Documents: ${expiredDocuments}`);
    console.log(`   - Document Types: ${totalDocumentTypes}`);
    
    logger.info('Dashboard statistics fetched successfully', {
      totalBuses,
      totalVoiceAppUsers,
      totalDocuments,
      expiringDocuments,
      expiredDocuments,
      totalDocumentTypes
    });
    
    res.json(stats);
  } catch (error) {
    console.error('❌ Error fetching dashboard statistics:', error);
    logger.error('Error fetching dashboard statistics', { error });
    next(error);
  }
};
