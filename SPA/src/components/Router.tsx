import { useEffect, useState } from 'react';

export type Route = {
  path: string;
  component: React.ComponentType;
};

type Props = {
  routes: Route[];
};

export function Router({ routes }: Props) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const RouteComponent = getRouteComponent(currentPath);

  function getRouteComponent(path: Route['path']): Route['component'] {
    const route = routes.find((route) => route.path === path);
    const mainRoute = routes.find((route) => route.path === '/')!;

    return route ? route.component : mainRoute.component;
  }

  function handlePathChange() {
    setCurrentPath(window.location.pathname);
  }

  useEffect(() => {
    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  return <RouteComponent />;
}
