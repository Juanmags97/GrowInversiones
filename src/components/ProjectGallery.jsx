import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Terraza from '../../public/PILETA-formato-panoramico.webp';
import Recepcion from '../../public/render-recepcion.webp';
import Living from '../../public/Depto-formato-panoramico.webp';
import Dormitorio from '../../public/Render-nuevo-4.webp';
import Monoambiente from '../../public/Depto-formato-panoramico-2.webp';
import Sala from '../../public/sala-de-reunion-formato-panoramico.webp';

const SLIDES = [
  { key: 'terraza', src: Terraza },
  { key: 'recepcion', src: Recepcion },
  { key: 'living', src: Living },
  { key: 'dormitorio', src: Dormitorio },
  { key: 'monoambiente', src: Monoambiente },
  { key: 'sala', src: Sala },
];

const DURATION = 6500;          // ms que permanece cada imagen
const STRIPS = 6;               // cantidad de "persianas" verticales de la transición
const EASE_WIPE = [0.76, 0, 0.24, 1];
const EASE_OUT = [0.22, 1, 0.36, 1];

const pad = (n) => String(n).padStart(2, '0');

/* ------------------------------------------------------------------ */
/* Imagen que entra en franjas verticales escalonadas (efecto persiana) */
/* ------------------------------------------------------------------ */
function StripImage({ src, alt, direction, reduce }) {
  if (reduce) {
    return <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" draggable={false} />;
  }

  return (
    <>
      {Array.from({ length: STRIPS }).map((_, i) => {
        const left = (i * 100) / STRIPS;
        const right = 100 - ((i + 1) * 100) / STRIPS;
        // El orden del escalonado sigue la dirección de navegación
        const order = direction > 0 ? i : STRIPS - 1 - i;
        // Franjas pares suben, impares bajan: un tejido sutil en vez de un fade
        const from = i % 2 === 0 ? `inset(100% ${right}% 0% ${left}%)` : `inset(0% ${right}% 100% ${left}%)`;
        return (
          <motion.div
            key={i}
            aria-hidden={i !== 0}
            className="absolute inset-0"
            initial={{ clipPath: from }}
            animate={{ clipPath: `inset(0% ${Math.max(right - 0.15, 0)}% 0% ${Math.max(left - 0.15, 0)}%)` }}
            transition={{ duration: 1.1, ease: EASE_WIPE, delay: order * 0.07 }}
          >
            <img
              src={src}
              alt={i === 0 ? alt : ''}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </motion.div>
        );
      })}
    </>
  );
}

