export default function EmptyState({
  searchTerm,
  statusFilter,
  showFavoritesOnly,
  onReset
}) {
  return (
    <div className="status-container empty-state" role="status">
      <h3 className="empty-title">No characters found</h3>
      <p className="status-text">
        {showFavoritesOnly && !searchTerm && statusFilter === 'all'
          ? 'You have not saved any characters to your favorites yet.'
          : `No characters match your current search and filters.`}
      </p>
      {onReset && (
        <button
          type="button"
          className="reset-filters-btn"
          onClick={onReset}
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}
