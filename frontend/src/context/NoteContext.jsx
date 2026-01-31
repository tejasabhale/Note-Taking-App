import { createContext, useEffect, useState } from "react";
import BACKEND_URL from "../api/url";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET Notes
  const getNotes = async () => {
    try {
      setLoading(true);
      const { data } = await BACKEND_URL.get("/get-notes");
      setNotes(data);
    } catch (err) {
      console.error("Fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  // CREATE Note
  const createNote = async (noteData) => {
    try {
      const { data } = await BACKEND_URL.post("/create-note", noteData);
      setNotes((prev) => [data, ...prev]);
    } catch (err) {
      console.error("Create failed:", err);
    }
  };

  // UPDATE Note
  const updateNote = async (id, updatedData) => {
    try {
      const { data } = await BACKEND_URL.put(`/update-note/${id}`, updatedData);
      setNotes((prev) =>
        prev.map((note) => (note._id === id ? data : note))
      );
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // DELETE Note
  const deleteNote = async (id) => {
    try {
      await BACKEND_URL.delete(`/delete-note/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <NoteContext.Provider
      value={{ notes, loading, createNote, getNotes, updateNote, deleteNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};
