import { articles } from '../lib/data';
import { lazyWithPreload } from '../lib/lazyWithPreload';
import { Route } from '../routing/Router';

const MainPage = lazyWithPreload(() => import('../pages/MainPage'));
const Article = lazyWithPreload(() => import('../components/Article'));

const articleRoutes: Route[] = articles.map((article) => ({
  path: `/articles/${article.id}`,
  component: <Article {...article} />,
  preload: Article.preload,
}));

export const routes: Route[] = [
  {
    path: '/',
    component: <MainPage />,
    preload: MainPage.preload,
  },
  ...articleRoutes,
];
