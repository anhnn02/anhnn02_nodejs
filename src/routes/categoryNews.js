import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/categoryNews';
import { userById } from '../controllers/user';
import { isAdmin, isAuth, requiredSignin } from '../middlewares/checkAuth';
const router = Router();

router.post('/categoryNews', requiredSignin, isAuth, isAdmin, create);
router.get('/categoryNews', list);
// router.get('/categoryNewsList/:id', read);
router.get('/categoryNews/:id/:userId', get);
router.put('/categoryNews/:id/:userId', requiredSignin, isAuth, isAdmin, update);
router.delete('/categoryNews/:id/:userId', requiredSignin, isAuth, isAdmin, remove);

router.param("userId", userById)

export default router