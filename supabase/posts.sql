create extension if not exists pgcrypto;

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  author text not null,
  title text not null,
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;

drop policy if exists "Allow public read posts" on public.posts;
create policy "Allow public read posts"
on public.posts
for select
to anon
using (true);

drop policy if exists "Allow public insert posts" on public.posts;
create policy "Allow public insert posts"
on public.posts
for insert
to anon
with check (
  char_length(trim(author)) between 1 and 24
  and char_length(trim(title)) between 1 and 80
  and char_length(trim(content)) between 1 and 800
);
