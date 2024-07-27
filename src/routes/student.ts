import { Router } from "express";
import {
  addData,
  deleteStudent,
  editStudent,
  getData,
} from "../controller/student.js";

const router = Router();

router.get("/students", getData);

router.post("/student", addData);

router.delete("/student/:id", deleteStudent);

router.put("/student/:id", editStudent);

export default router;
