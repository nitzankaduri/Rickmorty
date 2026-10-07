export default function EmptyState({
  searchTerm,
  statusFilter,
  showFavoritesOnly,
  onReset
}) {
  return (
    <div className="status-container empty-state" role="status">
      <div className="status-symbol" aria-hidden="true">✦</div>
      <h3 className="empty-title">No Entities Found</h3>
      <p className="status-text">
        {showFavoritesOnly && !searchTerm && statusFilter === 'all'
          ? 'You have not added any entities to your favorites yet. Click the star on any card to favorite them.'
          : `No beings in dimension C-137 matched your criteria${
              searchTerm ? ` "${searchTerm}"` : ''
            }${
              statusFilter !== 'all' ? ` with status "${statusFilter}"` : ''
            }${showFavoritesOnly ? ' in favorites' : ''}.`}
      </p>
      {onReset && (
        <button
          type="button"
          className="reset-filters-btn"
          onClick={onReset}
        >
          Reset Filters ↗
        </button>
      )}
    </div>
  );
}
