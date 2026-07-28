import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060a13]/90 backdrop-blur-md border-b border-slate-950 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LOGOTIPO DORADO */}
          <div className="text-[#d4af37] font-serif font-bold text-2xl tracking-widest cursor-pointer">
            GW
          </div>

          {/* MENÚ DE NAVEGACIÓN */}
          <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-slate-300">
            <a href="#inicio" className="hover:text-[#d4af37] transition-colors">Inicio</a>
            <a href="#quienes-somos" className="hover:text-[#d4af37] transition-colors">GW</a>
            <a href="#del-sol" className="hover:text-[#d4af37] transition-colors">GW Del Sol</a>
            <a href="#invertir" className="hover:text-[#d4af37] transition-colors">Invertir en Paraguay</a>
            <a href="#contacto" className="hover:text-[#d4af37] transition-colors">Contacto</a>
          </div>

          {/* BANDERAS DE IDIOMAS */}
          <div className="flex items-center space-x-3 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
            <span className="cursor-pointer text-lg hover:scale-110 transition-transform" title="Español">🇪🇸</span>
            <span className="cursor-pointer text-lg hover:scale-110 transition-transform" title="Portugués">🇧🇷</span>
            <span className="cursor-pointer text-lg hover:scale-110 transition-transform" title="English">🇺🇸</span>
          </div>
        </div>
      </nav>

      {/* BOTÓN ESTÁTICO DE WHATSAPP / DORADO FLOTANTE */}
      {/* <a 
        href="https://wa.me/tu_numero" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#d4af37] to-[#aa841a] text-neutral-950 p-4 rounded-full shadow-2xl shadow-[#d4af37]/20 hover:scale-110 transition-all group border border-[#d4af37]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        <span className="absolute right-14 top-3 bg-neutral-950 text-[#d4af37] text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border border-[#d4af37]/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Conversar
        </span>
      </a> */}
    </>
  );
}