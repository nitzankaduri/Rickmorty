export default function ErrorState({
  message = 'Failed to load characters from dimension.',
  onRetry
}) {
  return (
    <div className="status-container error-state" role="alert">
      <h3 className="error-title">Connection Error</h3>
      <p className="status-text">{message}</p>
      {onRetry && (
        <button type="button" className="retry-button" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}
