import { Router } from 'express';
import * as controller from '../controllers/v2Document.controller';
import { validateBasicAuth } from '../middlewares/basicAuth';

const router = Router();

// Apply basic authentication to all routes
router.use(validateBasicAuth);

// V2 Document CRUD operations
router.get('/', controller.getAllV2Documents);           // GET /api/v2/documents
router.get('/:id', controller.getV2DocumentById);        // GET /api/v2/documents/:id
router.post('/', controller.createV2Document);           // POST /api/v2/documents
router.put('/:id', controller.updateV2Document);         // PUT /api/v2/documents/:id
router.delete('/:id', controller.deleteV2Document);      // DELETE /api/v2/documents/:id

export default router;

