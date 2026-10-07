export default function EmptyState({ searchTerm, statusFilter, onReset }) {
  return (
    <div className="status-container empty-state" role="status">
      <span className="empty-icon" role="img" aria-label="telescope">🔭</span>
      <h3 className="empty-title">No Characters Found</h3>
      <p className="status-text">
        No beings in dimension C-137 matched your criteria
        {searchTerm ? ` "${searchTerm}"` : ''}
        {statusFilter !== 'all' ? ` with status "${statusFilter}"` : ''}.
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
