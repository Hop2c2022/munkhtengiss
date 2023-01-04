const express = require("express");
const UserRouter = require("./router/userRouter");
const { connectDb } = require("./database/db");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(UserRouter);
app.use(postRouter);

const startServer = async () => {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
};

startServer();
