import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <header className="top-bar">
        <img
          className="profile-img"
          src="raagul-img.jpeg"
          alt="Profile pic"
          onClick={toggleModal}
        />
        <div className="logo" onClick={toggleModal}>
          <h1>RAAGUL D</h1>
          <h2>Cloud Engineer, DevOps Engineer</h2>
        </div>
        <nav className="nav-buttons">
          <button
            className={activeTab === "about" ? "active" : ""}
            onClick={() => handleTabChange("about")}
          >
            ABOUT
          </button>
          <button
            className={activeTab === "experience" ? "active" : ""}
            onClick={() => handleTabChange("experience")}
          >
            WORK EXPERIENCE
          </button>
          <button
            className={activeTab === "education" ? "active" : ""}
            onClick={() => handleTabChange("education")}
          >
            EDUCATION
          </button>
          <button
            className={activeTab === "certifications" ? "active" : ""}
            onClick={() => handleTabChange("certifications")}
          >
            CERTIFICATIONS
          </button>
          <button
            className={activeTab === "skills" ? "active" : ""}
            onClick={() => handleTabChange("skills")}
          >
            SKILLS
          </button>
          <button
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => handleTabChange("contact")}
          >
            CONTACT
          </button>
          <a
            href="resume.pdf"
            download="resume.pdf"
            className="download-button"
          >
            <img
              src="icons8-download-symbol-24.png"
              alt="download"
              className="download-icon"
            />
            RESUME
          </a>
          <button
            className={activeTab === "architecture" ? "active" : ""}
            onClick={() => handleTabChange("architecture")}
          >
            ARCHITECTURES
          </button>
        </nav>
      </header>

      <main className="content">
        {activeTab === "about" && (
          <section className="about">
            <h2>About Me</h2>
            <p>
              As a Cloud Infrastructure Engineer at NCompass, I manage
              infrastructure for our client Phonex, a B2B SaaS provider. With
              more than two years of experience, I specialize in optimizing the
              reliability, security, cost-efficiency, performance, and
              monitoring of cloud environments. I architect and maintain robust,
              scalable solutions tailored to client needs while adhering to
              industry best practices.
            </p>
          </section>
        )}

        {activeTab === "experience" && (
          <section className="experience">
            <h2>Work Experience</h2>
            <div className="job">
              <h3>NCOMPASS - Cloud Engineer, DevOps Engineer</h3>
              <p className="job-details">Chennai, India | Aug 2022 – Present</p>
              <ul>
                <li>
                  Maintained and optimized AWS cloud infrastructure for multiple
                  clients, achieving high availability and enhanced security
                  across diverse environments.
                </li>
                <li>
                  Developed and deployed scalable automation tools using
                  Node.js, Python, and AWS SDK, significantly streamlining
                  operations and improving efficiency.
                </li>
                <li>
                  Implemented cost reduction strategies that led to a 30%
                  decrease in operational expenses, enhancing budget management
                  for clients.
                </li>
                <li>
                  Monitored system performance using JMeter, identifying and
                  addressing potential bottlenecks to maintain optimal system
                  performance.
                </li>
                <li>
                  Contributed to disaster recovery planning and execution,
                  including orchestrating automated deployments with
                  CloudFormation templates and Terraform.
                </li>
                <li>
                  Reduced deployment time by 50% by implementing performance
                  optimization measures and employing Blue/Green Deployment
                  strategies, which significantly improved overall deployment
                  efficiency.
                </li>
                <li>
                  Established and managed comprehensive monitoring and logging
                  solutions using AWS CloudWatch, ensuring robust system
                  visibility and quick issue resolution.
                </li>
                <li>
                  Led a team of three in the maintenance and management of a
                  SaaS platform infrastructure supporting over 300 tenants,
                  ensuring high reliability and scalability.
                </li>
                <li>
                  Enhanced coding standards and security practices by
                  implementing a quality gateway with Sonar, resulting in
                  improved code quality and reduced vulnerabilities.
                </li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === "education" && (
          <section className="education">
            <h2>Education</h2>
            <div className="degree">
              <h3>ANNA UNIVERSITY</h3>
              <p>Bachelor of Engineering in Electronics and Communication</p>
              <p>Chennai, India | Aug 2018 - Jul 2022</p>
              <p>CGPA: 8.18</p>
            </div>
          </section>
        )}

        {activeTab === "certifications" && (
          <>
            <section className="certifications">
              <h2>Certifications</h2>
              <ul>
                <li>
                  AWS Certified Solutions Architect - Associate (Scored 91%)
                </li>
                <li>AWS CloudFormation Master Class</li>
                <li>AWS Certified Cloud Practitioner</li>
                <li>Introduction to Machine Learning</li>
                <li>Skill Certifications - Python, MySQL (HackerRank)</li>
              </ul>
            </section>
          </>
        )}
        {activeTab === "skills" && (
          <section className="skills">
            <h2>SKILLS:</h2>
            <div className="skills-container">
              {[
                "Amazon Web Services (AWS)",
                "Terraform",
                "CloudFormation",
                "CI/CD",
                "AWS SDK",
                "CLI",
                "Docker",
                "Node.js",
                "Python",
                "MySQL",
                "Linux",
                "DynamoDB",
                "Redis",
                "Git",
                "Postman",
                "JMeter",
                "Sonar",
                "CloudWatch",
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
        {activeTab === "contact" && (
          <section className="contact">
            <h2>Contact Information</h2>
            <p>Current Location: Chennai, India</p>
            <p>Phone: +91 9791103580</p>
            <p>WhatsApp: +91 9791103580</p>
            <p>
              Email: <a href="mailto:raagul.d@gmail.com">raagul.d@gmail.com</a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/raagul-deenadayalan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
          </section>
        )}

        {activeTab === "architecture" && (
          <section className="architecture">
            <h2>Web Architecture</h2>
            <ul>
              <li>UI application on S3 served by CloudFront</li>
              <li>
                Main backend: Containerized Spring Boot application running on
                ECS, fronted by private NLB and provided by ASG
              </li>
              <li>Secondary backend: Node.js and Python Lambdas</li>
              <li>Database: RDS-backed MySQL server on high-security server</li>
              <li>Caching: Elastic Cache Redis</li>
              <li>
                APIs: Provided by API Gateway integrated with Cognito authorizer
              </li>
              <li>Secondary private gateway for internal API-level caching</li>
            </ul>
            <img
              src="infra-architecture.drawio.png"
              alt="Infrastructure Architecture"
              className="architecture-img"
            />
          </section>
        )}
      </main>

      {showModal && (
        <div className="modal" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <img
              src="raagul-img.jpeg"
              alt="Large Profile"
              className="large-img"
            />
            <h2>RAAGUL D</h2>
            <h3>Cloud Engineer, DevOps Engineer</h3>
            <p>AWS Certified</p>
            <h4>SKILLS:</h4>
            <div className="skills-container">
              {[
                "Amazon Web Services (AWS)",
                "Terraform",
                "CloudFormation",
                "CI/CD",
                "AWS SDK",
                "CLI",
                "Docker",
                "Node.js",
                "Python",
                "MySQL",
                "Linux",
                "DynamoDB",
                "Redis",
                "Git",
                "Postman",
                "JMeter",
                "Sonar",
                "CloudWatch",
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            <div className="modal-contact">
              <p>Phone: +91 9791103580</p>
              <p>
                Email:{" "}
                <a href="mailto:raagul.d@gmail.com">raagul.d@gmail.com</a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/raagul-deenadayalan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
            <a
              href="resume.pdf"
              download="resume.pdf"
              className="download-button"
            >
              <img
                src="icons8-download-symbol-24.png"
                alt="download"
                className="download-icon"
              />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
