import express from 'express'
// Import the express module
import notesRoutes from './routes/notesRoutes.js'
// Import the notes routes from notesRoutes.js
import { connectDB } from './config/db.js';
// Import the connectDB function from db.js 
import dotenv from 'dotenv';   
// Import the dotenv module to load environment variables
import ratelimiter from './middleware/rateLimiter.js';
// Import the rate limiter middleware from rateLimiter.js
import cors from 'cors';
// Import the CORS middleware to handle cross-origin requests

dotenv.config();
// Load environment variables from .env file 


const app = express();
// Create an instance of an Express application
const PORT = process.env.PORT || 3000;
// Set the port to the value from environment variables or default to 3000

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173" ,
  })
); // Enable CORS for all routes
app.use(express.json()); // this middleware parses JSON request bodies
app.use(ratelimiter);


// our simple custom middleware  
/*  
app.use((req, res, next) => { 
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});
*/
// Middleware to log request method and URL for debugging 


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

connectDB().then(() => { // Connect to the MongoDB database
  // Start the server after successful database connection
  app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
  // Log the port on which the server is running
  });
}); 