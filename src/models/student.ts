import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
  _id: string;
  idNumber: number;
  code: number;
  name: string;
  lastName: string;
  yearOfSubmission: string;
  graduationYear: string;
  status?: string;
  school: string;
  program: string;
  email: string;
  voucher?: string;
  grant: string;
  citizenship: string;
  dateOfBirth: string;
  cityOfBirth: string;
  language?: string;
  course: string;
  mobility: number;
  agent: string;
}

const studentSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  idNumber: {
    type: Number,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  yearOfSubmission: {
    type: String,
    required: true,
  },
  graduationYear: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
  school: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  voucher: {
    type: String,
  },
  grant: {
    type: String,
    required: true,
  },
  citizenship: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  cityOfBirth: {
    type: String,
    required: true,
  },
  language: {
    type: String,
  },
  course: {
    type: String,
    required: true,
  },
  mobility: {
    type: Number,
    required: true,
  },
  agent: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model<IStudent>("Student", studentSchema);

export default Student;
