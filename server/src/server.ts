import "dotenv/config";

import connectDB from "./config/database";
import app from "./index";

const PORT = Number(process.env.PORT) || 4000;

const startServer = async (): Promise<void> => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error("Startup failed:", err);
  process.exit(1);
});
