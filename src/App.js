import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [showModal, setShowModal] = useState(false);
  const [showArchitecture, setShowArchitecture] = useState(false);
  // const [architectPopup, setArchitectPopup] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const architecureImgClicked = (WHATtOpOP) => {
    setShowArchitecture(WHATtOpOP);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const imagesContext = require.context(
    "../public/logos",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const images = imagesContext.keys().map(imagesContext);
  window.onload = () => {
    const reloading = sessionStorage.getItem("reloading");
    if (!reloading) {
      sessionStorage.removeItem("reloading");
      toggleModal();
      sessionStorage.setItem("reloading", "true");
    }
  };

  return (
    <div className="empty-space">
      <div className="App">
        {showArchitecture === "infra-architecture.drawio.png" && (
          <div className="modal" onClick={() => { architecureImgClicked("") }}>
            <div
              className="modal-architecture"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="close" onClick={() => { architecureImgClicked("") }}>
                &times;
              </span>
              <img
                src="infra-architecture.drawio.png"
                alt="Infrastructure Architecture"
                className="architecture-img-large"
                onClick={() => { architecureImgClicked("") }}
              />
            </div>
          </div>
        )}
        {showArchitecture === "influx-architecure.jpg" && (
          <div className="modal" onClick={() => { architecureImgClicked("") }}>
            <div
              className="modal-architecture"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="close" onClick={() => { architecureImgClicked("") }}>
                &times;
              </span>
              <img
                src="influx-architecure.jpg"
                alt="Infrastructure Architecture"
                className="architecture-img-large"
                onClick={() => { architecureImgClicked("") }}
              />
            </div>
          </div>
        )}
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


            <button
              className={activeTab === "architecture" ? "active" : ""}
              onClick={() => handleTabChange("architecture")}
            >
              ARCHITECTURES
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
          </nav>
        </header>

        <main className="content">
          {activeTab === "about" && (
            <>
              <section className="about">
                <h2>About Me</h2>
                <p>
                  As a Cloud / DevOps Engineer, I manage infrastructure for my clients,
                  With more than 3 years of experience, I specialize in optimizing the reliability,
                  security, performance, and cost-efficiency of cloud environments. Proficient in Node.js, Python, and MySQL,
                  I architect and maintain robust, scalable solutions, leveraging
                  infrastructure automation to enhance operational efficiency and reduce costs by up to 40%.
                  My work is rooted in industry best practices, ensuring that all solutions are tailored to client needs and deliver exceptional results.
                </p>
              </section>

            </>
          )}
          {activeTab === "JOKE" && (
            <section className="about">
              <h2>LOL</h2>
              <p>
                DevOps, Neither a good ui dev nor a good backend dev but can work
                and debug both
              </p>
              <p>
                they are <s>like</s> <b>Packers and movers</b> they moves the
                application from developer's machine into the world (PROD)
              </p>
              <p>
                with all the admin access they get they feel like <b>God</b>.
              </p>
              <p>
                creating machines and serverless servers in the air maintaining
                the whole instructure in code (IaC) in cloud
              </p>
              <p>
                autmating instructure provisioning and being up to date with new
                ondemand best practices
              </p>
              <p>
                with the requirement to work with every team, all the front, back,
                QA and more teams that I don't even know about.
              </p>
              <p>
                DevOps are the <b>GOAT</b>, and I'm proud to be a DevOps/Cloud
                Engineer.
              </p>
            </section>
          )}

          {activeTab === "experience" && (
            <section className="experience">
              <h2>Work Experience</h2>
              <div className="job">
                <h3>Influx - Cloud Engineer, DevOps Engineer</h3>
                <p className="job-details">Chennai, India | Nov 2024 – Present</p>
                <ul>
                  <li>
                    Automated Infrastructure using aws-sdks, python, lambdas, event scheduler and stepfunctions reducing manual intervensions
                  </li>
                  <li>
                    Designed cloud architecture making application serverless, moving from jenkins to code build, ec2 to lambda and s3-CloudFront reducing operational cost by 50%
                  </li>

                </ul>

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
              <div className="degree">
                <h3>Velammal Matriculation Higher Secondary School</h3>
                <p>12th</p>
                <p>Chennai, India | Jun 2017 - Apr 2018</p>
                <p>Percentage: 88.41</p>
              </div>
              <div className="degree">
                <h3>Velammal Matriculation Higher Secondary School</h3>
                <p>10th</p>
                <p>Chennai, India | Jun 2015 - Apr 2016</p>
                <p>Percentage: 91.6</p>
              </div>
            </section>
          )}

          {activeTab === "certifications" && (
            <>
              <section className="certifications">
                <h2>Certifications</h2>
                <ul>
                  <li>
                    <b>
                      AWS Certified Solutions Architect - Associate (Scored 91%)
                    </b>
                  </li>
                  <li>AWS CloudFormation Master Class</li>
                  <li>AWS Cloud Practitioner Udemy</li>
                  <li>Introduction to Machine Learning</li>
                  <li>Skill Certifications - Python, MySQL (HackerRank)</li>
                </ul>
              </section>
            </>
          )}
          {activeTab === "skills" && (
            <>
              <section className="skills">
                <h2>SKILLS:</h2>
                <div className="skills-container">
                  {[
                    "Amazon Web Services(AWS)",
                    "Terraform",
                    "CloudFormation",
                    "continuous integration and continuous deployment",
                    "AWS SDK",
                    "CLI",
                    "Containerization technologies",
                    "Docker",
                    "Azure",
                    "Git",
                    "Postman",
                    "Jenkins",
                    "JMeter",
                    "Sonar",
                    "CloudWatch",
                    "Grafana",
                    "Prometheus",
                    "API development",
                    "Node.js",
                    "Python",
                    "MySQL",
                    "Linux",
                    "Redis",
                    "Shell Scripting",

                  ].map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
              {images.map((image) => (
                <img className="profile-logo" src={image} alt={` `} />
              ))}
            </>
          )}
          {activeTab === "contact" && (
            <section className="contact">
              <h2>Contact Information</h2>
              <p>Current Location: <span className="email-text">Chennai, India</span></p>
              <p>Phone: <span className="email-text">+91 9791103580</span></p>
              <p>WhatsApp: <span className="email-text">+91 9791103580</span></p>
              <p >
                Email: <a className="email-text" href="mailto:raagul.d@gmail.com">raagul.d@gmail.com </a>
              </p>
              <p>

                <a className="email-text"
                  href="https://www.linkedin.com/in/raagul-deenadayalan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="linkedinlogo" src="linkedinlogo.png" alt="linkedin-logo"></img>LinkedIn Profile
                </a>
              </p>
            </section>
          )}

          {activeTab === "architecture" && (
            <section className="architecture">
              <h2>Architectures</h2>
              <ul style={{ "list-style-type": "decimal" }}>
                <li> this is my first cloud architecture - for Phonex b2b saas provider
                  <div className="hover-container">
                    <img
                      src="infra-architecture.drawio.png"
                      alt="Infrastructure Architecture"
                      className="architecture-img"
                      onClick={() => { architecureImgClicked("infra-architecture.drawio.png") }}
                    />
                  </div>
                </li>
                <li> this is my second cloud architecture - for Influx saas provider
                  <div className="hover-container">
                    <img
                      src="influx-architecure.jpg"
                      alt="influx-architecure"
                      className="architecture-img"
                      onClick={() => { architecureImgClicked("influx-architecure.jpg") }}
                    />
                  </div>
                </li>
              </ul>
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
                  "Amazon Web Services(AWS)",
                  "Terraform",
                  "CloudFormation",
                  "continuous integration and continuous deployment",
                  "AWS SDK",
                  "CLI",
                  "Containerization technologies",
                  "Docker",
                  "Azure",
                  "Git",
                  "Postman",
                  "Jenkins",
                  "JMeter",
                  "Sonar",
                  "CloudWatch",
                  "Grafana",
                  "Prometheus",
                  "API development",
                  "Node.js",
                  "Python",
                  "MySQL",
                  "Linux",
                  "Redis",
                  "Shell Scripting",

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
    </div>
  );
}

export default App;
