import { Router } from 'express';
import { list, read, userById } from '../controllers/user';
import { isAdmin, isAuth, requiredSignin } from '../middlewares/checkAuth';
const router = Router();

router.get('/users/:userId', requiredSignin, isAuth, isAdmin, list);
router.get('/users/:id/:userId', requiredSignin, isAuth, isAdmin, read);

router.param("userId", userById)

export default router;
