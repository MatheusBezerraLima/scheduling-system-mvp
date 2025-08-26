# Sistema de Agendamento (MVP)

MVP de um sistema de agendamento SaaS para otimizar a gestão de horários de pequenos negócios e profissionais autônomos. Desenvolvido com Node.js, Express, PostgreSQL e React, o projeto foca em criar uma ferramenta intuitiva para simplificar a rotina do usuário e reduzir faltas (no-shows).

## Tecnologias Utilizadas:

    Backend: Node.js, Express.js

    Banco de Dados: PostgreSQL

    ORM: Sequelize

    Frontend: React 

    Autenticação: JWT (JSON Web Tokens)

## Roadmap do MVP
Plano de desenvolvimento para a primeira versão funcional do produto.

### ✅ Fase 1: Fundação e Backend (A Estrutura Invisível)

[x] Configuração do Ambiente (Node.js, Express, ORM)

[x] Modelagem do Banco de Dados (User, Service, Client, Appointment)

[ ] Criação da API RESTful com endpoints para Autenticação

[ ] Criação dos endpoints CRUD para Serviços

[ ] Criação dos endpoints CRUD para Agendamentos

### 🔲 Fase 2: Painel do Profissional (O Centro de Controle)
[ ] Estrutura do Frontend com React e React Router

[ ] Tela de Login e Autenticação no Frontend

[ ] Tela de Gerenciamento de Serviços (CRUD completo)

[ ] Tela de Configurações de Expediente

[ ] Tela da Agenda (visão de calendário com agendamentos)

### 🔲 Fase 3: Página Pública de Agendamento (A Vitrine)
[ ] Interface limpa com fluxo de agendamento em etapas

[ ] Lógica para buscar e exibir apenas horários disponíveis via API

[ ] Formulário de dados do cliente

[ ] Tela de confirmação do agendamento

### 🔲 Fase 4: Automação e Finalização
[ ] Integração com serviço de e-mail para notificações

[ ] Disparo de e-mail de confirmação de agendamento

[ ] Job agendado (cron job) para envio de e-mails de lembrete

[ ] Configuração de ambiente de produção e Deploy (Backend, Frontend, DB)

[ ] Testes de ponta a ponta