import { Router } from 'express';
import * as controller from '../controllers/user.controller';

const router = Router();

// All routes are public (no authentication required)
router.get('/', controller.getUsers);
router.post('/', controller.addUser);
router.post('/login', controller.loginUser);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

export default router;
