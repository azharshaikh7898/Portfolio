import { useState, useEffect } from 'react';
import { LandingPage } from './pages/LandingPage';
import { AdminPanel } from './pages/AdminPanel';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href.startsWith(window.location.origin)) {
        const url = new URL(link.href);

        // Allow hash links to work normally for same-page navigation
        if (url.hash && url.pathname === window.location.pathname) {
          return;
        }

        // Handle route changes
        if (url.pathname !== window.location.pathname) {
          e.preventDefault();
          window.history.pushState({}, '', url.pathname);
          setCurrentPath(url.pathname);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (currentPath === '/admin') {
    return <AdminPanel />;
  }

  return <LandingPage />;
}

export default App;
