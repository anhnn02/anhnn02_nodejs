import { Router } from 'express';
import { list } from '../controllers/user';
const router = Router();

router.get('/users', list);

export default router;
