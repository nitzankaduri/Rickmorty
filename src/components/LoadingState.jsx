export default function LoadingState({ message = 'Scanning dimensions...' }) {
  return (
    <div className="status-container loading-state">
      <div className="portal-spinner" aria-hidden="true" />
      <p className="status-text">{message}</p>
    </div>
  );
}

