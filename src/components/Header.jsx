export default function Header() {
  return (
    <header className="hero-header">
      {/* Sleek Studio Top Navigation Bar */}
      <nav className="top-nav" aria-label="Main Navigation">
        <div className="nav-brand">
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-name">rick.morty</span>
        </div>

        <div className="nav-links">
          <a href="#characters" className="nav-link active">Characters</a>
          <a href="#episodes" className="nav-link">Episodes</a>
          <a href="#locations" className="nav-link">Locations</a>
          <a href="#dimensions" className="nav-link">Dimensions</a>
        </div>

        <div className="nav-cta">
          <a href="#characters" className="pill-btn nav-pill-btn">
            <span>Dimension C-137</span>
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      {/* Hero Studio Headline Section (Digisparsh / Creative Agency Style) */}
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-headline">
            <span className="hero-accent">exploring</span> the multiverse with a twist of{' '}
            <span className="hero-accent hero-italic">madness.</span>
          </h1>
          <div className="hero-cta-wrapper">
            <a href="#characters" className="pill-btn hero-pill-btn">
              <span>Explore Collection</span>
              <span className="btn-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-description">
            step into the infinite reality of dimension C-137. explore living entities, catalog alternate timelines, and discover characters across every universe.
          </p>
          <div className="hero-stat-pill">
            <span className="pulse-dot" aria-hidden="true" />
            <span>Live Archive · Dimension C-137</span>
          </div>
        </div>
      </div>
    </header>
  );
}
