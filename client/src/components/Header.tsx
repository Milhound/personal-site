import { NavLink } from 'react-router-dom';

const navClass = ({ isActive }: { isActive: boolean }) => `nav-link${isActive ? ' active' : ''}`;

function Header() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header>
        <h1 id="title">
          Daniel Milholland
        </h1>
        <div id="nav">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/resume" className={navClass}>Resume</NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
