import express from "express";
import {
  LoginUser,
  LogoutUser,
  SignUser,
  AllUsers,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/AuthController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.get("/all", AllUsers);
router.post("/signup", SignUser);
router.post("/login", LoginUser);
router.post("/logout", LogoutUser);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
