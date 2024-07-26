import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();

const mongoUri =
  process.env.MONGO_URI ||
  "mongodb+srv://teonapiranishvili1:teonateona12@cluster0.uimxgxn.mongodb.net/";

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error: Error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
