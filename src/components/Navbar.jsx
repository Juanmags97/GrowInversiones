import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // <-- Importamos el hook de traducción

export default function Navbar() {
  const { t, i18n } = useTranslation(); // <-- Declaramos las funciones de traducción

  // Función automática para cambiar de idioma al hacer clic
  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {/* Fondo oficial del manual #1D2733 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1D2733]/95 backdrop-blur-md border-b border-white/5 px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* LOGOTIPO CON IMAGEN PNG */}
          <a href="#inicio" className="flex items-center group">
            <img
              src="/GwLogo.png" // Corregido para que apunte bien a tu carpeta public
              alt="GW Desarrollos Logo"
              className="h-[75px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* MENÚ DE NAVEGACIÓN TRADUCIDO AUTOMÁTICAMENTE */}
          <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-slate-300">
            <a href="#inicio" className="hover:text-[#DFC173] transition-colors">
              {t('nav.inicio')}
            </a>
            <a href="#quienes-somos" className="hover:text-[#DFC173] transition-colors">
              {t('nav.gw')}
            </a>
            <a href="#del-sol" className="hover:text-[#DFC173] transition-colors">
              {t('nav.gwDelSol')}
            </a>
            <a href="#invertir" className="hover:text-[#DFC173] transition-colors">
              {t('nav.invertir')}
            </a>
            <a href="#contacto" className="hover:text-[#DFC173] transition-colors">
              {t('nav.contacto')}
            </a>
          </div>

          {/* BANDERAS DE IDIOMAS CON EVENTO CLICK */}
          <div className="flex items-center space-x-3 bg-white/5 p-2 rounded-lg border border-white/10">
            <span 
              onClick={() => cambiarIdioma('es')} 
              className="cursor-pointer text-lg hover:scale-110 transition-transform" 
              title="Español"
            >
              🇪🇸
            </span>
            <span 
              onClick={() => cambiarIdioma('pt')} 
              className="cursor-pointer text-lg hover:scale-110 transition-transform" 
              title="Portugués"
            >
              🇧🇷
            </span>
            <span 
              onClick={() => cambiarIdioma('en')} 
              className="cursor-pointer text-lg hover:scale-110 transition-transform" 
              title="English"
            >
              🇺🇸
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}