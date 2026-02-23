import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: number | string;
  NODE_ENV: string;
  MONGO_URI: string;
  SALT_ROUNDS: number;
  JWT_SECRET: string;
  MAILTRAP_SECRET: string;
  CLINET_URL: string;
}

export const config: Config = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/authdb",
  SALT_ROUNDS: process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS) : 10,
  JWT_SECRET: process.env.JWT_SECRET as string,
  MAILTRAP_SECRET: process.env.MAILTRAP_SECRET as string,
  CLINET_URL: process.env.CLINET_URL as string,
};

export default config;
