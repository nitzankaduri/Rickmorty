import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="status-container not-found-page" role="alert">
      <div className="status-symbol" aria-hidden="true">✦</div>
      <h1 className="not-found-code">404</h1>
      <h2 className="empty-title">Dimension Not Found</h2>
      <p className="status-text">
        You seem to have fallen into an uncharted interdimensional void. This coordinate does not exist in the Citadel registry.
      </p>
      <Link to="/" className="retry-button" style={{ textDecoration: 'none' }}>
        Return to Dimension C-137 ↗
      </Link>
    </div>
  );
}

