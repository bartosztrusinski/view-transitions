import { useEffect } from 'react';

import { getCurrentRoute, Route } from './Router';
import { routes } from '../App';

type Props = {
  to: Route['path'];
  children: React.ReactNode;
  preload?: 'render' | 'hover';
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export function Link({ children, to, preload, onClick, onMouseEnter, ...rest }: Props) {
  // Update the URL and trigger a popstate event when the link is clicked
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.history.pushState(null, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
    onClick?.(event);
  }

  // Preload route when the link is hovered
  function handleHover(event: React.MouseEvent<HTMLAnchorElement>) {
    if (preload === 'hover') {
      startPreload();
    }
    onMouseEnter?.(event);
  }

  // Preload route when the link is first rendered
  useEffect(() => {
    if (preload === 'render') {
      startPreload();
    }
  }, []);

  function startPreload() {
    const route = getCurrentRoute(routes, to);
    route?.preload?.();
  }

  return (
    <a href={to} onClick={handleClick} onMouseEnter={handleHover} {...rest}>
      {children}
    </a>
  );
}
