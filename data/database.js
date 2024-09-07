import mongoose from "mongoose";

//Connecting to MongoDB database
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backend",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
};
