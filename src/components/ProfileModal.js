import React from "react";

export default function ProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="hud-overlay" onClick={onClose}>
      <div className="hud-modal-container profile-modal-container" onClick={(e) => e.stopPropagation()}>
        <span className="reticle-mark mark-tl" aria-hidden="true"></span>
        <span className="reticle-mark mark-tr" aria-hidden="true"></span>
        <span className="reticle-mark mark-bl" aria-hidden="true"></span>
        <span className="reticle-mark mark-br" aria-hidden="true"></span>

        <button className="hud-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="hud-modal-top">
          <img src="raagul-img.jpeg" alt="Raagul D" className="hud-modal-avatar" />
          <div>
            <h2 className="hud-modal-name">Raagul D</h2>
            <p className="hud-modal-title">Cloud &amp; DevOps Engineer</p>
            <span className="hud-status-badge badge-active" style={{ marginTop: "6px", display: "inline-flex" }}>
              <span className="hud-badge-dot"></span>
              [AVAILABLE FOR ROLES]
            </span>
          </div>
        </div>

        <div className="hud-modal-badges">
          <span className="hud-tag-badge">AWS Solutions Architect (92%)</span>
          <span className="hud-tag-badge">4+ Years Experience</span>
          <span className="hud-tag-badge">Chennai, TN, India</span>
        </div>

        <div className="hud-modal-rows">
          <div className="hud-modal-row">
            <span className="row-label">CURRENT ROLE</span>
            <span className="row-val">Influx — DevOps Engineer</span>
          </div>
          <div className="hud-modal-row">
            <span className="row-label">PHONE</span>
            <a className="row-val row-link" href="tel:+919791103580">
              +91 97911 03580
            </a>
          </div>
          <div className="hud-modal-row">
            <span className="row-label">EMAIL</span>
            <a className="row-val row-link" href="mailto:raagul.d@gmail.com">
              raagul.d@gmail.com
            </a>
          </div>
          <div className="hud-modal-row">
            <span className="row-label">LINKEDIN</span>
            <a
              className="row-val row-link"
              href="https://linkedin.com/in/raagul-deenadayalan/"
              target="_blank"
              rel="noreferrer"
            >
              raagul-deenadayalan ↗
            </a>
          </div>
        </div>

        <div className="hud-modal-actions">
          <a href="resume.pdf" download className="hud-btn-primary">
            ↓ DOWNLOAD RESUME
          </a>
          <button className="hud-modal-btn" onClick={onClose}>
            [ DISMISS ]
          </button>
        </div>
      </div>
    </div>
  );
}
