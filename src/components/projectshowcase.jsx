import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logoNuevo from '../../public/gsNuevo.png';
import logoArriba from '../../public/gw-del-sol.png';
import video from '../../public/VideoHorizontal.mp4';
import ProjectGallery from './ProjectGallery';
import ObraSection from './ObraSection';

const EASE_OUT = [0.22, 1, 0.36, 1];

/* Palabra que se "enciende" a medida que el párrafo atraviesa la pantalla */
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block mr-[0.28em]">
      {children}
    </motion.span>
  );
}

function ScrollLitText({ text }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.55'] });
  const words = text.split(' ');

  if (reduce) return <p className="text-neutral-200">{text}</p>;

  return (
    <p ref={ref} className="text-white">
      {/* Texto completo para lectores de pantalla; las palabras animadas se ocultan */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {w}
            </Word>
          );
        })}
      </span>
    </p>
  );
}

const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d858.7423851532051!2d-57.5661461!3d-25.2816153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7001efe306b%3A0xc30e79ec9d25c1cd!2sGW%20DEL%20SOL!5e0!3m2!1ses-419!2spy!4v1710000000000!5m2!1ses-419!2spy";
const MAP_DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=-25.2816153,-57.5661461";

/* Mapa a sangre: la "ventana" se abre desde el centro hacia los bordes con el scroll */
function LocationMap() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const side = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const radius = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const clipPath = useTransform([side, radius], ([x, r]) => `inset(0% ${x}% 0% ${x}% round ${r}px)`);
  const mapScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <div ref={ref} className="mt-24 w-full">
      {/* Título alineado con el resto del contenido */}
      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-end justify-between gap-6">
        <div>
          {/* El disparo lo hace el contenedor visible; el texto oculto bajo la máscara nunca "entra" en pantalla */}
          <motion.span className="block overflow-hidden" initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.span
              className="flex items-center gap-2 text-[#DFC173] text-xs font-bold uppercase tracking-[0.3em]"
              variants={{ hidden: { y: '110%' }, show: { y: '0%', transition: { duration: 0.8, ease: EASE_OUT } } }}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
              {t('showcase.ubicacion')}
            </motion.span>
          </motion.span>
          <motion.div
            aria-hidden="true"
            className="mt-3 h-px w-16 bg-[#DFC173]/50 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE_OUT, delay: 0.2 }}
          />
        </div>
        <span className="hidden sm:block text-white text-xs font-bold uppercase tracking-wider">
          GW DEL SOL · Asunción, Paraguay
        </span>
      </div>

      <motion.div
        className="group relative w-full h-[60vh] min-h-[360px] max-h-[640px] overflow-hidden bg-[#1E3957]"
        style={reduce ? undefined : { clipPath }}
      >
        <motion.div className="absolute inset-0" style={reduce ? undefined : { scale: mapScale }}>
          <iframe
            title="Ubicación GW Del Sol"
            src={MAP_SRC}
            width="100%"
            height="100%"
            className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Bordes que funden el mapa con el fondo de la sección */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#1D2733] to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1D2733] to-transparent" />

        {/* Tarjeta flotante con acceso directo a "Cómo llegar" */}
        <motion.div
          className="absolute left-4 right-4 bottom-6 sm:left-auto sm:right-8 md:right-16 sm:bottom-10 sm:w-80 bg-[#1D2733]/85 backdrop-blur-md border border-[#DFC173]/25 rounded-xl p-5 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.3 }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#DFC173]">GW Del Sol</span>
          <p className="mt-2 text-sm text-neutral-200 leading-relaxed">{t('showcase.ubicacionTexto')}</p>
          <a
            href={MAP_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative mt-4 inline-flex items-center gap-2 overflow-hidden border border-[#DFC173] text-[#DFC173] px-5 py-2 rounded text-[11px] uppercase tracking-widest font-bold"
          >
            <span className="absolute inset-0 bg-[#DFC173] origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative group-hover/btn:text-[#1D2733] transition-colors duration-300">{t('showcase.comoLlegar')}</span>
            <span className="relative group-hover/btn:text-[#1D2733] group-hover/btn:translate-x-1 transition-all duration-300">→</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ProjectShowcase() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  return (
    // Fondo oficial #1D2733 del manual de marca
    <section id="del-sol" className="pt-24 pb-10 bg-[#1D2733] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===================== BLOQUE DE MARCA: UNA SOLA COLUMNA ===================== */}
        <div className="flex flex-col items-center text-center">

          {/* LOGO GRANDE: "amanecer" — sube detrás de una máscara mientras gira un anillo de rayos */}
          <motion.div
            className="relative flex items-center justify-center w-full py-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Halo dorado que respira (capa de atmósfera) */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute w-[22rem] h-[22rem] md:w-[34rem] md:h-[34rem] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(223,193,115,0.22) 0%, rgba(223,193,115,0.06) 40%, transparent 70%)' }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: EASE_OUT }}
            >
              {!reduce && (
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(223,193,115,0.14) 0%, transparent 60%)' }}
                  animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
            </motion.div>

            {/* Anillo de rayos finos que gira muy lento (eco del sol del logo) */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute w-[19rem] h-[19rem] md:w-[29rem] md:h-[29rem] rounded-full"
              initial={{ opacity: 0, rotate: -40 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, ease: EASE_OUT, delay: 0.3 }}
            >
              <motion.div
                className="w-full h-full rounded-full"
                style={{
                  background: 'repeating-conic-gradient(from 0deg, rgba(223,193,115,0.35) 0deg 0.6deg, transparent 0.6deg 7.5deg)',
                  WebkitMask: 'radial-gradient(circle, transparent 62%, #000 63%, #000 70%, transparent 71%)',
                  mask: 'radial-gradient(circle, transparent 62%, #000 63%, #000 70%, transparent 71%)',
                }}
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            {/* El logo emerge desde abajo, de desenfocado a nítido */}
            {/* El disparo lo hace el contenedor: un elemento recortado al 100% nunca cuenta como visible */}
            <motion.div
              variants={{
                hidden: reduce ? { opacity: 0 } : { clipPath: 'inset(100% 0% 0% 0%)', filter: 'blur(14px)', y: 40 },
                show: reduce ? { opacity: 1 } : { clipPath: 'inset(0% 0% 0% 0%)', filter: 'blur(0px)', y: 0, transition: { duration: 1.5, ease: EASE_OUT, delay: 0.2 } },
              }}
              className="relative"
            >
              <motion.img
                src={logoNuevo}
                alt="GW Del Sol"
                className="h-48 md:h-72 w-auto object-contain drop-shadow-[0_10px_40px_rgba(223,193,115,0.15)]"
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>

          {/* Línea dorada que se dibuja desde el centro hacia afuera */}
          <motion.div
            aria-hidden="true"
            className="mt-10 mb-10 h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#DFC173] to-transparent origin-center"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.2 }}
          />

          {/* TEXTO A TODO EL ANCHO: se ilumina palabra por palabra con el scroll */}
          <div className="w-full font-serif text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] leading-relaxed md:leading-[1.6] text-balance">
            <ScrollLitText text={t('showcase.descripcion')} />
          </div>

          {/* BOTÓN AL PDF */}
          <motion.a
            href="https://drive.google.com/file/d/1U1Owe0ZtRZywVTStyDMiUCTUN5ZZJcMb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="group relative mt-12 inline-flex items-center gap-3 overflow-hidden border border-[#DFC173] text-[#DFC173] px-8 py-3 rounded text-xs uppercase tracking-widest font-bold"
          >
            {/* Relleno que barre de izquierda a derecha */}
            <span className="absolute inset-0 bg-[#DFC173] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative group-hover:text-[#1D2733] transition-colors duration-300">{t('showcase.boton')}</span>
            <span className="relative group-hover:text-[#1D2733] group-hover:translate-x-1 transition-all duration-300">→</span>
          </motion.a>
        </div>

        {/* ===================== CARRUSEL DE RENDERS ===================== */}
        <motion.div
          className="mt-24"
          initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(8% 8% 8% 8% round 24px)' }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, clipPath: 'inset(-2% -2% -2% -2% round 0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.3, ease: EASE_OUT }}
        >
          <ProjectGallery />
        </motion.div>

        {/* ===================== AVANCE DE OBRA: VIDEO VERTICAL + TEXTO ===================== */}
        <div className="mt-28">
          <ObraSection />
        </div>

        <div className="mt-28">
          {/* ===================== LANZAMIENTO EXCLUSIVO: ENCABEZADO + VIDEO ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 flex flex-col items-center justify-center space-y-4"
          >
            <span className="text-[#DFC173] text-xs font-bold uppercase tracking-widest">
              {t('showcase.lanzamiento')}
            </span>
            <img
              src={logoArriba}
              alt="GW Del Sol"
              className="h-20 md:h-[160px] w-auto object-contain mt-2"
            />
          </motion.div>

          {/* VIDEO PRINCIPAL A ANCHO COMPLETO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#1E3957] aspect-video w-full"
          >
            <video src={video} controls className="w-full h-full object-cover" />
          </motion.div>
        </div>

      </div>

      {/* ===================== UBICACIÓN A TODO EL ANCHO ===================== */}
      <LocationMap />
    </section>
  );
}
