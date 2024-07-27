import fs from "fs";
import Student from "../models/student.js";
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
