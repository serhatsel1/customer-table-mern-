import mongoose from "mongoose";

const conn = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {});
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB Error:", error.message);
    process.exit(1); // Uygulamayı durdur
  }
};

export default conn;
