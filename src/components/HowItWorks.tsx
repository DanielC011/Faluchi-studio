import { motion } from "motion/react";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../config";

export function HowItWorks() {
  return (
    <section id="briefing" className="py-16 sm:py-24 border-b border-[#151821] bg-[#08090D] relative scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        
        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-18"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563FF] bg-[#2563FF]/10 px-3 py-1 rounded-full border border-[#2563FF]/20">
            Passo a Passo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-4 mb-4">
            {siteConfig.howItWorks.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Sem burocracia. Do primeiro “olá” até a página pronta no ar:
          </p>
        </motion.div>

        {/* OS 3 PASSOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-12">
          {siteConfig.howItWorks.steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative rounded-2xl bg-[#151821] border border-[#232838] p-6 sm:p-7 flex flex-col justify-between hover:border-[#2563FF]/50 hover:shadow-lg hover:shadow-[#2563FF]/10 hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563FF] text-white font-black text-lg shadow-md shadow-[#2563FF]/30 group-hover:scale-105 transition-transform duration-200">
                    {step.step}
                  </span>
                  <CheckCircle2 className="h-5 w-5 text-[#232838] group-hover:text-[#2563FF] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#60A5FA] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Indicador de sequência */}
              <div className="pt-4 mt-4 border-t border-[#1E2433] flex items-center justify-between text-xs text-[#64748B]">
                <span>Etapa {index + 1} de 3</span>
                <span className="text-[#2563FF] font-medium">Direto no WhatsApp</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA DA SEÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={siteConfig.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="how-it-works-cta"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#2563FF] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2563FF]/25 hover:bg-[#1d4ed8] hover:shadow-[#2563FF]/40 active:scale-[0.98] transition-all duration-200 group cursor-pointer"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{siteConfig.howItWorks.cta}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
