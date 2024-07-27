import mongoose from "mongoose";

const connection = () => {
  try {
    const url =
      "mongodb+srv://teonapiranishvili1:teonateona12@cluster0.uimxgxn.mongodb.net/";
    return mongoose.connect(url);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default connection;
