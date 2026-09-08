import { Check, Sparkles } from "lucide-react";
import { siteConfig } from "../config";

export function NotJustPretty() {
  return (
    <section className="py-16 sm:py-24 border-b border-[#151821] bg-[#0A0D14] relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] bg-[#2563FF]/10 px-3 py-1 rounded-full border border-[#2563FF]/20">
            Estratégia & Arquitetura
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-4 mb-5">
            {siteConfig.notJustPretty.headline}
          </h2>
          <p className="text-lg sm:text-xl font-medium text-[#F8FAFC] leading-relaxed">
            “{siteConfig.notJustPretty.quoteTop}”
          </p>
        </div>

        {/* FRASE DE DESTAQUE COM MOLDURA ELEGANTE */}
        <div className="relative rounded-2xl bg-[#151821] border border-[#2563FF]/30 p-6 sm:p-8 mb-12 text-center overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#2563FF]/10 rounded-full blur-xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2563FF] mb-2 uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            Compromisso Daniel Faluchi
          </div>
          <blockquote className="text-base sm:text-xl font-bold text-[#F8FAFC] leading-snug">
            “{siteConfig.notJustPretty.quoteBottom}”
          </blockquote>
        </div>

        {/* OS 8 PILARES DO PROJETO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {siteConfig.notJustPretty.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="rounded-xl bg-[#11141D] border border-[#232838] p-4 flex flex-col justify-between hover:border-[#2563FF]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold text-[#60A5FA]">
                  0{idx + 1}
                </span>
                <div className="h-5 w-5 rounded-full bg-[#2563FF]/10 text-[#2563FF] flex items-center justify-center">
                  <Check className="h-3 w-3" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-[#F8FAFC] mb-1">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
