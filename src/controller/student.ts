import Student from "../models/student.js";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const getStudent = async (_: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving students", error });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const student = await Student.findById(id);

    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving student", error });
  }
};

export const addStudent = async (req: Request, res: Response) => {
  try {
    const {
      idNumber,
      code,
      name,
      lastName,
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

export const editStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const objectId = new mongoose.Types.ObjectId(id);

    const updatedStudent = await Student.findByIdAndUpdate(
      objectId,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    console.error("Error updating student:", error);
    res
      .status(400)
      .json({ message: "Invalid ID format or error updating student" });
  }
};
