interface ServiceScope {
  examples: string[];
  deliverables: string[];
}

export const serviceScopes: Record<string, ServiceScope> = {
  "desenvolvimento-de-apps": {
    examples: [
      "Aplicativo para clientes acompanharem pedidos e atendimentos.",
      "Ferramenta móvel para a equipe registrar informações em campo.",
    ],
    deliverables: [
      "Jornadas e protótipos das tarefas principais.",
      "Aplicativo e integrações previstos no escopo aprovado.",
      "Plano de testes, distribuição e acompanhamento do lançamento.",
    ],
  },
  "desenvolvimento-web": {
    examples: [
      "Site institucional que apresenta serviços e orienta o visitante até o contato.",
      "Portal ou aplicação web com acesso e funcionalidades por perfil.",
    ],
    deliverables: [
      "Arquitetura das páginas e experiência responsiva.",
      "Implementação das páginas, formulários e integrações acordados.",
      "Configuração de publicação, metadados e validação de navegação.",
    ],
  },
  "software-sob-medida": {
    examples: [
      "Sistema de gestão para substituir controles paralelos em planilhas.",
      "Plataforma de produto digital com regras próprias e diferentes perfis de usuário.",
    ],
    deliverables: [
      "Regras de negócio e critérios de aceite da primeira versão.",
      "Fluxos operacionais e integrações priorizados com a equipe.",
      "Documentação de operação, acessos e plano de evolução.",
    ],
  },
  "integracao-de-sistemas": {
    examples: [
      "Enviar pedidos da loja para o ERP e atualizar o relacionamento no CRM.",
      "Sincronizar cadastros e acompanhar falhas entre ferramentas da empresa.",
    ],
    deliverables: [
      "Mapa dos dados, responsáveis e sentidos da sincronização.",
      "Conectores, validações e tratamento de novas tentativas acordados.",
      "Registros de falhas e procedimento de conciliação dos dados.",
    ],
  },
  "e-commerce": {
    examples: [
      "Loja virtual com catálogo, pagamento e acompanhamento de pedidos.",
      "Operação de vendas conectada à gestão de estoque e ao ERP.",
    ],
    deliverables: [
      "Jornada de compra e organização do catálogo.",
      "Fluxos de pedido, pagamento e integrações definidos no escopo.",
      "Testes de compra, cancelamento e operação antes da publicação.",
    ],
  },
  "automacao-de-processos": {
    examples: [
      "Automatizar tarefas repetidas entre formulários, sistemas e notificações.",
      "Organizar aprovações e encaminhamentos com regras claras de operação.",
    ],
    deliverables: [
      "Mapeamento do processo atual e das exceções.",
      "Fluxos automáticos com validações e responsáveis definidos.",
      "Monitoramento e orientação para tratar execuções com falha.",
    ],
  },
};
