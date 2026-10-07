export default function EmptyState({
  searchTerm,
  statusFilter,
  showFavoritesOnly,
  onReset
}) {
  return (
    <div className="status-container empty-state" role="status">
      <div className="status-symbol" aria-hidden="true">🛸</div>
      <h3 className="empty-title">NO DIMENSIONAL LIFEFORMS FOUND</h3>
      <p className="status-text">
        {showFavoritesOnly && !searchTerm && statusFilter === 'all'
          ? 'You have not added any characters to your favorites yet. Click the star on any card to save them to your dimension.'
          : `No beings matched your inquiry${
              searchTerm ? ` "${searchTerm}"` : ''
            }${
              statusFilter !== 'all' ? ` under status "${statusFilter}"` : ''
            }${showFavoritesOnly ? ' in your favorites' : ''}.`}
      </p>
      {onReset && (
        <button
          type="button"
          className="reset-filters-btn"
          onClick={onReset}
        >
          RESET FILTERS
        </button>
      )}
    </div>
  );
}
