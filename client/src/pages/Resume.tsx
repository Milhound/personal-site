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
              Technical Advisory Engineer and System Architect specializing in
              enterprise mobility management, identity, and endpoint security.
              Trusted advisor for Fortune 500 organizations, with hands-on
              experience leading cross-functional support and engineering
              initiatives, mentoring teams, and improving customer outcomes
              through API, automation, and platform expertise.
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
                MaaS360, Microsoft inTune, Samsung Knox, Google Workspace{" "}
                <span className="skill-category">EMM</span>
              </li>
              <li>
                Azure, Entra ID, Cloud Identity Connect{" "}
                <span className="skill-category">IDP</span>
              </li>
              <li>
                Scripting (Python, Bash &amp; Powershell), API (SOAP &amp;
                Rest), Web Development{" "}
                <span className="skill-category">Project</span>
              </li>
              <li>
                Python, Golang, Javascript, Rust{" "}
                <span className="skill-category">Language</span>
              </li>
              <li>
                MySQL, Postgres <span className="skill-category">Database</span>
              </li>
              <li>
                Salesforce, Jira, Confluence, W3Publisher, Drupal{" "}
                <span className="skill-category">CRM</span>
              </li>
              <li>
                iOS, Android, Mac OS X, Windows, Debian, Fedora{" "}
                <span className="skill-category">Platform</span>
              </li>
              <li>
                Microsoft CA, Digicert{" "}
                <span className="skill-category">Encryption</span>
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
                <li>iOS/Mac and Web Service API Subject Matter Expert (SME)</li>
                <li>Lead AI-driven CRM and user experience projects</li>
                <li>Consultant for Fortune 500 customers</li>
                <li>Customer success liaison for Development L3</li>
                <li>Led a 5-person Scrum team</li>
                <li>Delivered L1/L2 technical training</li>
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
                <li>Develop internal support tools</li>
                <li>Provide small group trainings to L1 agents</li>
                <li>
                  Worked with the management team to create KPR metrics for L1
                </li>
                <li>Generate reports for long-standing support cases</li>
                <li>Provide on-call assistance to L1</li>
                <li>Handle customer and sales escalations</li>
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
                  Manage device policies for Android, iOS, Mac OS, and Windows
                  10
                </li>
                <li>
                  Assist technical and non-technical persons with complex EMM
                  capabilities
                </li>
                <li>Assist management with technical insight</li>
              </ul>
            </div>

            <div className="company">GAIL WINDS LOGISTICS</div>
            <div className="experience-block">
              <div className="role-header">
                <div className="bold">System Administrator</div>
                <span>July 2013 - April 2018</span>
              </div>
              <ul className="experience-list">
                <li>Develop and maintain a database for Warehouse tracking</li>
                <li>Maintained network infrastructure and server systems</li>
                <li>
                  Implemented security protocols and data backup solutions
                </li>
                <li>
                  Administer repairs, updates, and complete configuration of
                  Windows and Mac systems
                </li>
                <li>Train employees in Windows and Mac operating systems</li>
                <li>
                  Assist users experiencing hardware, software, and/or
                  networking issues
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
