import { siteConfig } from "../config";

export function Header() {
  return (
    <header className="relative w-full border-b border-[#1A2748] bg-gradient-to-b from-[#0C152E] via-[#091124] to-[#070D1B] overflow-hidden shadow-[0_4px_24px_rgba(3,7,18,0.6)]">
      {/* Luz ambiente de profundidade azulada */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_50%_-10%,rgba(37,99,255,0.22),transparent_75%)]" />

      {/* Linha sutil de conexão na base unindo ao restante do site */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-96 h-[1.5px] bg-gradient-to-r from-transparent via-[#2563FF]/70 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-8 sm:py-10 text-center">
        {/* LOGO CENTRALIZADO */}
        <a
          href="#"
          className="group inline-flex items-center gap-2.5 sm:gap-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight transition-transform duration-300 hover:scale-[1.01]"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          <span className="text-[#F8FAFC] tracking-tight">{siteConfig.brand.name}</span>
          <span className="text-[#3B82F6] font-black">{siteConfig.brand.highlight}</span>
        </a>

        {/* SUBTÍTULO ABAIXO DO NOME */}
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase italic text-[#93C5FD]/85">
          Landing Pages &amp; Conversion
        </p>
      </div>
    </header>
  );
}
