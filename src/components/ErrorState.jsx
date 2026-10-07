export default function ErrorState({
  message = 'COMMUNICATION DISRUPTED // UNABLE TO ACCESS ARCHIVE',
  onRetry
}) {
  return (
    <div className="status-container error-state" role="alert">
      <div className="status-symbol" aria-hidden="true">◈</div>
      <h3 className="error-title">EXHIBIT ARCHIVE UNAVAILABLE</h3>
      <p className="status-text">{message}</p>
      {onRetry && (
        <button type="button" className="retry-button" onClick={onRetry}>
          RECONNECT ARCHIVE
        </button>
      )}
    </div>
  );
}
