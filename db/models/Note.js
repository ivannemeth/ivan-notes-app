import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  color: {
    type: String,

    required: true,
  },
  isDone: { type: Boolean, default: false },
});

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
