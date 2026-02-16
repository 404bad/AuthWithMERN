import type { Response } from "express";
import Jwt from "jsonwebtoken";
import config from "../config/env.config";

/**å
 * Generates a JWT token for the given user ID, sets it as an HTTP-only cookie on the response,
 * and returns the generated token.
 *
 * @param res - The Express response object to set the cookie on.
 * @param userId - The unique identifier of the user for whom the token is generated.
 * @returns The generated JWT token as a string.
 *
 * @remarks
 * The cookie is configured to be HTTP-only, secure in production, and has a strict same-site policy.
 * The token and cookie both expire in 7 days.
 */
export const generateTokenAndSetCookie = (
  res: Response,
  userId: string,
): string => {
  const token = Jwt.sign({ userId }, config.JWT_SECRET, { expiresIn: "7d" });

  res.cookie("token", token, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
