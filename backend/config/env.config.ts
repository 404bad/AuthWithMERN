import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: number | string;
  NODE_ENV: string;
  MONGO_URI: string;
}

export const config: Config = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/authdb",
};

export default config;
