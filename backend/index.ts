import express, { type Request, type Response } from "express";

/**
 * Custom Modules
 */
import config from "./config/env.config";
import connectDb from "./config/db.config";
import authRoutes from "./routes/auth.route";
import cors from "cors";

import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://your-production-domain.com"
        : "http://localhost:5173",
    credentials: true,
  }),
);

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
