const BASE_URL = "http://localhost:5000/notes";


export async function addNote(text, date) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, date }),
  });
  return res.json();
}


export async function getDates() {
  const res = await fetch(`${BASE_URL}/dates`);
  return res.json();
}


export async function getNotesByDate(date) {
  const res = await fetch(`${BASE_URL}/date/${date}`);
  return res.json();
}

export async function getNotesCountByDate(date) {
  const res=await fetch(`${BASE_URL}/${date}/count`,)
  return res.json();
}

export async function toggleNote(id) {
  const res = await fetch(`${BASE_URL}/${id}/toggle`, {
    method: "PUT",
  });
  return res.json();
}


export async function updateNote(id, text) {
  const res = await fetch(`${BASE_URL}/${id}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  return res.json();
}

export async function deleteNote(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function searchNotes(keyword) {
  const res = await fetch(
    `${BASE_URL}/search?q=${encodeURIComponent(keyword)}`
  );
  return res.json();
}