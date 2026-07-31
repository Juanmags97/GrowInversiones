import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Componente animado para la métrica 1 (+4,5%)
function CounterPBI() {
  const nodeRef = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `+${latest.toFixed(1)}%`);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 4.5, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView]);

  return <motion.span ref={nodeRef} className="text-2xl md:text-3xl font-light text-white block">{rounded}</motion.span>;
}

// Componente animado para la métrica 2 (+USD 1.200 M)
function CounterInversion() {
  const nodeRef = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `+USD ${Math.round(latest).toLocaleString('es-AR')} M`);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 1200, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView]);

  return <motion.span ref={nodeRef} className="text-2xl md:text-3xl font-light text-white block">{rounded}</motion.span>;
}

export default function ParaguayStats() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-black to-[#1D2733] text-white py-20 border-t border-white/5">
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
            whileHover={{ y: -6 }} // <-- Efecto hover interactivo estilo Misión/Visión
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2 cursor-default flex-1"
          >
            <CounterPBI />
            <p className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
              {t('stats.pbi')}
            </p>
          </motion.div>
          
          <div className='hidden border border-white/10 w-0 md:block'></div>

          {/* Métrica 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }} // <-- Efecto hover interactivo estilo Misión/Visión
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2 cursor-default flex-1"
          >
            <CounterInversion />
            <p className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
              {t('stats.inversion')}
            </p>
          </motion.div>
          
          <div className='hidden border border-white/10 w-0 md:block'></div>

          {/* Métrica 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }} // <-- Efecto hover interactivo estilo Misión/Visión
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2 cursor-default flex-1"
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
            whileHover={{ y: -6 }} // <-- Efecto hover interactivo estilo Misión/Visión
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2 cursor-default flex-1"
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