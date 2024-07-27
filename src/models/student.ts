import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
  _id: string;
  idNumber?: number;
  code?: number;
  name?: string;
  lastName?: string;
  yearOfSubmission?: number;
  graduationYear?: number;
  status?: string;
  school?: string;
  program?: string;
  email?: string;
  voucher?: string;
  grant?: string;
  citizenship?: string;
  dateOfBirth?: string;
  cityOfBirth?: string;
  language?: string;
  course?: string;
  mobility?: number;
  agent?: string;
}

const studentSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  idNumber: {
    type: Number,
  },
  code: {
    type: Number,
  },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  yearOfSubmission: {
    type: Number,
  },
  graduationYear: {
    type: Number,
  },
  status: {
    type: String,
  },
  school: {
    type: String,
  },
  program: {
    type: String,
  },
  email: {
    type: String,
  },
  voucher: {
    type: String,
  },
  grant: {
    type: String,
  },
  citizenship: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  cityOfBirth: {
    type: String,
  },
  language: {
    type: String,
  },
  course: {
    type: String,
  },
  mobility: {
    type: Number,
  },
  agent: {
    type: String,
  },
});

const Student = mongoose.model<IStudent>("Student", studentSchema);

export default Student;
