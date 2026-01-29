import { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

export default function CreateNote() {
  const { createNote } = useContext(NoteContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    await createNote({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Create New Note</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-white mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title..."
              className="w-full bg-gray-800 px-4 py-2 rounded-lg border
                         focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Description</label>
            <textarea
              rows="6"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note..."
              className="w-full resize-none bg-gray-800 px-4 py-2 rounded-lg border
                         focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg
                         transition-all duration-200 ease-out
                         hover:bg-green-600 active:scale-95"
            >
              Save Note
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
