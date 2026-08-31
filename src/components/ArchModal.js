import React from "react";

export default function ArchModal({ archData, onClose }) {
  if (!archData) return null;

  return (
    <div className="hud-overlay" onClick={onClose}>
      <div className="hud-modal-container arch-modal-container" onClick={(e) => e.stopPropagation()}>
        <span className="reticle-mark mark-tl" aria-hidden="true"></span>
        <span className="reticle-mark mark-tr" aria-hidden="true"></span>
        <span className="reticle-mark mark-bl" aria-hidden="true"></span>
        <span className="reticle-mark mark-br" aria-hidden="true"></span>

        <button className="hud-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <header className="arch-modal-header">
          <span className="hud-sys-tag">ARCHITECTURE DIAGRAM VIEW</span>
          <h2 className="arch-modal-title">{archData.title}</h2>
          <p className="arch-modal-desc">{archData.desc}</p>
        </header>

        <div className="arch-modal-image-wrapper">
          <img src={archData.src} alt={archData.title} className="arch-full-image" />
        </div>

        <footer className="arch-modal-footer">
          <span className="hud-ref-code">DIAGRAM ID: {archData.src}</span>
          <button className="hud-modal-btn" onClick={onClose}>
            [ CLOSE VIEW ]
          </button>
        </footer>
      </div>
    </div>
  );
}
