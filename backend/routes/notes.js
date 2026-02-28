import express from "express";
import { 
    addNote, 
    getDates, 
    getNotesByDate, 
    toggleCompleted, 
    updateNote, 
    deleteNote, 
    searchNotesByKeyword
 } from "../controllers/NotesController.js";

const router = express.Router()

router.post("/", addNote)

router.get("/dates", getDates)

router.get("/date/:date", getNotesByDate)

router.put("/:id/toggle",toggleCompleted)

router.put("/:id/update",updateNote)

router.delete("/:id", deleteNote)

router.get("/search",searchNotesByKeyword)

export default router