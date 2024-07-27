import fs from "fs";
import Student from "../models/student.js";
import { Request, Response } from "express";

export const getData = async (_: Request, res: Response): Promise<void> => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving students", error });
  }
};
