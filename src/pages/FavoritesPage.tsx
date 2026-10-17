import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import type { Character } from '../types/character';

export interface FavoritesPageProps {
  characters: Character[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  onClearFavorites?: () => void;
}

export default function FavoritesPage({
  characters,
  favorites,
  onToggleFavorite,
  onClearFavorites,
}: FavoritesPageProps) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const favoriteCharacters = characters.filter((c) => favorites.includes(c.id));
  const filteredFavorites = favoriteCharacters.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="favorites-page-view">
      <div className="page-editorial-header">
        <div className="page-title-group">
          <span className="page-pretitle">ARCHIVED SPECIMENS</span>
          <h1 className="page-main-title">Personal Vault</h1>
          <p className="page-description">
            Your curated collection of bookmarked multiverse entities saved across sessions.
          </p>
        </div>

        {favorites.length > 0 && onClearFavorites && (
          <button
            type="button"
            onClick={onClearFavorites}
            className="clear-vault-btn"
          >
            Clear Vault ({favorites.length})
          </button>
        )}
      </div>

      {favoriteCharacters.length > 0 && (
        <div className="favorites-search-bar">
          <input
            type="search"
            className="search-input"
            placeholder="Search within your saved favorites..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search favorites"
          />
        </div>
      )}

      {favoriteCharacters.length === 0 ? (
        <div className="status-container empty-state">
          <div className="status-symbol" aria-hidden="true">✦</div>
          <h3 className="empty-title">Your Vault Is Empty</h3>
          <p className="status-text">
            You haven't bookmarked any characters yet. Explore the multiverse archive and star any character to save them here.
          </p>
          <Link to="/" className="retry-button" style={{ textDecoration: 'none' }}>
            Explore Characters ↗
          </Link>
        </div>
      ) : filteredFavorites.length === 0 ? (
        <div className="status-container empty-state">
          <div className="status-symbol" aria-hidden="true">✦</div>
          <h3 className="empty-title">No Matching Favorites</h3>
          <p className="status-text">
            No saved characters matched "{searchTerm}".
          </p>
          <button
            type="button"
            className="reset-filters-btn"
            onClick={() => setSearchTerm('')}
          >
            Clear Search ↗
          </button>
        </div>
      ) : (
        <section className="character-grid" aria-label="Favorites collection">
          {filteredFavorites.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onSelect={(char) => navigate(`/characters/${char.id}`)}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </section>
      )}
    </div>
  );
}

