import express from "express";
import cors from "cors";

import userRouter from "./routes/userRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = 8080;

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
