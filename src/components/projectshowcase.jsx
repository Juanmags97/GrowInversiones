import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function ProjectShowcase() {
  const { t } = useTranslation();

  return (
    // Fondo oficial #1D2733 del manual de marca
    <section id="del-sol" className="py-24 bg-[#1D2733] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TÍTULO PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#DFC173] text-xs font-bold uppercase tracking-widest">
            {t('showcase.lanzamiento')}
          </span>
          <h2 className="text-4xl font-serif text-white mt-2">GW Del Sol</h2>
        </motion.div>

        {/* 1. SECCIÓN SUPERIOR: VIDEO PRINCIPAL A ANCHO COMPLETO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#1E3957] aspect-video w-full mb-12"
        >
          <video
            src={`${import.meta.env.BASE_URL}VideoHorizontal.mp4`}
            controls
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 2. SECCIÓN INFERIOR: GRILLA DE 2 COLUMNAS (TEXTO vs UBICACIÓN) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center items-center ">
          
          {/* COLUMNA INFERIOR IZQUIERDA: TEXTOS Y BOTÓN */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-neutral-300 text-l text-center leading-relaxed">
              {t('showcase.descripcion')}
            </p>
            <button className="border border-[#DFC173] text-[#DFC173] px-6 py-2 m-auto rounded text-xs uppercase tracking-widest hover:bg-[#DFC173] hover:text-[#1D2733] transition-all duration-300">
              {t('showcase.boton')} →
            </button>
          </motion.div>

          {/* COLUMNA INFERIOR DERECHA: MAPA DE UBICACIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1E3957] border border-white/5 p-4 rounded-2xl shadow-2xl space-y-4"
          >
            <div className="flex items-center space-x-2 text-[#DFC173]">
              <i className="fa-solid fa-location-dot text-sm"></i>
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                San Juan XXIII, Asunción, Paraguay
              </span>
            </div>
            
            {/* Mapa interactivo integrado */}
            <div className="w-full h-60 rounded-xl overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border border-white/5">
              <iframe
                title="Ubicación GW Del Sol"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.4764841961937!2d-57.56846182377319!3d-25.288195827367358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8a57b28203d%3A0x6b110fb13a893414!2sSan%20Juan%20XXIII%2C%20Asunci%C3%B3n!5e0!3m2!1ses-419!2spy!4v1710000000000!5m2!1ses-419!2spy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}