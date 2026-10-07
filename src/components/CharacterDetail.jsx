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
  const formattedId = `FOLIO № ${String(character.id).padStart(3, '0')}`;

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
        <div className="modal-top-bar">
          <span className="modal-folio-tag">{formattedId} // MULTIVERSE EXHIBIT</span>
          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close monograph"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="detail-layout">
          <div className="detail-portrait-column">
            <div className="detail-image-frame">
              <img
                src={character.image}
                alt={character.name}
                className="detail-image"
              />
            </div>
            <div className="detail-portrait-caption">
              <span>CANONICAL PORTRAIT CAPTURE</span>
            </div>
          </div>

          <div className="detail-content-column">
            <div className="detail-editorial-header">
              <h2 id="detail-character-name" className="detail-name">
                {character.name}
              </h2>

              <div className="detail-badges-row">
                <div className="detail-status-pill">
                  <span className={`status-dot ${statusColorClass}`} />
                  <span className="status-text-pill">{character.status.toUpperCase()}</span>
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
                      fill={isFavorite ? '#d4af37' : 'none'}
                      stroke={isFavorite ? '#d4af37' : 'currentColor'}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span>{isFavorite ? 'CURATED IN COLLECTION' : 'ADD TO CURATED COLLECTION'}</span>
                  </button>
                )}
              </div>
            </div>

            <div className="detail-spec-sheet">
              <div className="spec-row">
                <span className="spec-label">SPECIES</span>
                <span className="spec-value">{character.species || 'Unknown'}</span>
              </div>

              <div className="spec-row">
                <span className="spec-label">GENDER</span>
                <span className="spec-value">{character.gender || 'Unknown'}</span>
              </div>

              {character.type && (
                <div className="spec-row">
                  <span className="spec-label">CLASSIFICATION</span>
                  <span className="spec-value">{character.type}</span>
                </div>
              )}

              <div className="spec-row">
                <span className="spec-label">ORIGIN SPHERE</span>
                <span className="spec-value">
                  {character.origin?.name || 'Unknown'}
                </span>
              </div>

              <div className="spec-row">
                <span className="spec-label">CURRENT LOCUS</span>
                <span className="spec-value">
                  {character.location?.name || 'Unknown'}
                </span>
              </div>

              <div className="spec-row">
                <span className="spec-label">RECORDED APPEARANCES</span>
                <span className="spec-value">
                  {episodeCount} {episodeCount === 1 ? 'Episode' : 'Episodes'}
                </span>
              </div>
            </div>

            <div className="detail-footer">
              <button
                type="button"
                className="detail-close-btn"
                onClick={onClose}
              >
                RETURN TO ARCHIVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
