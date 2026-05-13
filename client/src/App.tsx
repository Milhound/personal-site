import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

function getCookie(name: string): string | null {
  const nameEQ = name + '=';
  for (let c of document.cookie.split(';')) {
    c = c.trim();
    if (c.startsWith(nameEQ)) return c.substring(nameEQ.length);
  }
  return null;
}

function setCookie(name: string, value: string): void {
  document.cookie = `${name}=${value}; SameSite=Strict; Path=/;`;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = getCookie('theme');
    if (theme === 'dark') setDarkMode(true);
    else if (theme === 'light') setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  function toggleTheme(): void {
    const newDark = !darkMode;
    setDarkMode(newDark);
    setCookie('theme', newDark ? 'dark' : 'light');
  }

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} toggleTheme={toggleTheme} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
