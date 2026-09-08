/**
 * FALUCHI STUDIO - LANDING PAGE DE ALTA CONVERSÃO
 * Web Designer + Copywriter: Daniel Faluchi
 * Foco: Mobile First, Alta Clareza, Conversão Direta no WhatsApp
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhatIsLandingPage } from "./components/WhatIsLandingPage";
import { WhyNeed } from "./components/WhyNeed";
import { NotJustPretty } from "./components/NotJustPretty";
import { Process } from "./components/Process";
import { WhatYouGet } from "./components/WhatYouGet";
import { WhyMe } from "./components/WhyMe";
import { MidCta } from "./components/MidCta";
import { HowItWorks } from "./components/HowItWorks";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090D] text-[#F8FAFC] font-sans selection:bg-[#2563FF] selection:text-white flex flex-col">
      {/* 0. CABEÇALHO FIXO */}
      <Header />

      <main className="flex-grow">
        {/* 1. HERO - PRIMEIRA DOBRA */}
        <Hero />

        {/* 2. O QUE É UMA LANDING PAGE? */}
        <WhatIsLandingPage />

        {/* 3. POR QUE MEU NEGÓCIO PRECISA DE UMA LANDING PAGE? */}
        <WhyNeed />

        {/* 4. NÃO É APENAS UMA PÁGINA BONITA */}
        <NotJustPretty />

        {/* 5. O QUE EU FAÇO POR VOCÊ? (PROCESSO) */}
        <Process />

        {/* 6. O QUE VOCÊ RECEBE? (CHECKLIST DE ENTREGÁVEIS) */}
        <WhatYouGet />

        {/* 8. POR QUE FAZER COMIGO? (DIFERENCIAIS) */}
        <WhyMe />

        {/* 11. CTA INTERMEDIÁRIO */}
        <MidCta />

        {/* 9. COMO FUNCIONA? */}
        <HowItWorks />

        {/* 10. PERGUNTAS FREQUENTES (FAQ) */}
        <Faq />

        {/* 12. CTA FINAL */}
        <FinalCta />
      </main>

      {/* 13. RODAPÉ */}
      <Footer />

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <FloatingWhatsApp />
    </div>
  );
}
