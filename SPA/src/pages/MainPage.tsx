import { Link } from '../components/Link';

export function MainPage() {
  return (
    <main>
      <h1>View Transitions</h1>
      <section>
        <h2>First Article</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quod, voluptates, quae, quos quia quibusdam quidem voluptatum
          laboriosam doloremque quas doloribus. Quisquam quod, voluptates, quae,
          quos quia quibusdam quidem voluptatum laboriosam doloremque quas
          doloribus.
        </p>
        <Link to='/first-article'>Read more</Link>
      </section>
      <hr />
      <section>
        <h2>Second Article</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto minima
          voluptatibus iure eveniet incidunt dicta odit iste vero laborum!
          Perferendis et laboriosam asperiores illum velit quasi nostrum
          pariatur, accusamus culpa.
        </p>
        <Link to='/second-article'>Read more</Link>
      </section>
    </main>
  );
}
