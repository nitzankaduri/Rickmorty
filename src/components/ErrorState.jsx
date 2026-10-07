export default function ErrorState({
  message = 'DIMENSIONAL GLITCH // UNABLE TO REACH CITADEL OF RICKS',
  onRetry
}) {
  return (
    <div className="status-container error-state" role="alert">
      <div className="status-symbol" aria-hidden="true">⚠️</div>
      <h3 className="error-title">PORTAL MALFUNCTION</h3>
      <p className="status-text">{message}</p>
      {onRetry && (
        <button type="button" className="retry-button" onClick={onRetry}>
          REOPEN PORTAL
        </button>
      )}
    </div>
  );
}
