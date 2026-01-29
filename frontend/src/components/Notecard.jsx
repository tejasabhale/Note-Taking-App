import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/NoteContext';

const Notecard = ({ note }) => {
    const { deleteNote, updateNote } = useContext(NoteContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        title: note.title,
        content: note.content
    });

    const handleUpdate = () => {
        updateNote(note._id, editData);
    }

    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all">
            {(isEditing) ? (
                <>
                    {/* Edit Mode */}
                    <div className="flex flex-col items-center p-4 space-y-4">
                        <input type="text" className="w-[90%] text-center bg-slate-700 p-2 border border-gray-300 rounded-md" value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} />
                        <textarea className="w-[90%] resize-none p-2 border bg-slate-700 border-gray-300 rounded-md" value={editData.content} onChange={(e) => setEditData({ ...editData, content: e.target.value })}></textarea>
                        <button
                            className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                            onClick={() => {
                                updateNote(note._id, editData);
                                setIsEditing(false);
                            }}
                        >
                            Save
                        </button>

                    </div>
                </>
            ) : (
                <>
                    {/* View Mode */}
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{note.title}</h2>
                        <p className="text-gray-400 mb-4">{note.content}</p>
                        <span className='text-sm text-gray-400'>
                            {
                                new Date(note.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })
                            }
                        </span>
                        <div className="flex justify-end space-x-2">
                            <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Edit</button>
                            <button onClick={() => deleteNote(note._id)} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">Delete</button>
                        </div>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default Notecard