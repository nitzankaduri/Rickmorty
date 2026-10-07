export default function CharacterCard({
  character,
  onSelect,
  isFavorite = false,
  onToggleFavorite
}) {
  const statusColorClass =
    character.status === 'Alive'
      ? 'status-alive'
      : character.status === 'Dead'
      ? 'status-dead'
      : 'status-unknown';

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(character);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(character.id);
    }
  };

  const formattedId = `#${String(character.id).padStart(3, '0')}`;

  return (
    <article
      className="character-card"
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${character.name}`}
    >
      <div className="card-image-frame">
        <img
          src={character.image}
          alt={character.name}
          className="card-image"
          loading="lazy"
        />
        <div className="card-id-tag">{formattedId}</div>
        {onToggleFavorite && (
          <button
            type="button"
            className={`card-favorite-btn ${isFavorite ? 'is-favorited' : ''}`}
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? `Remove ${character.name} from favorites` : `Add ${character.name} to favorites`}
            title={isFavorite ? 'In favorites' : 'Add to favorites'}
          >
            <svg
              className="favorite-svg-icon"
              viewBox="0 0 24 24"
              fill={isFavorite ? '#fbbf24' : 'none'}
              stroke={isFavorite ? '#fbbf24' : 'currentColor'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-name" title={character.name}>
          {character.name}
        </h3>
        <div className="card-meta-row">
          <span className="card-species">{character.species.toUpperCase()}</span>
          <span className="card-meta-divider" aria-hidden="true">//</span>
          <div className="card-status-wrapper">
            <span className={`status-dot ${statusColorClass}`} aria-hidden="true" />
            <span className="status-name">{character.status.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
