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
    <section className="filter-bar" aria-label="Archive navigation and curation">
      <div className="filter-controls">
        <div className="search-input-wrapper">
          <svg
            className="search-svg-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
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
            placeholder="SEARCH ARCHIVAL EXHIBITS (E.G. RICK, MORTY)..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search archival exhibits"
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
            <option value="all">ALL STATUSES</option>
            <option value="Alive">ALIVE</option>
            <option value="Dead">DEAD</option>
            <option value="unknown">UNKNOWN</option>
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
              fill={showFavoritesOnly ? '#d4af37' : 'none'}
              stroke="#d4af37"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>CURATED ({favoritesCount})</span>
          </button>
        )}

        {isFiltered && (
          <button
            type="button"
            className="clear-button"
            onClick={onReset}
            title="Reset active query and filters"
          >
            RESET
          </button>
        )}
      </div>

      <div className="filter-stats">
        <span className="stats-pill">
          {resultCount} {resultCount === 1 ? 'EXHIBIT CATALOGED' : 'EXHIBITS CATALOGED'}
        </span>
      </div>
    </section>
  );
}
