import mongoose from "mongoose";

export const connectToDb = async () => {
  const connection = {};

  try {
    if (connection.isconnected) {
      console.log("using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB);
    connection.isconnected = db.connections[0].readyState;
  } catch (error) {
    console.log("db connection failed");
  }
};
