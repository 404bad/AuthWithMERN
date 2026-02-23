import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.get("/logout", authController.logout);
router.post("/verify-email", authController.verifyEmail);

export default router;
