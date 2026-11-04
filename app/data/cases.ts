export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  description: string;
  url: string;
  challenge: string;
  solution: string;
  features: string[];
  outcome: string;
  serviceSlugs: string[];
}

// Projetos autorizados para publicação pelo responsável pela Pilarcode.
// Descrições funcionais; sem métricas ou depoimentos não comprovados.
export const caseStudies: CaseStudy[] = [
  {
    slug: "nponto",
    name: "nPonto",
    category: "Plataforma de ponto eletrônico",
    description:
      "Plataforma digital para registrar ponto e acompanhar jornadas, ocorrências e banco de horas em uma operação centralizada.",
    url: "https://www.nponto.com.br",
    challenge:
      "Reunir o registro de ponto dos colaboradores e a conferência da jornada em uma experiência que atenda pessoas e gestores com necessidades diferentes.",
    solution:
      "O produto apresenta registro por app, web ou kiosk, além de consultas e ferramentas de gestão para acompanhar a rotina da equipe.",
    features: [
      "Registro de ponto por diferentes canais.",
      "Consulta de jornadas, ocorrências e espelhos de ponto.",
      "Gestão de colaboradores e banco de horas.",
    ],
    outcome:
      "Uma plataforma que conecta o registro feito pelo colaborador ao acompanhamento da jornada pela gestão.",
    serviceSlugs: [
      "software-sob-medida",
      "desenvolvimento-de-apps",
      "integracao-de-sistemas",
    ],
  },
  {
    slug: "fieldis",
    name: "Fieldis",
    category: "Plataforma de RH e departamento pessoal",
    description:
      "Produto web para organizar rotinas de RH e departamento pessoal, do cadastro de colaboradores a documentos, férias e benefícios.",
    url: "https://fieldis.com.br",
    challenge:
      "Organizar informações de colaboradores e rotinas de departamento pessoal em uma plataforma com acesso adequado a cada perfil da operação.",
    solution:
      "O Fieldis reúne funcionalidades de cadastro, admissão, férias, benefícios, documentos e folha em uma aplicação acessada pelo navegador.",
    features: [
      "Cadastro e acompanhamento de colaboradores.",
      "Organização de admissão, documentos, férias e benefícios.",
      "Acesso por perfil às rotinas de departamento pessoal.",
    ],
    outcome:
      "Uma base digital para a equipe acompanhar rotinas de RH e departamento pessoal em um único produto.",
    serviceSlugs: ["software-sob-medida", "desenvolvimento-web"],
  },
  {
    slug: "moretao-producoes",
    name: "Moretão Produções",
    category: "Site para produtora audiovisual",
    description:
      "Site institucional para apresentar os serviços de uma produtora audiovisual e orientar o visitante até o contato comercial.",
    url: "https://www.moretaoproducoes.com.br",
    challenge:
      "Apresentar uma oferta de produção audiovisual com clareza e transformar o interesse do visitante em uma conversa sobre o projeto.",
    solution:
      "O site organiza a apresentação da marca e dos serviços em uma navegação orientada à descoberta e ao contato.",
    features: [
      "Apresentação de vídeos para redes sociais e fotografia profissional.",
      "Seções para captação de eventos, edição e direção criativa.",
      "Chamadas para contato ao longo da experiência.",
    ],
    outcome:
      "Uma presença digital que explica o trabalho da produtora e oferece caminhos para iniciar o atendimento comercial.",
    serviceSlugs: ["desenvolvimento-web"],
  },
];
