import { useNavigate } from 'react-router-dom';
import type { Character } from '../types/character';

export interface StatsPageProps {
  characters: Character[];
  favoritesCount: number;
}

export default function StatsPage({
  characters,
  favoritesCount,
}: StatsPageProps) {
  const navigate = useNavigate();

  const total = characters.length;
  const alive = characters.filter((c) => c.status === 'Alive').length;
  const dead = characters.filter((c) => c.status === 'Dead').length;
  const unknown = characters.filter((c) => c.status === 'unknown').length;

  const alivePct = total > 0 ? Math.round((alive / total) * 100) : 0;
  const deadPct = total > 0 ? Math.round((dead / total) * 100) : 0;
  const unknownPct = total > 0 ? Math.round((unknown / total) * 100) : 0;

  // Species distribution
  const speciesMap: Record<string, number> = {};
  for (const c of characters) {
    speciesMap[c.species] = (speciesMap[c.species] || 0) + 1;
  }
  const topSpecies = Object.entries(speciesMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Gender breakdown
  const genderMap: Record<string, number> = {};
  for (const c of characters) {
    genderMap[c.gender] = (genderMap[c.gender] || 0) + 1;
  }

  const handleRandomTeleport = () => {
    if (characters.length === 0) return;
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters[randomIndex];
    navigate(`/characters/${randomChar.id}`);
  };

  return (
    <div className="stats-page-view">
      <div className="page-editorial-header">
        <div className="page-title-group">
          <span className="page-pretitle">DIMENSIONAL METRICS</span>
          <h1 className="page-main-title">Multiverse Analytics</h1>
          <p className="page-description">
            Live telemetry and demographic distributions calculated across {total} indexed specimens.
          </p>
        </div>

        <button
          type="button"
          onClick={handleRandomTeleport}
          className="teleport-button"
        >
          ⚡ Teleport to Random Specimen
        </button>
      </div>

      <div className="stats-kpi-grid">
        <div className="kpi-card">
          <span className="kpi-label">TOTAL INDEXED</span>
          <span className="kpi-number">{total}</span>
          <span className="kpi-subtext">Active batch</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-label">LIVING ENTITIES</span>
          <span className="kpi-number status-alive-text">{alive}</span>
          <span className="kpi-subtext">{alivePct}% of population</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-label">TERMINATED</span>
          <span className="kpi-number status-dead-text">{dead}</span>
          <span className="kpi-subtext">{deadPct}% confirmed dead</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-label">SAVED IN VAULT</span>
          <span className="kpi-number favorite-accent-text">{favoritesCount}</span>
          <span className="kpi-subtext">Bookmarked entities</span>
        </div>
      </div>

      <div className="stats-sections-grid">
        <div className="stats-panel">
          <h3 className="stats-panel-title">Survival Ratios</h3>
          <div className="progress-group">
            <div className="progress-header">
              <span>Alive</span>
              <span>{alive} ({alivePct}%)</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill fill-alive" style={{ width: `${alivePct}%` }} />
            </div>
          </div>

          <div className="progress-group">
            <div className="progress-header">
              <span>Dead</span>
              <span>{dead} ({deadPct}%)</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill fill-dead" style={{ width: `${deadPct}%` }} />
            </div>
          </div>

          <div className="progress-group">
            <div className="progress-header">
              <span>Unknown</span>
              <span>{unknown} ({unknownPct}%)</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill fill-unknown" style={{ width: `${unknownPct}%` }} />
            </div>
          </div>
        </div>

        <div className="stats-panel">
          <h3 className="stats-panel-title">Top Species Classification</h3>
          <ul className="stats-list">
            {topSpecies.map(([species, count]) => (
              <li key={species} className="stats-list-item">
                <span className="species-name">{species}</span>
                <span className="species-badge">{count} entities</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
