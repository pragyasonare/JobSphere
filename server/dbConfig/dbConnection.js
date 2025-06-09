
import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    console.log("⏳ Attempting MongoDB Connection...");

    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 15000, // 15 seconds to avoid timeout issues
    });

    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Stop the server if MongoDB fails
  }
};

export default dbConnection;
