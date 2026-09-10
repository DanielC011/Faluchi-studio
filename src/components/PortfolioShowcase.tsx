import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Monitor, Smartphone, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { siteConfig } from "../config";

export function PortfolioShowcase() {
  const [selectedId, setSelectedId] = useState(siteConfig.portfolio.projects[0].id);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  const currentProject = siteConfig.portfolio.projects.find((p) => p.id === selectedId) || siteConfig.portfolio.projects[0];

  return (
    <section id="portfolio" className="py-16 sm:py-24 border-b border-[#151821] bg-[#08090D] relative scroll-mt-20 overflow-hidden">
      {/* Sutil halo decorativo de profundidade */}
      <div className="pointer-events-none absolute top-1/2 -right-40 w-[400px] h-[400px] bg-[#2563FF]/10 blur-[130px] rounded-full" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        
        {/* CABEÇALHO COM REVELAÇÃO SUAVE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] bg-[#2563FF]/10 px-3 py-1 rounded-full border border-[#2563FF]/20">
            {siteConfig.portfolio.sectionTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-4 mb-3">
            Exemplos de Projetos e Estruturas
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            {siteConfig.portfolio.subtitle}
          </p>
          <p className="text-xs text-[#64748B] mt-2 italic">
            * {siteConfig.portfolio.disclaimer}
          </p>
        </motion.div>

        {/* TABS DE SEGMENTOS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar justify-start sm:justify-center"
        >
          {siteConfig.portfolio.projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                selectedId === project.id
                  ? "bg-[#2563FF] text-white shadow-lg shadow-[#2563FF]/25 scale-[1.02]"
                  : "bg-[#151821] text-[#94A3B8] border border-[#232838] hover:text-[#F8FAFC] hover:border-[#2563FF]/40 hover:-translate-y-0.5"
              }`}
            >
              {project.category}
            </button>
          ))}
        </motion.div>

        {/* MOCKUP INTERATIVO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl bg-[#151821] border border-[#232838] p-4 sm:p-7 overflow-hidden shadow-2xl hover:border-[#2563FF]/30 transition-colors"
        >
          
          {/* BARRA SUPERIOR DO MOCKUP */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#232838] mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] bg-[#2563FF]/15 px-2.5 py-0.5 rounded border border-[#2563FF]/30">
                  {currentProject.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC]">
                  {currentProject.title}
                </h3>
              </div>
              <p className="text-xs text-[#94A3B8] mt-1">
                Objetivo principal: {currentProject.goal}
              </p>
            </div>

            {/* Alternador Desktop / Mobile */}
            <div className="flex items-center gap-1 self-start sm:self-auto bg-[#08090D] p-1 rounded-xl border border-[#232838]">
              <button
                onClick={() => setViewMode("desktop")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  viewMode === "desktop" ? "bg-[#2563FF] text-white shadow-sm" : "text-[#94A3B8] hover:text-white"
                }`}
              >
                <Monitor className="h-3.5 w-3.5" />
                <span>Computador</span>
              </button>
              <button
                onClick={() => setViewMode("mobile")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  viewMode === "mobile" ? "bg-[#2563FF] text-white shadow-sm" : "text-[#94A3B8] hover:text-white"
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" />
                <span>Celular</span>
              </button>
            </div>
          </div>

          {/* ÁREA DE PREVIEW DA INTERFACE COM TRANSIÇÃO SUAVE */}
          <div className="flex justify-center bg-[#08090D] rounded-xl p-3 sm:p-8 border border-[#232838]/80 min-h-[360px] overflow-hidden">
            <AnimatePresence mode="wait">
              {viewMode === "desktop" ? (
                /* MOCKUP DESKTOP */
                <motion.div
                  key={`desktop-${selectedId}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-3xl rounded-xl bg-[#0F121A] border border-[#232838] shadow-2xl overflow-hidden"
                >
                  {/* Browser bar */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#151821] border-b border-[#232838]">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-[11px] text-[#64748B] bg-[#08090D] px-4 py-0.5 rounded-md border border-[#232838]">
                      https://exemplo-{currentProject.id}.com.br
                    </div>
                    <div className="w-10" />
                  </div>

                  {/* Conteúdo demonstrativo da Landing Page */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Hero da demonstração */}
                    <div className="flex flex-col items-center text-center max-w-xl mx-auto space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#2563FF]/20 text-[#60A5FA] border border-[#2563FF]/30">
                        <Sparkles className="h-3 w-3" />
                        {currentProject.category} • Modelo Demonstrativo
                      </div>
                      <h4 className="text-xl sm:text-2xl font-black text-[#F8FAFC] tracking-tight">
                        Solução sob medida para {currentProject.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#94A3B8]">
                        Apresentação direta dos seus diferenciais, tabela de serviços e botão imediato para receber mensagens no WhatsApp.
                      </p>
                      <div className="pt-2 flex items-center gap-3">
                        <div className="px-5 py-2.5 rounded-lg bg-[#2563FF] text-white text-xs font-bold shadow-md shadow-[#2563FF]/30 flex items-center gap-2">
                          <span>Solicitar Orçamento no WhatsApp</span>
                        </div>
                      </div>
                    </div>

                    {/* Grid de diferenciais do nicho */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[#1E2433]">
                      {currentProject.features.map((feat) => (
                        <div key={feat} className="p-2.5 rounded-lg bg-[#151821] border border-[#232838] text-center hover:border-[#2563FF]/40 transition-colors">
                          <span className="text-[11px] font-medium text-[#F8FAFC] block">{feat}</span>
                          <span className="text-[9px] text-[#2563FF] font-semibold">Incluso</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* MOCKUP MOBILE (SMARTPHONE) */
                <motion.div
                  key={`mobile-${selectedId}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-[290px] rounded-[32px] bg-[#0F121A] border-4 border-[#232838] shadow-2xl p-2.5"
                >
                  {/* Notch / Speaker */}
                  <div className="w-20 h-3 bg-[#151821] rounded-full mx-auto mb-3" />

                  {/* Tela do celular */}
                  <div className="p-3 bg-[#08090D] rounded-[22px] border border-[#232838] space-y-4">
                    <div className="h-1.5 w-12 bg-[#2563FF] rounded-full" />
                    
                    <div className="space-y-1.5">
                      <span className="text-[9px] text-[#60A5FA] font-bold uppercase">{currentProject.category}</span>
                      <h4 className="text-xs font-bold text-[#F8FAFC] leading-snug">
                        {currentProject.title}
                      </h4>
                      <p className="text-[10px] text-[#94A3B8] leading-tight">
                        Estrutura 100% pensada para polegares no smartphone.
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-[#151821] border border-[#232838] space-y-1.5">
                      {currentProject.features.slice(0, 3).map((f) => (
                        <div key={f} className="flex items-center gap-1.5 text-[9px] text-[#F8FAFC]">
                          <CheckCircle className="h-2.5 w-2.5 text-[#2563FF] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="py-2 px-3 rounded-lg bg-[#2563FF] text-white text-center text-[10px] font-bold">
                      Chamar no WhatsApp
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* LISTA DE CARACTERÍSTICAS DA ESTRUTURA */}
          <div className="mt-6 pt-6 border-t border-[#232838] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#64748B]">Destaques da estrutura:</span>
              {currentProject.features.map((item) => (
                <span key={item} className="text-xs text-[#94A3B8] bg-[#08090D] px-2.5 py-1 rounded-md border border-[#232838]">
                  {item}
                </span>
              ))}
            </div>

            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] hover:text-white transition-colors"
            >
              <span>Quero uma estrutura como essa para o meu negócio</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
