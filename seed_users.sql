-- Criar extensões necessárias se não existirem
create extension if not exists pgcrypto;

do $$
declare
  admin_id uuid := gen_random_uuid();
  tecnico_id uuid := gen_random_uuid();
begin
  -- Inserir usuário Admin
  insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token)
  values (admin_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'admin@teste.com', crypt('senha123', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now(), '', '', '', '');

  insert into auth.identities (id, user_id, provider_id, identity_data, provider, created_at, updated_at)
  values (gen_random_uuid(), admin_id, admin_id::text, format('{"sub":"%s","email":"%s"}', admin_id::text, 'admin@teste.com')::jsonb, 'email', now(), now());

  -- Inserir usuário Técnico
  insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token)
  values (tecnico_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'tecnico@teste.com', crypt('senha123', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now(), '', '', '', '');

  insert into auth.identities (id, user_id, provider_id, identity_data, provider, created_at, updated_at)
  values (gen_random_uuid(), tecnico_id, tecnico_id::text, format('{"sub":"%s","email":"%s"}', tecnico_id::text, 'tecnico@teste.com')::jsonb, 'email', now(), now());

  -- Associar Níveis de Acesso
  insert into public.user_roles (user_id, role) values
    (admin_id, 'admin'),
    (tecnico_id, 'tecnico');

end $$;
