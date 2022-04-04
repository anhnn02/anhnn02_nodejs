import { Router } from 'express';
import { get, create, list, remove, update } from '../controllers/product';
import { userById } from '../controllers/user';
import { requiredSignin, isAdmin, isAuth} from '../middlewares/checkAuth';
const router = Router();

router.get('/products/:userId', list);   
router.post('/products/:userId', requiredSignin, isAuth, isAdmin, create);
router.get('/product/:id/:userId', requiredSignin, isAuth, isAdmin, get);
router.delete('/product/:id', remove);
router.put('/product/:id', update);

router.param("userId", userById)

export default router; 