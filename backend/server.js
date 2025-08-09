import express from 'express'
// Import the express module

const app = express();
// Create an instance of an Express application

app.get("/api/notes", (req, res) => {
  res.send('your notes here');
}); // Endpoint to get notes 

app.post("/api/notes", (req, res) => {
  res.send('note added');
}); // Endpoint to add a note 



app.listen(3000, () => {
  console.log('Server is running on port 3000')
}); // Start the server on port 3000 