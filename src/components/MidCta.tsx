import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config";

export function MidCta() {
  return (
    <section className="py-14 sm:py-20 bg-[#08090D] border-b border-[#151821] relative overflow-hidden">
      {/* Glow de fundo sutil */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[250px] bg-[#2563FF]/15 blur-[100px] rounded-full" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#151821] to-[#0D1017] border border-[#2563FF]/40 p-8 sm:p-12 text-center shadow-2xl">
          
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#60A5FA] bg-[#2563FF]/10 px-3 py-1 rounded-full border border-[#2563FF]/20 mb-5">
            O Momento é Agora
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4 max-w-2xl mx-auto leading-tight">
            {siteConfig.midCta.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto mb-8 leading-relaxed">
            {siteConfig.midCta.text}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mid-cta-whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-[#2563FF] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2563FF]/30 hover:bg-[#1d4ed8] hover:shadow-[#2563FF]/50 active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{siteConfig.midCta.buttonText}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-[#64748B] mt-4 font-medium">
            <ShieldCheck className="h-4 w-4 text-[#2563FF]" />
            <span>{siteConfig.midCta.microtext}</span>
          </p>

        </div>
      </div>
    </section>
  );
}
