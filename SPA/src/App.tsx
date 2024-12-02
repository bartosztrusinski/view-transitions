import { Suspense } from 'react';

import './style.css';
import { Router } from './routing/Router';
import { routes } from './lib/routes';

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router routes={routes} viewTransitions />
    </Suspense>
  );
}
