import Student from "../models/student.js";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";

export const getData = async (_: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving students", error });
  }
};

export const addData = async (req: Request, res: Response) => {
  try {
    const {
      idNumber,
      code,
      name,
      lastName,
      age,
      yearOfSubmission,
      graduationYear,
      status,
      school,
      program,
      email,
      voucher,
      grant,
      citizenship,
      dateOfBirth,
      cityOfBirth,
      language,
      course,
      mobility,
      agent,
    } = req.body;

    const newStudent = new Student({
      id: uuidv4(),
      idNumber,
      code,
      name,
      lastName,
      age,
      yearOfSubmission,
      graduationYear,
      status,
      school,
      program,
      email,
      voucher,
      grant,
      citizenship,
      dateOfBirth,
      cityOfBirth,
      language,
      course,
      mobility,
      agent,
    });

    const savedStudent = await newStudent.save();
    res.status(200).json({ message: "Student added", student: savedStudent });
  } catch (error) {
    res.status(500).json({ message: "Error adding student", error });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    res.status(200).json({
      message: "Student deleted successfully",
      student: deletedStudent,
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student", error });
  }
};
