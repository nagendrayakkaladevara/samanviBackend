import { Router } from 'express';
import * as controller from '../controllers/dashboard.controller';
import { validateBasicAuth } from '../middlewares/basicAuth';

const router = Router();

// All routes require basic authentication
router.use(validateBasicAuth);

// Dashboard statistics
router.get('/stats', controller.getDashboardStats);

export default router;
