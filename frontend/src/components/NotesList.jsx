import { useState } from "react";

export default function NotesList({ notes, onToggle, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  function startEdit(note) {
    console.log("start edit called")
    setEditingId(note._id);
    setEditText(note.text);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditText("");
  }

  function saveEdit(id) {
    console.log("sace edit called")
    if (!editText.trim()) return;
    onUpdate(id, editText);
    console.log("save edit", id, editText)
    cancelEdit();
  }

  return (
    <ul>
      {notes.map(note => (
        <li key={note._id}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flex: 1,
            }}
          >
            <input
              type="checkbox"
              checked={note.completed || false}
              onChange={() => onToggle(note._id)}
              style={{ cursor: "pointer" }}
            />

            {editingId === note._id ? (
              <input
                value={editText}
                onChange={e => setEditText(e.target.value)}
                style={{ flex: 1 }}
              />
            ) : (
              <span
                style={{
                  textDecoration: note.completed ? "line-through" : "none",
                  color: note.completed ? "#999" : "#000",
                }}
              >
                {note.text}
              </span>
            )}
          </div>

          {editingId === note._id ? (
            <>
              <button onClick={() => saveEdit(note._id)}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => startEdit(note)}>Update</button>
              <button onClick={() => onDelete(note._id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}