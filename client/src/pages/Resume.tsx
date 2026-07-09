import { useEffect } from "react";
import Header from "../components/Header";
import "../css/resume.css";

function Resume() {
  useEffect(() => {
    document.title = "Resume - Daniel Milholland";
  }, []);
  return (
    <>
      <Header />
      <div className="wrapper">
        <div id="main-content">
          <section id="resume">
            <div className="title">
              <h2>Daniel Milholland</h2>
              <span>
                <a href="mailto:dsmilholland@gmail.com">
                  DSMilholland@gmail.com
                </a>
              </span>
            </div>
            <hr />

            <h3>PROFESSIONAL SUMMARY</h3>
            <p className="summary-text">
              IBM Technical Advisory Engineer and System Architect with
              experience in shell scripting, automation, Linux administration,
              software engineering, and cross-functional technical support in
              fast-paced operational environments. Trusted partner to internal
              teams and enterprise customers, with hands-on experience
              troubleshooting complex platform issues, compiling and packaging
              applications, and improving delivery workflows through scripting,
              Docker, GitHub Actions, and API-driven tooling.
            </p>

            <h3>CERTIFICATIONS</h3>
            <ul className="cert-list">
              <li>
                Android Enterprise Professional<span>May 2023</span>
              </li>
              <li>
                IBM Developer Jumpstart - Practitioner<span>February 2019</span>
              </li>
            </ul>

            <h3>TECHNICAL SKILLS</h3>
            <ul className="experience-list">
              <li>
                Shell scripting, Python, JavaScript, Rust, Bash, PowerShell{" "}
                <span className="skill-category">Languages</span>
              </li>
              <li>
                Docker, Docker Compose, GitHub Actions, REST APIs, Ansible{" "}
                <span className="skill-category">Automation</span>
              </li>
              <li>
                macOS, Windows, Debian, Fedora{" "}
                <span className="skill-category">Platforms</span>
              </li>
              <li>
                MaaS360, Microsoft Intune, Samsung Knox, Google Workspace{" "}
                <span className="skill-category">Endpoint</span>
              </li>
              <li>
                Azure, Entra ID, Cloud Identity Connect{" "}
                <span className="skill-category">Identity</span>
              </li>
              <li>
                MySQL/Maria, PostgreSQL, SQLite{" "}
                <span className="skill-category">Database</span>
              </li>
              <li>
                Jira, Confluence, Salesforce, Drupal{" "}
                <span className="skill-category">Collaboration</span>
              </li>
            </ul>

            <h3>PROFESSIONAL EXPERIENCE</h3>
            <div className="company">IBM - International Business Machines</div>
            <div className="experience-block">
              <div className="role-header">
                <div className="bold">
                  MaaS360 - Technical Advisory Engineer/System Architect (L2.5)
                </div>
                <span>March 2021 - Present</span>
              </div>
              <ul className="experience-list">
                <li>
                  Serve as iOS/Mac and Web Services API SME for support and
                  engineering teams
                </li>
                <li>
                  Build internal tools and workflow improvements using scripting,
                  APIs, and automation
                </li>
                <li>
                  Compile and package Go applications for internal use cases
                </li>
                <li>
                  Use Docker and Compose to support repeatable development and
                  testing workflows
                </li>
                <li>
                  Support CI/CD workflows through GitHub Actions pipelines for
                  build, validation, and delivery automation
                </li>
                <li>
                  Partner with development, support, and customer-facing teams
                  to troubleshoot complex technical issues
                </li>
                <li>
                  Lead technical training, mentor peers, and support
                  cross-functional delivery initiatives
                </li>
              </ul>
            </div>

            <div className="experience-block">
              <div className="role-header">
                <div className="bold">
                  MaaS360 - US Support Team Lead (L1.5)
                </div>
                <span>October 2020 - March 2021</span>
              </div>
              <ul className="experience-list">
                <li>Developed internal support tools and process improvements</li>
                <li>Provided small-group technical training to L1 agents</li>
                <li>
                  Worked with management to define KPI and reporting metrics for
                  L1 operations
                </li>
                <li>
                  Generated reporting and analysis for long-standing technical
                  support cases
                </li>
                <li>Provided on-call assistance for escalations and outages</li>
                <li>
                  Coordinated with support leadership, sales, and engineering on
                  critical issues
                </li>
              </ul>
            </div>

            <div className="experience-block">
              <div className="role-header">
                <div className="bold">
                  MaaS360 - Technical Support Engineer (L1)
                </div>
                <span>April 2018 - October 2020</span>
              </div>
              <ul className="experience-list">
                <li>
                  Managed device policies for Android, iOS, macOS, and Windows
                  environments
                </li>
                <li>
                  Resolved complex endpoint management issues for technical and
                  non-technical users
                </li>
                <li>
                  Supported fast-paced operational workflows requiring strong
                  troubleshooting and communication skills
                </li>
              </ul>
            </div>

            <div className="company">GAIL WINDS LOGISTICS</div>
            <div className="experience-block">
              <div className="role-header">
                <div className="bold">System Administrator</div>
                <span>July 2013 - April 2018</span>
              </div>
              <ul className="experience-list">
                <li>
                  Developed and maintained a warehouse tracking database and
                  supporting tools
                </li>
                <li>
                  Administered network infrastructure, server systems, and user
                  endpoints
                </li>
                <li>
                  Implemented security controls, backup processes, and system
                  maintenance procedures
                </li>
                <li>
                  Configured, repaired, and updated Windows and Mac systems for
                  business operations
                </li>
                <li>
                  Trained employees on operating systems, tools, and support
                  processes
                </li>
                <li>
                  Resolved hardware, software, and networking issues across the
                  environment
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <button className="download-btn" onClick={() => window.print()}>
        Download PDF
      </button>
    </>
  );
}

export default Resume;