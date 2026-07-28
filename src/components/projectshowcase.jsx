import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // <-- 1. Importamos el hook
import video from '../../Public/VideoGrow.mp4'; // Asegúrate de que la ruta sea correcta
export default function ProjectShowcase() {
  const { t } = useTranslation(); // <-- 2. Declaramos la función t

  return (
    // Fondo oficial #1D2733 del manual de marca
    <section id="del-sol" className="py-24 bg-[#1D2733] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Dorado oficial #DFC173 */}
          <span className="text-[#DFC173] text-xs font-bold uppercase tracking-widest">
            {t('showcase.lanzamiento')}
          </span>
          <h2 className="text-4xl font-serif text-white mt-2">GW Del Sol</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              {t('showcase.descripcion')}
            </p>
            {/* Botón con el dorado e interacciones corporativas */}
            <button className="border border-[#DFC173] text-[#DFC173] px-6 py-2 rounded text-xs uppercase tracking-widest hover:bg-[#DFC173] hover:text-[#1D2733] transition-all duration-300">
              {t('showcase.boton')} →
            </button>
          </div>

          {/* CONTENEDOR DEL VIDEO PRESENTACIÓN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#1E3957] aspect-[9/16] max-w-sm mx-auto w-full flex items-center justify-center group"
          >
            <video
              src={video} // Tu video comprimido listo para producción
              controls
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}