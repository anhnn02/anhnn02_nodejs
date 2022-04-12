import { Router } from 'express'
import { create, get, list, remove, update } from '../controllers/comment';

const router = new Router()

router.post("/comments", create);
router.get("/comments", list);
router.get("/comment/:id", get);
router.delete("/comment/:id", remove);
router.put("/comment/:id", update);

export default router 