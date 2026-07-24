import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProjectShowcase from './components/ProjectShowcase';
import IntegrationSection from './components/IntegrationSection';

export default function App() {
  return (
    <div className="bg-[#060a13] min-h-screen text-slate-100 font-sans selection:bg-[#d4af37] selection:text-black">
      {/* 1. NAVEGACIÓN Y BOTÓN FLOTANTE */}
      <Navbar />

      {/* 2. PANTALLA PRINCIPAL, CARRUSEL E INDICADORES DE PARAGUAY */}
      <Hero />

      {/* 3. SECCIÓN CORPORATIVA (QUIÉNES SOMOS, MISIÓN, VISIÓN Y VALORES) */}
      <AboutUs />

      {/* 4. LANZAMIENTO EXCLUSIVO DE GW DEL SOL Y VIDEO PRESENTACIÓN */}
      <ProjectShowcase />

      {/* 5. MARKETING: NEWSLETTER, FORMULARIO EXTENDIDO Y FEED DE INSTAGRAM */}
      <IntegrationSection />

      {/* 6. CONTENIDO A DEFINIR A FUTURO (NOTICIAS / SECCIÓN NOVEDADES) */}
      <footer className="py-12 bg-neutral-950 text-center border-t border-slate-900 text-[10px] uppercase tracking-widest text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} GW Desarrollos. Todos los derechos reservados.
          </div>
          <div className="text-slate-400 hover:text-[#d4af37] cursor-pointer transition-colors">
            Sección Noticias / Novedades a definir a futuro
          </div>
        </div>
      </footer>
    </div>
  );
}