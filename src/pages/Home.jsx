import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ParaguayStats from '../components/ParaguayStats';
import AboutUs from '../components/AboutUs';
import ProjectShowcase from '../components/projectshowcase';
import IntegrationSection from '../components/integrationsection';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';
import Acknowledgements from '../components/Acknowledgements';
import FAQ from '../components/FAQ';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ParaguayStats />
      <AboutUs />
      <ProjectShowcase />
      <InstagramFeed />
      <FAQ />
      <IntegrationSection />
      <Acknowledgements />
      <Footer />

      {/* 📱 BOTÓN FLOTANTE LATERAL PREMIUM EDICIÓN GW */}
      <div className="group fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center hoverWap bg-[#1D2733]/60 backdrop-blur-md border border-[#DFC173]/20 rounded-l-xl py-6 px-3 space-y-8 text-[10px] uppercase tracking-[0.2em] text-white">

        <a
          href="https://wa.me/+595976793364?text=Hola,%20estoy%20interesado%20en%20conocer%20más."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 hover:text-[#DFC173] transition-colors duration-400 py-2 cursor-pointer"
        >
          <svg className="w-3.5 h-3.5 text-[#DFC173]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-300 delay-100 group-hover:max-w-xs group-hover:opacity-100">
            Whatsapp
          </span>
        </a>

        <div className="w-full h-[1px] bg-[#DFC173]/10"></div>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 hover:text-[#DFC173] transition-colors duration-400 py-2 cursor-pointer"
        >
          <svg className="w-3.5 h-3.5 text-[#DFC173]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-300 delay-100 group-hover:max-w-xs group-hover:opacity-100">
            Contacto
          </span>
        </a>

      </div>

      {/* 📱 EN CELULAR: botones redondos abajo a la derecha (el lateral tapaba el contenido) */}
      <div className="md:hidden fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex flex-col gap-3">
        <a
          href="#contacto"
          aria-label="Contacto"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1D2733]/85 backdrop-blur-md border border-[#DFC173]/30 shadow-lg"
        >
          <svg className="w-5 h-5 text-[#DFC173]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        <a
          href="https://wa.me/+595976793364?text=Hola,%20estoy%20interesado%20en%20conocer%20más."
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-[#DFC173] shadow-lg shadow-black/30"
        >
          <svg className="w-5 h-5 text-[#1D2733]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </div>
    </>
  );
}