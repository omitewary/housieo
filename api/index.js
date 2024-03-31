import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => {
    console.log("Error : " + err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is running");
});
