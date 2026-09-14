-- Liya Trails & Tours: Admin login fix
-- Run this once in Supabase SQL Editor.
-- This does NOT create or change passwords.

alter table public.admin_profiles enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'admin_profiles'
      and policyname = 'admin_profiles_self_select'
  ) then
    create policy admin_profiles_self_select
      on public.admin_profiles
      for select
      to authenticated
      using (id = auth.uid());
  end if;
end
$$;

-- Verify the administrator row after running this:
select id, email, role
from public.admin_profiles
where id = auth.uid();
