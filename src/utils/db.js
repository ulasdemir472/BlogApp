import mongoose from "mongoose";

const connect = async () => {
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(process.env.MONGO);
    return "Connection successful";
  } catch (error) {
    throw new Error("Connection failed");
  }
};

export default connect;
