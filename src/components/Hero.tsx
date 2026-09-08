import { ArrowRight, ShieldCheck, Smartphone, Zap, Sparkles } from "lucide-react";
import { siteConfig } from "../config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-[#151821]">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#2563FF]/15 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-[300px] h-[300px] bg-[#60A5FA]/10 blur-[100px] rounded-full" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge de status */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#232838] bg-[#151821]/80 px-3.5 py-1.5 text-xs font-medium text-[#60A5FA] mb-5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563FF]"></span>
            </span>
            <span>{siteConfig.hero.badge}</span>
          </div>

          {/* Headline Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.15] mb-5 max-w-3xl">
            Uma Landing Page profissional para transformar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-[#60A5FA]">
              visitantes em clientes.
            </span>
          </h1>

          {/* Subheadline Explicativa */}
          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl font-normal">
            {siteConfig.hero.subheadline}
          </p>

          {/* Bloco de CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 w-full sm:w-auto">
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-[#2563FF] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2563FF]/25 hover:bg-[#1d4ed8] hover:shadow-[#2563FF]/40 active:scale-[0.98] transition-all duration-200"
            >
              <span>{siteConfig.hero.cta}</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Microtexto */}
          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#64748B] font-medium mb-8">
            <ShieldCheck className="h-4 w-4 text-[#2563FF]" />
            <span>{siteConfig.hero.microtext}</span>
          </p>

          {/* Mini Destaques rápidos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-8 border-t border-[#1E2433] w-full max-w-2xl">
            <div className="flex items-center justify-center gap-2.5 text-xs text-[#94A3B8]">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#151821] border border-[#232838] text-[#2563FF]">
                <Smartphone className="h-3.5 w-3.5" />
              </div>
              <span>100% Mobile First</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-xs text-[#94A3B8]">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#151821] border border-[#232838] text-[#60A5FA]">
                <Zap className="h-3.5 w-3.5" />
              </div>
              <span>Carregamento Rápido</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-xs text-[#94A3B8]">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#151821] border border-[#232838] text-[#2563FF]">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              <span>Foco em Conversão</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
