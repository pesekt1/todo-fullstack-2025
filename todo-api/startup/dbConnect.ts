import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

export default async function dbConnect() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database", error);
  }
}
