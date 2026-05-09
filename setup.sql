create table if not exists user_roles (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null unique,
  role text not null check (role in ('admin', 'tecnico')),
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table tickets add column if not exists created_by uuid references auth.users;
alter table tickets add column if not exists assigned_to uuid references auth.users;

alter table tickets enable row level security;
alter table user_roles enable row level security;

drop policy if exists "Admin_all_tickets" on tickets;
drop policy if exists "Tecnico_assigned_tickets" on tickets;
drop policy if exists "User_roles_read_all" on user_roles;

create policy "Admin_all_tickets" on tickets for all using (
  exists (select 1 from user_roles where user_id = auth.uid() and role = 'admin')
);

create policy "Tecnico_assigned_tickets" on tickets for all using (
  auth.uid() = assigned_to or auth.uid() = created_by
);

create policy "User_roles_read_all" on user_roles for select using ( 
  auth.uid() = user_id 
);
