export default function BillCard({ bill }: { bill: any }) {
  return (
    <article>
      <h3>{bill.title}</h3>
      <p>{bill.summary}</p>
    </article>
  );
}
