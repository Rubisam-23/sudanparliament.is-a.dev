import { supabase } from '@/lib/supabaseClient';
import BillCard from '@/components/BillCard';

export default async function BillsPage() {
  const { data } = await supabase.from('bills').select('*');
  return (
    <main>
      <h1>Legislative Vault</h1>
      <div className="bill-grid">
        {data?.map(bill => (
          <BillCard key={bill.id} bill={bill} />
        ))}
      </div>
    </main>
  );
}
