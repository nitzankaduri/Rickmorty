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
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            type="search"
            className="search-input"
            placeholder="Search characters by name (e.g. Rick, Morty)..."
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
            <option value="all">All Statuses</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        {onToggleFavoritesOnly && (
          <button
            type="button"
            className={`filter-fav-btn ${showFavoritesOnly ? 'active' : ''}`}
            onClick={onToggleFavoritesOnly}
            aria-pressed={showFavoritesOnly}
          >
            ★ Favorites ({favoritesCount})
          </button>
        )}

        {isFiltered && (
          <button
            type="button"
            className="clear-button"
            onClick={onReset}
            title="Clear all filters"
          >
            Clear Filters
          </button>
        )}
      </div>

      <div className="filter-stats">
        <span className="stats-pill">
          {resultCount} {resultCount === 1 ? 'character found' : 'characters found'}
        </span>
      </div>
    </section>
  );
}
