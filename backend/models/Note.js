import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    date: {
      type: String,
      required: true, 
    },
  }, { timestamps: true });

export default mongoose.model("Note", noteSchema);