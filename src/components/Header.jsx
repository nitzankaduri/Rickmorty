export default function Header() {
  return (
    <header className="hero-section">
      {/* ====================================================
          UPPER SUNSET ORANGE HERO CARD (FOLIOBLOX AESTHETIC)
          ==================================================== */}
      <div className="hero-orange-card">
        {/* Top Navbar inside the orange card */}
        <nav className="card-navbar" aria-label="Main Navigation">
          <div className="card-brand">
            <span className="card-brand-name">Rick and Morty</span>
          </div>

          <div className="card-nav-links">
            <a href="#characters" className="card-nav-link active">Home</a>
            <a href="#about" className="card-nav-link">About</a>
            <a href="#characters" className="card-nav-link">Characters</a>
            <a href="#characters" className="card-nav-link">Dimensions</a>
          </div>

          <div className="card-nav-cta">
            <a href="#characters" className="pill-btn nav-white-pill">
              <span>Explore Portal</span>
              <span className="orange-arrow-circle" aria-hidden="true">→</span>
            </a>
          </div>
        </nav>

        {/* Hero Card Body */}
        <div className="hero-card-body">
          {/* Left Text */}
          <div className="hero-card-left">
            <span className="hero-greeting">Hey, Welcome to</span>
            <h1 className="hero-card-title">
              Rick and<br />Morty
            </h1>
          </div>

          {/* Center Cinematic Portrait */}
          <div className="hero-card-center">
            <div className="hero-image-wrapper">
              <img
                src="/rick-morty-hero.jpg"
                alt="Rick and Morty in cinematic orange rim lighting with sunglasses"
                className="hero-portrait-img"
              />
              <div className="hero-image-glow" aria-hidden="true" />
            </div>
          </div>

          {/* Right Quote & Subtext */}
          <div className="hero-card-right">
            <p className="hero-quote">
              Great adventures should feel limitless.
            </p>
            <p className="hero-card-desc">
              From dimension C-137 to the Citadel, cataloging over 800 cosmic entities, alien species, and alternate timelines.
            </p>
          </div>
        </div>

        {/* Bottom 4 Numbered Metrics */}
        <div className="hero-card-metrics">
          <div className="metric-col">
            <span className="metric-num">#01</span>
            <span className="metric-label">Multiverse Archive</span>
          </div>
          <div className="metric-col">
            <span className="metric-num">#02</span>
            <span className="metric-label">Citadel of Ricks</span>
          </div>
          <div className="metric-col">
            <span className="metric-num">#03</span>
            <span className="metric-label">Dimension C-137</span>
          </div>
          <div className="metric-col">
            <span className="metric-num">#04</span>
            <span className="metric-label">Space Travel</span>
          </div>
        </div>
      </div>

      {/* ====================================================
          DIMENSIONAL LOGOS STRIP (BLACK BACKGROUND)
          ==================================================== */}
      <div className="dimensions-strip">
        <span className="dimensions-strip-label">Trusted across dimensions:</span>
        <div className="dimensions-logos">
          <div className="dimension-logo-item">
            <span className="logo-symbol">◯</span>
            <span>Citadel Fleet</span>
          </div>
          <div className="dimension-logo-item">
            <span className="logo-symbol">⧖</span>
            <span>Smith Garage</span>
          </div>
          <div className="dimension-logo-item">
            <span className="logo-symbol">◑</span>
            <span>Galactic Fed</span>
          </div>
          <div className="dimension-logo-item">
            <span className="logo-symbol">◐</span>
            <span>Gazorpazorp</span>
          </div>
        </div>
      </div>

      {/* ====================================================
          EDITORIAL INTRO SECTION ("BEHIND THE MULTIVERSE")
          ==================================================== */}
      <div className="editorial-intro-section" id="about">
        <div className="editorial-left">
          <span className="editorial-tag">Behind the Multiverse</span>
          <h2 className="editorial-title">
            Exploring Entities That Defy Reality
          </h2>
        </div>
        <div className="editorial-right">
          <p className="editorial-desc">
            An interactive archive focused on indexing characters across the infinite multiverse. Filter by life status, search across dimensions, and inspect official dossiers.
          </p>
          <div className="editorial-cta-row">
            <span className="editorial-subtext">Dimension C-137 · Built with React &amp; Vite</span>
            <a href="#characters" className="pill-btn orange-pill-btn">
              <span>Explore Collection</span>
              <span className="white-arrow-circle" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
