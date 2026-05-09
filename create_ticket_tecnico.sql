do $$
declare
  tec_id uuid;
begin
  -- Pegar o ID do tecnico
  select id into tec_id from auth.users where email = 'tecnico@teste.com';
  
  -- Inserir um chamado atribuído ao técnico
  insert into tickets (ticket_number, subject, category, priority, status, assigned_to)
  values ('#TK-5006', 'Monitor não liga na recepção', 'TI / Infraestrutura', 'ALTA', 'Aberto', tec_id);
end $$;
