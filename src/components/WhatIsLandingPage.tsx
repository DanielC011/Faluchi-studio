import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, User, Globe, MessageSquare, Award } from "lucide-react";
import { siteConfig } from "../config";

export function WhatIsLandingPage() {
  const steps = [
    {
      name: "Visitante",
      icon: User,
      desc: "Chega pelo Instagram, anúncio ou indicação",
      color: "text-[#94A3B8]",
      bg: "bg-[#151821]",
      border: "border-[#232838]",
    },
    {
      name: "Landing Page",
      icon: Globe,
      desc: "Apresenta sua oferta com clareza em 1 só lugar",
      color: "text-[#60A5FA]",
      bg: "bg-[#151821]",
      border: "border-[#2563FF]/50",
    },
    {
      name: "Contato",
      icon: MessageSquare,
      desc: "Clica no botão estratégico do WhatsApp",
      color: "text-[#2563FF]",
      bg: "bg-[#151821]",
      border: "border-[#2563FF]",
    },
    {
      name: "Cliente",
      icon: Award,
      desc: "Fecha o serviço ou compra seu produto",
      color: "text-emerald-400",
      bg: "bg-emerald-950/30",
      border: "border-emerald-500/40",
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-[#151821] bg-[#08090D] relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563FF] bg-[#2563FF]/10 px-3 py-1 rounded-full border border-[#2563FF]/20">
            Conceito Simples & Direto
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-4 mb-4">
            {siteConfig.whatIs.headline}
          </h2>
          <p className="text-lg sm:text-xl font-medium text-[#60A5FA] mb-3">
            “{siteConfig.whatIs.lead}”
          </p>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            {siteConfig.whatIs.explanation}
          </p>
        </motion.div>

        {/* FLUXO VISUAL: VISITANTE → LANDING PAGE → CONTATO → CLIENTE */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl bg-[#151821] border border-[#232838] p-5 sm:p-8 mb-12 relative overflow-hidden"
        >
          <div className="text-center mb-6">
            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
              A Jornada de Conversão Simplificada
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-3 relative">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className={`w-full h-full p-4 rounded-xl ${item.bg} border ${item.border} flex flex-col items-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2563FF]/5`}>
                    <div className={`h-11 w-11 rounded-lg bg-[#08090D] border border-[#232838] flex items-center justify-center mb-3 ${item.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold text-[#F8FAFC] mb-1">
                      {item.name}
                    </span>
                    <p className="text-xs text-[#94A3B8] leading-snug">
                      {item.desc}
                    </p>
                  </div>

                  {/* Seta conectora entre os passos (em desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#2563FF]">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                  {/* Seta conectora em mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex md:hidden my-1 text-[#2563FF] justify-center">
                      <span className="text-sm">↓</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* PARA QUE SERVE A LANDING PAGE? (LISTA DE OBJETIVOS) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl bg-[#0F121A] border border-[#232838] p-6 sm:p-8"
        >
          <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] mb-2 text-center sm:text-left">
            Para o que ela pode ser utilizada no seu negócio?
          </h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] mb-6 text-center sm:text-left">
            Não importa se você vende um serviço, um produto físico ou uma consultoria:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {siteConfig.whatIs.useCases.map((useCase, idx) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#151821] border border-[#232838]/80 hover:border-[#2563FF]/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <CheckCircle2 className="h-4 w-4 text-[#2563FF] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#F8FAFC]">
                  {useCase}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
