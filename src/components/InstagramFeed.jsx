import React, { useEffect } from 'react';

export default function InstagramFeed() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-24 bg-[#1D2733] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* FEED DE INSTAGRAM CON FALLBACK */}
        <div className="w-full">
          <div className="elfsight-app-bf6a6c30-1d85-4c56-a907-aca8ffe9a590" data-elfsight-app-lazy />
          <div className="mt-4 text-center">
            <a
              href="https://www.instagram.com/gwdesarrollos.py"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#DFC173]/80 hover:text-[#DFC173] transition-colors"
            >
              Seguinos en @gwdesarrollos.py →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
