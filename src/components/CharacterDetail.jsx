import { useEffect } from 'react';

export default function CharacterDetail({
  character,
  onClose,
  isFavorite = false,
  onToggleFavorite
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!character) return null;

  const statusColorClass =
    character.status === 'Alive'
      ? 'status-alive'
      : character.status === 'Dead'
      ? 'status-dead'
      : 'status-unknown';

  const episodeCount = character.episode ? character.episode.length : 0;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-character-name"
    >
      <div
        className="detail-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close details"
        >
          ✕
        </button>

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
              <h2 id="detail-character-name" className="detail-name">
                {character.name}
              </h2>

              <div className="detail-badges-row">
                <div className={`status-pill ${statusColorClass}-pill`}>
                  <span className={`status-dot ${statusColorClass}`} />
                  <span>{character.status}</span>
                </div>
                {onToggleFavorite && (
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
                )}
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
                  <span className="spec-label">Type</span>
                  <span className="spec-value">{character.type}</span>
                </div>
              )}

              <div className="spec-card">
                <span className="spec-label">Origin Planet</span>
                <span className="spec-value">
                  {character.origin?.name || 'Unknown'}
                </span>
              </div>

              <div className="spec-card">
                <span className="spec-label">Current Location</span>
                <span className="spec-value">
                  {character.location?.name || 'Unknown'}
                </span>
              </div>

              <div className="spec-card">
                <span className="spec-label">Episodes</span>
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
