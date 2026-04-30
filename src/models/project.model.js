const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 30,
    required: true
  },
  description: {
    type: String,
    minlength: 5,
    maxlength: 60,
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
    }
  ],
  status: {
    type: String,
    enum: ["active", "complete"],
    default: "active"
  }
}, { timestamps: true });