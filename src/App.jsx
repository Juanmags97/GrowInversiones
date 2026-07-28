import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParaguayStats from './components/ParaguayStats';
import AboutUs from './components/AboutUs';
import ProjectShowcase from './components/ProjectShowcase';
import IntegrationSection from './components/IntegrationSection';

export default function App() {
  return (
    <div className="bg-black min-h-screen relative selection:bg-[#c5a880] selection:text-black">
      <Navbar />
      <Hero />
      <ParaguayStats />
      <AboutUs />
      <ProjectShowcase />
      <IntegrationSection />

      {/* 📱 BOTÓN FLOTANTE LATERAL PREMIUM EDICIÓN GW */}
<div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center bg-[#1D2733]/60 backdrop-blur-md border border-[#DFC173]/20 rounded-l-xl py-6 px-3 space-y-8 text-[10px] uppercase tracking-[0.2em] text-white">
  
  <a 
    href="https://wa.me/tu-numero-aqui" 
    target="_blank" 
    rel="noreferrer" 
    className="flex flex-col items-center gap-2 [writing-mode:vertical-lr] hover:text-[#DFC173] transition-colors duration-300 py-2 cursor-pointer"
  >
    <svg className="w-3.5 h-3.5 -rotate-90 text-[#DFC173]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
    whatsapp
  </a>

  <div className="w-full h-[1px] bg-[#DFC173]/10"></div>

  <a 
    href="#contacto" 
    className="flex flex-col items-center gap-2 [writing-mode:vertical-lr] hover:text-[#DFC173] transition-colors duration-300 py-2 cursor-pointer"
  >
    <svg className="w-3.5 h-3.5 -rotate-90 text-[#DFC173]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    contacto
  </a>
  
</div>
    </div>
  );
}