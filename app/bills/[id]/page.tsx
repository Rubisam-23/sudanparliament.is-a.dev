import { supabase } from '@/lib/supabaseClient';
import BillDetail from '@/components/BillDetail';
import CommentList from '@/components/CommentList';

export default async function BillDetailPage({ params }: { params: { id: string } }) {
  const { data: bill } = await supabase.from('bills').select('*').eq('id', params.id).single();
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('bill_id', params.id)
    .order('article_number', { ascending: true });
  const { data: comments } = await supabase
    .from('comments')
    .select('*')
    .eq('bill_id', params.id)
    .order('created_at', { ascending: true });

  return (
    <main>
      <BillDetail bill={bill} articles={articles ?? []} />
      <CommentList comments={comments ?? []} billId={params.id} />
    </main>
  );
}
