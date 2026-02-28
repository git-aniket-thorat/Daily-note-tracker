import Note from "../models/Note.js";

export async function addNote(req, res) {
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

export async function getDates(req, res) {
  const result = await Note.aggregate([
    {
      $group: {
        _id: "$date",
        count: { $sum: 1 },
      },
    },
    {
      $sort: { _id: -1 },
    },
    {
      $project: {
        _id: 0,
        date: "$_id",
        count: 1,
      },
    },
  ]);

  res.json(result);
}

export async function getNotesByDate(req, res) {
  const notes = await Note.find({ date: req.params.date }).sort({
    createdAt: -1,
  });

  res.json(notes);
}

export async function toggleCompleted(req, res) {
  const note = await Note.findById(req.params.id);
  note.completed = !note.completed;
  await note.save();
  res.json(note);
}

export async function updateNote(req, res) {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).json({ message: "Text is required" });
  }

  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    { text, completed: false },
    { returnDocument: "after" },
  );

  if (!updatedNote) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(updatedNote);
}

export async function deleteNote(req, res) {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
}

export async function searchNotesByKeyword(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.json([]);
  }

  const notes = await Note.find({
    text: { $regex: q, $options: "i" },
  }).sort({ date: -1 });

  res.json(notes);
}
