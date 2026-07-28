import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  "/DeptoFormatoPanoramico2.jpg",
  "/FachadaPanoramica1.jpg",
  "/RenderRecepcionFinal2.jpg"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen bg-[#060a13] overflow-hidden flex items-center pt-20">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a13] via-transparent to-[#060a13]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* TEXTOS PRINCIPALES */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] block mb-3">
            Desarrollamos espacios para quienes eligen invertir
          </span> */}
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight">
            Construimos espacios para quienes eligen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#aa841a] italic">crecer.</span>
          </h1>
          <p className="text-slate-400 mt-6 max-w-md text-sm leading-relaxed">
            GW DEL SOL, un desarrollo en el corazón de Asunción pensado para vivir, invertir y proyectar el futuro.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-gradient-to-r from-[#d4af37] to-[#aa841a] text-neutral-950 font-bold px-8 py-3 rounded text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all">
              Conocer Proyectos
            </button>
          </div>
        </motion.div>

        {/* INDICADORES PARAGUAY
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#0b1120]/80 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm shadow-2xl"
        >
          <h3 className="text-white font-serif text-xl mb-6">Paraguay, el lugar donde las oportunidades crecen.</h3>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="border-r border-slate-800 p-2">
              <span className="text-2xl font-bold text-[#d4af37] block">+4,5%</span>
              <span className="text-[10px] uppercase text-slate-400 tracking-wider">Crecimiento Promedio PBI</span>
            </div>
            <div className="p-2">
              <span className="text-2xl font-bold text-[#d4af37] block">+USD 1.200 M</span>
              <span className="text-[10px] uppercase text-slate-400 tracking-wider">Inversión Extranjera Directa</span>
            </div>
            <div className="border-r border-slate-800 p-2 border-t mt-2 pt-4">
              <span className="text-2xl font-bold text-[#d4af37] block">2°</span>
              <span className="text-[10px] uppercase text-slate-400 tracking-wider">País con Mayor Rentabilidad</span>
            </div>
            <div className="p-2 border-t mt-2 pt-4">
              <span className="text-2xl font-bold text-[#d4af37] block">Top 10</span>
              <span className="text-[10px] uppercase text-slate-400 tracking-wider">Mejor Calidad de Vida Región</span>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}