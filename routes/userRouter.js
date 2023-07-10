import express from "express"

import { login, register, logout, profile } from '../controllers/user.js'
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get("/logout", logout);

router.get("/me",  isAuthenticated, profile);

export default router;