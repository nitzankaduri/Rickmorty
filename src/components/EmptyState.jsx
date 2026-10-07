export default function EmptyState({
  searchTerm,
  statusFilter,
  showFavoritesOnly,
  onReset
}) {
  return (
    <div className="status-container empty-state" role="status">
      <span className="empty-icon" role="img" aria-label="telescope">🔭</span>
      <h3 className="empty-title">No Characters Found</h3>
      <p className="status-text">
        {showFavoritesOnly && !searchTerm && statusFilter === 'all'
          ? 'You have not added any characters to your favorites yet. Click the star icon (★) on any card to favorite them!'
          : `No beings in dimension C-137 matched your criteria${
              searchTerm ? ` "${searchTerm}"` : ''
            }${
              statusFilter !== 'all' ? ` with status "${statusFilter}"` : ''
            }${showFavoritesOnly ? ' within your favorites' : ''}.`}
      </p>
      {onReset && (
        <button
          type="button"
          className="reset-filters-btn"
          onClick={onReset}
        >
          Reset Search &amp; Filters
        </button>
      )}
    </div>
  );
}

