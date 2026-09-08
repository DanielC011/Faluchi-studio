/**
 * CONFIGURAÇÃO GERAL DA LANDING PAGE - FALUCHI STUDIO
 * 
 * Daniel, altere facilmente qualquer informação, link, imagem ou texto neste arquivo!
 */

export const siteConfig = {
  // IDENTIDADE & CONTATO
  brand: {
    name: "FALUCHI",
    highlight: "STUDIO",
    expertName: "Daniel Faluchi",
    role: "Especialista em Landing Pages de Alta Conversão",
    city: "São Paulo, SP",
    
    // FOTO PRINCIPAL (HERO)
    heroImage: "https://i.imgur.com/EPGOImI.jpeg",
    
    // LINKS DE CONTATO
    whatsappNumber: "5521989380500",
    whatsappUrl: "https://wa.me/5521989380500?text=Olá%2C%20quero%20fazer%20um%20orçamento%21%21",
    whatsappMessage: "Olá! Vi sua página e gostaria de solicitar um orçamento para criação de uma Landing Page.",
    instagramUrl: "https://www.instagram.com/faluchi.studio/",
    instagramHandle: "@faluchi.studio",
    email: "daniel.faluchi@gmail.com",
    
    // ANO DE COPYRIGHT
    year: 2026,
  },

  // CORES DO DESIGN SYSTEM (Para referência e customização rápida)
  colors: {
    bg: "#08090D",        // Preto profundo
    card: "#151821",      // Cinza escuro
    cardHover: "#1A1F2C", // Hover
    border: "#232838",    // Bordas discretas
    blue: "#2563FF",      // Azul elétrico (CTAs e destaques)
    lightBlue: "#60A5FA", // Azul claro (efeitos e detalhes)
    text: "#F8FAFC",      // Branco puro/off-white
    muted: "#94A3B8",     // Cinza secundário
  },

  // 1. HERO - PRIMEIRA DOBRA
  hero: {
    badge: "Especialista em Landing Pages",
    headline: "Uma Landing Page profissional para transformar visitantes em clientes.",
    subheadline: "Eu crio páginas personalizadas para apresentar seu negócio, gerar confiança e levar seus clientes até o WhatsApp.",
    cta: "Quero minha Landing Page",
    microtext: "Orçamento sem compromisso • Atendimento direto",
  },

  // 2. O QUE É UMA LANDING PAGE?
  whatIs: {
    headline: "Mas afinal, o que é uma Landing Page?",
    lead: "É uma página criada com um objetivo específico: fazer o visitante realizar uma ação.",
    explanation: "Diferente de um site tradicional confuso e cheio de abas, a Landing Page reúne todas as informações importantes em um único lugar e conduz o visitante pelo caminho mais rápido e seguro até a decisão.",
    flowSteps: [
      { step: "Visitante", desc: "Acessa seu link pelo Instagram, anúncio ou Google" },
      { step: "Landing Page", desc: "Entende sua oferta e ganha confiança em segundos" },
      { step: "Contato", desc: "Clica no botão estratégico de WhatsApp" },
      { step: "Cliente", desc: "Recebe seu atendimento e fecha negócio" },
    ],
    useCases: [
      "Receber pedidos de orçamento",
      "Gerar contatos pelo WhatsApp",
      "Agendar serviços",
      "Vender produtos",
      "Divulgar serviços",
      "Apresentar uma oferta",
      "Capturar leads",
    ],
  },

  // 3. POR QUE MEU NEGÓCIO PRECISA DE UMA LANDING PAGE?
  whyNeed: {
    headline: "Por que seu negócio precisa de uma Landing Page?",
    painSituations: [
      "Seu cliente entra no Instagram, olha seu perfil e ainda não sabe exatamente o que você oferece.",
      "Seu cliente precisa perguntar tudo pelo WhatsApp antes de decidir.",
      "As informações do seu negócio estão espalhadas em vários lugares.",
      "Você investe em divulgação, mas não possui uma página preparada para receber esse visitante.",
    ],
    solutionHeadline: "Uma Landing Page resolve esse problema colocando sua oferta, benefícios, diferenciais e contato em um único lugar.",
    benefits: [
      {
        title: "Mais profissionalismo",
        desc: "Seu negócio passa a ter uma apresentação mais profissional na internet.",
      },
      {
        title: "Mais clareza",
        desc: "Seu cliente entende rapidamente o que você oferece.",
      },
      {
        title: "Mais confiança",
        desc: "Uma página bem estruturada transmite mais segurança para quem está conhecendo seu negócio.",
      },
      {
        title: "Mais praticidade",
        desc: "Todas as informações importantes ficam organizadas em um único lugar.",
      },
      {
        title: "Mais oportunidades",
        desc: "O visitante encontra facilmente o caminho para entrar em contato.",
      },
      {
        title: "Disponível 24 horas",
        desc: "Sua página pode apresentar seu negócio a qualquer momento do dia ou da noite.",
      },
    ],
  },

  // 4. NÃO É APENAS UMA PÁGINA BONITA
  notJustPretty: {
    headline: "Não é apenas uma página bonita",
    quoteTop: "Uma Landing Page bonita chama atenção. Uma Landing Page bem estruturada conduz o visitante até uma decisão.",
    quoteBottom: "Eu não entrego apenas uma página bonita. Crio uma página pensada para apresentar melhor o seu negócio.",
    pillars: [
      { title: "Organização das informações", desc: "Textos claros que guiam a leitura sem cansar o visitante." },
      { title: "Hierarquia visual", desc: "Elementos ordenados para destacar o que realmente importa." },
      { title: "Clareza da oferta", desc: "O visitante entende o que ganha e como contratar rapidamente." },
      { title: "Experiência no celular", desc: "Planejada de ponta a ponta para navegação rápida nos smartphones." },
      { title: "Chamadas para ação", desc: "Botões posicionados nos momentos certos de decisão da página." },
      { title: "Quebra de objeções", desc: "Respostas diretas para as dúvidas mais comuns dos seus clientes." },
      { title: "Facilidade de contato", desc: "Um clique e a conversa começa direto no seu WhatsApp." },
      { title: "Jornada do visitante", desc: "Um fluxo lógico do primeiro segundo até o envio da mensagem." },
    ],
  },

  // 5. O QUE EU FAÇO POR VOCÊ?
  process: {
    headline: "Você me explica o seu negócio. Eu transformo isso em uma página profissional.",
    steps: [
      {
        number: "01",
        title: "Entendo seu negócio",
        desc: "Entendo o que você oferece, para quem oferece e qual é o objetivo principal da página.",
      },
      {
        number: "02",
        title: "Estruturo a informação",
        desc: "Organizo os textos e informações para que seu cliente entenda sua oferta com facilidade.",
      },
      {
        number: "03",
        title: "Desenvolvo o design",
        desc: "Crio uma interface moderna, profissional e totalmente alinhada à sua identidade.",
      },
      {
        number: "04",
        title: "Entrego sua Landing Page",
        desc: "A página é desenvolvida para funcionar com perfeição no celular e computador, pronta para publicação.",
      },
    ],
  },

  // 6. O QUE VOCÊ RECEBE?
  deliverables: [
    "Landing Page personalizada",
    "Design moderno",
    "Layout responsivo",
    "Experiência otimizada para celular",
    "Botões de WhatsApp",
    "Estrutura focada em conversão",
    "Organização estratégica das informações",
    "Seções de benefícios e diferenciais",
    "FAQ quando necessário",
    "Código leve",
    "Página rápida",
    "SEO básico",
    "Preparação para publicação",
  ],

  // 7. DEMONSTRAÇÕES E EXEMPLOS DE PROJETOS
  portfolio: {
    sectionTitle: "Demonstrações",
    subtitle: "Exemplos de projetos e estruturas desenvolvidas para diferentes segmentos de mercado",
    disclaimer: "Estes são modelos visuais demonstrativos que ilustram a estrutura que posso criar para o seu ramo.",
    projects: [
      {
        id: "servicos",
        category: "Prestador de Serviço",
        title: "Serviços Especializados & Reformas",
        goal: "Orçamentos rápidos com envio direto de detalhes no WhatsApp",
        features: ["Lista de Serviços", "Diferenciais Técnicos", "Botão WhatsApp em destaque", "FAQ rápido"],
        deviceType: "Mobile & Desktop",
        colorAccent: "#2563FF",
      },
      {
        id: "local",
        category: "Negócio Local",
        title: "Clínica, Estética & Bem-Estar",
        goal: "Agendamentos imediatos e localização facilitada para o público da região",
        features: ["Horários de atendimento", "Tabela de procedimentos", "Mapa integrado", "Avaliações locais"],
        deviceType: "Mobile First",
        colorAccent: "#60A5FA",
      },
      {
        id: "autonomo",
        category: "Profissional Autônomo",
        title: "Advocacia, Consultoria & Arquitetura",
        goal: "Construção de autoridade e contato formal direto com o especialista",
        features: ["Apresentação do profissional", "Áreas de atuação", "Quebra de objeções", "Atendimento sigiloso"],
        deviceType: "Mobile & Desktop",
        colorAccent: "#38BDF8",
      },
      {
        id: "digital",
        category: "Produto Digital",
        title: "Curso Prático & Mentoria",
        goal: "Apresentação da transformação do curso e matrícula facilitada",
        features: ["Grade do conteúdo", "Garantia incondicional", "Para quem é / não é", "Suporte no WhatsApp"],
        deviceType: "Mobile First",
        colorAccent: "#818CF8",
      },
      {
        id: "empresa",
        category: "Empresa & B2B",
        title: "Soluções Corporativas & Terceirização",
        goal: "Geração de reuniões de apresentação com tomadores de decisão",
        features: ["Metodologia", "Soluções sob medida", "Solicitação de proposta", "Segurança corporativa"],
        deviceType: "Desktop & Mobile",
        colorAccent: "#6366F1",
      },
    ],
    // Galeria para Daniel adicionar links de imagens de projetos reais futuramente:
    galleryImages: [] as string[],
  },

  // 8. POR QUE FAZER COMIGO?
  whyMe: [
    {
      title: "Atendimento direto",
      desc: "Você trata diretamente comigo durante todo o projeto. Sem intermediários.",
    },
    {
      title: "Projeto personalizado",
      desc: "A página é construída de acordo com seu negócio e objetivo real, sem fórmulas genéricas.",
    },
    {
      title: "Foco em conversão",
      desc: "A estrutura é pensada estrategicamente para facilitar a tomada de decisão do visitante.",
    },
    {
      title: "Mobile First",
      desc: "A experiência é planejada prioritariamente para quem acessa pelo celular.",
    },
    {
      title: "Comunicação clara",
      desc: "Você entende com transparência tudo o que está sendo feito em cada etapa.",
    },
    {
      title: "Código leve",
      desc: "Desenvolvimento simples, rápido e sem frameworks pesados desnecessários.",
    },
  ],

  // 9. COMO FUNCIONA?
  howItWorks: {
    headline: "Como funciona para criar a sua página?",
    steps: [
      {
        step: "1",
        title: "Você entra em contato",
        desc: "Clique no botão do WhatsApp e me conte sobre seu negócio e suas metas.",
      },
      {
        step: "2",
        title: "Conversamos sobre o projeto",
        desc: "Entendo suas necessidades, seu público e definimos a estrutura ideal para a página.",
      },
      {
        step: "3",
        title: "Sua Landing Page é criada",
        desc: "Após a aprovação do orçamento, começo o desenvolvimento e entrego tudo pronto para publicar.",
      },
    ],
    cta: "Quero conversar sobre meu projeto",
  },

  // 10. PERGUNTAS FREQUENTES (FAQ)
  faq: [
    {
      question: "Preciso entender de programação?",
      answer: "Não. A parte técnica, de design e código da criação da página fica totalmente comigo. Você só precisa me explicar sobre o seu negócio e serviços.",
    },
    {
      question: "Minha empresa é pequena. Vale a pena?",
      answer: "Sim! Uma Landing Page pode ser a forma mais acessível, rápida e profissional de apresentar seu serviço na internet, se destacar de concorrentes e facilitar o contato com novos clientes.",
    },
    {
      question: "Funciona no celular?",
      answer: "Sim. A página é construída no padrão Mobile First: carrega com alta velocidade, tem botões fáceis de tocar com os dedos e adaptação perfeita a qualquer tamanho de smartphone ou computador.",
    },
    {
      question: "Posso colocar WhatsApp?",
      answer: "Sim. Todos os botões estratégicos direcionam o visitante direto para a sua conversa no WhatsApp com uma mensagem inicial já personalizada.",
    },
    {
      question: "Posso usar a Landing Page em anúncios?",
      answer: "Sim. Ela é ideal para receber visitantes do Google Ads, Instagram Ads e Facebook Ads, aproveitando muito melhor cada centavo investido em publicidade.",
    },
    {
      question: "Preciso ter um site completo?",
      answer: "Não necessariamente. Para a maioria dos negócios e profissionais liberais, uma Landing Page bem estruturada gera muito mais contatos e pedidos de orçamento do que um site grande cheio de menus desnecessários.",
    },
    {
      question: "Quanto custa?",
      answer: "O valor depende da estrutura e das necessidades específicas do seu projeto. Entre em contato pelo WhatsApp para receber um orçamento personalizado e sem compromisso.",
    },
  ],

  // 11. CTA INTERMEDIÁRIO
  midCta: {
    headline: "Seu cliente já está na internet. O que ele encontra quando chega até o seu negócio?",
    text: "Uma Landing Page profissional organiza sua oferta, transmite confiança e facilita o próximo passo.",
    buttonText: "Solicitar orçamento no WhatsApp",
    microtext: "Sem compromisso • Atendimento direto",
  },

  // 12. CTA FINAL
  finalCta: {
    headline: "Vamos transformar seu negócio em uma página profissional?",
    subheadline: "Me conte o que você oferece e vamos conversar sobre a melhor estrutura para sua Landing Page.",
    cta: "Quero minha Landing Page",
    microtext: "Orçamento sem compromisso • Atendimento direto com Daniel Faluchi",
  },
};
