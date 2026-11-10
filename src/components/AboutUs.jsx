import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import foto1 from '../../public/QuienesSomos1.webp';
import foto2 from '../../public/QuienesSomos2.webp';
import foto3 from '../../public/QuienesSomos3.webp';

const FOTOS = [
  { src: foto3, alt: 'Los socios de GW Desarrollos juntos en el evento de lanzamiento' },
  { src: foto1, alt: 'Socio de GW Desarrollos presentando en el evento de lanzamiento' },
  { src: foto2, alt: 'Socio de GW Desarrollos hablando en el evento de lanzamiento' },
];
const DURACION = 5000;
const EASE_WIPE = [0.76, 0, 0.24, 1];
const EASE_OUT = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------
   Carrusel de socios: la foto nueva entra con un barrido diagonal
   mientras la anterior se aleja y se oscurece debajo.
------------------------------------------------------------------- */
function SociosCarousel() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [[index, dir], setState] = useState([0, 1]);
  const [hover, setHover] = useState(false);

  const paused = hover || !inView || reduce;
  const ir = useCallback((d) => setState(([i]) => [(i + d + FOTOS.length) % FOTOS.length, d]), []);
  const irA = (i) => setState(([cur]) => (i === cur ? [cur, 1] : [i, i > cur ? 1 : -1]));

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => ir(1), DURACION);
    return () => clearTimeout(id);
  }, [index, paused, ir]);

  // Barrido diagonal: avanza en la dirección de navegación
  const desde = dir > 0
    ? 'polygon(100% 0%, 100% 0%, 100% 100%, 130% 100%)'
    : 'polygon(-30% 0%, 0% 0%, 0% 100%, 0% 100%)';
  const hasta = 'polygon(-30% 0%, 100% 0%, 130% 100%, 0% 100%)';

  return (
    <div
      ref={ref}
      role="region"
      aria-roledescription="carousel"
      aria-label="GW Desarrollos"
      className="group relative h-[560px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#1E3957] touch-pan-y select-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') ir(1);
        if (e.key === 'ArrowLeft') ir(-1);
      }}
    >
      <motion.div
        className="absolute inset-0"
        onPanEnd={(_, info) => {
          if (Math.abs(info.offset.x) < 50) return;
          ir(info.offset.x < 0 ? 1 : -1);
        }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={reduce ? { opacity: 0, zIndex: 2 } : { clipPath: desde, zIndex: 2 }}
            animate={reduce ? { opacity: 1, zIndex: 2 } : { clipPath: hasta, zIndex: 2 }}
            exit={reduce
              ? { opacity: 0, zIndex: 1, transition: { duration: 0.4 } }
              : { zIndex: 1, scale: 0.92, filter: 'brightness(0.4)', transition: { duration: 1.1, ease: EASE_WIPE } }}
            transition={{ duration: 1.1, ease: EASE_WIPE }}
          >
            {/* Zoom lento mientras la foto está activa */}
            <motion.img
              src={FOTOS[index].src}
              alt={FOTOS[index].alt}
              draggable={false}
              className="w-full h-full object-cover object-[center_25%]"
              initial={{ scale: reduce ? 1 : 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: reduce ? 0 : DURACION / 1000 + 1.2, ease: 'easeOut' }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Degradado inferior para los controles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-[3] bg-gradient-to-t from-[#1D2733]/90 to-transparent" />

      {/* Línea dorada que recorre el borde izquierdo al cambiar de foto */}
      {!reduce && (
        <motion.span
          key={`line-${index}`}
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-[2px] z-[4] bg-gradient-to-b from-transparent via-[#DFC173] to-transparent origin-top"
          initial={{ scaleY: 0, opacity: 1 }}
          animate={{ scaleY: 1, opacity: 0 }}
          transition={{ duration: 1.4, ease: EASE_OUT }}
        />
      )}

      {/* CONTROLES: indicadores con progreso + flechas */}
      <div className="absolute inset-x-5 bottom-5 z-[4] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {FOTOS.map((f, i) => (
            <button
              key={i}
              type="button"
              onClick={() => irA(i)}
              aria-label={`${t('showcase.galeria.irA')} ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className="relative h-1 rounded-full bg-white/25 overflow-hidden cursor-pointer transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ width: i === index ? 44 : 16 }}
            >
              {i === index && (
                <motion.span
                  key={`p-${index}-${paused}`}
                  className="absolute inset-0 bg-[#DFC173] origin-left"
                  initial={{ scaleX: paused ? 1 : 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: paused ? 0 : DURACION / 1000, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-2 opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-within:opacity-100 md:group-focus-within:translate-y-0 transition-all duration-500">
          {[
            { d: -1, label: t('showcase.galeria.anterior'), path: 'M15 19l-7-7 7-7' },
            { d: 1, label: t('showcase.galeria.siguiente'), path: 'M9 5l7 7-7 7' },
          ].map((b) => (
            <button
              key={b.d}
              type="button"
              onClick={() => ir(b.d)}
              aria-label={b.label}
              className="group/btn relative w-9 h-9 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 rounded-full bg-[#DFC173] scale-0 group-hover/btn:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <svg className="relative w-4 h-4 mx-auto group-hover/btn:text-[#1D2733] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={b.path} />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    // Actualizado con el fondo institucional #1D2733
    <section id="quienes-somos" className="py-24 bg-[#1D2733] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] gap-10 xl:gap-12 items-start">

          {/* BLOQUE IZQUIERDO: QUIÉNES SOMOS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Texto en el dorado oficial #DFC173 */}
            <span className="text-[#DFC173] text-xs font-bold uppercase tracking-widest">
              GW Desarrollos
            </span>
            <h2 className="text-3xl font-serif text-white font-bold mt-2 mb-6">
              {t('about.titulo')}
            </h2>
            {/* Contenedor adaptado al azul secundario #1E3957 */}
            <p className="text-neutral-300 text-sm leading-relaxed bg-[#1E3957] border border-white/5 p-6 rounded-xl">
              {t('about.descripcion')}
            </p>
          </motion.div>

          {/* BLOQUE CENTRAL: CARRUSEL DE FOTOS DE LOS SOCIOS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SociosCarousel />
          </motion.div>

          {/* BLOQUE DERECHO: MISIÓN, VISIÓN, VALORES TRADUCIDOS */}
          <div className="flex flex-col gap-6 lg:h-[640px]">

            {/* Misión */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex-1 flex flex-col justify-center p-6 lg:p-8 bg-[#1E3957] border-l-2 border-[#DFC173] rounded-xl border-y border-r border-white/5"
            >
              <h4 className="text-[#DFC173] text-xs font-bold uppercase tracking-widest mb-3">
                {t('about.misionTitulo')}
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {t('about.misionTexto')}
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex-1 flex flex-col justify-center p-6 lg:p-8 bg-[#1E3957] border-l-2 border-[#DFC173] rounded-xl border-y border-r border-white/5"
            >
              <h4 className="text-[#DFC173] text-xs font-bold uppercase tracking-widest mb-3">
                {t('about.visionTitulo')}
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {t('about.visionTexto')}
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex-1 flex flex-col justify-center p-6 lg:p-8 bg-[#1E3957] border-l-2 border-[#DFC173] rounded-xl border-y border-r border-white/5"
            >
              <h4 className="text-[#DFC173] text-xs font-bold uppercase tracking-widest mb-3">
                {t('about.valoresTitulo')}
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {t('about.valoresTexto')}
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}