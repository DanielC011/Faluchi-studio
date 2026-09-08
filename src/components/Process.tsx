import { Compass, FileText, Palette, Rocket } from "lucide-react";
import { siteConfig } from "../config";

export function Process() {
  const stepIcons = [Compass, FileText, Palette, Rocket];

  return (
    <section className="py-16 sm:py-24 border-b border-[#151821] bg-[#08090D] relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563FF] bg-[#2563FF]/10 px-3 py-1 rounded-full border border-[#2563FF]/20">
            O Que Eu Faço Por Você
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-4 mb-4">
            {siteConfig.process.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Você não precisa se preocupar com aspectos técnicos complicados. O processo é simples, direto e transparente:
          </p>
        </div>

        {/* 4 ETAPAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {siteConfig.process.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-[#151821] border border-[#232838] p-6 sm:p-7 flex flex-col justify-between hover:border-[#2563FF]/50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-[#08090D] border border-[#232838] flex items-center justify-center text-[#2563FF] group-hover:text-[#60A5FA] group-hover:border-[#2563FF]/40 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-[#232838] group-hover:text-[#2563FF]/40 transition-colors font-mono">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#60A5FA] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
