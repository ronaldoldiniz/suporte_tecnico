import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const newTickets = [
  { ticket_number: '#TK-5001', subject: 'Servidor de E-mails inoperante', category: 'TI / Infraestrutura', priority: 'ALTA', status: 'Pendente' },
  { ticket_number: '#TK-5002', subject: 'Curto circuito na copa', category: 'Elétrica', priority: 'CRÍTICA', status: 'Em Progresso' },
  { ticket_number: '#TK-5003', subject: 'Câmera do portão 3 sem sinal', category: 'Segurança Eletrônica', priority: 'MÉDIA', status: 'Aberto' },
  { ticket_number: '#TK-5004', subject: 'Vazamento no banheiro social', category: 'Predial', priority: 'BAIXA', status: 'Validando' },
  { ticket_number: '#TK-5005', subject: 'Telefone IP da recepção mudo', category: 'Telecomunicações', priority: 'MÉDIA', status: 'Pendente' }
];

async function insertTickets() {
  console.log("Inserindo 5 novos chamados...");
  const { data, error } = await supabase.from('tickets').insert(newTickets);
  if (error) {
    console.error("Erro ao inserir:", error);
  } else {
    console.log("Chamados inseridos com sucesso!");
  }
}

insertTickets();
