import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddNote from "./pages/AddNote";
import ViewNotes from "./pages/ViewNotes";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<ViewNotes />} />
        <Route path="/add" element={<AddNote />} />
      </Routes>
    </>
  );
}