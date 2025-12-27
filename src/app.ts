import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import userRoutes from './routes/user.routes';
import busRoutes from './routes/bus.routes';
import documentTypeRoutes from './routes/documentType.routes';
import busDocumentRoutes from './routes/busDocument.routes';
import dashboardRoutes from './routes/dashboard.routes';
import v2DocumentRoutes from './routes/v2Document.routes';
import v2UserRoutes from './routes/v2User.routes';
import { errorHandler } from './middlewares/errorHandler';
import { config } from './config/config';
import logger from './utils/logger';

console.log('⚙️  Configuring Express application...');

const app = express();

// Security middleware
console.log('🛡️  Loading security middleware...');
app.use(helmet());

// CORS configuration - Allow all origins
console.log('🌐 Configuring CORS to allow all origins...');

app.use(cors({
  origin: true, // Allow all origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// Rate limiting - simplified configuration
console.log('⏱️  Setting up rate limiting...');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

// Body parsing middleware
console.log('📝 Configuring body parsers...');
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging
console.log('📊 Setting up request logging...');
app.use((req, _res, next) => {
  logger.info(`${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('User-Agent'),
  });
  next();
});

// Health check endpoint
console.log('🏥 Setting up health check endpoint...');
app.get('/health', (_req, res) => {
  res.json({
    status: '🌈 All good! Samanvi backend is happy and healthy! 🐾',
    message: 'Hello, friend! The server is up and running smoothly. ✨',
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true }),
    uptimeSeconds: process.uptime(),
    environment: config.nodeEnv,
    version: process.env.npm_package_version || 'unknown',
    node: process.version,
    memory: {
      rss: process.memoryUsage().rss,
      heapTotal: process.memoryUsage().heapTotal,
      heapUsed: process.memoryUsage().heapUsed,
      external: process.memoryUsage().external,
    },
    platform: process.platform,
    pid: process.pid,
    tips: [
      'Stay hydrated! 💧',
      'Remember to take breaks! ☕',
      'You are awesome! 🚀'
    ]
  });
});

// API routes
console.log('🛣️  Setting up API routes...');
app.use('/api/users', userRoutes);
app.use('/api/v1/buses', busRoutes);
app.use('/api/v1/document-types', documentTypeRoutes);
app.use('/api/v1', busDocumentRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);
app.use('/api/v2/documents', v2DocumentRoutes);
app.use('/api/v2/users', v2UserRoutes);

// 404 handler
console.log('❓ Setting up 404 handler...');
app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware (must be last)
console.log('🚨 Setting up error handler...');
app.use(errorHandler);

console.log('✅ Express application configured successfully!');

export default app;
