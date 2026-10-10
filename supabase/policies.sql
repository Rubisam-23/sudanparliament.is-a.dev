-- Example: allow read for all, write via service role
alter table public.bills enable row level security;
create policy "read_bills" on public.bills
  for select using (true);
