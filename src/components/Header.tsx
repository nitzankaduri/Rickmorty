import { Link, NavLink } from 'react-router-dom';

const imageSrc = '/rick_morty_PNG3.png';

export interface HeaderProps {
  favoritesCount?: number;
  showHeroBanner?: boolean;
}

export default function Header({ favoritesCount = 0, showHeroBanner = true }: HeaderProps) {
  return (
    <header className="hero-editorial-section">
      {/* Top Floating Navigation Bar with React Router NavLinks */}
      <nav className="editorial-navbar" aria-label="Main Navigation">
        <div className="editorial-brand-group">
          <Link to="/" className="editorial-brand-title">
            Rick &amp; Morty<span className="brand-trademark">®</span>
          </Link>
          <div className="status-indicator-pill">
            <span className="amber-dot" aria-hidden="true" />
            <span className="pill-text">Live Index</span>
          </div>
        </div>

        <div className="editorial-nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link-pill ${isActive ? 'active' : ''}`}
          >
            Specimens
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => `nav-link-pill ${isActive ? 'active' : ''}`}
          >
            Vault {favoritesCount > 0 && <span className="nav-badge">{favoritesCount}</span>}
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) => `nav-link-pill ${isActive ? 'active' : ''}`}
          >
            Analytics
          </NavLink>
        </div>
      </nav>

      {/* Hero Showcase (rendered on home page) */}
      {showHeroBanner && (
        <>
          <div className="hero-stage">
            {/* Character Portrait */}
            <div className="hero-artwork-frame hero-image-wrapper">
              <img
                src={imageSrc}
                alt="Rick and Morty dynamic cartoon visual"
                className="hero-action-image"
                loading="eager"
              />
            </div>

            {/* Layer 3: Foreground Hero Title overlapping the portrait */}
            <h1 className="hero-display-title">
              Rick &amp; Morty<span className="trademark-circle-badge">®</span>
            </h1>
          </div>

          {/* 3-Column Editorial Metadata Row with Orange Corner Reticles */}
          <div className="subhero-editorial-grid">
            <div className="editorial-col">
              <h2 className="editorial-col-title">©2026</h2>
              <p className="editorial-col-subtext">
                Designing digital experiences that captivate, connect, and convert across dimensions.
              </p>
            </div>

            <div className="editorial-col">
              <h2 className="editorial-col-title">Multiverse</h2>
              <p className="editorial-col-subtext">
                We craft bold, memorable dimensional archives that tell stories and leave a lasting impression.
              </p>
            </div>

            <div className="editorial-col">
              <h2 className="editorial-col-title">Specimens</h2>
              <p className="editorial-col-subtext">
                Intuitive, user-focused interfaces that elevate engagement and drive seamless interactions.
              </p>
            </div>
          </div>

          {/* 6-Capsule Logos Strip */}
          <div className="capsules-strip" aria-label="Partner Dimensions and Agencies">
            <div className="capsule-card">
              <span className="capsule-symbol">◐</span>
              <span>Frame Blox</span>
            </div>
            <div className="capsule-card">
              <span className="capsule-symbol">◯</span>
              <span>Supa Blox</span>
            </div>
            <div className="capsule-card">
              <span className="capsule-symbol">⧖</span>
              <span>Hype Blox</span>
            </div>
            <div className="capsule-card">
              <span className="capsule-symbol">⧖</span>
              <span>Hype Blox</span>
            </div>
            <div className="capsule-card">
              <span className="capsule-symbol">◐</span>
              <span>Ultra Blox</span>
            </div>
            <div className="capsule-card">
              <span className="capsule-symbol">⏩</span>
              <span>Ship Blox</span>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
