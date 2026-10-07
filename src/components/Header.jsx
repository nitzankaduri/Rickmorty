export default function Header() {
  return (
    <header className="as-header-container">
      {/* Adult Swim Top Navigation Bar */}
      <nav className="as-top-navbar" aria-label="Adult Swim Navigation">
        <div className="as-nav-left">
          <div className="as-logo-badge" title="[adult swim]">
            <span className="as-logo-text">[as]</span>
          </div>
          <ul className="as-nav-links">
            <li className="active"><a href="#characters">CHARACTERS</a></li>
            <li><a href="#shows">SHOWS</a></li>
            <li><a href="#streams">STREAMS</a></li>
            <li><a href="#dimensions">DIMENSIONS</a></li>
            <li><a href="#games">GAMES</a></li>
            <li><a href="#schedule">SCHEDULE</a></li>
          </ul>
        </div>
        <div className="as-nav-right">
          <span className="as-portal-badge">DIMENSION C-137</span>
        </div>
      </nav>

      {/* Hero Showcase with Floating House and Logo from Official Experience */}
      <div className="as-hero-section">
        <div className="as-hero-frame">
          <img
            src="/hero-scene.png"
            alt="Rick and Morty floating house in space"
            className="as-hero-img"
          />
          <div className="as-hero-bar">
            <span className="as-hero-tag">MULTIVERSE CHARACTER DIRECTORY</span>
            <span className="as-hero-subtag">ADULT SWIM ARCHIVES</span>
          </div>
        </div>
      </div>
    </header>
  );
}
