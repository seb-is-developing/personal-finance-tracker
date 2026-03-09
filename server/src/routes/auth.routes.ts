import express from "express";
import { getUsers, loginUser, registerUser } from "../controllers/user.controller";

const router = express.Router();
router.get("/get-users", getUsers);

router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;
