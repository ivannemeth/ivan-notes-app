import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema({
  title: { type: String },
  description: { type: String },
  color: {
    type: String,

    required: true,
  },
});

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
