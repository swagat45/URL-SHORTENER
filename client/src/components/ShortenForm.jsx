import { useState } from 'react';
import api from '../services/api';

export default function ShortenForm({ onNewLink }) {
  const [longUrl, setLongUrl] = useState('');
  const [custom, setCustom] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await api.post('/shorten', {
        longUrl,
        customCode: custom || undefined,
      });
      onNewLink(data.shortUrl);
      setLongUrl('');
      setCustom('');
    } catch (err) {
      setError(err.response?.data?.error || 'Server error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
      <input
        type="url"
        placeholder="Paste long URL here…"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Custom code (optional)"
        value={custom}
        onChange={(e) => setCustom(e.target.value)}
        className="border p-2 rounded"
      />
      <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Shorten
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}