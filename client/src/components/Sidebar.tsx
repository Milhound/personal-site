type SidebarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

function Sidebar({ darkMode, toggleTheme }: SidebarProps) {
  return (
    <div id="sidebar">
      <img src="/image/daniel.jpg" alt="Daniel Milholland" />
      <h2>Contact</h2>
      <a
        href="mailto:Milhound@gmail.com?Subject=Milhound.com%20-%20(Contact)"
        className="contact-link"
      >
        Email
      </a>
      <a href="https://github.com/Milhound" className="contact-link">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/milholland" className="contact-link">
        LinkedIn
      </a>
      <button
        id="themeToggle"
        onClick={toggleTheme}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={darkMode}
      >
        <span className="toggle-track">
          <span className="toggle-icon toggle-icon--sun" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
              <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
              <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
              <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
            </svg>
          </span>
          <span className="toggle-icon toggle-icon--moon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </span>
          <span className="toggle-thumb" />
        </span>
      </button>
    </div>
  );
}

export default Sidebar;
