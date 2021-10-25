import mongoose from "mongoose";
import NoteContent from "../models/noteContetnt.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await NoteContent.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getNotesByType = async (req, res) => {
  const searchQuery = req.query;
  let queryParams;
  let search;
  try {
    if (Object.keys(searchQuery)[0] === "title") {
      search = new RegExp(searchQuery.title, "i");
      queryParams = { title: search };
    } else {
      queryParams = searchQuery;
    }
    const searchedNotes = await NoteContent.find(queryParams);
    res.json({ data: searchedNotes });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getNotesByText = async (req, res) => {
  console.log("hello");
  const { title } = req.query;
  console.log(req.query);
  try {
    const text = new RegExp(title, "i");
    console.log("!!!", text);
    const searchedNotes = await NoteContent.find({ title: text });
    res.json({ data: searchedNotes });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createNote = async (req, res) => {
  const note = req.body;
  const newNote = new NoteContent(note);
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  const { id: _id } = req.params;
  const note = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Invalid note id");

  const updatedNote = await NoteContent.findByIdAndUpdate(
    _id,
    { ...note, _id },
    {
      new: true,
    }
  );
  res.json(updatedNote);
};

export const removeNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Invalid note id");
  await NoteContent.findByIdAndRemove(id);
  res.json({ message: "Note deleted" });
};

export const executeNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Invalid note id");

  const note = await NoteContent.findById(id);
  const updatedNote = await NoteContent.findByIdAndUpdate(
    id,
    {
      executed: !note.executed,
    },
    { new: true }
  );
  res.json(updatedNote);
};
