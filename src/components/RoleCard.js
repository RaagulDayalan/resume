import React from "react";

export default function RoleCard({ company, role, location, period, status, refCode, bullets }) {
  const isActive = status === "active";

  return (
    <article className={`hud-role-card ${isActive ? "hud-role-active" : "hud-role-archive"}`}>
      {/* HUD Reticle Reticle Corner Markers */}
      <span className="reticle-mark mark-tl" aria-hidden="true"></span>
      <span className="reticle-mark mark-tr" aria-hidden="true"></span>
      <span className="reticle-mark mark-bl" aria-hidden="true"></span>
      <span className="reticle-mark mark-br" aria-hidden="true"></span>

      <header className="hud-card-header">
        <div className="hud-card-title-row">
          <h3 className="hud-company-title">
            {company}
            <span className="hud-location-tag">· {location}</span>
          </h3>
          <span className="hud-date-range">{period}</span>
        </div>

        <div className="hud-card-role-row">
          <p className="hud-role-name">{role}</p>
          <span className={`hud-status-badge ${isActive ? "badge-active" : "badge-archive"}`}>
            <span className="hud-badge-dot"></span>
            [{status}]
          </span>
        </div>
      </header>

      <div className="hud-card-divider">
        <span className="divider-dots"></span>
      </div>

      <ul className="hud-bullet-list">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="hud-bullet-item">
            <span className="bullet-prefix">›</span>
            <span className="bullet-text">{bullet}</span>
          </li>
        ))}
      </ul>

      <footer className="hud-card-footer">
        <span className="hud-ref-code">REF: {refCode}</span>
        <span className="hud-sys-tag">STATE: VERIFIED</span>
      </footer>
    </article>
  );
}
