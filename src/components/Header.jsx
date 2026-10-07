export default function Header() {
  return (
    <header className="app-header">
      <div className="header-edition-badge">
        <span>ARCHIVAL COLLECTION // EDITION 2026</span>
      </div>
      <div className="header-brand">
        <div className="brand-talisman" aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <div className="brand-text">
          <h1 className="header-title">RICK &amp; MORTY</h1>
          <p className="header-subtitle">THE MULTIVERSE MONOGRAPH &amp; EXHIBITION</p>
        </div>
      </div>
    </header>
  );
}
