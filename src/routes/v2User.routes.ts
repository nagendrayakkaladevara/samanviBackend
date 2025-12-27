import { Router } from 'express';
import * as controller from '../controllers/v2User.controller';
import { validateBasicAuth } from '../middlewares/basicAuth';

const router = Router();

// Apply basic authentication to all routes
router.use(validateBasicAuth);

// V2 User CRUD operations
router.get('/', controller.getAllV2Users);           // GET /api/v2/users
router.get('/:id', controller.getV2UserById);        // GET /api/v2/users/:id
router.post('/', controller.createV2User);           // POST /api/v2/users
router.put('/:id', controller.updateV2User);         // PUT /api/v2/users/:id
router.delete('/:id', controller.deleteV2User);      // DELETE /api/v2/users/:id

// V2 User authentication
router.post('/login', controller.loginV2User);       // POST /api/v2/users/login

export default router;

