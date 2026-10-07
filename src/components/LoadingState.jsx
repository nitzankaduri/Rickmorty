export default function LoadingState({ message = 'ACCESSING MULTIVERSE ARCHIVES...' }) {
  return (
    <div className="status-container loading-state" role="status">
      <div className="monograph-spinner" aria-hidden="true" />
      <p className="status-text">{message}</p>
    </div>
  );
}
