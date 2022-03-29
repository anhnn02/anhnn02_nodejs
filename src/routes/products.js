import { Router } from 'express';
import { get, create, list, remove, update } from '../controllers/product';
import { userById } from '../controllers/user';
import { requiredSignin, isAdmin, isAuth} from '../middlewares/checkAuth';
const router = Router();

router.get('/products', list);   
router.post('/products/:userId', requiredSignin, isAuth, isAdmin, create);
router.get('/product/:id/:userId', requiredSignin, isAuth, isAdmin, get);
router.delete('/product/:id/:userId', requiredSignin, isAuth, isAdmin, remove);
router.put('/product/:id/:userId', requiredSignin, isAuth, isAdmin, update);

router.param("userId", userById)

export default router; 