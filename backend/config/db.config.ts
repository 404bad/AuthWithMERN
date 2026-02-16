import mongoose from "mongoose";
import config from "./env.config";

export const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log(
      `Successfully connected to MongoDB at ${mongoose.connection.host}:${mongoose.connection.port}`,
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

// Handle connection events

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("Mongoose connection closed due to app termination");
  process.exit(0);
});

export default connectDb;
