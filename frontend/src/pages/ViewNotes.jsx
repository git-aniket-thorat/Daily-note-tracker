import { useEffect, useState } from "react";
import { getDates, getNotesByDate ,toggleNote,updateNote, deleteNote } from "../api";
import DateList from "../components/DateList";
import NotesList from "../components/NotesList";

export default function ViewNotes() {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getDates().then(setDates);
  }, []);

  async function selectDate(date) {
    setSelectedDate(date);
    const notes = await getNotesByDate(date);
    setNotes(notes);
  }

  async function toggle(id) {
    const updated = await toggleNote(id);
    setNotes(prev =>
      prev.map(n => (n._id === id ? updated : n))
    );
  }

  async function update(id,text){
    const updated = await updateNote(id,text)
    setNotes(prev=> 
      prev.map(n=>(n._id===id ? updated : n))
    )
  }
  async function remove(id) {
    await deleteNote(id);
    setNotes(prev => prev.filter(n => n._id !== id));
  }

  return (
    <main>
      <h3>View Notes</h3>

      <DateList dates={dates} onSelect={selectDate} />

      {selectedDate && (
        <>
          <h4>Notes for {selectedDate}</h4>
          <NotesList
            notes={notes}
            onToggle={toggle}
            onUpdate={update}
            onDelete={remove}
          />
        </>
      )}
    </main>
  );
}