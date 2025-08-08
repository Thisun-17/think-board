import express from 'express'

const app = express();

app.get("/api/notes", (req, res) => {
  res.send('your notes here');
}); 


app.listen(3000, () => {
  console.log('Server is running on port 3000')
});