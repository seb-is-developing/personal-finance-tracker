import express from "express";

const app = express();

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
