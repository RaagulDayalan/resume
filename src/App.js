import React, { useEffect, useRef, useState } from "react";

import HeaderChrome from "./components/HeaderChrome";
import SectionLabel from "./components/SectionLabel";
import RoleCard from "./components/RoleCard";
import ArchModal from "./components/ArchModal";
import ProfileModal from "./components/ProfileModal";

import "./App.css";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
  { id: "architecture", label: "Architectures" },
];

const SKILL_CATEGORIES = [
  {
    category: "// CLOUD & INFRASTRUCTURE",
    skills: ["Amazon Web Services (AWS)", "Terraform", "CloudFormation", "Docker", "Azure", "Nginx", "Linux", "Shell Scripting"]
  },
  {
    category: "// CI/CD & AUTOMATION",
    skills: ["CI/CD", "Jenkins", "GitHub Actions", "AWS SDK", "Step Functions"]
  },
  {
    category: "// OBSERVABILITY & METRICS",
    skills: ["CloudWatch", "Grafana", "Prometheus", "SonarQube", "JMeter", "Postman"]
  },
  {
    category: "// LANGUAGES & DATABASES",
    skills: ["Node.js", "Python", "Bash", "MySQL", "DynamoDB", "Redis"]
  }
];

const EXPERIENCES = [
  {
    company: "Influx Worldwide",
    role: "DevOps Engineer",
    location: "Chennai, India",
    period: "Nov 2024 – Present",
    status: "active",
    refCode: "inflx-2024",
    bullets: [
      "Automated infrastructure provisioning with AWS SDKs, Python, Lambda, and Step Functions — reduced manual operational workload by ~40%.",
      "Designed an IP blacklisting solution with a 30-minute rolling rate limiter, cutting malicious traffic incidents by ~25%.",
      "Implemented CI/CD pipelines with SonarQube quality gates, improving overall code reliability across production deployments.",
      "Built reusable Terraform modules for client infrastructure, reducing tenant onboarding from days to hours.",
      "Unified observability across multi-account AWS architectures using Grafana, Prometheus, and CloudWatch.",
      "Migrated stack from Jenkins + EC2 to CodeBuild + Lambda + S3/CloudFront, slashing monthly infrastructure costs by 50%."
    ]
  },
  {
    company: "NCompass",
    role: "DevOps Engineer",
    location: "Chennai, India",
    period: "Aug 2022 – Oct 2024",
    status: "archive",
    refCode: "ncmp-2022",
    bullets: [
      "Maintained and optimized AWS cloud infrastructure for multiple enterprise clients, achieving 99.9% uptime availability.",
      "Built scalable automation tooling with Node.js, Python, and AWS SDK, significantly streamlining daily cloud operations.",
      "Drove a 30% overall decrease in operational expenses through targeted cloud resource optimization and right-sizing.",
      "Identified and resolved bottleneck performance issues using JMeter stress and load testing.",
      "Orchestrated disaster recovery protocols with CloudFormation and Terraform automated infrastructure deployments.",
      "Reduced deployment downtime by 50% by introducing Blue/Green deployment strategies.",
      "Led a team of 3 DevOps engineers maintaining SaaS platform infrastructure supporting 300+ active tenants."
    ]
  }
];

const CERTIFICATIONS = [
  { name: "AWS Certified Solutions Architect – Associate", detail: "Score: 92%", highlight: true, date: "VERIFIED" },
  { name: "AWS CloudFormation Master Class", detail: "Udemy Certified", highlight: false, date: "COMPLETED" },
  { name: "AWS Cloud Practitioner", detail: "Udemy Certified", highlight: false, date: "COMPLETED" },
  { name: "Introduction to Machine Learning", detail: "Technical Specialization", highlight: false, date: "COMPLETED" },
  { name: "Python Skill Certification", detail: "HackerRank Verified", highlight: false, date: "VERIFIED" },
  { name: "MySQL Skill Certification", detail: "HackerRank Verified", highlight: false, date: "VERIFIED" },
];

const EDUCATIONS = [
  { school: "Anna University — MSEC", degree: "B.E. Electronics and Communication Engineering", period: "Aug 2018 – Jul 2022", score: "CGPA 8.17 / 10" },
  { school: "Velammal Matric. Higher Secondary School", degree: "12th Standard (Higher Secondary)", period: "Jun 2017 – Apr 2018", score: "88.41%" },
  { school: "Velammal Matric. Higher Secondary School", degree: "10th Standard (SSLC)", period: "Jun 2015 – Apr 2016", score: "91.60%" },
];

