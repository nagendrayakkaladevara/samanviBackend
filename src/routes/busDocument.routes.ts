import { Router } from 'express';
import * as controller from '../controllers/busDocument.controller';
import { validateApiKey } from '../middlewares/apiKey';

const router = Router();

// All routes require API key authentication
router.use(validateApiKey);

// Bus document CRUD operations
router.post('/buses/:busId/documents', controller.createBusDocument);
router.get('/buses/:busId/documents', controller.getBusDocuments);
router.get('/documents/:docId', controller.getDocumentById);
router.put('/documents/:docId', controller.updateBusDocument);
router.delete('/documents/:docId', controller.deleteBusDocument);

// Expiry helpers
router.get('/documents/expiring', controller.getExpiringDocuments);
router.get('/buses/missing-required', controller.getBusesMissingRequired);

export default router;
