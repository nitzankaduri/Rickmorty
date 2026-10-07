export default function ErrorState({
  message = 'Dimension signal interrupted. Unable to sync character data.',
  onRetry
}) {
  return (
    <div className="status-container error-state" role="alert">
      <div className="status-symbol" aria-hidden="true">✦</div>
      <h3 className="error-title">Dimension Disconnected</h3>
      <p className="status-text">{message}</p>
      {onRetry && (
        <button type="button" className="retry-button" onClick={onRetry}>
          Reopen Portal ↗
        </button>
      )}
    </div>
  );
}
