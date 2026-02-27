import express from "express";
import { addNote, getDates, getNotesByDate, toggleCompleted, deleteNote } from "../controllers/NotesController.js";

const router = express.Router()

router.post("/", addNote)

router.get("/dates", getDates)

router.get("/date/:date", getNotesByDate)

router.put("/:id/toggle",toggleCompleted)

router.delete("/:id", deleteNote)

export default router