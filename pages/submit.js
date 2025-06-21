import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Submit() {
  const [player, setPlayer] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch('/api/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ player, date, time })
    });
    router.push('/entries');
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Schedule a Player</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Player name" value={player} onChange={e=>setPlayer(e.target.value)} required />
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} required />
        <input type="time" value={time} onChange={e=>setTime(e.target.value)} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
