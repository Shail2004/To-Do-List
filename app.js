import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

//Initializing Express
export const app = express();

config({
  path: "./data/config.env",
});

//Using Middlewares
app.use(express.json());
app.use(cookieParser());

//Using Routes
app.use("/api/v1/users/", userRouter);

//Basic route to check if the server is working
app.get("/", (req, res) => {
  res.send("Working");
});