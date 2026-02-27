import express, { type Request, type Response } from "express";

/**
 * Custom Modules
 */
import config from "./config/env.config";
import connectDb from "./config/db.config";
import authRoutes from "./routes/auth.route";
import cors from "cors";
import path from "path";

import cookieParser from "cookie-parser";

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_URL
        : "http://localhost:5173",
    credentials: true,
  }),
);

// API Routes
app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.get("/{*path}", (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), "frontend/dist/index.html"));
  });
}

app.listen(config.PORT, () => {
  connectDb();
  console.log(
    `Server is running on port ${config.PORT} at  http://localhost:${config.PORT}`,
  );
});
