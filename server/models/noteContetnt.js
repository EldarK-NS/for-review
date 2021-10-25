import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  title: String,
  content: String,
  creator: String,
  selectedFile: String,
  executed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const NoteContent = mongoose.model("NoteContent", noteSchema);
export default NoteContent;
