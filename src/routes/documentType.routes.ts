import { Router } from 'express';
import * as controller from '../controllers/documentType.controller';
import { validateApiKey } from '../middlewares/apiKey';

const router = Router();

// All routes require API key authentication
router.use(validateApiKey);

// Document type CRUD operations
router.post('/', controller.createDocumentType);
router.get('/', controller.getDocumentTypes);
router.put('/:id', controller.updateDocumentType);
router.delete('/:id', controller.deleteDocumentType);

export default router;
