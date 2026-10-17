import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import CharacterList from '../components/CharacterList';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import EmptyState from '../components/EmptyState';
import type { Character, CharacterStatus } from '../types/character';

export interface HomePageProps {
  characters: Character[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  favorites: number[];
  onToggleFavorite: (id: number) => void;
}

export default function HomePage({
  characters,
  loading,
  error,
  onRetry,
  favorites,
  onToggleFavorite,
}: HomePageProps) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<CharacterStatus>('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);

  const handleResetFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setShowFavoritesOnly(false);
  };

  const filteredCharacters = characters.filter((character) => {
    const matchesName = character.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());
    const matchesStatus =
      statusFilter === 'all' ||
      character.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesFavorite = !showFavoritesOnly || favorites.includes(character.id);

    return matchesName && matchesStatus && matchesFavorite;
  });

  return (
    <div className="home-page-view" id="characters">
      {loading && <LoadingState message="Connecting to dimension C-137..." />}
      {!loading && error && <ErrorState message={error} onRetry={onRetry} />}
      {!loading && !error && (
        <>
          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
            showFavoritesOnly={showFavoritesOnly}
            onToggleFavoritesOnly={() => setShowFavoritesOnly((prev) => !prev)}
            favoritesCount={favorites.length}
            resultCount={filteredCharacters.length}
            onReset={handleResetFilters}
          />

          {filteredCharacters.length === 0 ? (
            <EmptyState
              searchTerm={searchTerm}
              statusFilter={statusFilter}
              showFavoritesOnly={showFavoritesOnly}
              onReset={handleResetFilters}
            />
          ) : (
            <CharacterList
              characters={filteredCharacters}
              onSelectCharacter={(char) => navigate(`/characters/${char.id}`)}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
            />
          )}
        </>
      )}
    </div>
  );
}

