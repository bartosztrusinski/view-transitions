import { MainPage } from './pages/MainPage';
import { FirstArticle } from './pages/FirstArticle';
import { SecondArticle } from './pages/SecondArticle';

import { Router, type Route } from './routing/Router';

export function App() {
  const routes: Route[] = [
    { path: '/', component: MainPage },
    { path: '/first-article', component: FirstArticle },
    { path: '/second-article', component: SecondArticle },
  ];

  return <Router routes={routes} />;
}
