export default function EmptyState({
  searchTerm,
  statusFilter,
  showFavoritesOnly,
  onReset
}) {
  return (
    <div className="status-container empty-state" role="status">
      <div className="status-symbol" aria-hidden="true">◇</div>
      <h3 className="empty-title">NO CORRESPONDING EXHIBITS FOUND</h3>
      <p className="status-text">
        {showFavoritesOnly && !searchTerm && statusFilter === 'all'
          ? 'Your curated collection contains no exhibits yet. Mark any exhibit with the talisman star to add it to your private collection.'
          : `No dimensional entities match your query${
              searchTerm ? ` "${searchTerm}"` : ''
            }${
              statusFilter !== 'all' ? ` under status "${statusFilter}"` : ''
            }${showFavoritesOnly ? ' within your curated collection' : ''}.`}
      </p>
      {onReset && (
        <button
          type="button"
          className="reset-filters-btn"
          onClick={onReset}
        >
          RESET CURATION FILTERS
        </button>
      )}
    </div>
  );
}
