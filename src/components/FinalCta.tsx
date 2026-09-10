import { motion } from "motion/react";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "../config";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28 bg-[#08090D] relative overflow-hidden">
      {/* Luz ambiente de destaque pulsante e cinematográfica */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#2563FF] blur-[130px] rounded-full"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2563FF]/30 bg-[#2563FF]/10 px-4 py-1.5 text-xs font-bold text-[#60A5FA] mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#2563FF]" />
            <span>Inicie Seu Projeto Hoje</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight mb-6 max-w-2xl mx-auto leading-[1.15]">
            {siteConfig.finalCta.headline}
          </h2>

          <p className="text-base sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {siteConfig.finalCta.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta-whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-[#2563FF] px-9 py-4 text-lg font-extrabold text-white shadow-xl shadow-[#2563FF]/30 hover:bg-[#1d4ed8] hover:shadow-2xl hover:shadow-[#2563FF]/50 active:scale-[0.98] transition-all duration-200 group cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{siteConfig.finalCta.cta}</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#64748B] font-medium">
            <ShieldCheck className="h-4 w-4 text-[#2563FF]" />
            <span>{siteConfig.finalCta.microtext}</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
