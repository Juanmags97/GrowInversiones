import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // <-- 1. Importamos el hook

export default function ParaguayStats() {
  const { t } = useTranslation(); // <-- 2. Declaramos la función t

  return (
    <section className="bg-[#1D2733] text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* COLUMNA IZQUIERDA: TÍTULO PRINCIPAL TRADUCIDO */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight font-medium">
            {t('stats.subtitulo')}
          </h2>
        </div>

        {/* COLUMNA DERECHA: LAS 4 MÉTRICAS EN HORIZONTAL */}
        <div className="lg:col-span-2 grid-cols-4 md:flex gap-8 pt-2">

          <div className='hidden border border-white/10 w-0 md:block'></div>
          
          {/* Métrica 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            <span className="text-2xl md:text-3xl font-light text-white block">+4,5%</span>
            <p className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
              {t('stats.pbi')}
            </p>
          </motion.div>
          
          <div className='hidden border border-white/10 w-0 md:block'></div>

          {/* Métrica 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <span className="text-2xl md:text-3xl font-light text-white block">+USD 1.200 M</span>
            <p className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
              {t('stats.inversion')}
            </p>
          </motion.div>
          
          <div className='hidden border border-white/10 w-0 md:block'></div>

          {/* Métrica 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2"
          >
            <span className="text-2xl md:text-3xl font-light text-white block">2°</span>
            <p className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
              {t('stats.rentabilidad')}
            </p>
          </motion.div>
          
          <div className='hidden border border-white/10 w-0 md:block'></div>

          {/* Métrica 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2"
          >
            <span className="text-2xl md:text-3xl font-light text-white block">Top 10</span>
            <p className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
              {t('stats.calidadVida')}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}