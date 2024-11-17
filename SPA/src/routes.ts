import { FirstArticle } from './pages/FirstArticle';
import { MainPage } from './pages/MainPage';
import { SecondArticle } from './pages/SecondArticle';

type Route = {
  path: string;
  component: React.ComponentType;
};

export const routes: Route[] = [
  { path: '/', component: MainPage },
  { path: '/first-article', component: FirstArticle },
  { path: '/second-article', component: SecondArticle },
];

export function getRouteComponent(path: Route['path']): Route['component'] {
  const route = routes.find((route) => route.path === path) ?? routes[0];
  return route.component;
}
