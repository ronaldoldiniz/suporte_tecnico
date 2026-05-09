import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Variáveis de ambiente VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY não configuradas. ' +
    'Copie o arquivo .env.example para .env e preencha com suas credenciais do Supabase.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
