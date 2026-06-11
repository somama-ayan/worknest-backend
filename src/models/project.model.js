import mongoose from "mongoose";
const projectModel = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 5,
      maxlength: 100,
      required: true,
    },
    project_key: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      minlength: 6,
      maxlength: 6,
    },
    category: {
      type: String,
      enum: ["web", "mobile", "backend", "devops", "other"],
      default: "other",
    },
    description: {
      type: String,
      minlength: 5,
      maxlength: 300,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    status: {
      type: String,
      enum: ["planning", "active", "on_hold", "completed"],
      default: "planning",
    },
    target_completion_date: {
      type: Date,
      required: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
      required: true,
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    visibility: {
      type: String,
      enum: ["private", "team"],
      default: "private",
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Projects", projectModel);