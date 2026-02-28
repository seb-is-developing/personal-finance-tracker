import User from "../models/user";
import { Request, Response } from "express";

export const getUsers = async (
  _req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const users = await User.find().select("-passwordHash");
    return res.json(users);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Server error";
    return res.status(500).json({ message });
  }
};

export const registerUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { fullName, username, email, passwordHash } = req.body;

    if (!fullName || !username || !email || !passwordHash) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newUser = await User.create({
      fullName,
      username,
      email: email.toLowerCase(),
      passwordHash,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Server error";
    return res.status(500).json({ message });
  }
};
