import { Router } from 'express';
import * as controller from '../controllers/documentType.controller';
import { validateBasicAuth } from '../middlewares/basicAuth';

const router = Router();

// All routes require basic authentication
router.use(validateBasicAuth);

// Document type CRUD operations
router.post('/', controller.createDocumentType);
router.get('/', controller.getDocumentTypes);
router.put('/:id', controller.updateDocumentType);
router.delete('/:id', controller.deleteDocumentType);

export default router;
