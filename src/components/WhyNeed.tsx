import { AlertCircle, CheckCircle, ShieldCheck, Eye, Sparkles, Layers, Compass, Clock } from "lucide-react";
import { siteConfig } from "../config";

export function WhyNeed() {
  const benefitIcons = [
    ShieldCheck, // Mais profissionalismo
    Eye,         // Mais clareza
    Sparkles,    // Mais confiança
    Layers,      // Mais praticidade
    Compass,     // Mais oportunidades
    Clock,       // Disponível 24 horas
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-[#151821] bg-[#08090D] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563FF] bg-[#2563FF]/10 px-3 py-1 rounded-full border border-[#2563FF]/20">
            Diagnóstico Rápido
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-4 mb-4">
            Por que o seu negócio precisa de uma Landing Page?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Identifique se alguma dessas situações já aconteceu com você:
          </p>
        </div>

        {/* SITUAÇÕES COMUNS / DORES REAIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-14">
          {siteConfig.whyNeed.painSituations.map((situation, i) => (
            <div
              key={i}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-[#151821]/70 border border-[#232838] transition-colors hover:border-[#232838]"
            >
              <div className="h-6 w-6 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <AlertCircle className="h-3.5 w-3.5" />
              </div>
              <p className="text-xs sm:text-sm text-[#F8FAFC]/90 leading-relaxed">
                “{situation}”
              </p>
            </div>
          ))}
        </div>

        {/* A SOLUÇÃO EM DESTAQUE */}
        <div className="rounded-2xl bg-gradient-to-r from-[#2563FF]/15 via-[#151821] to-[#60A5FA]/10 border border-[#2563FF]/30 p-6 sm:p-8 text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-2">
            <CheckCircle className="h-4 w-4 text-[#2563FF]" />
            A Solução Definitiva
          </div>
          <p className="text-base sm:text-xl font-bold text-[#F8FAFC] leading-snug">
            {siteConfig.whyNeed.solutionHeadline}
          </p>
        </div>

        {/* OS 6 CARDS DE BENEFÍCIOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteConfig.whyNeed.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index % benefitIcons.length];
            return (
              <div
                key={benefit.title}
                className="group rounded-2xl bg-[#151821] border border-[#232838] p-5 sm:p-6 transition-all duration-200 hover:border-[#2563FF]/40 hover:bg-[#1A1F2C]"
              >
                <div className="h-10 w-10 rounded-xl bg-[#08090D] border border-[#232838] flex items-center justify-center text-[#2563FF] mb-4 group-hover:border-[#2563FF]/40 group-hover:text-[#60A5FA] transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
