import Header from '@/components/Header';
import Pillars from '@/components/Pillars';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <h1>Sudanese Professionals Parliament</h1>
          <p>Drafting a constitution, proposing laws, and building a civil state.</p>
        </section>
        <Pillars />
      </main>
    </>
  );
}
