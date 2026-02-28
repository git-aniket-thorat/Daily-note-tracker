

import { useState } from "react";
import { searchNotes } from "../api";

export default function SearchNotes() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    const data = await searchNotes(query);
    setResults(data);
  }

  return (
    <main>
      <h3>Search Notes</h3>

      <form className="form" onSubmit={handleSearch}>
        <input
          placeholder="Search by keyword..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>

      <ul>
        {results.map(note => (
          <li key={note._id}>
            <span
              style={{
                textDecoration: note.completed ? "line-through" : "none",
              }}
            >
              {note.text}
            </span>
            <small> ({note.date})</small>
          </li>
        ))}
      </ul>
    </main>
  );
}