import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("You just fetched the notes");
}); // Endpoint to get notes 

router.post("/api/notes", (req, res) => {
  res.status(201).json({
    message: 'Note added successfully'})
  }); // Endpoint to add a new note

router.put("/api/notes/:id", (req, res) => {
  res.status(200).json({
    message: 'Note updated successfully'})
}); // Endpoint to update an existing note
// http://localhost:3000/api/notes/:id is a dynamic endpoint where :id is a placeholder for the note ID

router.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({
    message: 'Note deleted successfully'})
}); // Endpoint to delete a note 


export default router;