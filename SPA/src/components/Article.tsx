import type { Article } from '../lib/data';
import { Link } from '../routing/Link';

type Props = Article;

export default function Article({ id, title, content }: Props) {
  return (
    <main>
      <h1>
        <span className="title" style={{ viewTransitionName: `title-${id}` }}>
          {title}
        </span>
      </h1>
      {content.split('\n\n').map((paragraph, index) => (
        <p
          key={index}
          className={index === 0 ? 'paragraph' : ''}
          style={{ viewTransitionName: index === 0 ? `paragraph-${id}` : undefined }}
        >
          {paragraph}
        </p>
      ))}
      <Link to="/">Back to Home</Link>
    </main>
  );
}
