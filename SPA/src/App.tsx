import { lazy, Suspense } from 'react';

import { Router, type Route } from './routing/Router';

const routes: Route[] = [
  { path: '/', component: lazy(() => import('./pages/MainPage')) },
  { path: '/first-article', component: lazy(() => import('./pages/FirstArticle')) },
  { path: '/second-article', component: lazy(() => import('./pages/SecondArticle')) },
];

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router routes={routes} />
    </Suspense>
  );
}
