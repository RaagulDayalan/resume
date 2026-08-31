import React, { useState, useEffect } from "react";

export default function HeaderChrome({ navItems, activeSection, scrollTo, onOpenProfile }) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      const secs = String(now.getSeconds()).padStart(2, "0");
      setTimeStr(`${hrs}:${mins}:${secs}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hud-chrome-header">
      {/* Top Bar Chrome */}
      <div className="hud-bar top-hud-bar">
        <div className="hud-bar-left">
          <button className="hud-identity-trigger" onClick={onOpenProfile} title="View Quick Profile">
            <span className="hud-chevron">»</span>
            <span className="hud-name">RAAGUL D</span>
            <span className="hud-status-dot"></span>
            <span className="hud-role-tag">AWS · DEVOPS</span>
          </button>
        </div>

        <nav className="hud-nav">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              className={`hud-nav-item ${activeSection === id ? "hud-nav-active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              <span className="hud-nav-prefix">/</span>
              {label}
            </button>
          ))}
        </nav>

        <div className="hud-bar-right">
          <span className="hud-coords" title="Chennai, India Coordinates">
            13.0827° N, 80.2707° E
          </span>
          <span className="hud-clock">{timeStr || "00:00:00"}</span>
          <a href="resume.pdf" download className="hud-dl-btn">
            ↓ RESUME
          </a>
        </div>
      </div>
    </header>
  );
}
