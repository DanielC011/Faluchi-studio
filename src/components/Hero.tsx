import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "../config";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, shouldReduceMotion ? 1 : 0.25]);
  const scale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1, 0.96]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-14 pb-16 sm:pt-24 sm:pb-28 border-b border-[#151821] bg-[#08090D]"
    >
      {/* Sutil grid tecnológico com profundidade */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1E2433_1px,transparent_1px),linear-gradient(to_bottom,#1E2433_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)] opacity-15" />

      {/* Halo de luz/glow ambiente com movimento extremamente sutil */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: [0.14, 0.22, 0.14],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[340px] bg-[#2563FF]/20 blur-[130px] rounded-full"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        <motion.div
          style={{ y, opacity, scale }}
          className="flex flex-col items-center text-center will-change-transform"
        >
          {/* 1. PEQUENO BADGE (Aparece suavemente) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[#232838] bg-[#121622]/80 px-3.5 py-1 text-xs font-medium text-[#93C5FD] mb-6 sm:mb-8 backdrop-blur-sm shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#2563FF]" />
            <span>Estúdio Criativo Especializado</span>
          </motion.div>

          {/* 2. HEADLINE GRANDE (Fade + leve movimento vertical) */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.14] sm:leading-[1.1] max-w-4xl"
          >
            <span className="block">Sua marca merece uma presença digital</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] via-[#3B82F6] to-[#60A5FA]">
              à altura do que você entrega.
            </span>
          </motion.h1>

          {/* 3. SUBHEADLINE (Aparece logo depois) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
            className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl font-normal"
          >
            Criamos landing pages estratégicas e experiências digitais premium desenhadas para elevar a percepção de valor do seu negócio e transformar visitantes qualificados em clientes.
          </motion.p>

          {/* 4. CTA PRINCIPAL */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58, ease: "easeOut" }}
            className="mt-8 sm:mt-11 flex items-center justify-center w-full sm:w-auto"
          >
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-orcamento"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#2563FF] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2563FF]/25 hover:bg-[#1d4ed8] hover:shadow-[#2563FF]/45 active:scale-[0.98] transition-all duration-200 cursor-pointer group"
            >
              <span>Solicitar orçamento</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* 5. PILARES DISCRETOS DE QUALIDADE DE AGÊNCIA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-8 border-t border-[#1A2030] w-full max-w-2xl text-center"
          >
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563FF]"></span>
              <span>Posicionamento &amp; Autoridade</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]"></span>
              <span>Design 100% Exclusivo</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563FF]"></span>
              <span>Foco Total em Conversão</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
