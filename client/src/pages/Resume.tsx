import { useEffect } from 'react';
import Header from '../components/Header';
import '../css/resume.css';

function Resume() {
  useEffect(() => {
    document.title = 'Resume – Daniel Milholland';
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
              <a href="mailto:dsmilholland@gmail.com">DSMilholland@gmail.com</a>
            </span>
          </div>
          <hr />

          <h3>CERTIFICATIONS</h3>
          <ul className="cert-list">
            <li>Android Enterprise Professional<span>May 2023</span></li>
            <li>IBM Developer Jumpstart - Practitioner<span>February 2019</span></li>
            <li>MaaS360 Help Desk Role<span>May 2018</span></li>
          </ul>

          <h3>TECHNICAL SKILLS</h3>
          <ul className="experience-list">
            <li>MaaS360, Microsoft inTune | EMM</li>
            <li>Azure, Active Directory, Cloud Identity Connect | IDP</li>
            <li>Scripting (Python &amp; Powershell), API (SOAP &amp; Rest), Web Development | Project</li>
            <li>PHP, Python, Javascript, Rust | Language</li>
            <li>MySQL, Postgres | Database</li>
            <li>Salesforce, Jira, Confluence, W3Publisher, Drupal | CRM</li>
            <li>iOS, Android, Mac OS X, Windows, Red Hat, Ubuntu | Platform</li>
            <li>User and Device identity certificate creation, SCEP | Encryption</li>
          </ul>

          <h3>PROFESSIONAL EXPERIENCE</h3>
          <div className="company">IBM Security</div>
          <div className="bold">MaaS360 - Technical Advisory Engineer/System Architect</div>
          <span>March 2021 – Present</span>
          <ul className="experience-list">
            <li>iOS/Mac and Web Service API Subject Matter Expert (SME)</li>
            <li>Lead AI-driven CRM and user experience projects</li>
            <li>Consultant for Fortune 500 customers</li>
            <li>Customer success liaison for L3</li>
            <li>Scrum team lead</li>
            <li>L1/L2 technical training</li>
          </ul>

          <div className="bold">MaaS360 - US Support Team Lead</div>
          <span>October 2020 – March 2021</span>
          <ul className="experience-list">
            <li>Develop internal support tools</li>
            <li>Provide small group trainings to L1 agents</li>
            <li>Work with the Management team to create KPR metrics for L1</li>
            <li>Generate reports for long-standing support cases</li>
            <li>Provide on-call assistance to L1</li>
            <li>Handle customer and sales escalations</li>
          </ul>

          <div className="bold">MaaS360 - Technical Support Engineer II</div>
          <span>April 2018 – October 2020</span>
          <ul className="experience-list">
            <li>Manage device policies for Android, iOS, Mac OS, and Windows 10</li>
            <li>Assist technical and non-technical persons with complex EMM capabilities</li>
            <li>Assist management with technical insight</li>
          </ul>

          <div className="company">GAIL WINDS LOGISTICS</div>
          <div className="bold">System Administrator</div>
          <span>July 2013 – April 2018</span>
          <ul className="experience-list">
            <li>Develop and maintain a database for Warehouse tracking</li>
            <li>Administer repairs, updates, and complete configuration of Windows and Mac systems</li>
            <li>Train employees in Windows and Mac operating systems</li>
            <li>Assist users experiencing hardware, software, and/or networking issues</li>
          </ul>
        </section>
        </div>
      </div>
      <button className="download-btn" onClick={() => window.print()}>Download PDF</button>
    </>
  );
}

export default Resume;
