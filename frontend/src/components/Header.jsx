import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h2>Daily Notes</h2>

      <nav>
        <Link to="/">View Notes</Link> |<Link to="/search">Search Notes</Link> | <Link to="/add">Add Note</Link>
      </nav>
    </header>
  );
}