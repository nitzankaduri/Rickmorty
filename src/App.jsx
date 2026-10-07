import { useState, useEffect } from 'react';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';

const API_URL = 'https://rickandmortyapi.com/api/character';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = () => {
    setLoading(true);
    setError(null);

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch characters (Status: ${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        setCharacters(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'An unexpected error occurred while fetching.');
        setLoading(false);
      });
  };

  useEffect(() => {
    let ignore = false;

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch characters (Status: ${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (!ignore) {
          setCharacters(data.results || []);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError(err.message || 'An unexpected error occurred while fetching.');
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {loading && <LoadingState message="Connecting to dimension C-137..." />}
        {!loading && error && <ErrorState message={error} onRetry={fetchCharacters} />}
        {!loading && !error && (
          <CharacterList
            characters={characters}
            onSelectCharacter={() => {}}
          />
        )}
      </main>
    </div>
  );
}
