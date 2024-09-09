import { useState } from "react";
import "./App.css";

function App() {
  const [workExp, setWorkExp] = useState(0);
  const [education, setEducation] = useState(0);
  const [contact, setContact] = useState(0);
  const [about, setAbout] = useState(1);
  const [certification, setCertification] = useState(0);
  const [img, setImg] = useState(0);
  const [Architecure, setArchitecure] = useState(0);
  const handleWorkExp = async () => {
    setContact(0);
    setEducation(0);
    setWorkExp(1);
    setAbout(0);
    setCertification(0);
    setArchitecure(0);
    console.log(workExp, education, contact);
  };
  const handleEducation = async () => {
    setContact(0);
    setEducation(1);
    setWorkExp(0);
    setAbout(0);
    setCertification(0);
    setArchitecure(0);
    console.log(workExp, education, contact);
  };
  const handleCertification = async () => {
    setContact(0);
    setEducation(0);
    setWorkExp(0);
    setAbout(0);
    setCertification(1);
    setArchitecure(0);
    console.log(workExp, education, contact);
  };
  const handleAbout = async () => {
    setContact(0);
    setEducation(0);
    setWorkExp(0);
    setAbout(1);
    setCertification(0);
    setArchitecure(0);
    console.log(workExp, education, contact);
  };
  const handleContact = async () => {
    setContact(1);
    setEducation(0);
    setWorkExp(0);
    setAbout(0);
    setCertification(0);
    setArchitecure(0);
    console.log(workExp, education, contact);
  };
  const showImg = () => {
    setContact(0);
    setEducation(0);
    setWorkExp(0);
    setAbout(0);
    setCertification(0);
    setImg(1);
    setArchitecure(0);
  };
  const handleArchitecure = () => {
    setContact(0);
    setEducation(0);
    setWorkExp(0);
    setAbout(0);
    setCertification(0);
    setImg(0);
    setArchitecure(1);
  };
  const handleCloseImg = () => {
    setContact(0);
    setEducation(0);
    setWorkExp(0);
    setAbout(1);
    setCertification(0);
    setArchitecure(0);
    setImg(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <img
            className="profile-img"
            src="raagul-img.jpeg"
            alt="Profile pic"
            onClick={showImg}
          ></img>
          <div className="logo" onClick={showImg}>
            RAAGUL D
            <div
              style={{
                "font-size": "14px",
              }}
              onClick={showImg}
            >
              Cloud Engineer, DevOps Engineer
            </div>
          </div>

          <div className="buttons">
            <button className="top-bar-button" onClick={handleAbout}>
              ABOUT
            </button>
            <button className="top-bar-button" onClick={handleWorkExp}>
              WORK EXPERIENCE
            </button>
            <button className="top-bar-button" onClick={handleEducation}>
              EDUCATION
            </button>
            <button className="top-bar-button" onClick={handleCertification}>
              CERTIFICATIONS
            </button>
            <button className="top-bar-button" onClick={handleContact}>
              CONTACT
            </button>
            <a href="resume.pdf" download="resume.pdf">
              <button className="top-bar-button">
                <img
                  src="icons8-download-symbol-24.png"
                  alt="download"
                  className="img"
                ></img>
                <span
                  style={{
                    "padding-left": "10px",
                  }}
                >
                  RESUME{" "}
                </span>
              </button>
            </a>
            <button className="top-bar-button" onClick={handleArchitecure}>
              Architectures
            </button>
          </div>
        </div>
        {Architecure === 1 && <>
          <div className="content">
            <h3>my current Architecture</h3>
          <img
                    src="infra-architecture.drawio.png"
                    alt="download"
                    className="img"
                  ></img>
            </div>
        </>}
        {img === 1 && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseImg}>
                &times;
              </span>
              <img
                src="raagul-img.jpeg"
                alt="Large Profile"
                className="large-img"
                style={{"padding":"50px"}}
              />
              <a href="resume.pdf" download="resume.pdf">
                <button >
                  <img
                    src="icons8-download-symbol-24.png"
                    alt="download"
                    className="img"
                  ></img>
                </button>
              </a>
              <div>
                <div>
                  RAAGUL D
                  <div
                    style={{
                      "font-size": "14px",
                    }}
                  >
                    Cloud Engineer, DevOps Engineer
                  </div>
                  <>AWS Certified</>
                  <div
                    style={{
                      "font-size": "14px",
                    }}
                  >
                    SKILLS:
                  </div>
                  <div>
                    <button className="skills-buttons">
                      {" "}
                      Amazon Web Services (AWS)
                    </button>
                    <button className="skills-buttons"> Terraform </button>
                    <button className="skills-buttons"> CloudFormation</button>
                    <button className="skills-buttons"> CI/CD</button>
                    <button className="skills-buttons"> AWS SDK</button>
                    <button className="skills-buttons"> CLI</button>
                  </div>
                  <div>
                    <button className="skills-buttons"> Docker</button>
                    <button className="skills-buttons"> Node.js</button>
                    <button className="skills-buttons"> Python</button>
                    <button className="skills-buttons"> MySQL</button>
                    <button className="skills-buttons"> Linux</button>
                  </div>
                  <button className="skills-buttons"> DynamoDB</button>
                  <button className="skills-buttons"> Redis</button>
                  <button className="skills-buttons"> Git</button>
                  <button className="skills-buttons"> Postman</button>
                  <button className="skills-buttons"> JMeter</button>
                  <button className="skills-buttons"> Sonar</button>
                  <button className="skills-buttons">
                    CloudWatch (logs, metrics, Xray, dashboards, alarms, rum)
                  </button>
                  <div>Phone: +91 9791103580</div>
                  <div>
                    Email:{" "}
                    <a href="mailto:raagul.d@gmail.com">raagul.d@gmail.com</a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/raagul-deenadayalan/">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {certification === 1 && (
          <>
            <div className="content">
              <ul>
                <li>
                  <>AWS Certified Solutions Architect - Associate Scored 91%</>
                </li>
                <li>
                  <>AWS CloudFormation Master Class</>
                </li>
                <li>
                  <>AWS Certified Cloud Practitioner</>
                </li>
                <li>
                  <>Introduction to Machine Learning</>
                </li>
                <li>
                  <>Skill Certifications - Python, MySQL - HackerRank</>
                </li>
              </ul>
            </div>
          </>
        )}
        {about === 1 && (
          <>
            <div className="content">
              <p
                style={{
                  "font-size": "20px",
                }}
              >
                As a Cloud Infrastructure Engineer at NCompass, I manage
                infrastructure for our client Phonex, a B2B SaaS provider. With
                more than two years of experience, I specialize in optimizing
                the reliability, security, cost-efficiency, performance, and
                monitoring of cloud environments. I architect and maintain
                robust, scalable solutions tailored to client needs while
                adhering to industry best practices.
              </p>
            </div>
          </>
        )}
        {contact === 1 && (
          <>
            <div className="content">
              <h4>Current Location: Chennai, India</h4>
              <h4>Phone: +91 9791103580</h4>
              <h4>WhatsApp: +91 9791103580</h4>
              <h4>
                Email:{" "}
                <a href="mailto:raagul.d@gmail.com">raagul.d@gmail.com</a>
              </h4>
              <h4>
                <a href="https://www.linkedin.com/in/raagul-deenadayalan/">
                  LinkedIn
                </a>
              </h4>
            </div>
          </>
        )}
        {education === 1 && (
          <>
            <div className="content">
              <h1>EDUCATION</h1>

              <div>
                <span
                  style={{
                    paddingRight: "50px",
                    "font-size": "20px",
                  }}
                >
                  ANNA UNIVERSITY
                </span>
                <span
                  style={{
                    float: "right",
                    paddingRight: "50px",
                    "font-size": "17px",
                  }}
                >
                  Chennai, India
                </span>

                <div>
                  <span
                    style={{
                      "font-size": "17px",
                    }}
                  >
                    Bachelor of Engineering in Electronics and Communication
                  </span>
                  <span
                    style={{
                      float: "right",
                      "font-size": "17px",
                      paddingRight: "50px",
                    }}
                  >
                    Aug 2018 - Jul 2022
                  </span>
                </div>
                <span
                  style={{
                    "font-size": "17px",
                  }}
                >
                  CGPA: 8.18
                </span>
                <div></div>
              </div>
            </div>
          </>
        )}
        {workExp === 1 && (
          <div className="content">
            <h1>WORK EXPERIENCE</h1>

            <div>
              <span
                style={{
                  paddingRight: "50px",
                  "font-size": "20px",
                }}
              >
                NCOMPASS
              </span>
              <span
                style={{
                  float: "right",
                  paddingRight: "50px",
                  "font-size": "17px",
                }}
              >
                Chennai, India
              </span>

              <div>
                <span
                  style={{
                    "font-size": "17px",
                  }}
                >
                  Cloud Engineer, DevOps Engineer
                </span>
                <span
                  style={{
                    float: "right",
                    "font-size": "17px",
                    paddingRight: "50px",
                  }}
                >
                  Aug 2022 – Till Date
                </span>
              </div>
              <div></div>
            </div>
            {/* <h3>Key Achievements</h3> */}
            <ul>
              <li>
                Maintained and optimized AWS cloud infrastructure for multiple
                clients, achieving high availability and enhanced security
                across diverse environments.
              </li>
              <li>
                Developed and deployed scalable automation tools using Node.js,
                Python, and AWS SDK, significantly streamlining operations and
                improving efficiency.
              </li>
              <li>
                Implemented cost reduction strategies that led to a 30% decrease
                in operational expenses, enhancing budget management for
                clients.
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
                Led a team of three in the maintenance and management of a SaaS
                platform infrastructure supporting over 300 tenants, ensuring
                high reliability and scalability.
              </li>
              <li>
                Enhanced coding standards and security practices by implementing
                a quality gateway with Sonar, resulting in improved code quality
                and reduced vulnerabilities.
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
