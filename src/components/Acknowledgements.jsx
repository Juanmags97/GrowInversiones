import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Acknowledgements() {
  const { t } = useTranslation();

  const partners = [
    {
      categoria: t('acknowledgements.catArquitectura') !== 'acknowledgements.catArquitectura' 
        ? t('acknowledgements.catArquitectura') 
        : 'Arquitectura & Diseño',
      nombre: 'Estudio de Arquitectura & Urbanismo',
      detalle: 'Diseño estructural y desarrollo de concepto espacial premium'
    },
    {
      categoria: t('acknowledgements.catIngenieria') !== 'acknowledgements.catIngenieria' 
        ? t('acknowledgements.catIngenieria') 
        : 'Ingeniería & Construcción',
      nombre: 'Constructora & Fiscalización',
      detalle: 'Dirección de obra, normas de calidad y seguridad edilicia'
    },
    {
      categoria: t('acknowledgements.catFinanciero') !== 'acknowledgements.catFinanciero' 
        ? t('acknowledgements.catFinanciero') 
        : 'Respaldo Financiero & Legal',
      nombre: 'Fiduciaria & Entidades Aliadas',
      detalle: 'Garantía legal, estructuración de fideicomisos y seguridad jurídica'
    },
    {
      categoria: t('acknowledgements.catInversores') !== 'acknowledgements.catInversores' 
        ? t('acknowledgements.catInversores') 
        : 'Comunidad de Inversores',
      nombre: 'Red de Inversores Regionales',
      detalle: 'Confianza y proyección en cada etapa de crecimiento'
    }
  ];

  return (
    <section id="agradecimientos" className="relative py-24 bg-[#111722] text-white border-t border-white/5 overflow-hidden">
      {/* Resplandor sutil dorado de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#DFC173]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-[#DFC173]/20 bg-[#1D2733]/50 text-[#DFC173] text-[11px] uppercase tracking-[0.25em]"
          >
            {t('acknowledgements.badge') !== 'acknowledgements.badge' 
              ? t('acknowledgements.badge') 
              : 'Alianzas & Confianza'}
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-white"
          >
            {t('acknowledgements.titulo') !== 'acknowledgements.titulo' 
              ? t('acknowledgements.titulo') 
              : 'Agradecimientos & Respaldo'}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm md:text-base leading-relaxed"
          >
            {t('acknowledgements.descripcion') !== 'acknowledgements.descripcion' 
              ? t('acknowledgements.descripcion') 
              : 'Detrás de cada metro cuadrado construido y de cada rentabilidad proyectada hay un equipo multidisciplinario y aliados que hacen posible la excelencia de GW.'}
          </motion.p>
        </div>

        {/* Tarjetas de aliados y agradecimientos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#1D2733]/40 border border-white/10 hover:border-[#DFC173]/40 p-6 rounded-xl backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-[#DFC173] uppercase block">
                  {item.categoria}
                </span>
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#DFC173] transition-colors">
                  {item.nombre}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.detalle}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DFC173]/80" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                  GW Partner
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensaje institucional final */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center border-t border-white/5 pt-10"
        >
          <p className="text-xs font-serif italic text-neutral-400">
            "Construir confianza es el primer paso para consolidar el futuro." — Equipo Directivo GW
          </p>
        </motion.div>

      </div>
    </section>
  );
}