import { Router } from 'express';
import { get, create, list, remove, update, search, page } from '../controllers/product';
import { userById } from '../controllers/user';
import { requiredSignin, isAdmin, isAuth} from '../middlewares/checkAuth';
const router = Router();

router.get('/products', list);   
router.post('/products/:userId', requiredSignin, isAuth, isAdmin, create);
router.get('/product/:id', get);
router.delete('/product/:id/:userId', requiredSignin, isAuth, isAdmin, remove);
router.put('/product/:id/:userId', requiredSignin, isAuth, isAdmin, update);
router.get('/search', search )
router.get('/filter', page )

router.param("userId", userById)

export default router; 