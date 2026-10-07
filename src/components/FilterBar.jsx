export default function FilterBar({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  showFavoritesOnly = false,
  onToggleFavoritesOnly,
  favoritesCount = 0,
  resultCount,
  onReset
}) {
  const isFiltered =
    searchTerm.trim() !== '' || statusFilter !== 'all' || showFavoritesOnly;

  return (
    <section className="filter-bar" aria-label="Search and filter characters">
      <div className="filter-controls">
        <div className="search-input-wrapper">
          <svg
            className="search-svg-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            className="search-input"
            placeholder="SEARCH CHARACTERS (RICK, MORTY, BETH...)"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search characters by name"
          />
        </div>

        <div className="status-select-wrapper">
          <label htmlFor="status-select" className="visually-hidden">
            Filter by status
          </label>
          <select
            id="status-select"
            className="status-select"
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            aria-label="Filter by status"
          >
            <option value="all">STATUS: ALL</option>
            <option value="Alive">STATUS: ALIVE</option>
            <option value="Dead">STATUS: DEAD</option>
            <option value="unknown">STATUS: UNKNOWN</option>
          </select>
        </div>

        {onToggleFavoritesOnly && (
          <button
            type="button"
            className={`filter-fav-btn ${showFavoritesOnly ? 'active' : ''}`}
            onClick={onToggleFavoritesOnly}
            aria-pressed={showFavoritesOnly}
          >
            <svg
              className="fav-btn-svg"
              viewBox="0 0 24 24"
              fill={showFavoritesOnly ? '#fbbf24' : 'none'}
              stroke="#fbbf24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>FAVORITES ({favoritesCount})</span>
          </button>
        )}

        {isFiltered && (
          <button
            type="button"
            className="clear-button"
            onClick={onReset}
            title="Reset all filters"
          >
            RESET
          </button>
        )}
      </div>

      <div className="filter-stats">
        <span className="stats-pill">
          {resultCount} {resultCount === 1 ? 'CHARACTER LOADED' : 'CHARACTERS LOADED'}
        </span>
      </div>
    </section>
  );
}
