import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/userRouter.js";
import conn from "./db.js";

dotenv.config();
const port = process.env.PORT;

conn();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
