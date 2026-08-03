import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // <-- Hook importado correctamente
import DeptoPanoramico from '../../Public/DeptoPanoramico.jpg';
import FachadaPanoramica from '../../Public/FachadaPanoramica.jpg';
import RenderRecepcion from '../../Public/RenderRecepcion.jpg';

// Lista de imágenes para el carrusel
const IMAGES = [
  DeptoPanoramico,
  FachadaPanoramica,
  RenderRecepcion
];

export default function Hero() {
  const { t } = useTranslation(); // <-- Declaración interna del traductor
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
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
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
            {/* Si querés usar la traducción usa {t('hero.titulo')}, de lo contrario podéis dejar la línea de abajo: */}
            {t('hero.titulo') !== 'hero.titulo' ? t('hero.titulo') : "Diseñamos espacios para quienes eligen crecer."}
          </h1>
          
          <p className="text-neutral-400 mt-6 max-w-md text-sm leading-relaxed">
            GW DEL SOL, un desarrollo en el corazón de Asunción pensado para vivir, invertir y proyectar el futuro.
          </p>
          
          <div className="mt-8 flex space-x-4">
            {/* Botón con el dorado exacto del manual #DFC173 */}
            <button className="bg-gradient-to-r from-[#DFC173] to-[#D5A361] text-[#1D2733] font-bold px-8 py-3 rounded text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-[#DFC173]/20 transition-all">
              Conocer Proyectos
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}