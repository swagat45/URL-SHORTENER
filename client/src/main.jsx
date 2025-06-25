import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ShortenForm from './components/ShortenForm.jsx';
import UrlTable from './components/UrlTable.jsx';
import './index.css';

function App() {
  const [links, setLinks] = useState([]);
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">URL Shortener</h1>
      <ShortenForm onNewLink={(url) => setLinks([url, ...links])} />
      <UrlTable links={links} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);