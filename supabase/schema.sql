create table public.users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  country text,
  profession text,
  role text default 'member',
  approved boolean default false,
  created_at timestamptz default now()
);

create table public.ministries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  created_at timestamptz default now()
);

create table public.bills (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text,
  status text default 'draft',
  created_at timestamptz default now()
);

create table public.articles (
  id uuid primary key default gen_random_uuid(),
  bill_id uuid references public.bills(id) on delete cascade,
  article_number int,
  text text,
  created_at timestamptz default now()
);

create table public.comments (
  id uuid primary key default gen_random_uuid(),
  bill_id uuid references public.bills(id) on delete cascade,
  user_id uuid references public.users(id),
  content text,
  created_at timestamptz default now()
);

create table public.votes (
  id uuid primary key default gen_random_uuid(),
  bill_id uuid references public.bills(id) on delete cascade,
  user_id uuid references public.users(id),
  value text check (value in ('yes','no','abstain')),
  created_at timestamptz default now()
);
