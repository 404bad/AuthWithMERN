import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.post("/signup", authController.signup);
router.get("/signin", authController.signin);
router.get("/logout", authController.logout);

export default router;
