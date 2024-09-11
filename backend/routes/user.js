import express from "express";
import {
  register,
  login,
  getMyProfile,
  logout,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Route to create a new user (register)
router.post("/new", register);

// Route to create a new user (register)
router.get("/login", login);

//Route to logout the user
router.get("/logout", logout)

// Route to get user details by ID
router.get("/me", isAuthenticated, getMyProfile);

export default router;