const ARCHITECTURES = [
  {
    src: "infra-architecture.drawio.png",
    title: "Phonex — B2B SaaS Infrastructure",
    desc: "Multi-tenant AWS cloud architecture designed for Phonex's B2B SaaS platform with VPC peering, Terraform modularity, and isolated RDS instances."
  },
  {
    src: "influx-architecure.jpg",
    title: "Influx — Serverless SaaS Architecture",
    desc: "Serverless-first event-driven architecture migrated from legacy EC2 + Jenkins to AWS CodeBuild, Lambda, S3, CloudFront, and Step Functions."
  }
];

export default function App() {
  const [active, setActive] = useState("about");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [archModalData, setArchModalData] = useState(null);
  const sectionsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -50% 0px" }
    );

    Object.values(sectionsRef.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    sectionsRef.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const setRef = (id) => (el) => {
    sectionsRef.current[id] = el;
  };

  return (
    <div className="hud-app-wrapper">
      {/* ── Fixed Top Status Chrome ── */}
      <HeaderChrome
        navItems={NAV}
        activeSection={active}
        scrollTo={scrollTo}
        onOpenProfile={() => setShowProfileModal(true)}
      />

      {/* ── Modals ── */}
      <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
      <ArchModal archData={archModalData} onClose={() => setArchModalData(null)} />

      {/* ── Main Container ── */}
      <main className="hud-main-content">
        
        {/* ── 00. ABOUT ── */}
        <section id="about" ref={setRef("about")} className="hud-section">
          <SectionLabel sectionNum="§ 00.a" path="~ / devops / bio.md" title="STATEMENT" />

          <div className="hud-hero-box">
            <span className="reticle-mark mark-tl"></span>
            <span className="reticle-mark mark-tr"></span>
            <span className="reticle-mark mark-bl"></span>
            <span className="reticle-mark mark-br"></span>

            <div className="hero-header-line">
              <div>
                <h1 className="hero-name-title">RAAGUL D</h1>
                <p className="hero-subhead">Cloud &amp; DevOps Engineer</p>
              </div>
              <div className="hero-quick-badges">
                <span className="hud-tag-badge accent-border">AWS Solutions Architect (92%)</span>
                <span className="hud-tag-badge">4+ Years Exp</span>
                <span className="hud-tag-badge">Chennai, IN</span>
              </div>
            </div>

            <div className="hud-statement-body">
              <p>
                I am a <strong>Cloud &amp; DevOps Engineer</strong> with 4+ years of experience architecting, automating, and scaling cloud infrastructure for enterprise platforms and multi-tenant SaaS systems.
              </p>
              <p>
                Specializing in <strong>AWS, Terraform, CI/CD pipelines, Docker, Python, Node.js, and unified observability</strong> (Grafana/Prometheus/CloudWatch). I focus on designing highly resilient systems that cut operational overhead and lower cloud expenditure by up to <strong>40%–50%</strong> without sacrificing uptime or performance.
              </p>
              <p>
                Whether migrating monolithic applications to serverless event-driven architectures or setting up zero-downtime Blue/Green deployments with automated SonarQube quality gates, every solution is engineered for long-term scalability and strict security standards.
              </p>
            </div>

            <div className="hero-actions-row">
              <a href="mailto:raagul.d@gmail.com" className="hud-btn-primary">
                [ CONTACT DIRECTLY ]
              </a>
              <button className="hud-btn-secondary" onClick={() => setShowProfileModal(true)}>
                [ VIEW HUD SPEC ]
              </button>
              <a href="https://linkedin.com/in/raagul-deenadayalan/" target="_blank" rel="noreferrer" className="hud-btn-secondary">
                [ LINKEDIN ↗ ]
              </a>
            </div>
          </div>
        </section>

        {/* ── 01. EXPERIENCE ── */}
        <section id="experience" ref={setRef("experience")} className="hud-section">
          <SectionLabel sectionNum="§ 01.a" path="~ / devops / experience.md" title="ROLES" />

          <div className="hud-roles-list">
            {EXPERIENCES.map((exp) => (
              <RoleCard key={exp.company + exp.period} {...exp} />
            ))}
          </div>
        </section>

        {/* ── 02. EDUCATION ── */}
        <section id="education" ref={setRef("education")} className="hud-section">
          <SectionLabel sectionNum="§ 02.a" path="~ / devops / education.md" title="ACADEMICS" />

          <div className="hud-edu-grid">
            {EDUCATIONS.map(({ school, degree, period, score }) => (
              <div key={school + degree} className="hud-edu-card">
                <span className="reticle-mark mark-tl"></span>
                <span className="reticle-mark mark-tr"></span>
                <span className="reticle-mark mark-bl"></span>
                <span className="reticle-mark mark-br"></span>

                <div className="edu-top-row">
                  <div>
                    <h4 className="edu-school-name">{school}</h4>
                    <p className="edu-degree-title">{degree}</p>
                  </div>
                  <span className="edu-score-chip">{score}</span>
                </div>
                <div className="edu-bottom-row">
                  <span className="edu-period-tag">PERIOD: {period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 03. CERTIFICATIONS ── */}
        <section id="certifications" ref={setRef("certifications")} className="hud-section">
          <SectionLabel sectionNum="§ 03.a" path="~ / devops / certifications.md" title="CREDENTIALS" />

          <div className="hud-cert-grid">
            {CERTIFICATIONS.map(({ name, detail, highlight, date }) => (
              <div key={name} className={`hud-cert-card ${highlight ? "cert-highlight" : ""}`}>
                <span className="cert-glyph">✦</span>
                <div className="cert-content">
                  <div className="cert-name-line">{name}</div>
                  {detail && <div className="cert-detail-line">{detail}</div>}
                </div>
                <span className="cert-status-tag">{date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 04. SKILLS ── */}
        <section id="skills" ref={setRef("skills")} className="hud-section">
          <SectionLabel sectionNum="§ 04.a" path="~ / devops / skills.md" title="STACK" />

          <div className="hud-skills-categories">
            {SKILL_CATEGORIES.map(({ category, skills }) => (
              <div key={category} className="hud-skill-group">
                <div className="skill-category-title">{category}</div>
                <div className="skill-chips-wrap">
                  {skills.map((skill) => (
                    <span key={skill} className="hud-chip">
                      <span className="chip-prefix">#</span> {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 05. CONTACT ── */}
        <section id="contact" ref={setRef("contact")} className="hud-section">
          <SectionLabel sectionNum="§ 05.a" path="~ / devops / contact.md" title="CONNECT" />

          <div className="hud-contact-box">
            <span className="reticle-mark mark-tl"></span>
            <span className="reticle-mark mark-tr"></span>
            <span className="reticle-mark mark-bl"></span>
            <span className="reticle-mark mark-br"></span>

            <div className="hud-contact-grid">
              {[
                { label: "LOCATION", val: "Chennai, Tamil Nadu, India", href: null, icon: "📍" },
                { label: "PHONE", val: "+91 97911 03580", href: "tel:+919791103580", icon: "📞" },
                { label: "EMAIL", val: "raagul.d@gmail.com", href: "mailto:raagul.d@gmail.com", icon: "✉️" },
                { label: "WHATSAPP", val: "+91 97911 03580", href: "https://wa.me/919791103580", icon: "💬" },
                { label: "LINKEDIN", val: "raagul-deenadayalan", href: "https://linkedin.com/in/raagul-deenadayalan/", icon: "🔗" },
              ].map(({ label, val, href, icon }) => (
                <div key={label} className="contact-item-row">
                  <span className="contact-icon-col">{icon}</span>
                  <div className="contact-info-col">
                    <span className="contact-label-tag">{label}</span>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="contact-val-link">
                        {val} <span className="arrow-icon">↗</span>
                      </a>
                    ) : (
                      <span className="contact-val-text">{val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. ARCHITECTURES ── */}
        <section id="architecture" ref={setRef("architecture")} className="hud-section">
          <SectionLabel sectionNum="§ 06.a" path="~ / devops / architecture.md" title="DIAGRAMS" />

          <div className="hud-arch-grid">
            {ARCHITECTURES.map((arch) => (
              <div key={arch.src} className="hud-arch-card" onClick={() => setArchModalData(arch)}>
                <span className="reticle-mark mark-tl"></span>
                <span className="reticle-mark mark-tr"></span>
                <span className="reticle-mark mark-bl"></span>
                <span className="reticle-mark mark-br"></span>

                <div className="arch-thumb-box">
                  <img src={arch.src} alt={arch.title} className="arch-thumb-img" />
                </div>
                <div className="arch-card-info">
                  <h4 className="arch-card-title">{arch.title}</h4>
                  <p className="arch-card-desc">{arch.desc}</p>
                  <span className="arch-card-cta">[ CLICK TO ENLARGE DIAGRAM → ]</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="hud-footer">
          <div className="footer-left">
            <span>© {new Date().getFullYear()} RAAGUL D · CLOUD &amp; DEVOPS ENGINEER</span>
            <span className="footer-sys">SYS_STATUS: ONLINE [200 OK]</span>
          </div>
          <div className="footer-right">
            <a href="resume.pdf" download className="hud-dl-btn">
              ↓ DOWNLOAD RESUME
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}
