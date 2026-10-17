import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import FavoritesPage from './pages/FavoritesPage';
import StatsPage from './pages/StatsPage';
import NotFoundPage from './pages/NotFoundPage';
import type { Character, CharactersApiResponse } from './types/character';

const API_URL = 'https://rickandmortyapi.com/api/character';
const STORAGE_KEY = 'rick_morty_favorites';

export default function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (err) {
      console.error('Failed to save favorites to localStorage', err);
    }
  }, [favorites]);

  const fetchCharacters = () => {
    setLoading(true);
    setError(null);

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch characters (Status: ${res.status})`);
        }
        return res.json() as Promise<CharactersApiResponse>;
      })
      .then((data) => {
        setCharacters(data.results || []);
        setLoading(false);
      })
      .catch((err: Error) => {
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
        return res.json() as Promise<CharactersApiResponse>;
      })
      .then((data) => {
        if (!ignore) {
          setCharacters(data.results || []);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!ignore) {
          setError(err.message || 'An unexpected error occurred while fetching.');
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  const handleToggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handleClearFavorites = () => {
    setFavorites([]);
  };

  const isHome = location.pathname === '/' || location.pathname === '/characters';

  return (
    <div className="app-container">
      <Header favoritesCount={favorites.length} showHeroBanner={isHome} />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                characters={characters}
                loading={loading}
                error={error}
                onRetry={fetchCharacters}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />
          <Route
            path="/characters"
            element={
              <HomePage
                characters={characters}
                loading={loading}
                error={error}
                onRetry={fetchCharacters}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />
          <Route
            path="/characters/:id"
            element={
              <DetailPage
                characters={characters}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />
          <Route
            path="/items/:id"
            element={
              <DetailPage
                characters={characters}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                characters={characters}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
                onClearFavorites={handleClearFavorites}
              />
            }
          />
          <Route
            path="/stats"
            element={
              <StatsPage
                characters={characters}
                favoritesCount={favorites.length}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
