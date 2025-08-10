import { Router } from 'express';
import * as controller from '../controllers/bus.controller';
import { validateApiKey } from '../middlewares/apiKey';

const router = Router();

// All routes require API key authentication
router.use(validateApiKey);

// Bus CRUD operations
router.post('/', controller.createBus);
router.get('/', controller.getBuses);
router.get('/:id', controller.getBusById);
router.put('/:id', controller.updateBus);
router.delete('/:id', controller.deleteBus);

export default router;
