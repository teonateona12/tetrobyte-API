import { Router } from "express";
import { getData } from "../controller/student.js";

const router = Router();

router.get("/students", getData);

router.post("/student", async (req, res) => {});

router.delete("/student/:id", async (req, res) => {});

router.put("/student/:id", async (req, res) => {});

export default router;
