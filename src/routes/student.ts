import { Router } from "express";
import { addData, getData } from "../controller/student.js";

const router = Router();

router.get("/students", getData);

router.post("/student", addData);

router.delete("/student/:id", async (req, res) => {});

router.put("/student/:id", async (req, res) => {});

export default router;
