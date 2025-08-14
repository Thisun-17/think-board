import Note from '../models/Note.js'; // Import the Note model

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ creatdAt: -1 }); // Fetch all notes from the database // -1 will sort in descending order by createdAt field(newest first)
    res.status(200).json(notes); // Respond with the notes in JSON format 
  } catch (error) {
    console.error('Error in getAllNotes:', error.message);
    // Log the error to the console
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id); // Find a note by ID
    if (!note) return res.status(404).json({ message: 'Note not found' }); // If note not found, respond with 404
    res.status(200).json(note); // Respond with the found note in JSON format
  }catch (error) {
    console.error('Error in getNoteById:', error.message);
    // Log the error to the console
    res.status(500).json({ message: 'Internal server error' });
  }
}
// Function to get a note by ID, assuming getNoteById is defined in notesController.js

export async function createNote (req, res) {
  try {
    const { title, content } = req.body; // Destructure title and content from request body
    const newNote = new Note({title, content}); // Create a new note instance

    const savedNote = await newNote.save(); // Save the new note to the database
    
    res.status(201).json(savedNote); // Respond with the saved note in JSON format 
  }catch (error) {
    console.error("Error in createNote:", error.message);
    // Log the error to the console
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function updateNote (req, res) {
  try {
    const {title, content} = req.body; // Destructure title and content from request body
    const updateNote = await Note.findByIdAndUpdate(req.params.id,{title,content},
      {
        new: true,
      }
    ); // Find the note by ID and update it
    if (!updateNote) return res.status(404).json({ message: 'Note not found' }); // If note not found, respond with 404

    res.status(200).json({updateNote});
    // Respond with a success message
  } catch (error) {
    console.error("Error in updateNote:", error.message);
    // Log the error to the console
    res.status(500).json({ message: 'Internal server error' }); 
  }
}

export async function deleteNote   (req, res) {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id); // Find the note by ID and delete it
    if (!deleteNote) return res.status(404).json({ message: 'Note not found' }); // If note not found, respond with 404
    res.status(200).json({ message: 'Note deleted successfully' }); // Respond with a success message
  } catch (error) {
    console.error("Error in deleteNote:", error.message);
    // Log the error to the console
    res.status(500).json({ message: 'Internal server error' }); 
  }
}