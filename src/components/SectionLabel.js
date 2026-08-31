import React from "react";

export default function SectionLabel({ sectionNum, path, title }) {
  return (
    <div className="section-label-block">
      <div className="section-label-header">
        <span className="section-num">{sectionNum}</span>
        <span className="section-path-text">{path}</span>
        <span className="section-title-badge">{title}</span>
      </div>

      <div className="hud-divider">
        <span className="hud-divider-lead">» » »</span>
        <span className="hud-divider-dots"></span>
        <span className="hud-divider-cap">∆</span>
      </div>
    </div>
  );
}
