export default function NotesList({ notes, onToggle, onDelete }) {
  return (
    <ul>
      {notes.map(note => (
        <li key={note._id}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
            <input
              type="checkbox"
              checked={note.completed || false}
              onChange={() => onToggle(note._id)}
              style={{ cursor: "pointer" }}
            />
            <span
              style={{
                textDecoration: note.completed ? "line-through" : "none",
                color: note.completed ? "#999" : "#000"
              }}
            >
              {note.text}
            </span>
          </div>
          <button onClick={() => onDelete(note._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}