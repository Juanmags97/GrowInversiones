import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function IntegrationSection() {
  const { t } = useTranslation(); 
  
  // ⚠️ PEGÁ ACÁ LA URL QUE TE DIO GOOGLE APPS SCRIPT
  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/TU_URL_DE_APPS_SCRIPT_AQUI/exec";

  const [formData, setFormData] = useState({
    tipoUnidad: 'Monoambiente',
    edad: '',
    objetivo: 'Para inversión',
    modoInversion: 'Financiado',
    pais: '',
    medioContacto: 'WhatsApp',
    contactoDirecto: ''
  });

  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.contactoDirecto) {
      alert("Por favor ingresá un contacto (Email o Celular).");
      return;
    }

    setLoading(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', // Evita problemas de CORS con Google Scripts
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setEnviado(true);
      setFormData({
        tipoUnidad: 'Monoambiente',
        edad: '',
        objetivo: 'Para inversión',
        modoInversion: 'Financiado',
        pais: '',
        medioContacto: 'WhatsApp',
        contactoDirecto: ''
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar tus datos. Intentalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#1D2733] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* INSTAGRAM GRID */}
        <div className="w-full space-y-4">
          <h4 className="text-white font-serif text-lg text-center md:text-left">
            {t('integration.instagramTitulo')} <span className="text-[#DFC173]">@gwdesarrollos.py</span>
          </h4>
          <div className="bg-[#1E3957] border border-white/5 p-4 rounded-2xl shadow-2xl w-full">
            <div
              className="elfsight-app-74bfe8d7-75a9-4dc5-9580-94fdc7120701"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>

        {/* FORMULARIO CONECTADO A GOOGLE SHEETS */}
        <div id="contacto" className="bg-[#1E3957] border border-white/5 p-8 rounded-2xl shadow-2xl w-full">
          <h3 className="text-white font-serif text-xl mb-2">{t('integration.formTitulo')}</h3>
          <p className="text-xs text-neutral-400 mb-6">{t('integration.formDescripcion')}</p>

          {enviado ? (
            <div className="bg-emerald-900/40 border border-emerald-500/30 text-emerald-200 p-6 rounded-xl text-center space-y-2">
              <h4 className="font-bold text-sm uppercase tracking-wider">¡Requerimiento enviado con éxito!</h4>
              <p className="text-xs">Un asesor experto se pondrá en contacto a la brevedad.</p>
              <button 
                onClick={() => setEnviado(false)} 
                className="mt-4 text-xs text-[#DFC173] underline hover:text-white transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              
              {/* Tipo de unidad */}
              <div>
                <label className="text-neutral-400 block mb-1">{t('integration.formUnidad')}</label>
                <select 
                  name="tipoUnidad" 
                  value={formData.tipoUnidad} 
                  onChange={handleChange}
                  className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]"
                >
                  <option value="Monoambiente">{t('integration.formUnidadOpciones.Monoambiente')}</option>
                  <option value="1Dormitorio">{t('integration.formUnidadOpciones.1Dormitorio')}</option>
                  <option value="2Dormitorios">{t('integration.formUnidadOpciones.2Dormitorios')}</option>
                </select>
              </div>

              {/* Edad */}
              <div>
                <label className="text-neutral-400 block mb-1">{t('integration.formEdad')}</label>
                <input 
                  type="text" 
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                  placeholder={t("integration.placeHolderEdad")} 
                  className="w-full bg-[#1D2733] border border-white/10 text-white rounded p-3 focus:outline-none focus:border-[#DFC173]" 
                />
              </div>

              {/* Objetivo */}
              <div>
                <label className="text-neutral-400 block mb-1">{t('integration.formFactor')}</label>
                <select 
                  name="objetivo"
                  value={formData.objetivo}
                  onChange={handleChange}
                  className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]"
                >
                  <option value="Para inversión">{t('integration.formFactorOpciones.Inversion')}</option>
                  <option value="Para vivienda">{t('integration.formFactorOpciones.Vivienda')}</option>
                </select>
              </div>

              {/* Modo inversión */}
              <div>
                <label className="text-neutral-400 block mb-1">{t('integration.formInvertir')}</label>
                <select 
                  name="modoInversion"
                  value={formData.modoInversion}
                  onChange={handleChange}
                  className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]"
                >
                  <option value="Financiado">{t('integration.formModoInversion.Financiado')}</option>
                  <option value="Contado">{t('integration.formModoInversion.Contado')}</option>
                  <option value="Ambas">{t('integration.formModoInversion.Ambas')}</option>
                </select>
              </div>

              {/* País */}
              <div>
                <label className="text-neutral-400 block mb-1">{t('integration.formPais')}</label>
                <input 
                  type="text" 
                  name="pais"
                  value={formData.pais}
                  onChange={handleChange}
                  placeholder={t('integration.placeHolderPais')} 
                  className="w-full bg-[#1D2733] border border-white/10 text-white rounded p-3 focus:outline-none focus:border-[#DFC173]" 
                />
              </div>

              {/* Medio de contacto */}
              <div>
                <label className="text-neutral-400 block mb-1">{t("integration.contacto")}</label>
                <select 
                  name="medioContacto"
                  value={formData.medioContacto}
                  onChange={handleChange}
                  className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]"
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Mail">Mail</option>
                </select>
              </div>

              {/* Contacto directo */}
              <div className="md:col-span-2">
                <label className="text-neutral-400 block mb-1">Contacto directo (Email o Celular)</label>
                <input 
                  type="text" 
                  name="contactoDirecto"
                  value={formData.contactoDirecto}
                  onChange={handleChange}
                  placeholder={t("integration.placeHolderCorreo")} 
                  className="w-full bg-[#1D2733] border border-white/10 text-white rounded p-3 focus:outline-none focus:border-[#DFC173]"
                  required 
                />
              </div>

              {/* Botón de envío */}
              <div className="md:col-span-2 pt-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#DFC173] to-[#D5A361] text-[#1D2733] font-bold uppercase py-3 rounded tracking-widest hover:shadow-lg hover:shadow-[#DFC173]/10 transition-all disabled:opacity-50"
                >
                  {loading ? "Enviando..." : t("integration.formEnviar")}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}