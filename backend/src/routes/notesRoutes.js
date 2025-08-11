import express from 'express';
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notesController.js';

const router = express.Router();

router.get("/", getAllNotes); // Endpoint to get notes 
router.get("/:id", getNoteById); // Endpoint to get a note by ID, assuming getNoteById is defined in notesController.js 
router.post("/", createNote); // Endpoint to add a new note
router.put("/:id", updateNote); // Endpoint to update an existing note // http://localhost:3000/api/notes/:id is a dynamic endpoint where :id is a placeholder for the note ID
router.delete("/:id", deleteNote); // Endpoint to delete a note 

export default router; 