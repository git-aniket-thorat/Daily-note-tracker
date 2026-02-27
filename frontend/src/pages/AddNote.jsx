import { useState } from "react";
import { addNote } from "../api";

export default function AddNote() {
  const [text, setText] = useState("");

  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;

    await addNote(text, today);
    setText("");
    alert("Note added");
  }

  return (
    <main>
      <h3>Add Note</h3>

      <form className="form" onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write your note..."
        />
        <button>Add</button>
      </form>
    </main>
  );
}