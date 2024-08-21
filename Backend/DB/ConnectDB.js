import mongoose from "mongoose";
import colors from "colors";
export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`CONNECTED TO THE DATABASE`.bgYellow);
  } catch (error) {
    console.log("error connetion to the database", error.message);
    process.exit(1);
  }
};
