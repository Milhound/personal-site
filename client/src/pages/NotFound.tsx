import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';

function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found - Daniel Milholland';
  }, []);

  return (
    <>
      <Header />
      <div id="main-content" style={{ padding: '4rem 2rem' }}>
        <h1>404 - Page Not Found</h1>
        <p><Link to="/">Return home</Link></p>
      </div>
    </>
  );
}

export default NotFound;
