import { Router } from 'express';
import { create, list, read } from '../controllers/categoryPro';
const router = Router();

router.post('/categoryPros', create);
router.get('/categoryPros', list);
router.get('/categoryPro/:id', read);

export default router