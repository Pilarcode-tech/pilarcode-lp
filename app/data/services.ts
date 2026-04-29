export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  gradient: string;
  iconName: string;
  introduction: string[];
  benefits: ServiceBenefit[];
  processSteps: ProcessStep[];
  technologies: string[];
  faq: ServiceFAQ[];
  relatedSlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: "desenvolvimento-de-apps",
    title: "Desenvolvimento de Apps",
    shortTitle: "Apps",
    subtitle:
      "Aplicativos móveis sob medida que conectam sua empresa ao cliente final com performance e usabilidade excepcionais.",
    description:
      "Aplicativos intuitivos e de alta performance, personalizados para as necessidades do seu negócio.",
    metaTitle: "Desenvolvimento de Apps | Aplicativos iOS e Android",
    metaDescription:
      "Desenvolvimento de aplicativos móveis sob medida para iOS e Android. Apps nativos e multiplataforma com alta performance, UX intuitiva e integração com sistemas existentes. Solicite um orçamento.",
    keywords: [
      "desenvolvimento de apps",
      "criar aplicativo",
      "app sob medida",
      "desenvolvimento mobile",
      "aplicativo iOS",
      "aplicativo Android",
      "app empresarial",
      "desenvolvimento de aplicativos São Paulo",
      "app React Native",
      "aplicativo Flutter",
    ],
    gradient: "from-[#278deb] to-[#211cda]",
    iconName: "Code",
    introduction: [
      "Na era mobile-first, ter um aplicativo de qualidade não é mais um diferencial — é uma necessidade. Na Pilarcode, desenvolvemos aplicativos móveis que transformam a forma como sua empresa se conecta com clientes, otimiza operações e gera receita.",
      "Nosso time de desenvolvedores especializados cria apps nativos e multiplataforma para iOS e Android, garantindo performance excepcional, interfaces intuitivas e integração perfeita com seus sistemas existentes. Do conceito ao lançamento nas lojas, cuidamos de cada etapa.",
      "Seja para um app de vendas, um sistema de gestão interno ou uma plataforma de relacionamento com o cliente, entregamos soluções que combinam tecnologia de ponta com design centrado no usuário.",
    ],
    benefits: [
      {
        title: "Performance Nativa",
        description:
          "Apps rápidos e fluidos que aproveitam ao máximo os recursos do dispositivo, garantindo a melhor experiência ao usuário.",
        icon: "Speed",
      },
      {
        title: "Design UX/UI",
        description:
          "Interfaces modernas e intuitivas projetadas com foco na jornada do usuário, aumentando engajamento e retenção.",
        icon: "DesignServices",
      },
      {
        title: "Multiplataforma",
        description:
          "Desenvolvimento para iOS e Android com uma única base de código, reduzindo custos e tempo de entrega sem perder qualidade.",
        icon: "Devices",
      },
      {
        title: "Integração Total",
        description:
          "Conexão nativa com APIs, ERPs, CRMs e outros sistemas da sua empresa para um fluxo de dados unificado.",
        icon: "Api",
      },
      {
        title: "Publicação nas Lojas",
        description:
          "Suporte completo para publicação na App Store e Google Play, incluindo otimização de ASO para maior visibilidade.",
        icon: "StoreMallDirectory",
      },
      {
        title: "Manutenção Contínua",
        description:
          "Suporte pós-lançamento com atualizações, monitoramento de performance e evolução contínua do aplicativo.",
        icon: "SupportAgent",
      },
    ],
    processSteps: [
      {
        title: "Descoberta e Estratégia",
        description:
          "Entendemos suas necessidades, público-alvo e objetivos de negócio para definir a melhor estratégia de desenvolvimento.",
      },
      {
        title: "Design e Prototipagem",
        description:
          "Criamos wireframes e protótipos interativos para validar a experiência do usuário antes do desenvolvimento.",
      },
      {
        title: "Desenvolvimento Ágil",
        description:
          "Construímos o app em sprints, com entregas incrementais e feedback constante para garantir alinhamento.",
      },
      {
        title: "Testes e QA",
        description:
          "Bateria completa de testes em dispositivos reais para garantir qualidade, performance e segurança.",
      },
      {
        title: "Lançamento e Suporte",
        description:
          "Publicação nas lojas com ASO otimizado e suporte contínuo pós-lançamento para evolução do app.",
      },
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "TypeScript",
      "Firebase",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "AWS",
    ],
    faq: [
      {
        question: "Quanto tempo leva para desenvolver um aplicativo?",
        answer:
          "O prazo varia conforme a complexidade do projeto. Um MVP (produto mínimo viável) pode ficar pronto entre 8 e 12 semanas. Projetos mais robustos podem levar de 4 a 6 meses. Na fase de descoberta, definimos um cronograma realista para seu projeto.",
      },
      {
        question:
          "Vocês desenvolvem para iOS e Android ao mesmo tempo?",
        answer:
          "Sim. Utilizamos tecnologias multiplataforma como React Native e Flutter que permitem desenvolver para ambos os sistemas com uma única base de código, reduzindo custos e mantendo alta qualidade em ambas as plataformas.",
      },
      {
        question: "O app pode ser integrado com meu sistema atual?",
        answer:
          "Com certeza. Desenvolvemos integrações com ERPs, CRMs, gateways de pagamento, sistemas de estoque e qualquer outro sistema via API. A integração é planejada desde o início do projeto.",
      },
      {
        question:
          "Vocês cuidam da publicação na App Store e Google Play?",
        answer:
          "Sim, gerenciamos todo o processo de submissão e aprovação nas lojas, incluindo preparação de assets, descrições otimizadas (ASO) e compliance com as diretrizes de cada plataforma.",
      },
      {
        question: "Como funciona o suporte após o lançamento?",
        answer:
          "Oferecemos planos de manutenção que incluem correção de bugs, atualizações de sistema operacional, monitoramento de performance e implementação de novas funcionalidades conforme a necessidade.",
      },
    ],
    relatedSlugs: ["desenvolvimento-web", "software-sob-medida", "integracao-de-sistemas"],
  },
  {
    slug: "desenvolvimento-web",
    title: "Desenvolvimento Web",
    shortTitle: "Web",
    subtitle:
      "Sites e aplicações web modernas, responsivas e otimizadas para conversão e performance em todos os dispositivos.",
    description:
      "Sites atraentes, funcionais e otimizados para todos os dispositivos, com foco em conversão.",
    metaTitle: "Desenvolvimento Web | Sites e Aplicações Web",
    metaDescription:
      "Desenvolvimento de sites e aplicações web modernas com foco em performance, SEO e conversão. Landing pages, portais corporativos e sistemas web responsivos. Solicite um orçamento.",
    keywords: [
      "desenvolvimento web",
      "criar site",
      "site institucional",
      "landing page",
      "aplicação web",
      "site responsivo",
      "desenvolvimento web São Paulo",
      "site profissional",
      "portal corporativo",
      "PWA",
    ],
    gradient: "from-[#03515d] to-[#278deb]",
    iconName: "Language",
    introduction: [
      "Seu site é a vitrine digital da sua empresa — e precisa impressionar em segundos. Na Pilarcode, criamos sites e aplicações web que combinam design moderno, performance excepcional e estratégia de conversão para transformar visitantes em clientes.",
      "Desenvolvemos desde landing pages de alta conversão até portais corporativos complexos e aplicações web progressivas (PWA). Cada projeto é construído com as tecnologias mais modernas do mercado, garantindo velocidade de carregamento, responsividade perfeita e SEO otimizado.",
      "Com foco em resultados mensuráveis, nossos sites são projetados para ranquear bem no Google, carregar rapidamente e proporcionar uma experiência de navegação excepcional em qualquer dispositivo.",
    ],
    benefits: [
      {
        title: "SEO Otimizado",
        description:
          "Estrutura técnica pensada para rankear no Google: meta tags, schema markup, Core Web Vitals e conteúdo otimizado.",
        icon: "TravelExplore",
      },
      {
        title: "Performance Máxima",
        description:
          "Sites ultrarrápidos com score alto no PageSpeed, usando lazy loading, otimização de imagens e código limpo.",
        icon: "Speed",
      },
      {
        title: "Design Responsivo",
        description:
          "Layout que se adapta perfeitamente a qualquer tela — desktop, tablet e smartphone — sem perder qualidade visual.",
        icon: "Devices",
      },
      {
        title: "Foco em Conversão",
        description:
          "CTAs estratégicos, formulários otimizados e jornada do usuário pensada para maximizar leads e vendas.",
        icon: "TrendingUp",
      },
      {
        title: "CMS Integrado",
        description:
          "Gestão de conteúdo simplificada para que sua equipe atualize textos, imagens e páginas sem depender de desenvolvedores.",
        icon: "EditNote",
      },
      {
        title: "Segurança SSL",
        description:
          "Certificado SSL, proteção contra ataques, backups automáticos e conformidade com a LGPD para proteger seus dados.",
        icon: "Security",
      },
    ],
    processSteps: [
      {
        title: "Briefing e Planejamento",
        description:
          "Levantamento de requisitos, análise de concorrentes e definição da arquitetura de informação do site.",
      },
      {
        title: "Design e Aprovação",
        description:
          "Criação de layouts em alta fidelidade com sua identidade visual, aprovados antes do desenvolvimento.",
      },
      {
        title: "Desenvolvimento Front-end",
        description:
          "Codificação pixel-perfect do design com HTML semântico, CSS moderno e JavaScript otimizado.",
      },
      {
        title: "Integrações e Back-end",
        description:
          "Conexão com APIs, CMS, formulários, analytics e todas as ferramentas necessárias para seu negócio.",
      },
      {
        title: "Deploy e Otimização",
        description:
          "Publicação em infraestrutura de alta disponibilidade com otimização de performance e monitoramento.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "WordPress",
      "Vercel",
      "AWS",
      "PostgreSQL",
      "Headless CMS",
    ],
    faq: [
      {
        question: "Qual a diferença entre site e aplicação web?",
        answer:
          "Um site institucional é focado em apresentar sua empresa e serviços. Uma aplicação web (web app) é um sistema interativo acessível pelo navegador, como dashboards, plataformas SaaS ou portais. Desenvolvemos ambos com a mesma excelência.",
      },
      {
        question: "O site será otimizado para o Google (SEO)?",
        answer:
          "Sim, todos os nossos sites são desenvolvidos com SEO técnico desde a estrutura: URLs amigáveis, meta tags, schema markup, sitemap, performance otimizada (Core Web Vitals) e HTML semântico para garantir bom posicionamento.",
      },
      {
        question: "Consigo atualizar o conteúdo do site sozinho?",
        answer:
          "Sim. Implementamos sistemas de gestão de conteúdo (CMS) intuitivos que permitem que sua equipe atualize textos, imagens e páginas sem conhecimento técnico. Também oferecemos treinamento de uso.",
      },
      {
        question: "O site funciona bem no celular?",
        answer:
          "Absolutamente. Todos os nossos projetos são desenvolvidos com abordagem mobile-first, garantindo que o site funcione perfeitamente em smartphones, tablets e desktops.",
      },
      {
        question: "Vocês oferecem hospedagem e manutenção?",
        answer:
          "Sim, oferecemos planos de hospedagem em infraestrutura de alta disponibilidade (AWS, Vercel) e manutenção mensal que inclui atualizações de segurança, backups e suporte técnico.",
      },
    ],
    relatedSlugs: ["e-commerce", "desenvolvimento-de-apps", "software-sob-medida"],
  },
  {
    slug: "software-sob-medida",
    title: "Software Sob Medida",
    shortTitle: "Software",
    subtitle:
      "Sistemas personalizados que se adaptam perfeitamente aos processos da sua empresa, não o contrário.",
    description:
      "Soluções de software personalizadas que atendem às necessidades específicas da sua empresa.",
    metaTitle: "Software Sob Medida | Sistemas Personalizados",
    metaDescription:
      "Desenvolvimento de software sob medida para empresas. Sistemas de gestão, ERPs personalizados, dashboards e plataformas digitais. Tecnologia que se adapta ao seu negócio. Solicite um orçamento.",
    keywords: [
      "software sob medida",
      "sistema personalizado",
      "desenvolvimento de software",
      "ERP personalizado",
      "sistema de gestão",
      "software empresarial",
      "software sob medida São Paulo",
      "dashboard personalizado",
      "plataforma digital",
      "SaaS",
    ],
    gradient: "from-[#211cda] to-[#060554]",
    iconName: "Settings",
    introduction: [
      "Softwares genéricos limitam o crescimento da sua empresa. Na Pilarcode, desenvolvemos sistemas sob medida que se adaptam perfeitamente aos processos do seu negócio, eliminando as limitações de soluções prontas e oferecendo exatamente o que você precisa.",
      "Nosso time de engenheiros de software projeta e constrói desde sistemas de gestão empresarial (ERP) até plataformas SaaS complexas, sempre com arquitetura escalável, segurança robusta e interfaces intuitivas que sua equipe vai adorar usar.",
      "Cada linha de código é pensada para resolver problemas reais do seu negócio. Automatizamos processos manuais, centralizamos informações dispersas e criamos ferramentas que aumentam a produtividade e reduzem custos operacionais.",
    ],
    benefits: [
      {
        title: "100% Personalizado",
        description:
          "Software criado do zero para atender exatamente os fluxos e regras de negócio da sua empresa, sem adaptações forçadas.",
        icon: "Tune",
      },
      {
        title: "Escalável",
        description:
          "Arquitetura preparada para crescer junto com seu negócio, suportando mais usuários, dados e funcionalidades.",
        icon: "TrendingUp",
      },
      {
        title: "Segurança Avançada",
        description:
          "Controle de acesso, criptografia, auditoria e conformidade com LGPD para proteger seus dados sensíveis.",
        icon: "Shield",
      },
      {
        title: "Interface Intuitiva",
        description:
          "Design focado na produtividade do usuário, reduzindo curva de aprendizado e aumentando a adoção pela equipe.",
        icon: "TouchApp",
      },
      {
        title: "Relatórios Inteligentes",
        description:
          "Dashboards e relatórios customizados que transformam dados em insights para tomada de decisão estratégica.",
        icon: "Assessment",
      },
      {
        title: "Propriedade Total",
        description:
          "O código-fonte é seu. Sem taxas de licença recorrentes, sem dependência de fornecedores e sem limitações.",
        icon: "Key",
      },
    ],
    processSteps: [
      {
        title: "Análise de Processos",
        description:
          "Mapeamento detalhado dos processos, regras de negócio e necessidades para definir o escopo ideal do sistema.",
      },
      {
        title: "Arquitetura e Design",
        description:
          "Definição da arquitetura técnica, modelo de dados e protótipos de interface para validação.",
      },
      {
        title: "Desenvolvimento Iterativo",
        description:
          "Construção em ciclos curtos com entregas frequentes, permitindo feedback e ajustes ao longo do caminho.",
      },
      {
        title: "Testes e Validação",
        description:
          "Testes automatizados, de integração e de aceitação para garantir que tudo funciona como esperado.",
      },
      {
        title: "Implantação e Treinamento",
        description:
          "Deploy em ambiente de produção com migração de dados, treinamento da equipe e documentação completa.",
      },
    ],
    technologies: [
      "Node.js",
      "Python",
      "React",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS",
      "TypeScript",
      "Redis",
    ],
    faq: [
      {
        question:
          "Quando devo optar por software sob medida ao invés de pronto?",
        answer:
          "Software sob medida é ideal quando soluções prontas não atendem seus processos específicos, quando você precisa de integrações complexas com sistemas existentes, ou quando quer um diferencial competitivo que um software genérico não pode oferecer.",
      },
      {
        question: "Quanto custa desenvolver um software personalizado?",
        answer:
          "O investimento varia conforme a complexidade do sistema. Trabalhamos com orçamentos transparentes e oferecemos a opção de começar com um MVP (versão mínima funcional) para validar a solução com menor investimento inicial.",
      },
      {
        question: "O software pode ser acessado pela internet?",
        answer:
          "Sim. Desenvolvemos sistemas web acessíveis de qualquer lugar, em qualquer dispositivo, via navegador. Também podemos criar versões desktop ou mobile conforme a necessidade.",
      },
      {
        question: "Como funciona a manutenção do software?",
        answer:
          "Oferecemos contratos de manutenção que incluem correções, atualizações de segurança, melhorias de performance e implementação de novas funcionalidades. Você pode contar com nosso suporte técnico sempre que precisar.",
      },
      {
        question: "Vocês fazem migração de dados do sistema antigo?",
        answer:
          "Sim, realizamos migração completa de dados do sistema anterior para o novo, garantindo integridade das informações e continuidade das operações durante a transição.",
      },
    ],
    relatedSlugs: [
      "integracao-de-sistemas",
      "automacao-de-processos",
      "desenvolvimento-web",
    ],
  },
  {
    slug: "integracao-de-sistemas",
    title: "Integração de Sistemas",
    shortTitle: "Integração",
    subtitle:
      "Conectamos seus sistemas para criar um ecossistema digital unificado, eliminando retrabalho e silos de informação.",
    description:
      "Conectamos sistemas distintos para criar um ambiente de TI coeso e eficiente.",
    metaTitle: "Integração de Sistemas | APIs e Conectores",
    metaDescription:
      "Integração de sistemas empresariais: ERP, CRM, e-commerce, gateways de pagamento e mais. Conectamos seus sistemas via APIs para eliminar retrabalho e centralizar dados. Solicite um orçamento.",
    keywords: [
      "integração de sistemas",
      "integração API",
      "conectar sistemas",
      "integração ERP",
      "integração CRM",
      "middleware",
      "integração de sistemas São Paulo",
      "API REST",
      "webhook",
      "iPaaS",
    ],
    gradient: "from-[#278deb] to-[#211cda]",
    iconName: "IntegrationInstructions",
    introduction: [
      "Sua empresa usa vários sistemas que não conversam entre si? Dados duplicados, retrabalho manual e informações desatualizadas são sintomas de um ecossistema digital fragmentado. Na Pilarcode, resolvemos isso conectando seus sistemas de forma inteligente e automatizada.",
      "Desenvolvemos integrações robustas entre ERPs, CRMs, plataformas de e-commerce, gateways de pagamento, sistemas de logística e qualquer outro software via API. O resultado? Dados fluindo em tempo real, processos automatizados e uma visão unificada do seu negócio.",
      "Trabalhamos com APIs REST, GraphQL, webhooks, filas de mensagens e middleware personalizado para garantir que cada integração seja confiável, segura e escalável — independente da complexidade dos seus sistemas.",
    ],
    benefits: [
      {
        title: "Dados Unificados",
        description:
          "Centralize informações de múltiplos sistemas em uma única fonte de verdade, eliminando inconsistências e duplicações.",
        icon: "Hub",
      },
      {
        title: "Automação de Fluxos",
        description:
          "Elimine tarefas manuais repetitivas com fluxos automatizados entre sistemas, reduzindo erros e economizando tempo.",
        icon: "AutoMode",
      },
      {
        title: "Tempo Real",
        description:
          "Sincronização instantânea de dados entre sistemas para que sua equipe trabalhe sempre com informações atualizadas.",
        icon: "Sync",
      },
      {
        title: "APIs Robustas",
        description:
          "Desenvolvimento de APIs documentadas, versionadas e seguras que conectam seus sistemas com confiabilidade.",
        icon: "Api",
      },
      {
        title: "Monitoramento",
        description:
          "Dashboards de monitoramento para acompanhar o status das integrações e identificar problemas rapidamente.",
        icon: "Monitoring",
      },
      {
        title: "Escalabilidade",
        description:
          "Arquitetura preparada para crescer com seu volume de dados e transações sem perda de performance.",
        icon: "ScatterPlot",
      },
    ],
    processSteps: [
      {
        title: "Mapeamento de Sistemas",
        description:
          "Análise detalhada dos sistemas existentes, APIs disponíveis e fluxos de dados para definir a estratégia de integração.",
      },
      {
        title: "Arquitetura de Integração",
        description:
          "Desenho da arquitetura técnica, definição de protocolos e estratégia de sincronização entre sistemas.",
      },
      {
        title: "Desenvolvimento de Conectores",
        description:
          "Criação de conectores e middlewares personalizados para cada sistema, com tratamento de erros e retry.",
      },
      {
        title: "Testes de Integração",
        description:
          "Validação completa dos fluxos de dados entre sistemas, incluindo cenários de erro e alta carga.",
      },
      {
        title: "Go-Live e Monitoramento",
        description:
          "Ativação em produção com monitoramento em tempo real e suporte para garantir estabilidade.",
      },
    ],
    technologies: [
      "REST APIs",
      "GraphQL",
      "Webhooks",
      "Node.js",
      "Python",
      "RabbitMQ",
      "Redis",
      "Docker",
      "AWS Lambda",
      "Zapier",
    ],
    faq: [
      {
        question: "Quais sistemas vocês conseguem integrar?",
        answer:
          "Integramos praticamente qualquer sistema que possua API ou permita troca de dados: ERPs (SAP, TOTVS, Omie), CRMs (Salesforce, HubSpot, Pipedrive), e-commerces (VTEX, Shopify, WooCommerce), gateways de pagamento, sistemas de logística e muito mais.",
      },
      {
        question: "A integração funciona em tempo real?",
        answer:
          "Sim, desenvolvemos integrações síncronas (tempo real) e assíncronas (por agendamento) conforme a necessidade de cada fluxo. Para dados críticos como estoque e pedidos, priorizamos sincronização em tempo real via webhooks.",
      },
      {
        question:
          "O que acontece se um dos sistemas ficar fora do ar?",
        answer:
          "Implementamos mecanismos de resiliência como filas de mensagens, retry automático e circuit breakers. Se um sistema ficar indisponível, os dados são armazenados em fila e processados automaticamente quando o sistema voltar.",
      },
      {
        question: "É possível integrar sistemas legados?",
        answer:
          "Sim. Para sistemas legados sem API moderna, desenvolvemos conectores personalizados que podem trabalhar com arquivos (CSV, XML), bancos de dados diretos ou protocolos específicos do sistema.",
      },
      {
        question: "Como é feito o monitoramento das integrações?",
        answer:
          "Implementamos dashboards de monitoramento que mostram status em tempo real, volume de transações, erros e alertas. Em caso de falha, notificações são enviadas automaticamente para resposta rápida.",
      },
    ],
    relatedSlugs: [
      "software-sob-medida",
      "automacao-de-processos",
      "e-commerce",
    ],
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    shortTitle: "E-Commerce",
    subtitle:
      "Lojas virtuais completas e otimizadas para vender mais, com experiência de compra que fideliza clientes.",
    description:
      "Plataformas de comércio eletrônico eficientes, projetadas para impulsionar suas vendas online.",
    metaTitle: "E-Commerce | Loja Virtual e Plataforma de Vendas",
    metaDescription:
      "Desenvolvimento de e-commerce e lojas virtuais completas. Plataformas de vendas online com checkout otimizado, integração com meios de pagamento e gestão de estoque. Solicite um orçamento.",
    keywords: [
      "e-commerce",
      "loja virtual",
      "criar loja virtual",
      "plataforma de vendas online",
      "e-commerce São Paulo",
      "loja online",
      "checkout otimizado",
      "marketplace",
      "comércio eletrônico",
      "vendas online",
    ],
    gradient: "from-[#278deb] to-[#03515d]",
    iconName: "ShoppingCart",
    introduction: [
      "O e-commerce brasileiro não para de crescer, e sua empresa precisa estar preparada para aproveitar esse potencial. Na Pilarcode, desenvolvemos lojas virtuais completas que não apenas vendem, mas criam experiências de compra memoráveis que fidelizam clientes.",
      "De lojas virtuais personalizadas a marketplaces complexos, nossa expertise em e-commerce abrange toda a jornada de compra: catálogo de produtos inteligente, checkout otimizado para reduzir abandono de carrinho, integração com múltiplos meios de pagamento e logística automatizada.",
      "Cada e-commerce que construímos é pensado para performance, SEO e conversão. Isso significa páginas que carregam rápido, produtos que aparecem no Google e uma experiência mobile impecável — porque mais de 70% das compras online no Brasil são feitas pelo celular.",
    ],
    benefits: [
      {
        title: "Checkout Otimizado",
        description:
          "Processo de compra simplificado e intuitivo que reduz abandono de carrinho e maximiza a taxa de conversão.",
        icon: "ShoppingCartCheckout",
      },
      {
        title: "Multi-Pagamento",
        description:
          "Integração com Pix, cartões, boleto, carteiras digitais e parcelamento para oferecer todas as opções ao cliente.",
        icon: "CreditCard",
      },
      {
        title: "Gestão de Estoque",
        description:
          "Controle automatizado de estoque com alertas de reposição, sincronização multi-canal e gestão de variações.",
        icon: "Inventory",
      },
      {
        title: "SEO para E-Commerce",
        description:
          "Estrutura otimizada para que seus produtos apareçam no Google Shopping e nas buscas orgânicas.",
        icon: "TravelExplore",
      },
      {
        title: "Mobile-First",
        description:
          "Loja otimizada para compras pelo celular, com navegação fluida e pagamento simplificado para telas touch.",
        icon: "PhoneIphone",
      },
      {
        title: "Analytics de Vendas",
        description:
          "Relatórios detalhados de vendas, comportamento do usuário e funil de conversão para decisões baseadas em dados.",
        icon: "Analytics",
      },
    ],
    processSteps: [
      {
        title: "Estratégia Comercial",
        description:
          "Análise do seu mercado, concorrentes e público para definir a melhor estratégia de e-commerce.",
      },
      {
        title: "Design da Loja",
        description:
          "Criação do layout com foco em UX de compra, organização de catálogo e identidade visual da marca.",
      },
      {
        title: "Desenvolvimento e Integrações",
        description:
          "Construção da plataforma com integrações de pagamento, frete, estoque e ferramentas de marketing.",
      },
      {
        title: "Cadastro e Configuração",
        description:
          "Setup de produtos, categorias, frete, impostos e configurações fiscais para operação completa.",
      },
      {
        title: "Lançamento e Otimização",
        description:
          "Go-live com monitoramento de performance, testes de conversão e otimização contínua de resultados.",
      },
    ],
    technologies: [
      "Shopify",
      "VTEX",
      "WooCommerce",
      "Next.js",
      "Stripe",
      "MercadoPago",
      "PagSeguro",
      "Node.js",
      "PostgreSQL",
      "Redis",
    ],
    faq: [
      {
        question:
          "Qual plataforma de e-commerce vocês recomendam?",
        answer:
          "Depende do seu negócio. Para operações menores, Shopify é excelente. Para grandes operações no Brasil, VTEX é referência. Também desenvolvemos e-commerces 100% personalizados com Next.js para quem precisa de total flexibilidade. Avaliamos seu caso e recomendamos a melhor opção.",
      },
      {
        question:
          "O e-commerce já vem integrado com meios de pagamento?",
        answer:
          "Sim, integramos com os principais meios de pagamento do Brasil: Pix, cartões de crédito/débito (via Stripe, MercadoPago, PagSeguro), boleto bancário e carteiras digitais. O checkout é otimizado para máxima conversão.",
      },
      {
        question: "Vocês integram com transportadoras e Correios?",
        answer:
          "Sim, integramos com Correios, transportadoras privadas e plataformas de frete como Melhor Envio e Frenet. O cálculo de frete é automático e o rastreamento de pedidos é integrado.",
      },
      {
        question: "Posso vender em marketplaces também?",
        answer:
          "Sim, podemos integrar sua loja com marketplaces como Mercado Livre, Amazon, Magazine Luiza e outros, centralizando a gestão de pedidos e estoque em um único painel.",
      },
      {
        question: "Como funciona a emissão de notas fiscais?",
        answer:
          "Integramos com sistemas de emissão de NF-e como Bling, Tiny e outros, automatizando a emissão de notas fiscais a cada venda. Também configuramos as regras tributárias conforme sua operação.",
      },
    ],
    relatedSlugs: [
      "desenvolvimento-web",
      "integracao-de-sistemas",
      "automacao-de-processos",
    ],
  },
  {
    slug: "automacao-de-processos",
    title: "Automação de Processos",
    shortTitle: "Automação",
    subtitle:
      "Elimine tarefas manuais e repetitivas com automação inteligente que aumenta a produtividade e reduz custos operacionais.",
    description:
      "Otimize operações, reduza erros e aumente a eficiência com automação inteligente.",
    metaTitle: "Automação de Processos | RPA e Workflows",
    metaDescription:
      "Automação de processos empresariais com RPA, workflows inteligentes e integração de sistemas. Reduza custos, elimine erros manuais e aumente a produtividade. Solicite um orçamento.",
    keywords: [
      "automação de processos",
      "RPA",
      "automação empresarial",
      "workflow automatizado",
      "automação de processos São Paulo",
      "robô de automação",
      "BPM",
      "automação inteligente",
      "redução de custos",
      "produtividade empresarial",
    ],
    gradient: "from-[#211cda] to-[#278deb]",
    iconName: "AutoFixHigh",
    introduction: [
      "Sua equipe perde horas com tarefas manuais e repetitivas? Planilhas que precisam ser atualizadas, dados que devem ser copiados entre sistemas, relatórios que precisam ser compilados? Na Pilarcode, transformamos esses processos manuais em fluxos automatizados que funcionam 24/7.",
      "Utilizamos tecnologias de RPA (Robotic Process Automation), workflows inteligentes e integração de sistemas para automatizar desde tarefas simples até processos complexos que envolvem múltiplos departamentos e sistemas. O resultado é uma operação mais eficiente, com menos erros e custos reduzidos.",
      "Nossa abordagem começa pelo mapeamento dos processos mais críticos e de maior impacto, implementando automações que geram retorno imediato. Com o tempo, expandimos a automação para cobrir toda a operação, criando uma empresa verdadeiramente digital.",
    ],
    benefits: [
      {
        title: "Redução de Custos",
        description:
          "Automatize tarefas que antes demandavam horas de trabalho manual, liberando sua equipe para atividades estratégicas.",
        icon: "Savings",
      },
      {
        title: "Zero Erros Manuais",
        description:
          "Robôs de automação executam tarefas com precisão 100%, eliminando erros humanos em processos críticos.",
        icon: "VerifiedUser",
      },
      {
        title: "Operação 24/7",
        description:
          "Processos automatizados funcionam ininterruptamente, sem pausas, garantindo continuidade operacional.",
        icon: "Schedule",
      },
      {
        title: "Workflows Inteligentes",
        description:
          "Fluxos de aprovação, notificação e escalação automáticos que agilizam a tomada de decisão.",
        icon: "AccountTree",
      },
      {
        title: "Relatórios Automáticos",
        description:
          "Geração e distribuição automática de relatórios, dashboards e alertas para stakeholders.",
        icon: "Summarize",
      },
      {
        title: "ROI Mensurável",
        description:
          "Métricas claras de economia de tempo, redução de erros e ganho de produtividade para cada automação.",
        icon: "TrendingUp",
      },
    ],
    processSteps: [
      {
        title: "Mapeamento de Processos",
        description:
          "Identificação e documentação dos processos atuais, gargalos e oportunidades de automação com maior ROI.",
      },
      {
        title: "Priorização e Design",
        description:
          "Definição de prioridades com base no impacto e desenho dos fluxos automatizados com regras de negócio.",
      },
      {
        title: "Desenvolvimento de Robôs",
        description:
          "Criação dos robôs e workflows automatizados, com tratamento de exceções e logs de execução.",
      },
      {
        title: "Testes e Validação",
        description:
          "Execução de testes em cenários reais para garantir que a automação funciona corretamente em todas as situações.",
      },
      {
        title: "Implantação e Monitoramento",
        description:
          "Ativação em produção com monitoramento contínuo, métricas de performance e ajustes de otimização.",
      },
    ],
    technologies: [
      "Python",
      "Node.js",
      "n8n",
      "Zapier",
      "Power Automate",
      "AWS Lambda",
      "Docker",
      "Redis",
      "PostgreSQL",
      "Selenium",
    ],
    faq: [
      {
        question: "Quais processos podem ser automatizados?",
        answer:
          "Praticamente qualquer processo repetitivo e baseado em regras: preenchimento de planilhas, envio de e-mails, geração de relatórios, atualização de sistemas, processamento de pedidos, conciliação financeira, onboarding de clientes e muito mais.",
      },
      {
        question:
          "Automação vai substituir meus funcionários?",
        answer:
          "Não. A automação libera sua equipe de tarefas repetitivas para que possam focar em atividades estratégicas e de maior valor. Na prática, equipes que usam automação se tornam mais produtivas e satisfeitas.",
      },
      {
        question: "Quanto tempo leva para ver resultados?",
        answer:
          "Automações simples podem ser implementadas em 2-4 semanas e geram resultado imediato. Projetos mais complexos de BPM podem levar 2-3 meses, mas o ROI geralmente aparece já no primeiro mês de operação.",
      },
      {
        question:
          "Preciso mudar meus sistemas atuais para automatizar?",
        answer:
          "Não necessariamente. Nossos robôs de automação interagem com seus sistemas existentes — incluindo sistemas legados e planilhas. A automação se adapta à sua infraestrutura, não o contrário.",
      },
      {
        question: "Como medir o retorno do investimento em automação?",
        answer:
          "Implementamos métricas de acompanhamento que medem horas economizadas, redução de erros, velocidade de processamento e economia financeira. Antes de cada automação, definimos os KPIs para que o ROI seja mensurável.",
      },
    ],
    relatedSlugs: [
      "integracao-de-sistemas",
      "software-sob-medida",
      "desenvolvimento-de-apps",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as ServiceData[];
}
