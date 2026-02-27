const BASE_URL = "http://localhost:5000/notes";

/**
 * Add a new note
 */
export async function addNote(text, date) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, date }),
  });
  return res.json();
}

/**
 * Get all dates that have notes
 */
export async function getDates() {
  const res = await fetch(`${BASE_URL}/dates`);
  return res.json();
}

/**
 * Get notes for a specific date
 */
export async function getNotesByDate(date) {
  const res = await fetch(`${BASE_URL}/date/${date}`);
  return res.json();
}

/**
 * Toggle completed / not completed
 */
export async function toggleNote(id) {
  const res = await fetch(`${BASE_URL}/${id}/toggle`, {
    method: "PUT",
  });
  return res.json();
}

/**
 * Delete a note
 */
export async function deleteNote(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
}