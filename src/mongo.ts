import mongoose from "mongoose";

const connection = async () => {
  const url =
    "mongodb+srv://teonapiranishvili1:teonateona12@cluster0.uimxgxn.mongodb.net/";

  try {
    await mongoose.connect(url);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connection;
