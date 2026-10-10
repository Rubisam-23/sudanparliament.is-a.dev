export default function MinistryGrid({ ministries }: { ministries: any[] }) {
  return (
    <div>
      {ministries.map(m => (
        <div key={m.id}>
          <h3>{m.name}</h3>
          <p>{m.description}</p>
        </div>
      ))}
    </div>
  );
}
