export default function DateList({ dates, onSelect }) {
  return (
    <ul>
      {dates.map(date => (
        <li key={date}>
          <button onClick={() => onSelect(date)}>
            {date}
          </button>
        </li>
      ))}
    </ul>
  );
}