import express, { type Request, type Response } from "express";

/**
 * Custom Modules
 */
import config from "./config/env.config";
import connectDb from "./config/db.config";
import authRoutes from "./routes/auth.route";

const app = express();

// Middleware
app.use(express.json());

// API Routes
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Auth Tutorial API is running!" });
});

app.use("/api/auth", authRoutes);

app.listen(config.PORT, () => {
  connectDb();
  console.log(
    `Server is running on port ${config.PORT} at  http://localhost:${config.PORT}`,
  );
});
