import { Router } from 'express';
import * as controller from '../controllers/busDocument.controller';
import { validateBasicAuth } from '../middlewares/basicAuth';

const router = Router();

// All routes require basic authentication
router.use(validateBasicAuth);

// Expiry helpers (must come before /documents/:docId to avoid route conflicts)
router.get('/documents/expiring', controller.getExpiringDocuments);
router.get('/buses/missing-required', controller.getBusesMissingRequired);

// Bus document CRUD operations
router.post('/buses/:busId/documents', controller.createBusDocument);
router.get('/buses/:busId/documents', controller.getBusDocuments);
router.get('/documents/:docId', controller.getDocumentById);
router.put('/documents/:docId', controller.updateBusDocument);
router.delete('/documents/:docId', controller.deleteBusDocument);

export default router;
