import { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

type HomeProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

function Home({ darkMode, toggleTheme }: HomeProps) {
  useEffect(() => {
    document.title = 'Daniel Milholland';
  }, []);
  return (
    <>
      <Header />
      <div className="wrapper">
        <Sidebar darkMode={darkMode} toggleTheme={toggleTheme} />
        <div id="main-content">
          <section id="bio">
            <h2>About me</h2>
            <div id="bio-paragraph">
              <p>
                I am a highly motivated and experienced IBM Security MaaS360 System Architect /
                Technical Advisory Engineer with a proven track record of success in leading
                AI-driven CRM and user experience projects, consulting for Fortune 500 customers,
                and providing L1/L2 technical training. I am also a skilled Scrum team lead and
                customer success liaison for L3.
              </p>
              <p>
                In my previous role as US Support Team Lead, I was responsible for developing
                internal support tools, providing small group trainings to L1 agents, working with
                the management team to create KPR metrics for L1, generating reports for long
                standing support cases, providing on-call assistance to L1, handling customer and
                sales escalations, and assisting management with technical insight.
              </p>
              <p>
                I am a subject matter expert in iOS/Mac and web service APIs, and I have a deep
                understanding of the IBM Security MaaS360 platform. I am also proficient in Scrum
                methodologies and Agile development practices.
              </p>
              <p>
                I am passionate about using technology to solve real-world problems and improve the
                user experience. I am also committed to providing excellent customer service and
                helping my team members succeed.
              </p>
              <p>
                I am looking for a challenging and rewarding position where I can use my skills and
                experience to make a significant contribution.
              </p>
            </div>

            <h2>Experience</h2>
            <div id="experience">
              <h4 className="experience-heading">Mobile Device Management</h4>
              <p>
                I have over 5 years of experience in mobile device management, including 3 years as
                a Technical Advisory Engineer and System Architect for IBM Security MaaS360. In this
                role, I have worked with Fortune 500 customers to design, implement, and manage
                their mobile device management solutions. I have also provided technical support and
                training to L1/L2 support teams.
              </p>
              <p>My mobile device management skills include:</p>
              <ul>
                <li>
                  Designing and implementing mobile device management solutions using IBM Security
                  MaaS360
                </li>
                <li>
                  Configuring and managing mobile devices, including iOS, Android, Mac OS and
                  Windows devices
                </li>
                <li>Deploying and managing mobile applications</li>
                <li>Securing mobile devices and data</li>
                <li>Troubleshooting mobile device management issues</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="text-taupe-600">
      </div>
    </>
  );
}

export default Home;
