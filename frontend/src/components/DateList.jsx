export default function DateList({ dates, onSelect }) {
  return (
    <ul>
      {dates.map(item => (
        <li key={item.date}>
          <button onClick={() => onSelect(item.date)}>
            {item.date}
          </button>
          {item.count}
        </li>
      ))}
    </ul>
  );
}