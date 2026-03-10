import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const signToken = (payload: any): string => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
