import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userId: String,
});

const User = mongoose.model("User", userSchema, "user");
export default User;
