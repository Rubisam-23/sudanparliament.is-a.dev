export default function BillDetail({ bill, articles }: { bill: any; articles: any[] }) {
  if (!bill) return <p>Bill not found.</p>;
  return (
    <section>
      <h1>{bill.title}</h1>
      <p>{bill.summary}</p>
      <h2>Articles</h2>
      <ol>
        {articles.map(a => (
          <li key={a.id}>{a.text}</li>
        ))}
      </ol>
    </section>
  );
}
