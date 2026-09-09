import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function IntegrationSection() {
  const { t } = useTranslation();

  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycby-rBCu64FIyjC4hYJTgxHtOtbjAXehHo6ZypO5sGFf0JoO9EoxppajA9-leZY4WYp93w/exec";

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
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const validateContact = (contact) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+0-9\s-]{7,20}$/;
    return emailRegex.test(contact) || phoneRegex.test(contact);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.contactoDirecto.trim() || !validateContact(formData.contactoDirecto.trim())) {
      setErrorMsg("Ingresá un número de teléfono o correo electrónico válido.");
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
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
      clearTimeout(timeoutId);
      setErrorMsg("Ocurrió una demora al conectar. Podés contactarnos directamente por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#1D2733] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* FEED DE INSTAGRAM CON FALLBACK */}
        <div className="w-full">
          <div className="elfsight-app-bf6a6c30-1d85-4c56-a907-aca8ffe9a590" data-elfsight-app-lazy />
          <div className="mt-4 text-center">
            <a 
              href="https://www.instagram.com/gwdesarrollos.py" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#DFC173]/80 hover:text-[#DFC173] transition-colors"
            >
              Seguinos en @gwdesarrollos.py →
            </a>
          </div>
        </div>

        {/* FORMULARIO DE LEADS */}
        <div id="contacto" className="bg-[#1E3957] border border-white/5 p-8 rounded-2xl shadow-2xl w-full">
          <h3 className="text-white font-serif text-xl mb-2">{t('integration.formTitulo')}</h3>
          <p className="text-xs text-neutral-400 mb-6">{t('integration.formDescripcion')}</p>

          {enviado ? (
            <div className="bg-emerald-900/40 border border-emerald-500/30 text-emerald-200 p-6 rounded-xl text-center space-y-2">
              <h4 className="font-bold text-sm uppercase tracking-wider">¡Requerimiento enviado con éxito!</h4>
              <p className="text-xs">Un asesor de GW se pondrá en contacto a la brevedad.</p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-4 text-xs text-[#DFC173] underline hover:text-white transition-colors"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">

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

              <div>
                <label className="text-neutral-400 block mb-1">{t('integration.formEdad')}</label>
                <input
                  type="number"
                  min="18"
                  max="99"
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                  placeholder={t("integration.placeHolderEdad")}
                  className="w-full bg-[#1D2733] border border-white/10 text-white rounded p-3 focus:outline-none focus:border-[#DFC173]"
                />
              </div>

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

              <div className="md:col-span-2">
                <label className="text-neutral-400 block mb-1">Contacto directo (Email o Celular con código de país)</label>
                <input
                  type="text"
                  name="contactoDirecto"
                  value={formData.contactoDirecto}
                  onChange={handleChange}
                  placeholder="+595 971 ... o ejemplo@gmail.com"
                  className="w-full bg-[#1D2733] border border-white/10 text-white rounded p-3 focus:outline-none focus:border-[#DFC173]"
                  required
                />
                {errorMsg && (
                  <p className="mt-2 text-xs text-rose-400 font-mono">{errorMsg}</p>
                )}
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#DFC173] to-[#D5A361] text-[#1D2733] font-bold uppercase py-3 rounded tracking-widest hover:shadow-lg hover:shadow-[#DFC173]/10 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "Enviando Requerimiento..." : t("integration.formEnviar")}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}