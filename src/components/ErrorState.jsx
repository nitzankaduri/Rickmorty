export default function ErrorState({ message = 'Portal malfunction! Failed to load characters.', onRetry }) {
  return (
    <div className="status-container error-state">
      <span className="error-icon" role="img" aria-label="warning">⚠️</span>
      <h3 className="error-title">Dimension Disconnected</h3>
      <p className="status-text">{message}</p>
      {onRetry && (
        <button type="button" className="retry-button" onClick={onRetry}>
          Reopen Portal (Try Again)
        </button>
      )}
    </div>
  );
}

