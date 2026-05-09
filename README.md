# TechSupport Enterprise Portal 🚀

Um portal de suporte técnico corporativo de alto desempenho construído com React, TypeScript, Vite e Supabase. Este sistema oferece gerenciamento completo de chamados com segurança baseada em níveis de acesso (RBAC - Role-Based Access Control).

## 🛠 Tecnologias Utilizadas

- **Frontend:** React 18, TypeScript, Vite, React Router DOM
- **Estilização:** CSS3 Vanilla com variáveis dinâmicas (Design System) e ícones do Material Symbols
- **Backend & Banco de Dados:** Supabase (PostgreSQL)
- **Autenticação e Segurança:** Supabase Auth com Row Level Security (RLS)
- **Hospedagem:** Vercel

## ✨ Funcionalidades

- **Dashboard Analítico:** Visualização de métricas, gráficos e listagem de status de chamados em tempo real.
- **Autenticação Segura:** Login integrado com a plataforma Supabase.
- **Sistema de Níveis de Acesso (RBAC):** 
  - **Administrador:** Visualiza, gerencia e tem controle de todos os chamados de forma irrestrita.
  - **Técnico:** Ambiente isolado. Visualiza apenas os chamados que foram designados a ele (`assigned_to`) ou abertos por ele (`created_by`).
- **Abertura de Chamados:** Modal ágil direto na interface para abertura de chamados categorizados (TI, Elétrica, Telecom) com definição de nível de prioridade.
- **SPA (Single Page Application):** Navegação rápida e suave entre painel, relatórios e configurações via React Router.

## 🔐 Banco de Dados e Segurança (Supabase)

### Tabelas Principais

1. **`tickets`**: Tabela central que armazena os chamados. Possui colunas essenciais como assunto, categoria, prioridade, status e as chaves estrangeiras `created_by` e `assigned_to` ligadas aos usuários autenticados.
2. **`user_roles`**: Tabela auxiliar que liga o ID único de um usuário (vindo do `auth.users`) à sua respectiva _role_ de permissão no sistema (`admin` ou `tecnico`).

### Políticas de Segurança (Row Level Security - RLS)

A blindagem de dados é feita no banco de dados. Mesmo que um usuário mal intencionado tente forçar uma requisição via API, o Supabase bloqueia:
- **Regra Admin**: Libera visualização global apenas se existir uma correspondência do UID logado marcando como `admin` na tabela de _roles_.
- **Regra Técnico**: Libera leitura exclusivamente para as linhas de `tickets` onde o ID do usuário for igual à coluna `assigned_to` ou `created_by`.

## 🚀 Como rodar o projeto no seu computador

1. Clone este repositório e instale as dependências:
```bash
npm install
```

2. Crie um arquivo `.env` na raiz do repositório contendo suas chaves do banco de dados (encontradas no painel do Supabase):
```env
VITE_SUPABASE_URL=https://sua-url-do-supabase.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-gigante-aqui
```

3. Inicie o ambiente de desenvolvimento local:
```bash
npm run dev
```

4. Acesse em seu navegador via `http://localhost:5173`.
