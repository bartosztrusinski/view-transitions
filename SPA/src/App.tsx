import { lazy, Suspense } from 'react';

const MainPage = lazy(() => import('./pages/MainPage'));
const Article = lazy(() => import('./components/Article'));

import { Router, type Route } from './routing/Router';
import { articles } from './lib/data';

const articleRoutes: Route[] = articles.map((article) => {
  return {
    path: `/articles/${article.id}`,
    component: <Article title={article.title} content={article.content} />,
  };
});

const routes: Route[] = [{ path: '/', component: <MainPage /> }, ...articleRoutes];

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router routes={routes} />
    </Suspense>
  );
}
