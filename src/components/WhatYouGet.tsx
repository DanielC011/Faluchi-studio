import { Check, PackageCheck } from "lucide-react";
import { siteConfig } from "../config";

export function WhatYouGet() {
  return (
    <section className="py-16 sm:py-24 border-b border-[#151821] bg-[#0A0D14] relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563FF] bg-[#2563FF]/10 px-3 py-1 rounded-full border border-[#2563FF]/20">
            <PackageCheck className="h-3.5 w-3.5" />
            Entregáveis Inclusos
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-4 mb-4">
            O que você recebe no projeto?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Tudo o que o seu negócio precisa para ter uma presença digital profissional e orientada a resultados:
          </p>
        </div>

        {/* GRADE DE ENTREGÁVEIS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {siteConfig.deliverables.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#151821] border border-[#232838] hover:border-[#2563FF]/40 transition-colors"
            >
              <div className="h-6 w-6 rounded-lg bg-[#2563FF]/15 text-[#2563FF] border border-[#2563FF]/30 flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* NOTA DE TRANSPARÊNCIA */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#64748B]">
            Projeto completo entregue pronto para publicação. Sem surpresas ou custos ocultos.
          </p>
        </div>

      </div>
    </section>
  );
}
