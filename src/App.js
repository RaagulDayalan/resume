import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const SKILLS = [
  "Amazon Web Services (AWS)", "Terraform", "CloudFormation", "CI/CD",
  "AWS SDK", "Docker", "Azure", "Git", "Jenkins", "GitHub Actions",
  "Nginx", "Step Functions", "CloudWatch", "Grafana", "Prometheus",
  "SonarQube", "JMeter", "Postman", "Node.js", "Python", "Bash",
  "MySQL", "DynamoDB", "Redis", "Linux", "Shell Scripting",
];

const NAV = [
  { id: "about",           label: "About" },
  { id: "experience",      label: "Experience" },
  { id: "education",       label: "Education" },
  { id: "certifications",  label: "Certifications" },
  { id: "skills",          label: "Skills" },
  { id: "contact",         label: "Contact" },
  { id: "architecture",    label: "Architectures" },
];

export default function App() {
  const [active, setActive]           = useState("about");
  const [showModal, setShowModal]     = useState(false);
  const [archModal, setArchModal]     = useState("");
  const sectionsRef                   = useRef({});

  // const imagesContext = require.context("../public/logos", false, /\.(png|jpe?g|svg)$/);
  // const logos = imagesContext.keys().map(imagesContext);

  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      sessionStorage.setItem("visited", "true");
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    Object.values(sectionsRef.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    sectionsRef.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const setRef = (id) => (el) => { sectionsRef.current[id] = el; };

  return (
    <div className="site">

      {/* ── Arch modal ── */}
      {archModal && (
        <div className="overlay" onClick={() => setArchModal("")}>
          <div className="arch-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setArchModal("")}>✕</button>
            <img src={archModal} alt="Architecture" className="arch-full" />
          </div>
        </div>
      )}

      {/* ── Profile modal ── */}
      {showModal && (
        <div className="overlay" onClick={() => setShowModal(false)}>
          <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>

            <div className="modal-top">
              <img src="raagul-img.jpeg" alt="Raagul D" className="modal-avatar" />
              <div>
                <h2 className="modal-name">Raagul D</h2>
                <p className="modal-title">Cloud &amp; DevOps Engineer</p>
              </div>
            </div>

            <div className="modal-badges">
              <span className="badge badge-blue">AWS Certified (92%)</span>
              <span className="badge badge-gray">4+ Years</span>
              <span className="badge badge-gray">Chennai, India</span>
            </div>

            <div className="modal-info-rows">
              <div className="modal-info-row">
                <span className="modal-info-label">Current</span>
                <span className="modal-info-val">Influx — DevOps Engineer</span>
              </div>
              <div className="modal-info-row">
                <span className="modal-info-label">Phone</span>
                <a className="modal-info-val" href="tel:+919791103580">+91 97911 03580</a>
              </div>
              <div className="modal-info-row">
                <span className="modal-info-label">Email</span>
                <a className="modal-info-val" href="mailto:raagul.d@gmail.com">raagul.d@gmail.com</a>
              </div>
              <div className="modal-info-row">
                <span className="modal-info-label">LinkedIn</span>
                <a className="modal-info-val" href="https://linkedin.com/in/raagul-deenadayalan/" target="_blank" rel="noreferrer">raagul-deenadayalan ↗</a>
              </div>
            </div>

            <div className="modal-actions">
              <a href="resume.pdf" download className="dl-btn">↓ Download Resume</a>
              <button className="modal-view-btn" onClick={() => setShowModal(false)}>View full profile</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Top bar ── */}
      <header className="topbar">
        <button className="identity" onClick={() => setShowModal(true)}>
          <img src="raagul-img.jpeg" alt="Raagul D" className="avatar" />
          <div>
            <span className="identity-name">Raagul D</span>
            <span className="identity-role">Cloud · DevOps Engineer</span>
          </div>
        </button>

        <nav className="nav">
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-item${active === id ? " nav-active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <a href="resume.pdf" download className="dl-btn-sm">↓ Resume</a>
      </header>

      {/* ── Page ── */}
      <div className="page">

        {/* ── About ── */}
        <section id="about" ref={setRef("about")} className="section">
          <div className="section-label">About</div>
          <div className="section-body">
            <h1 className="hero-name">Raagul D</h1>
            <p className="hero-role">Cloud &amp; DevOps Engineer</p>
            <p className="about-bio">
              4+ years managing cloud infrastructure for clients across diverse industries.
              I specialise in reliability, security, performance, and cost-efficiency — working across
              Node.js, Python, and MySQL to architect scalable, automated solutions that cut
              operational costs by up to 40%. Every system is built to industry best practices
              and tuned to each client's exact requirements.
            </p>
            <div className="hero-badges">
              <span className="badge badge-blue">AWS Certified</span>
              <span className="badge badge-gray">4+ Years</span>
              <span className="badge badge-gray">Chennai, India</span>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Experience ── */}
        <section id="experience" ref={setRef("experience")} className="section">
          <div className="section-label">Experience</div>
          <div className="section-body">
            <div className="job-card">
              <div className="job-header">
                <div>
                  <h3 className="job-company">Influx</h3>
                  <p className="job-meta">DevOps Engineer · Chennai, India</p>
                </div>
                <span className="job-date">Nov 2024 – Present</span>
              </div>
              <ul className="job-list">
                <li>Automated infrastructure provisioning with AWS SDKs, Python, Lambda, and Step Functions — reduced manual workload by ~40%.</li>
                <li>Designed an IP blacklisting solution with a 30-minute rolling rate limiter, cutting malicious traffic incidents by ~25%.</li>
                <li>Implemented CI/CD pipelines with SonarQube quality gates, improving code reliability across deployments.</li>
                <li>Built reusable Terraform modules for client infrastructure, reducing onboarding from days to hours.</li>
                <li>Unified observability across AWS accounts using Grafana, Prometheus, and CloudWatch.</li>
                <li>Migrated stack from Jenkins + EC2 to CodeBuild + Lambda + S3/CloudFront, cutting operational cost by 50%.</li>
              </ul>
            </div>

            <div className="job-card">
              <div className="job-header">
                <div>
                  <h3 className="job-company">NCOMPASS</h3>
                  <p className="job-meta">DevOps Engineer · Chennai, India</p>
                </div>
                <span className="job-date">Aug 2022 – Oct 2024</span>
              </div>
              <ul className="job-list">
                <li>Maintained and optimised AWS cloud infrastructure for multiple clients, achieving high availability and enhanced security.</li>
                <li>Built scalable automation tooling with Node.js, Python, and AWS SDK, significantly streamlining operations.</li>
                <li>Drove a 30% decrease in operational expenses through targeted cost-reduction strategies.</li>
                <li>Identified and resolved system bottlenecks via JMeter performance monitoring.</li>
                <li>Orchestrated disaster recovery with CloudFormation and Terraform automated deployments.</li>
                <li>Reduced deployment time by 50% using Blue/Green deployment strategies.</li>
                <li>Managed AWS CloudWatch monitoring and logging for robust system visibility.</li>
                <li>Led a team of three maintaining a SaaS platform infrastructure supporting 300+ tenants.</li>
                <li>Improved code quality and reduced vulnerabilities by rolling out SonarQube quality gates.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Education ── */}
        <section id="education" ref={setRef("education")} className="section">
          <div className="section-label">Education</div>
          <div className="section-body">
            {[
              { school: "Anna University — MSEC", degree: "B.E. Electronics and Communication", period: "Aug 2018 – Jul 2022", score: "CGPA 8.17 / 10" },
              { school: "Velammal Matric. Higher Secondary", degree: "12th Standard", period: "Jun 2017 – Apr 2018", score: "88.41%" },
              { school: "Velammal Matric. Higher Secondary", degree: "10th Standard", period: "Jun 2015 – Apr 2016", score: "91.6%" },
            ].map(({ school, degree, period, score }) => (
              <div key={school + degree} className="edu-row">
                <div className="edu-left">
                  <p className="edu-school">{school}</p>
                  <p className="edu-degree">{degree}</p>
                </div>
                <div className="edu-right">
                  <p className="edu-period">{period}</p>
                  <p className="edu-score">{score}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* ── Certifications ── */}
        <section id="certifications" ref={setRef("certifications")} className="section">
          <div className="section-label">Certifications</div>
          <div className="section-body">
            <div className="cert-grid">
              {[
                { name: "AWS Certified Solutions Architect – Associate", detail: "Scored 92%", highlight: true },
                { name: "AWS CloudFormation Master Class", detail: "Udemy" },
                { name: "AWS Cloud Practitioner", detail: "Udemy" },
                { name: "Introduction to Machine Learning", detail: "" },
                { name: "Python Skill Certification", detail: "HackerRank" },
                { name: "MySQL Skill Certification", detail: "HackerRank" },
              ].map(({ name, detail, highlight }) => (
                <div key={name} className={`cert-card${highlight ? " cert-highlight" : ""}`}>
                  <span className="cert-icon">✦</span>
                  <div>
                    <p className="cert-name">{name}</p>
                    {detail && <p className="cert-detail">{detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Skills ── */}
        <section id="skills" ref={setRef("skills")} className="section">
          <div className="section-label">Skills</div>
          <div className="section-body">
            <div className="chips-wrap">
              {SKILLS.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
            
          </div>
        </section>

        <hr className="divider" />

        {/* ── Contact ── */}
        <section id="contact" ref={setRef("contact")} className="section">
          <div className="section-label">Contact</div>
          <div className="section-body">
            <div className="contact-grid">
              {[
                { icon: "📍", label: "Location", value: "Chennai, India", href: null },
                { icon: "📞", label: "Phone", value: "+91 97911 03580", href: "tel:+919791103580" },
                { icon: "✉️", label: "Email", value: "raagul.d@gmail.com", href: "mailto:raagul.d@gmail.com" },
                { icon: "💬", label: "WhatsApp", value: "+91 97911 03580", href: "https://wa.me/919791103580" },
                { icon: "🔗", label: "LinkedIn", value: "raagul-deenadayalan", href: "https://linkedin.com/in/raagul-deenadayalan/" },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="contact-row">
                  <span className="contact-icon">{icon}</span>
                  <div>
                    <p className="contact-label">{label}</p>
                    {href
                      ? <a className="contact-value" href={href} target="_blank" rel="noreferrer">{value}</a>
                      : <p className="contact-value">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Architecture ── */}
        <section id="architecture" ref={setRef("architecture")} className="section">
          <div className="section-label">Architectures</div>
          <div className="section-body">
            {[
              { src: "infra-architecture.drawio.png", title: "Phonex — B2B SaaS Infrastructure", desc: "Multi-tenant cloud architecture for Phonex's B2B SaaS platform." },
              { src: "influx-architecure.jpg",        title: "Influx — SaaS Infrastructure",    desc: "Serverless-first architecture for Influx, migrated from EC2 to Lambda + S3/CloudFront." },
            ].map(({ src, title, desc }) => (
              <div key={src} className="arch-card" onClick={() => setArchModal(src)}>
                <img src={src} alt={title} className="arch-thumb" />
                <div className="arch-info">
                  <p className="arch-title">{title}</p>
                  <p className="arch-desc">{desc}</p>
                  <span className="arch-cta">View full diagram →</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Raagul D · Built with React</p>
          <a href="resume.pdf" download className="dl-btn-sm">↓ Download Resume</a>
        </footer>

      </div>
    </div>
  );
}
