import { useEffect } from 'react';

import { Link } from '../routing/Link';
import { articles } from '../lib/data';

export default function MainPage() {
  // Apply reversed view transition when navigating back to the main page
  useEffect(() => {
    document.documentElement.dataset.transition = 'back';

    return () => {
      delete document.documentElement.dataset.transition;
    };
  }, []);

  return (
    <main>
      <h1>
        <span className="heading">View Transitions</span>
      </h1>
      {articles.map((article) => (
        <section key={article.id}>
          <h2>
            <span className="title" style={{ viewTransitionName: `title-${article.id}` }}>
              {article.title}
            </span>
          </h2>
          <p className="paragraph" style={{ viewTransitionName: `paragraph-${article.id}` }}>
            {article.content.split('\n\n')[0]}
          </p>
          <Link to={`/articles/${article.id}`} preload="hover">
            Read more
          </Link>
        </section>
      ))}
    </main>
  );
}
