import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export type Route = {
  path: string;
  component: JSX.Element;
  preload?: () => void;
};

type Props = {
  routes: Route[];
  viewTransitions?: boolean;
};

const MAIN_ROUTE = '/';

export const getCurrentRoute = (routes: Route[], path: Route['path']): Route | undefined =>
  routes.find((route) => route.path === path);

const getMainRoute = (routes: Route[]) => getCurrentRoute(routes, MAIN_ROUTE);

export function Router({ routes, viewTransitions }: Props) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

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

  const mainRoute = getMainRoute(routes);

  if (!mainRoute) {
    throw new Error(`No main route found. Make sure you have a route with path "${MAIN_ROUTE}"`);
  }

  const { component: RouteComponent } = getCurrentRoute(routes, currentPath) ?? mainRoute;

  return RouteComponent;
}
