import dotenv from "dotenv";
import connectDB from "./config/database.ts";
import app from "./index.js";

dotenv.config();

const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port: ${process.env.PORT || 8000}`);
    });
  } catch (error) {
    console.error("Startup failed:", error);
  }
};

startServer();
