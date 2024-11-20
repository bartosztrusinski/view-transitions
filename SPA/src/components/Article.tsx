import { Link } from '../routing/Link';

type Props = {
  title: string;
  content: string;
};

export default function Article({ title, content }: Props) {
  return (
    <main>
      <h1>{title}</h1>
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <Link to="/">Back to Home</Link>
    </main>
  );
}
