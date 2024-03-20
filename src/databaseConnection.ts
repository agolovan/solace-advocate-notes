import mongoose from "mongoose";
import { MONGODB_URI } from "./constants";

export const connectToMongodb = (uri = MONGODB_URI) => {
  mongoose.connect(uri, {});

  mongoose.connection
    .once("open", () => console.log("Mongoose connected to Mongodb"))
    .on("error", (error) => console.log("Error connecting to Mongodb", error));
};
export default mongoose;
