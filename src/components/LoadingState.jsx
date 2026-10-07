export default function LoadingState({ message = 'Loading characters...' }) {
  return (
    <div className="status-container loading-state" role="status">
      <div className="minimal-spinner" aria-hidden="true" />
      <p className="status-text">{message}</p>
    </div>
  );
}
