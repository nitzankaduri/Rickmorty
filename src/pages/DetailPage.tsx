import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import type { Character } from '../types/character';

export interface DetailPageProps {
  characters?: Character[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
}

export default function DetailPage({
  characters = [],
  favorites,
  onToggleFavorite,
}: DetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const existingCharacter = characters.find((c) => c.id === Number(id));
  const [fetchedCharacter, setFetchedCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(!existingCharacter);
  const [error, setError] = useState<string | null>(null);

  const character = existingCharacter || fetchedCharacter;

  useEffect(() => {
    if (!id || existingCharacter) {
      return;
    }

    let ignore = false;

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Entity #${id} not found in dimension records.`);
        }
        return res.json() as Promise<Character>;
      })
      .then((data) => {
        if (!ignore) {
          setFetchedCharacter(data);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!ignore) {
          setError(err.message || 'Failed to sync character dossier.');
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [id, existingCharacter]);

  if (loading) {
    return (
      <div className="detail-page-container">
        <LoadingState message={`Accessing dossier for Entity #${id}...`} />
      </div>
    );
  }

  if (error || !character) {
    return (
      <div className="detail-page-container">
        <ErrorState
          message={error || 'Entity not found.'}
          onRetry={() => navigate('/')}
        />
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link to="/" className="back-link-btn">
            ← Return to Explorer
          </Link>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.includes(character.id);
  const statusColorClass =
    character.status === 'Alive'
      ? 'status-alive'
      : character.status === 'Dead'
      ? 'status-dead'
      : 'status-unknown';
  const episodeCount = character.episode ? character.episode.length : 0;

  return (
    <div className="detail-page-container">
      <div className="detail-page-top-bar">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="back-nav-btn"
          aria-label="Go back to previous page"
        >
          ← Back
        </button>
        <span className="detail-dossier-id">
          INDEX ID #{character.id.toString().padStart(4, '0')}
        </span>
      </div>

      <div className="detail-page-card">
        <div className="detail-layout">
          <div className="detail-portrait-column">
            <div className="detail-image-frame">
              <img
                src={character.image}
                alt={character.name}
                className="detail-image"
              />
            </div>
          </div>

          <div className="detail-content-column">
            <div className="detail-editorial-header">
              <h1 className="detail-name">{character.name}</h1>

              <div className="detail-badges-row">
                <div className={`status-pill ${statusColorClass}-pill`}>
                  <span className={`status-dot ${statusColorClass}`} />
                  <span>{character.status}</span>
                </div>
                <button
                  type="button"
                  className={`detail-favorite-button ${isFavorite ? 'active' : ''}`}
                  onClick={() => onToggleFavorite(character.id)}
                >
                  <svg
                    className="favorite-svg-icon"
                    viewBox="0 0 24 24"
                    fill={isFavorite ? '#f59e0b' : 'none'}
                    stroke={isFavorite ? '#f59e0b' : 'currentColor'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>{isFavorite ? 'In Favorites' : 'Add to Favorites'}</span>
                </button>
              </div>
            </div>

            <div className="detail-spec-sheet">
              <div className="spec-card">
                <span className="spec-label">Species</span>
                <span className="spec-value">{character.species || 'Unknown'}</span>
              </div>

              <div className="spec-card">
                <span className="spec-label">Gender</span>
                <span className="spec-value">{character.gender || 'Unknown'}</span>
              </div>

              {character.type && (
                <div className="spec-card">
                  <span className="spec-label">Type Variant</span>
                  <span className="spec-value">{character.type}</span>
                </div>
              )}

              <div className="spec-card">
                <span className="spec-label">Origin Dimension / Planet</span>
                <span className="spec-value">{character.origin?.name || 'Unknown'}</span>
              </div>

              <div className="spec-card">
                <span className="spec-label">Current Observed Location</span>
                <span className="spec-value">{character.location?.name || 'Unknown'}</span>
              </div>

              <div className="spec-card">
                <span className="spec-label">Recorded Appearances</span>
                <span className="spec-value">
                  {episodeCount} {episodeCount === 1 ? 'Episode' : 'Episodes'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
