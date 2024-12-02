import { Suspense } from 'react';

const MainPage = lazyWithPreload(() => import('./pages/MainPage'));
const Article = lazyWithPreload(() => import('./components/Article'));

import './style.css';
import { Router, type Route } from './routing/Router';
import { lazyWithPreload } from './lib/lazyWithPreload';
import { articles } from './lib/data';

const articleRoutes: Route[] = articles.map((article) => {
  return {
    path: `/articles/${article.id}`,
    component: <Article {...article} />,
    preload: Article.preload,
  };
});

export const routes: Route[] = [
  {
    path: '/',
    component: <MainPage />,
    preload: MainPage.preload,
  },
  ...articleRoutes,
];

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router routes={routes} viewTransitions />
    </Suspense>
  );
}
