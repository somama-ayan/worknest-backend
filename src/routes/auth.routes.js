import express from "express";
import { signUp, signIn, logout } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", logout);

// test protected route
router.get("/me", authMiddleware, (req, res) => {
  return res.status(200).json({
    message: "Authorized user",
    user: req.user,
  });
});

export default router;