export default function ProjectGallery() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { amount: 0.35 });
  const nearView = useInView(rootRef, { once: true, margin: '600px 0px' });

  const [[index, direction], setState] = useState([0, 1]);
  const [hovered, setHovered] = useState(false);
  const [kbFocus, setKbFocus] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);

  const paused = hovered || kbFocus || !inView || tabHidden || reduce;
  const slide = SLIDES[index];
  const title = t(`showcase.galeria.slides.${slide.key}.titulo`);
  const tag = t(`showcase.galeria.slides.${slide.key}.tag`);

  const goTo = useCallback((next, dir) => {
    setState(([cur]) => {
      const target = (next + SLIDES.length) % SLIDES.length;
      if (target === cur) return [cur, dir];
      return [target, dir ?? (target > cur ? 1 : -1)];
    });
  }, []);
  const next = useCallback(() => setState(([cur]) => [(cur + 1) % SLIDES.length, 1]), []);
  const prev = useCallback(() => setState(([cur]) => [(cur - 1 + SLIDES.length) % SLIDES.length, -1]), []);

  // Pausar cuando la pestaña no está visible
  useEffect(() => {
    const onVis = () => setTabHidden(document.visibilityState === 'hidden');
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Precargar la siguiente imagen para que la transición no espere a la red
  // Solo cuando la galería está cerca de la pantalla (no al abrir la página)
  useEffect(() => {
    if (!nearView) return;
    const img = new Image();
    img.src = SLIDES[(index + 1) % SLIDES.length].src;
  }, [index, nearView]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  };

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={t('showcase.galeria.titulo')}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Solo pausamos con foco de teclado (no al hacer clic con el mouse)
      onFocus={(e) => { try { if (e.target.matches(':focus-visible')) setKbFocus(true); } catch { /* navegador sin :focus-visible */ } }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setKbFocus(false); }}
      className="w-full outline-none focus-visible:ring-1 focus-visible:ring-[#DFC173]/60 rounded-2xl"
    >
      {/* CABECERA: título de la galería + contador tipo odómetro + flechas */}
      <div className="flex items-end justify-between gap-6 mb-6">
        <div>
          <span className="text-[#DFC173] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            {t('showcase.galeria.titulo')}
          </span>
          <div className="mt-3 h-px w-16 bg-[#DFC173]/50" />
        </div>

        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <div className="flex items-baseline font-serif text-white tabular-nums" aria-hidden="true">
            <span className="relative inline-flex overflow-hidden h-[1.15em] text-2xl sm:text-3xl md:text-4xl leading-none">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.span
                  key={index}
                  custom={direction}
                  initial={(d) => ({ y: d > 0 ? '100%' : '-100%' })}
                  animate={{ y: '0%' }}
                  exit={(d) => ({ y: d > 0 ? '-100%' : '100%' })}
                  transition={{ duration: 0.6, ease: EASE_OUT }}
                  className="block"
                >
                  {pad(index + 1)}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="text-neutral-500 text-xs sm:text-sm ml-1.5 sm:ml-2 whitespace-nowrap">/ {pad(SLIDES.length)}</span>
          </div>

          <div className="flex gap-2">
            {[
              { fn: prev, label: t('showcase.galeria.anterior'), d: 'M15 19l-7-7 7-7' },
              { fn: next, label: t('showcase.galeria.siguiente'), d: 'M9 5l7 7-7 7' },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                onClick={b.fn}
                aria-label={b.label}
                className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 text-white overflow-hidden cursor-pointer"
              >
                {/* Relleno dorado que crece desde el centro al pasar el mouse */}
                <span className="absolute inset-0 rounded-full bg-[#DFC173] scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <svg className="relative w-4 h-4 mx-auto group-hover:text-[#1D2733] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={b.d} />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ESCENARIO PRINCIPAL */}
      <motion.div
        className="relative aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/5 bg-[#1E3957] shadow-2xl touch-pan-y select-none"
        onPanEnd={(_, info) => {
          if (Math.abs(info.offset.x) < 50) return;
          info.offset.x < 0 ? next() : prev();
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            className="absolute inset-0"
            // La imagen que entra queda arriba; la saliente se hunde y se oscurece debajo
            initial={{ zIndex: 2 }}
            animate={{ zIndex: 2, scale: 1, filter: 'brightness(1)' }}
            exit={reduce
              ? { zIndex: 1, opacity: 0, transition: { duration: 0.4 } }
              : { zIndex: 1, scale: 0.94, filter: 'brightness(0.45)', transition: { duration: 1.3, ease: EASE_WIPE } }}
          >
            {/* Ken Burns lento sobre la imagen activa */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: reduce ? 1 : 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: reduce ? 0 : DURATION / 1000 + 1.5, ease: 'easeOut' }}
            >
              {nearView && <StripImage src={slide.src} alt={title} direction={direction} reduce={reduce} />}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Degradado inferior para que la leyenda se lea */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 z-[3] bg-gradient-to-t from-[#1D2733]/90 via-[#1D2733]/30 to-transparent" />

        {/* LEYENDA con revelado por máscara */}
        <div className="absolute left-5 right-5 bottom-5 md:left-10 md:bottom-9 z-[4]" aria-live={paused ? 'polite' : 'off'}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={index} initial="hidden" animate="show" exit="exit">
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#DFC173]"
                  variants={{ hidden: { y: '110%' }, show: { y: '0%', transition: { duration: 0.7, ease: EASE_OUT, delay: 0.45 } }, exit: { y: '-110%', transition: { duration: 0.35, ease: EASE_WIPE } } }}
                >
                  {tag}
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-1 pb-1">
                <motion.span
                  className="block font-serif text-2xl md:text-4xl text-white drop-shadow-lg"
                  variants={{ hidden: { y: '110%' }, show: { y: '0%', transition: { duration: 0.8, ease: EASE_OUT, delay: 0.55 } }, exit: { y: '-110%', transition: { duration: 0.35, ease: EASE_WIPE } } }}
                >
                  {title}
                </motion.span>
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* MINIATURAS + BARRAS DE PROGRESO */}
      <div className="mt-5 grid grid-cols-6 items-start gap-2 md:gap-4">
        {SLIDES.map((s, i) => {
          const active = i === index;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`${t('showcase.galeria.irA')} ${i + 1}: ${t(`showcase.galeria.slides.${s.key}.titulo`)}`}
              aria-current={active ? 'true' : undefined}
              className="group flex flex-col justify-start self-start text-left cursor-pointer"
            >
              {/* Barra: se llena durante el autoplay y se pausa con hover / fuera de pantalla */}
              <span className="block h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
                {active && (
                  <span
                    key={`${index}-${reduce ? 'r' : 'a'}`}
                    className="block h-full w-full bg-[#DFC173] origin-left"
                    style={reduce
                      ? { transform: 'scaleX(1)' }
                      : { animation: `gw-progress ${DURATION}ms linear forwards`, animationPlayState: paused ? 'paused' : 'running' }}
                    onAnimationEnd={next}
                  />
                )}
              </span>

              <span className="hidden md:block relative mt-3">
                {/* Marco dorado compartido: se desliza de una miniatura a la otra (fuera del overflow para no recortarse) */}
                {active && (
                  <motion.span
                    layoutId="gw-thumb-frame"
                    aria-hidden="true"
                    className="absolute -inset-1 z-10 rounded-xl ring-1 ring-[#DFC173] shadow-[inset_0_0_24px_rgba(223,193,115,0.25)]"
                    transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 30 }}
                  />
                )}
                <span className="block relative aspect-[16/9] overflow-hidden rounded-lg border border-white/5">
                {/* Brillo diagonal que cruza la miniatura al pasar el mouse */}
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <img
                  src={s.src}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${active ? 'scale-100 opacity-100 grayscale-0' : 'scale-110 opacity-40 grayscale group-hover:opacity-80 group-hover:grayscale-0 group-hover:scale-100'}`}
                />
                </span>
              </span>

              <span className={`hidden lg:block mt-2 text-[11px] uppercase tracking-wider transition-colors duration-300 ${active ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                {t(`showcase.galeria.slides.${s.key}.titulo`)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
