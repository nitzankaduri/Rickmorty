interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = 'Scanning dimension C-137...' }: LoadingStateProps) {
  return (
    <div className="status-container loading-state" role="status">
      <div className="studio-spinner" aria-hidden="true" />
      <p className="status-text">{message}</p>
    </div>
  );
}
