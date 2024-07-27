import express from "express";
import connection from "./mongo.js";

const app = express();

connection();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
