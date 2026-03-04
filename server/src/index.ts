import express from "express";
import authRoutes from "./routes/auth.routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

export default app;
