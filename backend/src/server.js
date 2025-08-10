import express from 'express'
// Import the express module
import notesRoutes from './routes/notesRoutes.js'
// Import the notesRoutes module

const app = express();
// Create an instance of an Express application

app.use("/api/notes", notesRoutes);

// What is an Endpoint?
// An endpoint is a specific URL where an API can be accessed by a client application.

/*
app.get("/api/notes", (req, res) => {
  res.send('your notes here');
}); // Endpoint to get notes 

app.post("/api/notes", (req, res) => {
  res.status(201).json({
    message: 'Note added successfully'})
}); // Endpoint to add a new note

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({
    message: 'Note updated successfully'})
}); // Endpoint to update an existing note
// http://localhost:3000/api/notes/:id is a dynamic endpoint where :id is a placeholder for the note ID

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({
    message: 'Note deleted successfully'})
}); // Endpoint to delete a note 

*/
app.listen(3000, () => {
  console.log('Server is running on port 3000')
}); // Start the server on port 3000 