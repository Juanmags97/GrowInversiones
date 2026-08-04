import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // <-- 1. Importamos el hook de traducción
import fotoSocios from '../../Public/FotosSocios.png'; // <-- Importamos la imagen de los socios
export default function AboutUs() {
  const { t } = useTranslation(); // <-- 2. Declaramos la función de traducción

  return (
    // Actualizado con el fondo institucional #1D2733
    <section id="quienes-somos" className="py-24 bg-[#1D2733] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* BLOQUE IZQUIERDO: QUIÉNES SOMOS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Texto en el dorado oficial #DFC173 */}
            <span className="text-[#DFC173] text-xs font-bold uppercase tracking-widest">
              GW Desarrollos
            </span>
            <h2 className="text-3xl font-serif text-white font-bold mt-2 mb-6">
              {t('about.titulo')}
            </h2>
            {/* Contenedor adaptado al azul secundario #1E3957 */}
            <p className="text-neutral-300 text-sm leading-relaxed bg-[#1E3957] border border-white/5 p-6 rounded-xl">
              {t('about.descripcion')}
            </p>
          </motion.div>

          {/* BLOQUE CENTRAL: IMAGEN SOCIOS MÁS ALTA PARA QUE NO CORTE PIES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[520px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#1E3957]"
          >
            <img
              src={fotoSocios}
              alt="Socios GW"
              className="w-full h-full object-cover object-top transition-all duration-700"
            />
          </motion.div>

          {/* BLOQUE DERECHO: MISIÓN, VISIÓN, VALORES TRADUCIDOS */}
          <div className="space-y-6">

            {/* Misión */}
            <motion.div
              whileHover={{ x: 6 }}
              className="p-5 bg-[#1E3957] border-2 border-[#DFC173] rounded-xl border-y border-r border-white/5"
            >
              <h4 className="text-[#DFC173] text-xs font-bold uppercase tracking-widest mb-1">
                {t('about.misionTitulo')}
              </h4>
              <p className="text-xs text-neutral-300">
                {t('about.misionTexto')}
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              whileHover={{ x: 6 }}
              className="p-5 bg-[#1E3957] border-l-2 border-[#DFC173] rounded-xl border-y border-r border-white/5"
            >
              <h4 className="text-[#DFC173] text-xs font-bold uppercase tracking-widest mb-1">
                {t('about.visionTitulo')}
              </h4>
              <p className="text-xs text-neutral-300">
                {t('about.visionTexto')}
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              whileHover={{ x: 6 }}
              className="p-5 bg-[#1E3957] border-l-2 border-[#DFC173] rounded-xl border-y border-r border-white/5"
            >
              <h4 className="text-[#DFC173] text-xs font-bold uppercase tracking-widest mb-1">
                {t('about.valoresTitulo')}
              </h4>
              <p className="text-xs text-neutral-300">
                {t('about.valoresTexto')}
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}