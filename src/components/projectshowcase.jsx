import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logoNuevo from '../../Public/gsNuevo.png';
import logoArriba from '../../Public/gw-del-sol.png';
import video from '../../Public/VideoHorizontal.mp4';

export default function ProjectShowcase() {
  const { t } = useTranslation();

  return (
    // Fondo oficial #1D2733 del manual de marca
    <section id="del-sol" className="py-24 bg-[#1D2733] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* ENCABEZADO PRINCIPAL CON LOGO GwSol.png */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 flex flex-col items-center justify-center space-y-4"
        >
          <span className="text-[#DFC173] text-xs font-bold uppercase tracking-widest">
            {t('showcase.lanzamiento')}
          </span>
          {/* Logo GwSol.png cargado desde la carpeta public */}
          <img
            src={logoArriba}
            alt="GW Del Sol"
            className="h-20 md:h-[160px] w-auto object-contain mt-2"
          />
        </motion.div>

        {/* 1. SECCIÓN SUPERIOR: VIDEO PRINCIPAL A ANCHO COMPLETO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#1E3957] aspect-video w-full mb-12"
        >
          <video
            src={video}
            controls
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 2. SECCIÓN INFERIOR: GRILLA DE 2 COLUMNAS (TEXTO vs UBICACIÓN) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* COLUMNA INFERIOR IZQUIERDA: TEXTO, LOGO NUEVO Y BOTÓN AL PDF */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 m-auto w-full"
          >
            <div className="bg-[#1E3957] border border-white/5 p-6 rounded-2xl shadow-2xl space-y-6">
              {/* Texto de descripción */}
              <p className="text-neutral-300 text-sm leading-relaxed">
                {t('showcase.descripcion')}
              </p>

              {/* Fila con el segundo logo (LogoNuevo.png) y el enlace al PDF */}
              </div>
              <div className="flex flex-wrap items-center m-auto justify-center gap-4 pt-2 ">
                <img
                  src={logoNuevo}
                  alt="Logo Nuevo"
                  className="h-15 md:h-[160px] w-auto object-contain"
                />

                {/* BOTÓN CONECTADO AL PDF EN PUBLIC/ */}
                <a
                  href={`${import.meta.env.BASE_URL}BrochureGwDelSol.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-[#DFC173] text-[#DFC173] px-6 py-2.5 rounded text-xs uppercase tracking-widest hover:bg-[#DFC173] hover:text-[#1D2733] transition-all duration-300 font-bold m-auto text-center"
                >
                  {t('showcase.boton')} →
                </a>

            </div>
          </motion.div>

          {/* COLUMNA INFERIOR DERECHA: MAPA DE UBICACIÓN OFICIAL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1E3957] border border-white/5 p-4 rounded-2xl shadow-2xl space-y-4 w-full"
          >
            <div className="flex items-center space-x-2 text-[#DFC173]">
              <i className="fa-solid fa-location-dot text-sm"></i>
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                GW DEL SOL, Asunción, Paraguay
              </span>
            </div>

            {/* Mapa interactivo */}
            <div className="w-full h-60 rounded-xl overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border border-white/5">
              <iframe
                title="Ubicación GW Del Sol"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d858.7423851532051!2d-57.5661461!3d-25.2816153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7001efe306b%3A0xc30e79ec9d25c1cd!2sGW%20DEL%20SOL!5e0!3m2!1ses-419!2spy!4v1710000000000!5m2!1ses-419!2spy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}