import { type Request, type Response } from "express";

export const signup = (req: Request, res: Response): void => {
  res.json({ message: "Auth Controller is working!" });
};

export const signin = (req: Request, res: Response): void => {
  res.json({ message: "Signin endpoint is working!" });
};

export const logout = (req: Request, res: Response): void => {
  res.json({ message: "Logout endpoint is working!" });
};
