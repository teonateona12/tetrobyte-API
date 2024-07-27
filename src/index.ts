import express from "express";
import connection from "./mongo.js";
import cors from "cors";
import router from "./routes/student.js";

const app = express();

app.use(cors());
connection();
app.use(express.json());
app.use("/api", router);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
