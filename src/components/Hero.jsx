import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import DeptoPanoramico from '../../Public/DeptoPanoramico.webp';
import FachadaPanoramica from '../../Public/FachadaPanoramica.webp';
import RenderRecepcion from '../../Public/RenderRecepcion.webp';

// Lista de imágenes para el carrusel
const IMAGES = [
  DeptoPanoramico,
  FachadaPanoramica,
  RenderRecepcion
];

export default function Hero() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen bg-[#1D2733] overflow-hidden flex items-center pt-20">

      {/* BACKGROUND INTERACTIVO / CARRUSEL */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={IMAGES[index]}
            alt={["Departamento panorámico GW Del Sol en Asunción", "Fachada panorámica del proyecto GW Del Sol", "Render de recepción del edificio GW Del Sol"][index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </AnimatePresence>
        {/* Degradado adaptado al color oficial #1D2733 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D2733] via-transparent to-[#1D2733]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* TEXTOS PRINCIPALES CON SOPORTE DE IDIOMA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight">
            {t('hero.titulo') !== 'hero.titulo' ? t('hero.titulo') : "Desarrollamos espacios para quienes eligen crecer."}
          </h1>

          <p className="text-neutral-400 mt-6 max-w-md text-sm leading-relaxed">
            GW DEL SOL, un desarrollo en el corazón de Asunción pensado para vivir, invertir y proyectar el futuro.
          </p>

          <div className="mt-8 flex space-x-4">
            {/* BOTÓN CONECTADO AL PDF EN PUBLIC/ */}
            <a
              href="/BrochureGwDelSol.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#DFC173] to-[#D5A361] text-[#1D2733] font-bold px-8 py-3 rounded text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-[#DFC173]/20 transition-all text-center"
            >
              Conocer Proyectos
            </a>
          </div>
        </motion.div>

      </div>

      {/* 🧭 CTA PRE-SCROLL / SCROLL INDICATOR GW */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center select-none"
      >
        <a
          href="#stats"
          className="group flex flex-col items-center gap-2 text-neutral-400 hover:text-[#DFC173] transition-colors duration-300 cursor-pointer"
          aria-label="Desplazarse hacia las estadísticas e inversiones"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400/80 group-hover:text-[#DFC173] transition-colors">
            Descubrir Inversiones
          </span>

          {/* Icono ratón interactivo con rebote */}
          <div className="w-5 h-9 rounded-full border border-neutral-500/50 group-hover:border-[#DFC173]/80 flex justify-center p-1 backdrop-blur-sm bg-black/20 transition-colors">
            <div className="w-1 h-2 bg-[#DFC173] rounded-full animate-bounce mt-0.5" />
          </div>

          {/* Flecha hacia abajo */}
          <svg
            className="w-4 h-4 text-[#DFC173]/80 group-hover:translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>

    </section>
  );
}