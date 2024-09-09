import express from "express";
import {
  getAllUsers,
  register,
  login,
  getMyProfile,
  logout,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Route to get all users from the database
router.get("/all", getAllUsers);

// Route to create a new user (register)
router.post("/new", register);

// Route to create a new user (register)
router.get("/login", login);

// Routes to get user details by ID
router.get("/me", isAuthenticated, getMyProfile);

router.get("/logout", logout)

export default router;
