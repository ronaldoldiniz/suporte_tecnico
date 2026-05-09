# TechSupport Enterprise Portal 🚀

Um portal de suporte técnico corporativo de alto desempenho construído com React, TypeScript, Vite e Supabase. Este sistema oferece gerenciamento completo de chamados com segurança baseada em níveis de acesso (RBAC - Role-Based Access Control).

## 🛠 Tecnologias Utilizadas

- **Frontend:** React 18, TypeScript, Vite, React Router DOM
- **Estilização:** CSS3 Vanilla com variáveis dinâmicas (Design System) e ícones do Material Symbols
- **Backend & Banco de Dados:** Supabase (PostgreSQL)
- **Autenticação e Segurança:** Supabase Auth com Row Level Security (RLS)
- **Hospedagem:** Vercel

## ✨ Funcionalidades (Features Detalhadas)

O sistema foi arquitetado para resolver o fluxo de trabalho de um Help Desk moderno, separando a camada de coordenação da camada de execução.

### 1. Sistema de Níveis de Acesso (RBAC) e Roteamento Protegido
- **Mecanismo de Autenticação Real:** Telas totalmente protegidas por um `AuthContext` global no React. Usuários não autenticados são automaticamente redirecionados para o `/login`.
- **Perfil de Administrador:** Acesso de "visão de águia". O Admin tem acesso à totalidade dos chamados cadastrados no banco de dados, visualiza as estatísticas globais e coordena o fluxo.
- **Perfil de Técnico:** Acesso estritamente restrito. O técnico realiza login e possui uma visão "limpa", enxergando apenas os tickets que foram criados por ele ou atribuídos (`assigned_to`) à sua conta.

### 2. Abertura e Gerenciamento de Chamados (Ticketing)
- **Modal de Abertura Expressa:** Um componente pop-up acessível de qualquer lugar do painel, permitindo registrar novos chamados (`#TK-XXXX`) instantaneamente.
- **Auto-atribuição Inteligente:** Se um usuário nível "Técnico" registrar um chamado pelo Modal, o sistema o define automaticamente como "Técnico Responsável" via ID, garantindo que o chamado já nasça visível em seu painel.
- **Tipagem Estruturada:** Classificação dinâmica em categorias operacionais reais (`TI / Infraestrutura`, `Elétrica`, `Predial/Civil`, `Telecomunicações`, `Segurança Eletrônica`) e definição de prioridades rígidas (`BAIXA`, `MÉDIA`, `ALTA`, `CRÍTICA`).

### 3. Painel de Controle Analítico (Dashboard)
- **KPIs em Tempo Real:** Cartões informativos interativos no topo informando o volume de "Chamados Abertos", chamados "Em Atendimento", e métricas de "Concluídos Hoje".
- **Listagem Tipada:** Tabela principal reativa com identificadores de tickets baseados em hash (ex: `#TK-5002`), chips visuais de prioridade codificados por cores (vermelho para crítico, amarelo para média) e sinalização clara de status.

### 4. Arquitetura SPA (Single Page Application)
- **Navegação Contínua:** Configuração otimizada com o `react-router-dom` para transição imediata de views (Meus Chamados, Dashboard, Relatórios) sem *reload* da página principal.
- **Vercel Rewrites:** Configuração implementada de fallback via `vercel.json` para suportar atualizações de página diretas (`/login`) em ambiente de produção sem retornar erros `404 Not Found`.

## 🔐 Banco de Dados e Segurança (Supabase)

### Tabelas Principais

1. **`tickets`**: Tabela central que armazena os chamados. Possui colunas essenciais como assunto, categoria, prioridade, status e as chaves estrangeiras `created_by` e `assigned_to` ligadas aos usuários autenticados.
2. **`user_roles`**: Tabela auxiliar que liga o ID único de um usuário (vindo do `auth.users`) à sua respectiva _role_ de permissão no sistema (`admin` ou `tecnico`).

### Políticas de Segurança (Row Level Security - RLS)

A blindagem de dados é feita no banco de dados. Mesmo que um usuário mal intencionado tente forçar uma requisição via API, o Supabase bloqueia a comunicação na raiz:
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
