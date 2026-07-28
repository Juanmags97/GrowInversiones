import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function IntegrationSection() {
  const { t } = useTranslation(); // <-- Ahora sí, declarada adentro del componente

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
        
        {/* PARTE SUPERIOR: NEWSLETTER (IZQUIERDA) + INSTAGRAM (DERECHA) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* NEWSLETTER */}
          <div className="bg-[#1E3957] border border-white/5 p-8 rounded-2xl">
            <h3 className="text-white font-serif text-xl mb-3">Newsletter</h3>
            <p className="text-xs text-neutral-400 mb-4">Recibí las últimas novedades del mercado inmobiliario y oportunidades exclusivas.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-[#1D2733] border border-white/10 rounded px-4 py-2 text-xs text-white w-full focus:outline-none focus:border-[#DFC173]"
              />
              <button className="bg-[#DFC173] text-[#1D2733] text-xs font-bold uppercase px-6 py-2 rounded tracking-wider hover:bg-[#D5A361] transition-colors">
                Suscribirme
              </button>
            </div>
          </div>

          {/* INSTAGRAM GRID (UBICADO A LA DERECHA) */}
          <div className="space-y-4">
            <h4 className="text-white font-serif text-sm">
              Conectá con nosotros: <span className="text-[#DFC173]">@gwdesarrollos.py</span>
            </h4>
            <div className="bg-[#1E3957] border border-white/5 p-4 rounded-xl shadow-inner">
              <div 
                className="elfsight-app-7118408e-52ec-4bfd-9188-14e90ccdeb2d" 
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>

        </div>

        {/* PARTE INFERIOR: FORMULARIO DETALLADO (ABAJO DEL WIDGET) */}
        <div id="contacto" className="bg-[#1E3957] border border-white/5 p-8 rounded-2xl shadow-2xl w-full">
          <h3 className="text-white font-serif text-xl mb-2">Dejanos tus datos</h3>
          <p className="text-xs text-neutral-400 mb-6">Un asesor experto se pondrá en contacto a la brevedad.</p>

          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <div>
              <label className="text-neutral-400 block mb-1">¿Qué tipo de unidad estás buscando?</label>
              <select className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]">
                <option>Departamento 1 Dormitorio</option>
                <option>Departamento 2 Dormitorios</option>
                <option>Penthouse / Premium</option>
              </select>
            </div>

            <div>
              <label className="text-neutral-400 block mb-1">¿Cuál es tu rango de edad?</label>
              <input type="text" placeholder="Ej: 30 - 45 años" className="w-full bg-[#1D2733] border border-white/10 text-white rounded p-3 focus:outline-none focus:border-[#DFC173]" />
            </div>

            <div>
              <label className="text-neutral-400 block mb-1">¿Qué factor valorás más?</label>
              <select className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]">
                <option>Ubicación y Conectividad</option>
                <option>Amenities Premium</option>
                <option>Rentabilidad del Pozo</option>
              </select>
            </div>

            <div>
              <label className="text-neutral-400 block mb-1">¿Para qué estás buscando adquirir?</label>
              <select className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]">
                <option>Inversión (Renta/Reserva de Valor)</option>
                <option>Vivienda Propia</option>
              </select>
            </div>

            <div>
              <label className="text-neutral-400 block mb-1">¿Cómo te gustaría ser contactado?</label>
              <select className="w-full bg-[#1D2733] border border-white/10 text-slate-300 rounded p-3 focus:outline-none focus:border-[#DFC173]">
                <option>WhatsApp Directo</option>
                <option>Llamada Telefónica</option>
                <option>Correo Electrónico</option>
              </select>
            </div>

            {/* BOTÓN ALINEADO CON LA GRILLA */}
            <div className="flex items-end">
              <button type="submit" className="w-full bg-gradient-to-r from-[#DFC173] to-[#D5A361] text-[#1D2733] font-bold uppercase py-3 rounded tracking-widest hover:shadow-lg hover:shadow-[#DFC173]/10 transition-all">
                Enviar Requerimientos
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}