import { Router } from 'express';
import { register, login } from '../controllers/users';
import { checkIsRegistered, checkIfUserExists } from '../middleware/users';

const router = Router();

router.post('/register', checkIsRegistered, register);
router.post('/login', checkIfUserExists, login);

export default router;
