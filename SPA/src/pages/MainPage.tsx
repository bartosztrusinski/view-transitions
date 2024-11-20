import { useEffect } from 'react';

import { Link } from '../routing/Link';
import { articles } from '../lib/data';

export default function MainPage() {
  useEffect(() => {
    document.documentElement.dataset.transition = 'back';

    return () => {
      delete document.documentElement.dataset.transition;
    };
  }, []);

  return (
    <main>
      <h1>View Transitions</h1>
      {articles.map((article) => (
        <section key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content.split('\n\n')[0]}</p>
          <Link to={`/articles/${article.id}`}>Read more</Link>
        </section>
      ))}
    </main>
  );
}
