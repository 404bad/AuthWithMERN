import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.post("/signout", authController.logout);

router.post("/verify-email", authController.verifyEmail);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password/:token", authController.resetPassword);

export default router;
