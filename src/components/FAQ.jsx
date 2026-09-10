import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const FAQ_ITEMS = [
    {
      pregunta: t('faq.q1', '¿Por qué invertir en desarrollos inmobiliarios en Asunción?'),
      respuesta: t('faq.a1', 'Paraguay ofrece una de las economías más estables de la región, baja carga impositiva (régimen 10-10-10) y rentabilidades en dólares que oscilan entre el 8% y el 12% anual por renta temporal o tradicional.')
    },
    {
      pregunta: t('faq.q2', '¿Puedo comprar una unidad siendo inversor extranjero?'),
      respuesta: t('faq.a2', 'Sí. La legislación paraguaya otorga igualdad de derechos a inversores locales y extranjeros. El proceso puede gestionarse de forma remota mediante apoderado o firma certificada con total seguridad jurídica.')
    },
    {
      pregunta: t('faq.q3', '¿Cuáles son los planes de financiación disponibles para GW Del Sol?'),
      respuesta: t('faq.a3', 'Ofrecemos esquemas flexibles con anticipo inicial y saldo financiado en cuotas durante el plazo de obra, además de condiciones especiales y descuentos por pago al contado.')
    },
    {
      pregunta: t('faq.q4', '¿GW se encarga de la administración de la propiedad tras la entrega?'),
      respuesta: t('faq.a4', 'Brindamos asesoramiento integral y alianzas de property management para gestionar alquileres temporales (Airbnb/Booking) o contratos corporativos a largo plazo sin que el inversor tenga que ocuparse del día a día.')
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#111722] text-white border-t border-white/5 relative overflow-hidden">
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#DFC173]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
        {/* Encabezado */}
        <div className="text-center space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#DFC173] block">
            {t('faq.badge', 'Dudas Habituales')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {t('faq.titulo', 'Preguntas Frecuentes de Inversores')}
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto">
            {t('faq.descripcion', 'Todo lo que necesitás saber sobre la adquisición, rentabilidad y seguridad de tu unidad en GW.')}
          </p>
        </div>

        {/* Acordeón */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-white/10 rounded-xl bg-[#1D2733]/40 backdrop-blur-md overflow-hidden transition-colors hover:border-[#DFC173]/30"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="text-sm font-medium text-white tracking-wide">
                    {item.pregunta}
                  </span>
                  <span className="text-[#DFC173] text-lg font-mono transition-transform duration-300">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-3">
                        {item.respuesta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Callout hacia WhatsApp */}
        <div className="text-center pt-4">
          <p className="text-xs text-neutral-400">
            {t('faq.dudaDirecta', '¿Tenés una consulta específica sobre tu esquema de pago?')}{' '}
            <a
              href="https://wa.me/+595976793364?text=Hola,%20tengo%20dudas%20adicionales%20sobre%20el%20proyecto."
              target="_blank"
              rel="noreferrer"
              className="text-[#DFC173] underline hover:text-white transition-colors"
            >
              {t('faq.asesorBtn', 'Consultá directamente con un asesor')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}