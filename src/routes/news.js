import { Router } from 'express';
import { get, create, list, remove, update } from '../controllers/news';
import { userById } from '../controllers/user';
import { requiredSignin, isAdmin, isAuth} from '../middlewares/checkAuth';
const router = Router();

router.get('/news/:userId', list);   
router.post('/news/:userId', requiredSignin, isAuth, isAdmin, create);
router.get('/news/:id/:userId', requiredSignin, isAuth, isAdmin, get);
router.delete('/news/:id/:userId', remove);
router.put('/news/:id/:userId', requiredSignin, isAuth, isAdmin, update);

router.param("userId", userById)

export default router;