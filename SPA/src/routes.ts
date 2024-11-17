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
