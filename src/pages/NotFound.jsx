import React from 'react';

export default function NotFound() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 overflow-hidden selection:bg-[#c5a880] selection:text-black">
      {/* Resplandor dorado de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DFC173]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Marca de agua 404 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] sm:text-[320px] font-bold text-white/[0.03] select-none pointer-events-none font-sans">
        404
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center space-y-6">
        <span className="inline-block px-4 py-1 rounded-full border border-[#DFC173]/30 bg-[#1D2733]/40 text-[#DFC173] text-xs uppercase tracking-[0.2em]">
          Error 404 // Página No Encontrada
        </span>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          La sección solicitada <span className="text-[#DFC173]">no está disponible</span>
        </h1>

        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          La propiedad o el enlace que intentás consultar no existe o fue reubicado.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#DFC173] hover:bg-[#c5a880] text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300"
          >
            ← Volver al Inicio
          </a>
          <a
            href="https://wa.me/+595976793364?text=Hola,%20tuve%20un%20problema%20al%20navegar%20el%20sitio."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-[#DFC173]/30 bg-[#1D2733]/60 hover:bg-[#1D2733] text-[#DFC173] font-semibold text-xs uppercase tracking-widest transition-all duration-300"
          >
            Contactar Asesor
          </a>
        </div>
      </div>
    </section>
  );
}