export default function LoadingState({ message = 'CONNECTING TO DIMENSION C-137...' }) {
  return (
    <div className="status-container loading-state" role="status">
      <div className="portal-spinner" aria-hidden="true" />
      <p className="status-text">{message}</p>
    </div>
  );
}
