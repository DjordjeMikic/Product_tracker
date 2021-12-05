import { Router } from 'express';
import { register, verifyAccount, login } from '../controllers/users';
import { checkIsRegistered, checkIfUserExists } from '../middleware/users';

const router = Router();

router.post('/register', checkIsRegistered, register);
router.put('/verify/:id', verifyAccount);
router.post('/login', checkIfUserExists, login);

export default router;
