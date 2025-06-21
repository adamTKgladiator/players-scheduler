import useSWR from 'swr';
const fetcher = url => fetch(url).then(r => r.json());

export default function Entries() {
  const { data, error } = useSWR('/api/list', fetcher);
  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading…</div>;
  return (
    <div style={{ padding: 20 }}>
      <h1>All Entries</h1>
      <ul>
        {data.map((e, i) => (
          <li key={i}>
            <strong>{e.player}</strong> – {e.date} @ {e.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
