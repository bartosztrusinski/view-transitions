import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export type Route = {
  path: string;
  component: JSX.Element;
};

type Props = {
  routes: Route[];
  viewTransitions?: boolean;
};

export function Router({ routes, viewTransitions }: Props) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const RouteComponent = getRouteComponent(currentPath);

  function getRouteComponent(path: Route['path']): Route['component'] {
    const route = routes.find((route) => route.path === path);
    const mainRoute = routes.find((route) => route.path === '/')!;

    return route ? route.component : mainRoute.component;
  }

  useEffect(() => {
    function handlePathChange() {
      const startRouteChange = () => setCurrentPath(window.location.pathname);

      // Trigger view transition when the path changes and update state synchronously
      viewTransitions && document.startViewTransition
        ? document.startViewTransition(() => flushSync(startRouteChange))
        : startRouteChange();
    }

    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  return RouteComponent;
}
