import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rohitsharma63693:Wf9ULrbjInV9OBFk@cluster0.a71z0.mongodb.net/next-blog"
  );
  console.log("DB connected");
};
