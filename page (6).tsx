import { supabase } from '@/lib/supabaseClient';
import MinistryGrid from '@/components/MinistryGrid';

export default async function CabinetPage() {
  const { data } = await supabase.from('ministries').select('*');
  return (
    <main>
      <h1>The Cabinet</h1>
      <MinistryGrid ministries={data ?? []} />
    </main>
  );
}
