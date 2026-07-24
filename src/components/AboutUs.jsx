import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-24 bg-[#060a13] border-t border-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* BLOQUE IZQUIERDO: QUIÉNES SOMOS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">GW Desarrollos</span>
            <h2 className="text-3xl font-serif text-white font-bold mt-2 mb-6">Quiénes Somos</h2>
            <p className="text-slate-400 text-sm leading-relaxed bg-[#0b1120] border border-slate-900 p-6 rounded-xl">
              En GW desarrollamos proyectos inmobiliarios que combinan diseño, ubicación y calidad para generar valor real y sostenible. Creemos en el crecimiento como motor de transformación y en la arquitectura como herramienta para mejorar la vida de las personas.
            </p>
          </motion.div>

          {/* BLOQUE CENTRAL: IMAGEN SOCIOS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80" // Reemplazar por Drive "Imagen de Socios"
              alt="Socios GW" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060a13] via-transparent to-transparent" />
          </motion.div>

          {/* BLOQUE DERECHO: MISIÓN, VISIÓN, VALORES */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ x: 6 }}
              className="p-5 bg-[#0b1120] border-l-2 border-[#d4af37] rounded-r-xl border-y border-r border-slate-900"
            >
              <h4 className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-1">Misión</h4>
              <p className="text-xs text-slate-300">Desarrollar espacios que generen bienestar, confianza y oportunidades de crecimiento para las personas y la ciudad.</p>
            </motion.div>

            <motion.div 
              whileHover={{ x: 6 }}
              className="p-5 bg-[#0b1120] border-l-2 border-[#d4af37] rounded-r-xl border-y border-r border-slate-900"
            >
              <h4 className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-1">Visión</h4>
              <p className="text-xs text-slate-300">Ser referentes en desarrollo inmobiliario en Paraguay, reconocidos por nuestra innovación, transparencia y compromiso con el futuro.</p>
            </motion.div>

            <motion.div 
              whileHover={{ x: 6 }}
              className="p-5 bg-[#0b1120] border-l-2 border-[#d4af37] rounded-r-xl border-y border-r border-slate-900"
            >
              <h4 className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-1">Valores</h4>
              <p className="text-xs text-slate-300">Integridad, transparencia, innovación, calidad, compromiso y visión a largo plazo.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}