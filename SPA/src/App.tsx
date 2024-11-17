import { useEffect, useState } from 'react';

import { getRouteComponent } from './routes';

export function App() {
  const [currentRoute, setCurrentRoute] = useState('/');
  const RouteComponent = getRouteComponent(currentRoute);

  function handleUrlChange() {
    document.startViewTransition(() => {
      setCurrentRoute(window.location.pathname);
    });
  }

  useEffect(() => {
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  return <RouteComponent />;
}
