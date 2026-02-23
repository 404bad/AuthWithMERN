import type { NextFunction, Request, Response } from "express";
import { verifyJwtToken } from "../utils/jwt";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: No token provided.",
    });
  }
  try {
    const decoded = verifyJwtToken(token);

    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Token." });
    }

    (req as any).userId = (decoded as any).userId;

    next();
  } catch (error) {
    console.log("Error Verifying token.", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};
