import Note from "../models/note.model.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (err) {
    console.error("getNotes error:", err);
    res.status(500).json({ error: err.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const note = await Note.create({ title, content });

    res.status(201).json(note);
  } catch (err) {
    console.error("createNote error:", err);
    res.status(500).json({ error: err.message });
  }
};


export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updated = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ message: "Note not found" });

    res.json(updated);
  } catch (err) {
    console.error("updateNote error:", err);
    res.status(500).json({ error: err.message });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Note.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error("deleteNote error:", err);
    res.status(500).json({ error: err.message });
  }
};
