import { Router } from 'express';
import * as controller from '../controllers/bus.controller';
import { validateBasicAuth } from '../middlewares/basicAuth';

const router = Router();

// All routes require basic authentication
router.use(validateBasicAuth);

// Bus CRUD operations
router.post('/', controller.createBus);
router.get('/', controller.getBuses);
router.get('/:id', controller.getBusById);
router.put('/:id', controller.updateBus);
router.delete('/:id', controller.deleteBus);

export default router;
