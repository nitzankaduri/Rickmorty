import { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import EmptyState from './components/EmptyState';

const API_URL = 'https://rickandmortyapi.com/api/character';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

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

  const handleResetFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
  };

  const filteredCharacters = characters.filter((character) => {
    const matchesName = character.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());
    const matchesStatus =
      statusFilter === 'all' ||
      character.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesName && matchesStatus;
  });

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {loading && <LoadingState message="Connecting to dimension C-137..." />}
        {!loading && error && <ErrorState message={error} onRetry={fetchCharacters} />}
        {!loading && !error && (
          <>
            <FilterBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
              resultCount={filteredCharacters.length}
              onReset={handleResetFilters}
            />

            {filteredCharacters.length === 0 ? (
              <EmptyState
                searchTerm={searchTerm}
                statusFilter={statusFilter}
                onReset={handleResetFilters}
              />
            ) : (
              <CharacterList
                characters={filteredCharacters}
                onSelectCharacter={(char) => setSelectedCharacter(char)}
              />
            )}
          </>
        )}

        {selectedCharacter && (
          <CharacterDetail
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
      </main>
    </div>
  );
}
