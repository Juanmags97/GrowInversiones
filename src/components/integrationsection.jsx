import React from 'react';
import { motion } from 'framer-motion';

export default function IntegrationSection() {
  return (
    <section className="py-24 bg-[#060a13] border-t border-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* COLUMNA IZQUIERDA: NEWSLETTER + INSTAGRAM */}
        <div className="space-y-12">
          {/* NEWSLETTER */}
          <div className="bg-[#0b1120] border border-slate-900 p-8 rounded-2xl">
            <h3 className="text-white font-serif text-xl mb-3">Newsletter</h3>
            <p className="text-xs text-slate-400 mb-4">Recibí las últimas novedades del mercado inmobiliario y oportunidades exclusivas.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-[#060a13] border border-slate-800 rounded px-4 py-2 text-xs text-white w-full focus:outline-none focus:border-[#d4af37]"
              />
              <button className="bg-[#d4af37] text-neutral-950 text-xs font-bold uppercase px-6 py-2 rounded tracking-wider">Suscribirme</button>
            </div>
          </div>

          {/* INSTAGRAM GRID */}
          <div>
            <h4 className="text-white font-serif text-sm mb-4">Conectá con nosotros: <span className="text-[#d4af37]">@gwdesarrollos.py</span></h4>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((post) => (
                <div key={post} className="relative aspect-square rounded-xl overflow-hidden border border-slate-800 group cursor-pointer">
                  <img 
                    src={`https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80`} 
                    alt="Instagram Post" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                    Ver Post
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO DETALLADO (AGREGAR DEBAJO DE NEWSLETTER EN MOCKUP) */}
        <div id="contacto" className="bg-[#0b1120] border border-slate-900 p-8 rounded-2xl shadow-2xl">
          <h3 className="text-white font-serif text-xl mb-2">Dejanos tus datos</h3>
          <p className="text-xs text-slate-400 mb-6">Un asesor experto se pondrá en contacto a la brevedad.</p>
          
          <form className="space-y-4 text-xs">
            <div>
              <label className="text-slate-400 block mb-1">¿Qué tipo de unidad estás buscando?</label>
              <select className="w-full bg-[#060a13] border border-slate-800 text-slate-300 rounded p-3 focus:outline-none focus:border-[#d4af37]">
                <option>Departamento 1 Dormitorio</option>
                <option>Departamento 2 Dormitorios</option>
                <option>Penthouse / Premium</option>
              </select>
            </div>

            <div>
              <label className="text-slate-400 block mb-1">¿Cuál es tu rango de edad?</label>
              <input type="text" placeholder="Ej: 30 - 45 años" className="w-full bg-[#060a13] border border-slate-800 text-white rounded p-3 focus:outline-none focus:border-[#d4af37]" />
            </div>

            <div>
              <label className="text-slate-400 block mb-1">¿Qué factor valorás más?</label>
              <select className="w-full bg-[#060a13] border border-slate-800 text-slate-300 rounded p-3 focus:outline-none focus:border-[#d4af37]">
                <option>Ubicación y Conectividad</option>
                <option>Amenities Premium</option>
                <option>Rentabilidad del Pozo</option>
              </select>
            </div>

            <div>
              <label className="text-slate-400 block mb-1">¿Para qué estás buscando adquirir?</label>
              <select className="w-full bg-[#060a13] border border-slate-800 text-slate-300 rounded p-3 focus:outline-none focus:border-[#d4af37]">
                <option>Inversión (Renta/Reserva de Valor)</option>
                <option>Vivienda Propia</option>
              </select>
            </div>

            <div>
              <label className="text-slate-400 block mb-1">¿Cómo te gustaría ser contactado?</label>
              <select className="w-full bg-[#060a13] border border-slate-800 text-slate-300 rounded p-3 focus:outline-none focus:border-[#d4af37]">
                <option>WhatsApp Directo</option>
                <option>Llamada Telefónica</option>
                <option>Correo Electrónico</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-[#d4af37] to-[#aa841a] text-neutral-950 font-bold uppercase py-3 rounded tracking-widest mt-4 hover:shadow-lg hover:shadow-[#d4af37]/10 transition-all">
              Enviar Requerimientos
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}