import { useState } from 'react';

const PRIMARY_IMG = 'https://pngimg.com/d/rick_morty_PNG2.png';
const LOCAL_FALLBACK = '/rick_morty_action.png';
const HERO_FALLBACK = '/rick-morty-hero.jpg';

export default function Header() {
  const [imageSrc, setImageSrc] = useState(PRIMARY_IMG);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (imageSrc === PRIMARY_IMG) {
      setImageSrc(LOCAL_FALLBACK);
    } else if (imageSrc === LOCAL_FALLBACK) {
      setImageSrc(HERO_FALLBACK);
    } else {
      setHasError(true);
    }
  };

  return (
    <header className="hero-editorial-section">
      {/* Top Navigation Bar (Jay Cole Style) */}
      <nav className="editorial-navbar" aria-label="Main Navigation">
        <div className="editorial-brand-group">
          <a href="#characters" className="editorial-brand-title">
            Rick &amp; Morty<sup>®</sup>
          </a>
          <div className="status-indicator-pill">
            <span className="amber-dot" aria-hidden="true" />
            <span>Dimension C-137</span>
          </div>
        </div>

        <div className="editorial-nav-right">
          <a href="#characters" className="menu-capsule-btn" aria-label="Explore Character Archive">
            <span>Explore</span>
            <span className="hamburger-icon" aria-hidden="true">
              <span className="bar" />
              <span className="bar" />
            </span>
          </a>
        </div>
      </nav>

      {/* Hero Stage: Centered Art with Lower Mask & Overlay Display Title */}
      <div className="hero-stage">
        <div className="hero-artwork-frame">
          {!hasError && (
            <img
              src={imageSrc}
              alt="Rick and Morty dynamic action visual"
              className="hero-action-image"
              onError={handleImageError}
              loading="eager"
            />
          )}
        </div>

        {/* Display Title across lower-center section of character art */}
        <h1 className="hero-display-title">
          Rick &amp; Morty<sup>®</sup>
        </h1>
      </div>

      {/* 3-Column Editorial Grid (Sub-Hero Information) */}
      <div className="subhero-editorial-grid">
        <div className="editorial-col">
          <div className="reticle-header">
            <span className="reticle-corner" aria-hidden="true" />
            <h2 className="reticle-label">©2026 // ARCHIVE</h2>
          </div>
          <p className="editorial-col-text">
            Dimension C-137 catalog. Exploring interdimensional entities and timelines that captivate across infinite realities.
          </p>
        </div>

        <div className="editorial-col">
          <div className="reticle-header">
            <span className="reticle-corner" aria-hidden="true" />
            <h2 className="reticle-label">SPECIMENS</h2>
          </div>
          <p className="editorial-col-text">
            Indexed archive of living organisms, alien species, cosmic travelers, and Citadel council dossiers.
          </p>
        </div>

        <div className="editorial-col">
          <div className="reticle-header">
            <span className="reticle-corner" aria-hidden="true" />
            <h2 className="reticle-label">MULTIVERSE UI/UX</h2>
          </div>
          <p className="editorial-col-text">
            Live interactive explorer with real-time dossier inspection, status filters, and persistent favorites.
          </p>
        </div>
      </div>

      {/* 6-Capsule Logos Strip (Jay Cole Style) */}
      <div className="capsules-strip" aria-label="Multiverse partners and dimensions">
        <div className="capsule-card">
          <span className="capsule-symbol">◐</span>
          <span>Citadel Fleet</span>
        </div>
        <div className="capsule-card">
          <span className="capsule-symbol">◯</span>
          <span>Smith Garage</span>
        </div>
        <div className="capsule-card">
          <span className="capsule-symbol">⧖</span>
          <span>Galactic Fed</span>
        </div>
        <div className="capsule-card">
          <span className="capsule-symbol">⧖</span>
          <span>Anatomy Park</span>
        </div>
        <div className="capsule-card">
          <span className="capsule-symbol">◐</span>
          <span>Gazorpazorp</span>
        </div>
        <div className="capsule-card">
          <span className="capsule-symbol">⚡</span>
          <span>Portal Gun</span>
        </div>
      </div>
    </header>
  );
}
