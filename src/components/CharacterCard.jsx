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
      <div className="card-image-wrapper">
        <img
          src={character.image}
          alt={character.name}
          className="card-image"
          loading="lazy"
        />
        {onToggleFavorite && (
          <button
            type="button"
            className={`favorite-button ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? `Remove ${character.name} from favorites` : `Add ${character.name} to favorites`}
            title={isFavorite ? 'Remove favorite' : 'Add favorite'}
          >
            ★
          </button>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-name" title={character.name}>{character.name}</h3>
        <div className="card-meta">
          <span className={`status-indicator ${statusColorClass}`} />
          <span className="status-label">
            {character.status} — {character.species}
          </span>
        </div>
      </div>
    </article>
  );
}
