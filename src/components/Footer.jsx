// src/components/Footer.jsx

export default function Footer() {
    return (
        <footer className="w-full bg-[#1D2733] py-8 text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">

                {/* Texto de derechos en blanco */}
                <p className="text-xs text-white">
                    © {new Date().getFullYear()} GW Desarrollos. Todos los derechos reservados.
                </p>

                {/* Crédito de Oni en blanco */}
                <p className="text-xs text-white">
                    Powered by{' '}
                    <a
                        href="https://juanmags97.github.io/OniSolutions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white underline hover:opacity-80 transition-opacity duration-200"
                    >
                        Oni
                    </a>
                </p>

            </div>
        </footer>
    );
}