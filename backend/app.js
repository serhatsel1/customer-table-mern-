import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/userRouter.js";
import conn from "./db.js";

dotenv.config();
// const conn = async () => {
//   try {
//     await mongoose.connect(process.env.DB_URI, {});
//     console.log("Connected to MongoDB!");
//   } catch (error) {
//     console.error("MongoDB Error:", error.message);
//     process.exit(1); // Uygulamayı durdur
//   }
// };

const port = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", userRouter);

conn();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
