import express from "express";
import {
  getNotes,
  createNote,
  updateNote,
  removeNote,
  executeNote,
  getNotesByType,
} from "../controllers/notes.js";

const router = express.Router();

router.get("/", getNotes);
router.get("/search", getNotesByType);
router.post("/", createNote);
router.patch("/:id", updateNote);
router.delete("/:id", removeNote);
router.patch("/:id/executeNote", executeNote);

export default router;
