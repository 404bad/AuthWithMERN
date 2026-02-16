import express, { type Request, type Response } from "express";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// API Routes
app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Auth Tutorial API is running!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at  http://localhost:${PORT}`);
});
