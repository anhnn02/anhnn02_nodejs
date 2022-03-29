import { Router } from 'express';
import { create, list, read, update, remove, get } from '../controllers/categoryPro';
const router = Router();

router.post('/categoryPros', create);
router.get('/categoryPros', list);
router.get('/categoryPros/:id', read);
router.get('/categoryPro/:id', get);
router.put('/categoryPro/:id', update);
router.delete('/categoryPro/:id', remove);

export default router