import { Router } from "express";
import { getProductController, getSingleController } from "./product.controller";

const router: Router = Router();

router.get("/blogs", getProductController);
router.get('/blog/:id',getSingleController)

export default router;
