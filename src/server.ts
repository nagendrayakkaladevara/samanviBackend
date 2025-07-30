import app from './app';
import { config } from './config/config';
import { prisma } from './config/prisma';
import logger from './utils/logger';

console.log('🚀 Starting Samanvi Backend...');
console.log('📦 Environment:', config.nodeEnv);
console.log('🔧 Port:', config.port);

const server = app.listen(config.port, () => {
  console.log('✅ Server is running!');
  console.log('🌐 Server URL: http://localhost:' + config.port);
  console.log('🏥 Health Check: http://localhost:' + config.port + '/health');
  console.log('📊 API Base: http://localhost:' + config.port + '/api/users');
  console.log('⏰ Started at:', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true }));
  console.log('🎯 Ready to handle requests!');
  
  logger.info(`Server listening on port ${config.port}`, {
    environment: config.nodeEnv,
    port: config.port,
  });
});

// Graceful shutdown
const gracefulShutdown = async (signal: string) => {
  console.log(`\n🛑 Received ${signal}. Starting graceful shutdown...`);
  logger.info(`Received ${signal}. Starting graceful shutdown...`);
  
  server.close(async () => {
    console.log('✅ HTTP server closed');
    logger.info('HTTP server closed');
    
    try {
      await prisma.$disconnect();
      console.log('✅ Database connection closed');
      logger.info('Database connection closed');
      console.log('👋 Goodbye! Server shutdown complete.');
      process.exit(0);
    } catch (error) {
      console.error('❌ Error during shutdown:', error);
      logger.error('Error during shutdown:', error);
      process.exit(1);
    }
  });

  // Force shutdown after 30 seconds
  setTimeout(() => {
    console.error('⏰ Forced shutdown after timeout');
    logger.error('Forced shutdown after timeout');
    process.exit(1);
  }, 30000);
};

// Handle shutdown signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('💥 Uncaught Exception:', error);
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection at:', { promise, reason });
  logger.error('Unhandled Rejection at:', { promise, reason });
  process.exit(1);
});
