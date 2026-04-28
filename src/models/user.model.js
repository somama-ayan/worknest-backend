import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    fullName: {
      type: String,
      min: 5,
      max: 30,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      min: 5,
      max: 30,
      trim: true,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      min: 5,
      max: 30,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("user", userModel);
