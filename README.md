# 🎫 Sistema de Suporte Técnico

Sistema de gerenciamento de chamados de suporte técnico, desenvolvido com React, TypeScript e Supabase.

## 🚀 Tecnologias

- **Frontend:** React 19 + TypeScript
- **Build:** Vite
- **Banco de dados:** Supabase (PostgreSQL)
- **Estilização:** CSS Modules / CSS puro
- **Deploy:** Vercel

## ✨ Funcionalidades

- **Autenticação** com controle de acesso por perfil (Administrador, Técnico e Cliente)
- **Dashboard** com visão geral dos chamados e métricas
- **Meus Chamados** – abertura e acompanhamento de chamados por usuário
- **Relatórios** com filtros e gráficos de desempenho
- **Configurações** completas: perfil, usuários, categorias, status, sistema e segurança
- **Sistema de busca** por título ou usuário nos chamados
- **Filtro por status** em tempo real
- **Foto de perfil** personalizável por usuário
- **Logo e título do sistema** configuráveis pelo administrador
- **Informações de ajuda** acessíveis a todos os usuários

## 📋 Perfis de Acesso

| Perfil | Acesso |
|---|---|
| **Administrador** | Acesso completo a todo o sistema |
| **Técnico** | Visualiza e atualiza chamados; sem acesso a configurações do sistema |
| **Cliente** | Abre e acompanha apenas os próprios chamados |

## ⚙️ Configuração do ambiente

### Pré-requisitos

- Node.js 18+
- Conta no [Supabase](https://supabase.com)

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
```

### Instalação

```bash
npm install
npm run dev
```

### Acesso padrão

- **Usuário:** `admin`
- **Senha:** `admin`

> ⚠️ Altere a senha do administrador após o primeiro acesso.

## 🏗️ Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis (Sidebar, Header, Layout)
├── pages/            # Páginas da aplicação
├── lib/              # Configuração do Supabase e utilitários
└── contexts/         # Contextos React (Auth, Settings)
```

## 📦 Scripts

```bash
npm run dev       # Inicia o servidor de desenvolvimento
npm run build     # Gera o build de produção
npm run preview   # Visualiza o build localmente
npm run lint      # Executa o ESLint
```

## 🌐 Deploy

O projeto está configurado para deploy na **Vercel**. Basta conectar o repositório e configurar as variáveis de ambiente `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.

---

Desenvolvido com ❤️ usando React + Supabase.
