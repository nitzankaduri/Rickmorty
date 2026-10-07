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
      {/* Top Floating Navigation Bar (Jay Cole Exact Replication) */}
      <nav className="editorial-navbar" aria-label="Main Navigation">
        <div className="editorial-brand-group">
          <a href="#characters" className="editorial-brand-title">
            Rick &amp; Morty<span className="brand-trademark">®</span>
          </a>
          <div className="status-indicator-pill">
            <span className="amber-dot" aria-hidden="true" />
            <span className="pill-text">Available</span>
          </div>
        </div>

        <div className="editorial-nav-right">
          <a href="#characters" className="menu-capsule-btn" aria-label="Menu and Archive Navigation">
            <span>Menu</span>
            <span className="hamburger-icon" aria-hidden="true">
              <span className="bar" />
              <span className="bar" />
            </span>
          </a>
        </div>
      </nav>

      {/* Hero Stage: 3D Depth Layering (Portrait in Layer 2, Title in Layer 3) */}
      <div className="hero-stage">
        {/* Layer 2: Character Portrait with bottom fade mask */}
        <div className="hero-artwork-frame">
          {!hasError && (
            <img
              src={imageSrc}
              alt="Rick & Morty dynamic visual"
              className="hero-action-image"
              onError={handleImageError}
              loading="eager"
            />
          )}
        </div>

        {/* Layer 3: Foreground Hero Title overlapping the lower third of the portrait */}
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

      {/* 6-Capsule Logos Strip (Jay Cole Screenshot Match) */}
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
    </header>
  );
}
