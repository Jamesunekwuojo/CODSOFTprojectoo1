import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.dbURL, {
      socketTimeoutMS: 30000, // 30 seconds
      connectTimeoutMS: 30000, // 30 seconds
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err, "Error connecting to Database");
  }
}

connectDB();
