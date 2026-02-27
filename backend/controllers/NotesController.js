import Note from "../models/Note.js";



// Add note
export async function addNote (req, res) {
  const { text, date } = req.body;

  if (!text || !date) {
    return res.status(400).json({ message: "Text and date required" });
  }

  const note = await Note.create({
    text,
    date,
    completed: false,
  });

  res.json(note);
}


// Get all unique dates
export async function getDates (req, res){
  const dates = await Note.distinct("date");
  res.json(dates.sort().reverse());
}


//  Get notes by date
export async function getNotesByDate (req, res) {
  const notes = await Note.find({ date: req.params.date })
    .sort({ createdAt: -1 });

  res.json(notes);
}


// Toggle completed
export async function toggleCompleted (req, res)  {
  const note = await Note.findById(req.params.id);
  note.completed = !note.completed;
  await note.save();
  res.json(note);
}


// Delete note
export async function deleteNote (req, res) {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
}
