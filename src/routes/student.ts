import { Router } from "express";
import {
  addStudent,
  deleteStudent,
  editStudent,
  getStudent,
  getStudentById,
} from "../controller/student.js";

const router = Router();

router.get("/students", getStudent);
router.get("/student/:id", getStudentById);
router.post("/student", addStudent);
router.delete("/student/:id", deleteStudent);
router.put("/student/:id", editStudent);

export default router;
