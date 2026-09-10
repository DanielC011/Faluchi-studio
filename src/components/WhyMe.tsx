import { motion } from "motion/react";
import { UserCheck, Sliders, Target, Smartphone, MessageCircle, Code2 } from "lucide-react";
import { siteConfig } from "../config";

export function WhyMe() {
  const diffIcons = [
    UserCheck,    // Atendimento direto
    Sliders,      // Projeto personalizado
    Target,       // Foco em conversão
    Smartphone,   // Mobile First
    MessageCircle,// Comunicação clara
    Code2,        // Código leve
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 border-b border-[#151821] bg-[#0A0D14] relative scroll-mt-20 overflow-hidden">
      {/* Luz ambiente de profundidade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[450px] h-[350px] bg-[#2563FF]/8 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        
        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563FF] bg-[#2563FF]/10 px-3 py-1 rounded-full border border-[#2563FF]/20">
            Diferenciais & Confiança
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-4 mb-4">
            Por que fazer seu projeto comigo?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Sem promessas irreais ou intermediários. Você tem clareza, proximidade e qualidade técnica em cada detalhe.
          </p>
        </motion.div>

        {/* CARDS DE DIFERENCIAIS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteConfig.whyMe.map((item, index) => {
            const Icon = diffIcons[index % diffIcons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-2xl bg-[#151821] border border-[#232838] p-5 sm:p-6 transition-all duration-300 hover:border-[#2563FF]/50 hover:bg-[#181E2C] hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#2563FF]/5"
              >
                <div className="h-10 w-10 rounded-xl bg-[#08090D] border border-[#232838] flex items-center justify-center text-[#2563FF] mb-4 group-hover:text-[#60A5FA] group-hover:border-[#2563FF]/40 group-hover:scale-105 transition-all duration-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] mb-2 group-hover:text-[#60A5FA] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
