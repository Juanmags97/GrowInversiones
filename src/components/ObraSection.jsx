import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, animate, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import videoObra from '../../public/VideoGrowVertical.mp4';
import posterObra from '../../public/VideoGrowVertical-poster.webp';

/* ------------------------------------------------------------------
   DATOS DE OBRA — actualizar acá cuando avance la construcción.
   AVANCE: porcentaje real (0 a 100).
   ETAPAS: tramo de la barra que ocupa cada etapa (desde / hasta en %).
------------------------------------------------------------------- */
const AVANCE = 5;
const ETAPAS = [
  { key: 'inicio', desde: 0, hasta: 20 },
  { key: 'estructura', desde: 20, hasta: 50 },
  { key: 'cerramientos', desde: 50, hasta: 75 },
  { key: 'terminaciones', desde: 75, hasta: 95 },
  { key: 'entrega', desde: 95, hasta: 100 },
];

const EASE_OUT = [0.22, 1, 0.36, 1];
const etapaDe = (pct) => ETAPAS.find((e) => pct >= e.desde && pct < e.hasta) ?? ETAPAS[ETAPAS.length - 1];
const ETAPA_ACTUAL = etapaDe(AVANCE);

function estadoDe(etapa) {
  if (AVANCE >= etapa.hasta) return 'completada';
  if (etapa === ETAPA_ACTUAL) return 'enCurso';
  return 'proxima';
}

