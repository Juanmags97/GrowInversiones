import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "nav": {
        "inicio": "Inicio",
        "gw": "GW",
        "gwDelSol": "GW Del Sol",
        "invertir": "Invertir en Paraguay",
        "contacto": "Contacto"
      },
      "hero": {
        "titulo": "Diseñamos espacios para quienes eligen crecer."
      },
      "contacto": {
        "titulo": "Dejanos tus datos",
        "bajada": "Un asesor experto se pondrá en contacto a la brevedad.",
        "boton": "Enviar Requerimientos"
      },
      "stats": {
        "subtitulo": "Paraguay, el lugar donde las oportunidades crecen.",
        "pbi": "Crecimiento Promedio PBI",
        "inversion": "Inversión Extranjera Directa",
        "rentabilidad": "País con Mayor Rentabilidad",
        "calidadVida": "Mejor Calidad de Vida Región"
      },
      "about": {
        "titulo": "Quiénes Somos",
        "descripcion": "En GW desarrollamos proyectos inmobiliarios que combinan diseño, ubicación y calidad para generar valor real y sostenible. Creemos en el crecimiento como motor de transformación y en la arquitectura como herramienta para mejorar la vida de las personas.",
        "misionTitulo": "Misión",
        "misionTexto": "Desarrollar espacios que generen bienestar, confianza y oportunidades de crecimiento para las personas y la ciudad.",
        "visionTitulo": "Visión",
        "visionTexto": "Ser referentes en desarrollo inmobiliario en Paraguay, reconocidos por nuestra innovación, transparencia y compromiso con el futuro.",
        "valoresTitulo": "Valores",
        "valoresTexto": "Integridad, transparencia, innovación, calidad, compromiso y visión a largo plazo."
      },
      "showcase": {
        "lanzamiento": "Lanzamiento Exclusivo",
        "descripcion": "Ubicado en el polo de mayor crecimiento corporativo y residencial de Asunción, a pasos del Shopping del Sol y del World Trade Center. Un diseño arquitectónico de vanguardia con terminaciones de lujo.",
        "boton": "Conocer Proyecto"
      },
      "integration": {
        "newsletterBoton": "Suscribirme",
        "instagramTitulo": "Conectá con nosotros:",
        "formTitulo": "Dejanos tus datos",
        "formDescripcion": "Un asesor experto se pondrá en contacto a la brevedad.",
        "formUnidad": "¿Qué tipo de unidad estás buscando?",
        "formUnidadOpciones": {
          "1Dormitorio": "Departamento 1 Dormitorio",
          "2Dormitorios": "Departamento 2 Dormitorios",
          "Monoambiente": "Monoambiente"
        },
        "formEdad": "¿Cuál es tu rango de edad?",
        "placeHolderEdad": "Ej: 30 - 45 años",
        "formFactor": "¿Cuál es el objetivo de la propiedad?",
        "formFactorOpciones": {
          "Inversion": "Para inversión",
          "Vivienda": "Para vivienda"
        },
        "formInvertir": "¿Cómo te gustaría invertir?",
        "formModoInversion": {
          "Financiado": "Financiado",
          "Contado": "Contado",
          "Ambas": "Ambas"
        },
        "formPais": "país de residencia",
        "placeHolderPais": "Ej: Argentina, Uruguay, Brasil, Chile, México, España, Estados Unidos",
        "contacto": "Dejanos tu contacto",
        "placeHolderCorreo": "Tu correo electrónico o WhatsApp",
        "formEnviar": "Enviar Requerimientos",
        "formEmailPlaceholder": "Tu correo electrónico",
        "formEmailBoton": "Suscribirme",
        "formEmailAviso": "Recibirás novedades y oportunidades exclusivas.",
        "formEmailAvisoPrivacidad": "Nos comprometemos a proteger tu privacidad y nunca compartiremos tus datos.",
        "formEmailAvisoPrivacidadLink": "Política de Privacidad",
        "formEmailAvisoPrivacidadLinkHref": "/politica-de-privacidad"
      },
      "faq": {
  "badge": "Dudas Habituales",
  "titulo": "Preguntas Frecuentes de Inversores",
  "descripcion": "Todo lo que necesitás saber sobre la adquisición, rentabilidad y seguridad de tu unidad en GW.",
  "q1": "¿Por qué invertir en desarrollos inmobiliarios en Asunción?",
  "a1": "Paraguay ofrece una de las economías más estables de la región, baja carga impositiva (régimen 10-10-10) y rentabilidades en dólares que oscilan entre el 8% y el 12% anual por renta temporal o tradicional.",
  "q2": "¿Puedo comprar una unidad siendo inversor extranjero?",
  "a2": "Sí. La legislación paraguaya otorga igualdad de derechos a inversores locales y extranjeros. El proceso puede gestionarse de forma remota mediante apoderado o firma certificada con total seguridad jurídica.",
  "q3": "¿Cuáles son los planes de financiación disponibles para GW Del Sol?",
  "a3": "Ofrecemos esquemas flexibles con anticipo inicial y saldo financiado en cuotas durante el plazo de obra, además de condiciones especiales y descuentos por pago al contado.",
  "q4": "¿GW se encarga de la administración de la propiedad tras la entrega?",
  "a4": "Brindamos asesoramiento integral y alianzas de property management para gestionar alquileres temporales (Airbnb/Booking) o contratos corporativos a largo plazo sin que el inversor tenga que ocuparse del día a día.",
  "dudaDirecta": "¿Tenés una consulta específica sobre tu esquema de pago?",
  "asesorBtn": "Consultá directamente con un asesor"
},
"acknowledgements": {
  "badge": "Alianzas & Confianza",
  "titulo": "Agradecimientos & Respaldo",
  "descripcion": "Detrás de cada metro cuadrado construido y de cada rentabilidad proyectada hay un equipo multidisciplinario y aliados que hacen posible la excelencia de GW.",
  "catArquitectura": "Arquitectura & Diseño",
  "nombreArquitectura": "Estudio de Arquitectura & Urbanismo",
  "detalleArquitectura": "Diseño estructural y desarrollo de concepto espacial premium.",
  "catIngenieria": "Ingeniería & Construcción",
  "nombreIngenieria": "Constructora & Fiscalización",
  "detalleIngenieria": "Dirección de obra, normas de calidad y seguridad edilicia.",
  "catFinanciero": "Respaldo Financiero & Legal",
  "nombreFinanciero": "Fiduciaria & Entidades Aliadas",
  "detalleFinanciero": "Garantía legal, estructuración de fideicomisos y seguridad jurídica.",
  "catInversores": "Comunidad de Inversores",
  "nombreInversores": "Red de Inversores Regionales",
  "detalleInversores": "Confianza y proyección en cada etapa de crecimiento.",
  "cita": "\"Construir confianza es el primer paso para consolidar el futuro.\" — Equipo Directivo GW"
}

    }
  },
  pt: {
    translation: {
      "nav": {
        "inicio": "Início",
        "gw": "GW",
        "gwDelSol": "GW Del Sol",
        "invertir": "Investir no Paraguai",
        "contacto": "Contato"
      },
      "hero": {
        "titulo": "Projetamos espaços para quem escolhe crescer."
      },
      "contacto": {
        "titulo": "Deixe seus dados",
        "bajada": "Um consultor especializado entrará em contato o mais breve possível.",
        "boton": "Enviar Requisitos"
      },
      "stats": {
        "subtitulo": "Paraguai, o lugar onde as oportunidades crescem.",
        "pbi": "Crescimento Médio do PIB",
        "inversion": "Investimento Estrangeiro Direto",
        "rentabilidad": "País com Maior Rentabilidade",
        "calidadVida": "Melhor Qualidade de Vida da Região"
      },
      "about": {
        "titulo": "Quem Somos",
        "descripcion": "Na GW desenvolvemos projetos imobiliários que combinam design, localização e qualidade para gerar valor real e sustentável. Acreditamos no crescimento como motor de transformação e na arquitetura como ferramenta para melhorar a vida das pessoas.",
        "misionTitulo": "Missão",
        "misionTexto": "Desenvolver espaços que gerem bem-estar, confiança e oportunidades de crescimento para as pessoas e para a cidade.",
        "visionTitulo": "Visão",
        "visionTexto": "Ser referência em desenvolvimento imobiliário no Paraguai, reconhecidos pela nossa inovação, transparência e compromisso com o futuro.",
        "valoresTitulo": "Valores",
        "valoresTexto": "Integridade, transparência, inovação, qualidade, compromisso e visão de longo prazo."
      },
      "showcase": {
        "lanzamiento": "Lançamento Exclusivo",
        "descripcion": "Localizado no polo de maior crescimento corporativo e residencial de Assunção, a poucos passos do Shopping del Sol e do World Trade Center. Um projeto arquitetônico de vanguarda com acabamentos de luxo.",
        "boton": "Conhecer o Projeto"
      },
      "integration": {
        "newsletterTitulo": "Newsletter",
        "newsletterDescripcion": "Receba as últimas novidades do mercado imobiliário e oportunidades exclusivas.",
        "newsletterBoton": "Inscrever-me",
        "instagramTitulo": "Conecte-se conosco:",
        "formTitulo": "Deixe seus dados",
        "formDescripcion": "Um consultor especializado entrará em contato o mais breve possível.",
        "formUnidad": "Que tipo de unidade você está procurando?",
        "formUnidadOpciones": {
          "1Dormitorio": "Apartamento de 1 Dormitório",
          "2Dormitorios": "Apartamento de 2 Dormitórios",
          "Monoambiente": "Studio / Kitnet"
        },
        "formEdad": "Qual é a sua faixa etária?",
        "placeHolderEdad": "Ex: 30 - 45 anos",
        "formFactor": "Qual é o objetivo da propriedade?",
        "formFactorOpciones": {
          "Inversion": "Para investimento",
          "Vivienda": "Para moradia"
        },
        "formInvertir": "Como você gostaria de investir?",
        "formModoInversion": {
          "Financiado": "Financiado",
          "Contado": "À vista",
          "Ambas": "Ambos"
        },
        "formPais": "País de referência",
        "placeHolderPais": "Ex: Argentina, Uruguai, Brasil, Chile, México, Espanha, Estados Unidos",
        "contacto": "Deixe seu contato",
        "placeHolderCorreo": "Seu e-mail ou WhatsApp",
        "formEnviar": "Enviar Requisitos",
        "formEmailPlaceholder": "Seu e-mail",
        "formEmailBoton": "Inscrever-me",
        "formEmailAviso": "Você receberá novidades e oportunidades exclusivas.",
        "formEmailAvisoPrivacidad": "Comprometemo-nos a proteger sua privacidade e nunca compartilharemos seus dados.",
        "formEmailAvisoPrivacidadLink": "Política de Privacidade",
        "formEmailAvisoPrivacidadLinkHref": "/politica-de-privacidade"
      },
      "faq": {
  "badge": "Dúvidas Frequentes",
  "titulo": "Perguntas Frequentes de Investidores",
  "descripcion": "Tudo o que você precisa saber sobre aquisição, rentabilidade e segurança da sua unidade na GW.",
  "q1": "Por que investir no mercado imobiliário de Assunção?",
  "a1": "O Paraguai oferece uma das economias mais estáveis da região, baixa carga tributária (regime 10-10-10) e rentabilidades em dólares entre 8% e 12% ao ano.",
  "q2": "Posso comprar um imóvel sendo investidor estrangeiro?",
  "a2": "Sim. A legislação paraguaia garante igualdade de direitos para investidores locais e estrangeiros. O processo pode ser feito remotamente com total segurança jurídica.",
  "q3": "Quais são os planos de financiamento para o GW Del Sol?",
  "a3": "Oferecemos condições flexíveis com entrada e parcelamento durante a obra, além de descontos especiais para pagamento à vista.",
  "q4": "A GW gerencia o imóvel após a entrega?",
  "a4": "Oferecemos parcerias de property management para locação por temporada (Airbnb/Booking) ou contratos corporativos sem preocupações para o investidor.",
  "dudaDirecta": "Tem alguma dúvida sobre planos de pagamento?",
  "asesorBtn": "Fale diretamente com um consultor"
},
"acknowledgements": {
  "badge": "Parcerias & Confiança",
  "titulo": "Agradecimentos & Apoio",
  "descripcion": "Atrás de cada metro quadrado construído e cada rentabilidade projetada há uma equipe multidisciplinar e parceiros que tornam possível a excelência da GW.",
  "catArquitectura": "Arquitetura & Design",
  "nombreArquitectura": "Escritório de Arquitetura & Urbanismo",
  "detalleArquitectura": "Projeto estrutural e desenvolvimento de conceito espacial exclusivo.",
  "catIngenieria": "Engenharia & Construção",
  "nombreIngenieria": "Construtora & Fiscalização",
  "detalleIngenieria": "Direção de obras, padrões de qualidade e segurança na construção.",
  "catFinanciero": "Apoio Financeiro & Jurídico",
  "nombreFinanciero": "Fiduciária & Entidades Parceiras",
  "detalleFinanciero": "Garantia jurídica, estruturação de fundos e máxima segurança.",
  "catInversores": "Comunidade de Investidores",
  "nombreInversores": "Rede de Investidores Regionais",
  "detalleInversores": "Confiança e expansão em cada etapa do desenvolvimento.",
  "cita": "\"Construir confiança é o primeiro passo para consolidar o futuro.\" — Diretoria GW"
}
    }
  },
  en: {
    translation: {
      "nav": {
        "inicio": "Home",
        "gw": "GW",
        "gwDelSol": "GW Del Sol",
        "invertir": "Invest in Paraguay",
        "contacto": "Contact"
      },
      "hero": {
        "titulo": "We design spaces for those who choose to grow."
      },
      "contacto": {
        "titulo": "Leave us your details",
        "bajada": "An expert advisor will contact you shortly.",
        "boton": "Send Requirements"
      },
      "stats": {
        "subtitulo": "Paraguay, the place where opportunities grow.",
        "pbi": "Average GDP Growth",
        "inversion": "Foreign Direct Investment",
        "rentabilidad": "Country with Highest Profitability",
        "calidadVida": "Best Quality of Life in the Region"
      },
      "about": {
        "titulo": "Who We Are",
        "descripcion": "At GW we develop real estate projects that combine design, location, and quality to generate real and sustainable value. We believe in growth as a driver for transformation and in architecture as a tool to improve people's lives.",
        "misionTitulo": "Mission",
        "misionTexto": "Develop spaces that generate well-being, trust, and growth opportunities for people and the city.",
        "visionTitulo": "Vision",
        "visionTexto": "To be benchmarks in real estate development in Paraguay, recognized for our innovation, transparency, and commitment to the future.",
        "valoresTitulo": "Values",
        "valoresTexto": "Integrity, transparency, innovation, quality, commitment, and long-term vision."
      },
      "showcase": {
        "lanzamiento": "Exclusive Launch",
        "descripcion": "Located in the hub of greatest corporate and residential growth in Asunción, just steps away from Shopping del Sol and the World Trade Center. A cutting-edge architectural design with luxury finishes.",
        "boton": "Discover Project"
      },
      "integration": {
        "newsletterTitulo": "Newsletter",
        "newsletterDescripcion": "Receive the latest real estate market news and exclusive opportunities.",
        "newsletterBoton": "Subscribe",
        "instagramTitulo": "Connect with us:",
        "formTitulo": "Leave us your details",
        "formDescripcion": "An expert advisor will contact you shortly.",
        "formUnidad": "What type of unit are you looking for?",
        "formUnidadOpciones": {
          "1Dormitorio": "1-Bedroom Apartment",
          "2Dormitorios": "2-Bedroom Apartment",
          "Monoambiente": "Studio Apartment"
        },
        "formEdad": "What is your age range?",
        "placeHolderEdad": "E.g., 30 - 45 years old",
        "formFactor": "What is the purpose of the property?",
        "formFactorOpciones": {
          "Inversion": "For investment",
          "Vivienda": "For personal residence"
        },
        "formInvertir": "How would you like to invest?",
        "formModoInversion": {
          "Financiado": "Financed",
          "Contado": "Cash payment",
          "Ambas": "Both"
        },
        "formPais": "Country of residence",
        "placeHolderPais": "E.g., Argentina, Uruguay, Brazil, Chile, Mexico, Spain, United States",
        "contacto": "Leave us your contact information",
        "placeHolderCorreo": "Your email or WhatsApp",
        "formEnviar": "Submit Requirements",
        "formEmailBoton": "Subscribe",
        "formEmailAviso": "You will receive exclusive updates and opportunities.",
        "formEmailAvisoPrivacidad": "We are committed to protecting your privacy and will never share your data.",
        "formEmailAvisoPrivacidadLink": "Privacy Policy",
        "formEmailAvisoPrivacidadLinkHref": "/privacy-policy"
      },
      "faq": {
  "badge": "Common Questions",
  "titulo": "Investor FAQ",
  "descripcion": "Everything you need to know about acquisition, yields, and security at GW Del Sol.",
  "q1": "Why invest in real estate in Asunción?",
  "a1": "Paraguay features one of the most stable economies in South America, low tax rates (10-10-10 system), and USD yields between 8% and 12% annually.",
  "q2": "Can foreign investors buy property in Paraguay?",
  "a2": "Yes. Paraguayan law provides equal rights to domestic and international investors. The process can be completed remotely with full legal security.",
  "q3": "What financing options are available for GW Del Sol?",
  "a3": "We offer flexible payment plans with a down payment and construction installments, along with special discounts for cash payments.",
  "q4": "Does GW manage the property after handover?",
  "a4": "We partner with top property management firms to handle short-term rentals (Airbnb/Booking) and corporate leases turnkey.",
  "dudaDirecta": "Have a specific question about payment structures?",
  "asesorBtn": "Speak directly with an advisor"
},
"acknowledgements": {
  "badge": "Partners & Trust",
  "titulo": "Acknowledgements & Backing",
  "descripcion": "Behind every square meter built and projected return is a multidisciplinary team and strategic partners making GW's excellence possible.",
  "catArquitectura": "Architecture & Design",
  "nombreArquitectura": "Architecture & Urban Planning Firm",
  "detalleArquitectura": "Structural design and premium spatial concept development.",
  "catIngenieria": "Engineering & Construction",
  "nombreIngenieria": "General Contractor & Supervision",
  "detalleIngenieria": "Site management, quality standards, and building safety.",
  "catFinanciero": "Financial & Legal Backing",
  "nombreFinanciero": "Trustee & Financial Partners",
  "detalleFinanciero": "Legal security, escrow structuring, and complete compliance.",
  "catInversores": "Investor Network",
  "nombreInversores": "Regional Investor Community",
  "detalleInversores": "Trust and ongoing growth across every milestone.",
  "cita": "\"Building trust is the first step to securing the future.\" — GW Executive Team"
}
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;