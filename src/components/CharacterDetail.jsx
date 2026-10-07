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

        <div className="detail-header">
          <div className="detail-image-wrapper">
            <img
              src={character.image}
              alt={character.name}
              className="detail-image"
            />
          </div>
          <div className="detail-header-info">
            <h2 id="detail-character-name" className="detail-name">
              {character.name}
            </h2>
            <div className="detail-status-pill">
              <span className={`status-indicator ${statusColorClass}`} />
              <span className="status-text-pill">{character.status}</span>
            </div>
            {onToggleFavorite && (
              <button
                type="button"
                className={`detail-favorite-button ${isFavorite ? 'active' : ''}`}
                onClick={() => onToggleFavorite(character.id)}
              >
                {isFavorite ? '★ In Favorites' : '☆ Add to Favorites'}
              </button>
            )}
          </div>
        </div>

        <div className="detail-body">
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Species</span>
              <span className="detail-value">{character.species || 'Unknown'}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Gender</span>
              <span className="detail-value">{character.gender || 'Unknown'}</span>
            </div>

            {character.type && (
              <div className="detail-item">
                <span className="detail-label">Subtype / Subspecies</span>
                <span className="detail-value">{character.type}</span>
              </div>
            )}

            <div className="detail-item">
              <span className="detail-label">Origin Planet</span>
              <span className="detail-value">
                {character.origin?.name || 'Unknown'}
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Last Known Location</span>
              <span className="detail-value">
                {character.location?.name || 'Unknown'}
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Episodes Featured</span>
              <span className="detail-value">
                {episodeCount} {episodeCount === 1 ? 'Episode' : 'Episodes'}
              </span>
            </div>
          </div>
        </div>

        <div className="detail-footer">
          <button
            type="button"
            className="detail-close-btn"
            onClick={onClose}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
