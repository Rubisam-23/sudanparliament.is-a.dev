export default function CommentList({ comments }: { comments: any[] }) {
  return (
    <section>
      <h2>Comments</h2>
      <ul>
        {comments.map(c => (
          <li key={c.id}>{c.content}</li>
        ))}
      </ul>
    </section>
  );
}
