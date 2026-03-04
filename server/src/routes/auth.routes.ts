import express from "express";
import { getUsers, registerUser } from "../controllers/user.controller";

const router = express.Router();
router.get("/get-users", getUsers);
router.post("/register", registerUser);

export default router;
