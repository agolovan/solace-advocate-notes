// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from "mongoose";

export const connectToMongodb = (uri = process.env.MONGODB_URI) => {
  mongoose.connect(uri, {});

  mongoose.connection
    .once("open", () => console.log("Mongoose connected to Mongodb"))
    .on("error", (error) => console.log("Error connecting to Mongodb", error));
};
export default mongoose;
