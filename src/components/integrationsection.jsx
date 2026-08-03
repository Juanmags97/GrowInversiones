import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function IntegrationSection() {
  const { t } = useTranslation(); 

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-24 bg-[#1D2733] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* INSTAGRAM GRID: AHORA A ANCHO COMPLETO (Sin Newsletter) */}
        <div className="w-full space-y-4">
          <h4 className="text-white font-serif text-lg text-center md:text-left">
            {t('integration.instagramTitulo')} <span className="text-[#DFC173]">@gwdesarrollos.py</span>
          </h4>
          <div className="bg-[#1E3957] border border border-white/5 p-4 rounded-2xl shadow-2xl w-full">
            {/* Nuevo Widget de Elfsight a ancho completo */}
            <div
              className="elfsight-app-74bfe8d7-75a9-4dc5-9580-94fdc7120701"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>

        {/* PARTE INFERIOR: FORMULARIO DETALLADO (CENTRADITO ABAJO) */}
        <div id="contacto" className="bg-[#1E3957] border border-white/5 p-8 rounded-2xl shadow-2xl w-full md:w-1/2 items-center m-auto">
          <h3 className="text-white font-serif text-xl mb-2">{t('integration.formTitulo')}</h3>
          <p className="text-xs text-neutral-400 mb-6">{t('integration.formDescripcion')}</p>

          <form className="grid grid-cols-1 gap-6 text-xs">
            {/* tipo de unidad */}
            <div>
              <label className="text-neutral-400 block mb-1">{t('integration.formUnidad')}</label>
              <select className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]">
                <option>{t('integration.formUnidadOpciones.Monoambiente')}</option>
                <option>{t('integration.formUnidadOpciones.1Dormitorio')}</option>
                <option>{t('integration.formUnidadOpciones.2Dormitorios')}</option>
              </select>
            </div>
            {/* cual es la edad */}
            <div>
              <label className="text-neutral-400 block mb-1">{t('integration.formEdad')}</label>
              <input type="text" placeholder={t("integration.placeHolderEdad")} className="w-full bg-[#1D2733] border border-white/10 text-white rounded p-3 focus:outline-none focus:border-[#DFC173]" />
            </div>
              {/* objetivo de la propiedad */}
            <div>
              <label className="text-neutral-400 block mb-1">{t('integration.formFactor')}</label>
              <select className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]">
                <option>{t('integration.formFactorOpciones.Inversion')}</option>
                <option>{t('integration.formFactorOpciones.Vivienda')}</option>
              </select>
            </div>
              {/* como se invertiria */}
            <div>
              <label className="text-neutral-400 block mb-1">{t('integration.formInvertir')}</label>
              <select className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]">
                <option>{t('integration.formModoInversion.Financiado')}</option>
                <option>{t('integration.formModoInversion.Contado')}</option>
                <option>{t('integration.formModoInversion.Ambas')}</option>
              </select>
            </div>
            {/* pais de residencia */}
            <div>
              <label className="text-neutral-400 block mb-1">{t('integration.formPais')}</label>
              <input type="text" placeholder={t('integration.placeHolderPais')}  className="w-full bg-[#1D2733] border border-white/10 text-white rounded p-3 focus:outline-none focus:border-[#DFC173]" />
            </div>
            {/* contacto */}
            <div>
              <label className="text-neutral-400 block mb-1">{t("integration.contacto")}</label>
              <select className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]">
                <option>WhatsApp</option>
                <option>Mail</option>
              </select>
              <input type="text" placeholder={t("integration.placeHolderCorreo")} className="w-full bg-[#1D2733] border my-6 border-white/10 text-white rounded p-3 focus:outline-none focus:border-[#DFC173]"/>
            </div>

            {/* BOTÓN ALINEADO CON LA GRILLA */}
            <div className="flex items-end">
              <button type="submit" className="w-full bg-gradient-to-r from-[#DFC173] to-[#D5A361] text-[#1D2733] font-bold uppercase py-3 rounded tracking-widest hover:shadow-lg hover:shadow-[#DFC173]/10 transition-all">
                {t("integration.formEnviar")}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}