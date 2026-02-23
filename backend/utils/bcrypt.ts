import bcrypt from "bcryptjs";
import config from "../config/env.config";

const SALT_ROUNDS = config.SALT_ROUNDS;

/**
 * Hashes a plain text password.
 */
export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Compares a plain text password against a stored hash.
 */
export const comparePassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};
