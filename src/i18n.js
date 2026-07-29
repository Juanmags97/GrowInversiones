// src/i18n.js
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
        "titulo": "Construimos espacios para quienes eligen crecer."
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
        "newsletterTitulo": "Newsletter",
        "newsletterDescripcion": "Recibí las últimas novedades del mercado inmobiliario y oportunidades exclusivas.",
        "newsletterBoton": "Suscribirme",
        "instagramTitulo": "Conectá con nosotros:",
        "formTitulo": "Dejanos tus datos",
        "formDescripcion": "Un asesor experto se pondrá en contacto a la brevedad.",
        "formUnidad": "¿Qué tipo de unidad estás buscando?",
        "formEdad": "¿Cuál es tu rango de edad?",
        "formFactor": "¿Qué factor valorás más?",
        "formEnviar": "Enviar Requerimientos",
        "formUnidadOpciones": {
          "1Dormitorio": "Departamento 1 Dormitorio",
          "2Dormitorios": "Departamento 2 Dormitorios",
          "Penthouse": "Penthouse / Premium"
        },
        "formFactorOpciones": {
          "Ubicacion": "Ubicación y Conectividad",
          "Amenities": "Amenities Premium",
          "Rentabilidad": "Rentabilidad del Pozo"
        },
        "formEdadPlaceholder": "Ej: 30 - 45 años",
        "formEmailPlaceholder": "Tu correo electrónico",
        "formEmailBoton": "Suscribirme",
        "formEmailAviso": "Recibirás novedades y oportunidades exclusivas.",
        "formEmailAvisoPrivacidad": "Nos comprometemos a proteger tu privacidad y nunca compartiremos tus datos.",
        "formEmailAvisoPrivacidadLink": "Política de Privacidad",
        "formEmailAvisoPrivacidadLinkHref": "/politica-de-privacidad",
        

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
        "titulo": "Construídos espaços para quem escolhe crescer."
      },
      "contacto": {
        "titulo": "Deixe seus datos",
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
        "titulo": "We build spaces for those who choose to grow."
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