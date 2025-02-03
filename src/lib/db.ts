import mongoose from "mongoose";

export default async function db() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error connecting to database", error.message);
    } else {
      console.log("Error connecting to database", error);
    }
    process.exit(1);
  }
}
