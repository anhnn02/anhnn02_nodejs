import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/categoryNews';
const router = Router();

router.post('/categoryNews', create);
router.get('/categoryNews', list);
// router.get('/categoryNewsList/:id', read);
router.get('/categoryNews/:id', get);
router.put('/categoryNews/:id', update);
router.delete('/categoryNews/:id', remove);

export default router