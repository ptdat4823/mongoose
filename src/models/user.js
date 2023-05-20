import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: ObjectId,
  email: String,
  password: String,
  userId: ObjectId,
});

const User = mongoose.model("User", userSchema, "user");
export default User;