/* Íconos inline (el sitio no carga Font Awesome) */
const IconCasco = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 18h18M4 18v-2a8 8 0 0 1 16 0v2M10 8.3V5h4v3.3M8 9.3V12M16 9.3V12" />
  </svg>
);
const IconCalendario = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Video vertical: se reproduce en silencio al entrar en pantalla       */
/* ------------------------------------------------------------------ */
function VideoObra() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(wrapRef, { amount: 0.5 });
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView && !userPaused.current && !reduce) {
      v.play().catch(() => {});
    } else if (!inView) {
      v.pause();
    }
  }, [inView, reduce]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { userPaused.current = false; v.play().catch(() => {}); }
    else { userPaused.current = true; v.pause(); }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) { userPaused.current = false; v.play().catch(() => {}); }
  };

  return (
    // El contenedor (sin recorte) dispara la entrada; un elemento recortado al 100% nunca cuenta como visible
    <motion.div
      ref={wrapRef}
      className="relative mx-auto w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[26rem]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Marco dorado desplazado detrás del video */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-[2rem] border border-[#DFC173]/40"
        variants={{
          hidden: { x: 0, y: 0, opacity: 0 },
          show: { x: 18, y: 18, opacity: 1, transition: { duration: 1.4, ease: EASE_OUT, delay: 0.6 } },
        }}
      />

      <motion.div
        className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border border-white/10 bg-[#1E3957] shadow-2xl"
        variants={{
          hidden: reduce ? { opacity: 0 } : { clipPath: 'inset(100% 0% 0% 0% round 32px)' },
          show: reduce ? { opacity: 1 } : { clipPath: 'inset(0% 0% 0% 0% round 32px)', transition: { duration: 1.3, ease: EASE_OUT } },
        }}
      >
        <video
          ref={videoRef}
          src={videoObra}
          poster={posterObra}
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onClick={togglePlay}
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Controles propios */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {[
            {
              onClick: togglePlay,
              label: playing ? t('showcase.obra.pausar') : t('showcase.obra.reproducir'),
              icon: playing
                ? <path d="M9 6v12M15 6v12" />
                : <path d="M8 5.5v13l11-6.5-11-6.5z" />,
            },
            {
              onClick: toggleMute,
              label: muted ? t('showcase.obra.activarSonido') : t('showcase.obra.silenciar'),
              icon: muted
                ? <path d="M11 5 6 9H3v6h3l5 4V5zM22 9l-6 6M16 9l6 6" />
                : <path d="M11 5 6 9H3v6h3l5 4V5zM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />,
            },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              onClick={b.onClick}
              aria-label={b.label}
              className="group relative w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 rounded-full bg-[#DFC173] scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <svg viewBox="0 0 24 24" className="relative w-4 h-4 mx-auto group-hover:text-[#1D2733] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {b.icon}
              </svg>
            </button>
          ))}
        </div>

        {/* Indicador "sin sonido" que invita a activarlo */}
        <AnimatePresence>
          {muted && playing && (
            <motion.button
              type="button"
              onClick={toggleMute}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
              className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white cursor-pointer"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#DFC173] opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#DFC173]" />
              </span>
              {t('showcase.obra.activarSonido')}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Barra de avance interactiva                                          */
/* ------------------------------------------------------------------ */
function BarraAvance() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const progress = useMotionValue(0);
  const width = useTransform(progress, (v) => `${v}%`);
  const label = useTransform(progress, (v) => `${Math.round(v)}%`);

  const [seleccion, setSeleccion] = useState(ETAPA_ACTUAL.key);
  const [hoverPct, setHoverPct] = useState(null);

  useEffect(() => {
    if (!inView) return;
    if (reduce) { progress.set(AVANCE); return; }
    const c = animate(progress, AVANCE, { duration: 2.2, ease: EASE_OUT, delay: 0.3 });
    return c.stop;
  }, [inView, reduce, progress]);

  const etapaSel = ETAPAS.find((e) => e.key === seleccion);
  const estadoSel = estadoDe(etapaSel);

  const onPointerMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100));
    setHoverPct(pct);
    setSeleccion(etapaDe(pct).key);
  };
  const onPointerLeave = () => { setHoverPct(null); setSeleccion(ETAPA_ACTUAL.key); };

  const badge = {
    completada: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
    enCurso: 'bg-[#DFC173]/15 text-[#DFC173] border-[#DFC173]/40',
    proxima: 'bg-white/5 text-neutral-300 border-white/15',
  }[estadoSel];

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-[#1E3957]/60 backdrop-blur-sm p-5 md:p-7 shadow-2xl">
      {/* Encabezado: título + porcentaje que cuenta */}
      <div className="flex items-baseline justify-between">
        <span className="text-white font-bold text-base md:text-lg">{t('showcase.obra.avance')}</span>
        <motion.span className="font-serif text-3xl md:text-4xl text-white tabular-nums">{label}</motion.span>
      </div>

      {/* Barra: pasar el cursor recorre las etapas */}
      <div
        className="relative mt-5 py-3 cursor-crosshair touch-none"
        onPointerMove={onPointerMove}
        onPointerDown={onPointerMove}
        onPointerLeave={onPointerLeave}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={AVANCE}
        aria-valuetext={`${AVANCE}% — ${t(`showcase.obra.etapas.${ETAPA_ACTUAL.key}.nombre`)}`}
      >
        <div className="relative h-3 rounded-full bg-white/10 overflow-hidden">
          {/* Tramo de la etapa resaltada */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-0 bg-white/10"
            animate={{ left: `${etapaSel.desde}%`, width: `${etapaSel.hasta - etapaSel.desde}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
          />
          {/* Separadores entre etapas */}
          {ETAPAS.slice(1).map((e) => (
            <span key={e.key} aria-hidden="true" className="absolute inset-y-0 w-px bg-[#1D2733]" style={{ left: `${e.desde}%` }} />
          ))}
          {/* Avance real */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full overflow-hidden bg-gradient-to-r from-[#D5A361] to-[#DFC173]"
            style={{ width }}
          >
            {/* Brillo que recorre el tramo construido */}
            {!reduce && (
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6, ease: 'easeInOut' }}
              />
            )}
          </motion.div>
        </div>

        {/* Punto pulsante en el frente de obra */}
        <motion.span
          aria-hidden="true"
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex w-4 h-4"
          style={{ left: width }}
        >
          {!reduce && <span className="absolute inline-flex w-full h-full rounded-full bg-[#DFC173] opacity-60 animate-ping" />}
          <span className="relative inline-flex w-4 h-4 rounded-full bg-[#DFC173] border-2 border-[#1D2733]" />
        </motion.span>

        {/* Cursor fantasma con el porcentaje bajo el puntero */}
        <AnimatePresence>
          {hoverPct !== null && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -top-7 -translate-x-1/2 rounded-md bg-white text-[#1D2733] px-2 py-0.5 text-[10px] font-bold tabular-nums"
              style={{ left: `${hoverPct}%` }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
            >
              {Math.round(hoverPct)}%
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Etapas como botones (también funcionan con teclado y en celular) */}
      <div className="mt-3 grid grid-cols-5 gap-1.5" role="tablist" aria-label={t('showcase.obra.explorar')}>
        {ETAPAS.map((e) => {
          const estado = estadoDe(e);
          const sel = e.key === seleccion;
          return (
            <button
              key={e.key}
              type="button"
              role="tab"
              aria-selected={sel}
              onMouseEnter={() => setSeleccion(e.key)}
              onFocus={() => setSeleccion(e.key)}
              onClick={() => setSeleccion(e.key)}
              onMouseLeave={() => setSeleccion(ETAPA_ACTUAL.key)}
              className={`relative rounded-lg px-1.5 py-3 sm:py-2 text-left transition-colors duration-300 cursor-pointer ${sel ? 'bg-white/[0.07]' : 'hover:bg-white/[0.04]'}`}
            >
              <span className={`block w-2.5 h-2.5 sm:w-1.5 sm:h-1.5 mx-auto sm:mx-0 rounded-full sm:mb-1.5 ${estado === 'completada' ? 'bg-emerald-400' : estado === 'enCurso' ? 'bg-[#DFC173]' : 'bg-white/25'}`} />
              {/* En celular solo el punto (el nombre aparece en el detalle de abajo) */}
              <span className={`sr-only sm:not-sr-only sm:block text-[10px] md:text-[11px] leading-tight uppercase tracking-wide ${sel ? 'text-white' : 'text-neutral-400'}`}>
                {t(`showcase.obra.etapas.${e.key}.nombre`)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detalle de la etapa seleccionada */}
      <div className="mt-4 flex items-start gap-3 min-h-[3.75rem]" aria-live="polite">
        <IconCasco className="w-5 h-5 mt-0.5 shrink-0 text-neutral-300" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={seleccion}
            className="flex-1 min-w-0"
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-neutral-200">
                {seleccion === ETAPA_ACTUAL.key ? t('showcase.obra.etapaActual') : t(`showcase.obra.etapas.${seleccion}.nombre`)}
              </span>
              <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${badge}`}>
                {seleccion === ETAPA_ACTUAL.key ? t('showcase.obra.enObra') : t(`showcase.obra.${estadoSel}`)}
              </span>
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              {t(`showcase.obra.etapas.${seleccion}.detalle`)}
              <span className="text-neutral-500"> · {etapaSel.desde}–{etapaSel.hasta}%</span>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="my-5 h-px bg-white/10" />

      {/* Entrega estimada */}
      <div className="flex items-center gap-3">
        <IconCalendario className="w-5 h-5 shrink-0 text-neutral-300" />
        <div>
          <span className="block text-xs text-neutral-400">{t('showcase.obra.entrega')}</span>
          <span className="block text-white font-bold text-base md:text-lg">{t('showcase.obra.entregaFecha')}</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sección: video vertical + texto con avance de obra                   */
/* ------------------------------------------------------------------ */
export default function ObraSection() {
  const { t } = useTranslation();

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-14 lg:gap-20 items-center">
      <VideoObra />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
        className="space-y-6"
      >
        <motion.span variants={item} className="block text-[#DFC173] text-xs font-bold uppercase tracking-[0.3em]">
          {t('showcase.obra.etiqueta')}
        </motion.span>

        <motion.h3 variants={item} className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
          {t('showcase.obra.titulo')}
        </motion.h3>

        <motion.p variants={item} className="text-neutral-200 text-base md:text-lg">
          {t('showcase.obra.bajada')}
        </motion.p>

        <motion.p variants={item} className="text-neutral-300 text-sm md:text-base leading-relaxed">
          {t('showcase.obra.parrafo1Pre')} <strong className="text-white">GW del Sol</strong> {t('showcase.obra.parrafo1Post')}
        </motion.p>

        <motion.p variants={item} className="text-neutral-300 text-sm md:text-base leading-relaxed">
          {t('showcase.obra.parrafo2')}
        </motion.p>

        <motion.div variants={item}>
          <BarraAvance />
        </motion.div>

        <motion.p variants={item} className="text-neutral-300 text-sm md:text-base leading-relaxed">
          <strong className="text-white">{t('showcase.obra.cierreDestacado')}</strong> {t('showcase.obra.cierre')}
        </motion.p>
      </motion.div>
    </div>
  );
}
