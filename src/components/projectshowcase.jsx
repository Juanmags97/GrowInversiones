import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectShowcase() {
  return (
    <section id="del-sol" className="py-24 bg-[#060a13] border-t border-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">Lanzamiento Exclusivo</span>
          <h2 className="text-4xl font-serif text-white mt-2">GW Del Sol</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Ubicado en el polo de mayor crecimiento corporativo y residencial de Asunción, a pasos del Shopping del Sol y del World Trade Center. Un diseño arquitectónico de vanguardia con terminaciones de lujo.
            </p>
            <button className="border border-[#d4af37] text-[#d4af37] px-6 py-2 rounded text-xs uppercase tracking-widest hover:bg-[#d4af37] hover:text-neutral-950 transition-all duration-300">
              Conocer Proyecto →
            </button>
          </div>

          {/* CONTENEDOR DEL VIDEO PRESENTACIÓN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#0b1120] aspect-[9/16] max-w-sm mx-auto w-full flex items-center justify-center group"
          >
            <video
              src="/VideoGrow.mp4"
              controls
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}