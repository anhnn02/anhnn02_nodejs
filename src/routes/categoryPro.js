import { Router } from 'express';
import { create, list, read, update, remove, get, relatedProduct } from '../controllers/categoryPro';
import { userById } from '../controllers/user';
import { requiredSignin, isAdmin, isAuth } from '../middlewares/checkAuth';

const router = Router();

router.post('/categoryPros', create);
router.get('/categoryPros', list);
router.get('/categoryPros/:id', read);
router.get('/categoryPro/:id', get);
router.put('/categoryPro/:id/:userId', requiredSignin, isAuth, isAdmin, update);
router.delete('/categoryPro/:id/:userId', requiredSignin, isAuth, isAdmin, remove);
router.get('/categoryPros/:id/:idPro/:userId', requiredSignin, isAuth, isAdmin, relatedProduct);

router.param("userId", userById)

export default router