import { Router } from 'express';
import { list, register, login } from '../controllers/auth';
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', list);

export default router; 
