import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { siteConfig } from "../config";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 border-b border-[#151821] bg-[#0A0D14] relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#60A5FA] bg-[#2563FF]/10 px-3 py-1 rounded-full border border-[#2563FF]/20">
            <HelpCircle className="h-3.5 w-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mt-4 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Respostas simples e diretas para as dúvidas mais comuns antes de começar:
          </p>
        </div>

        {/* LISTA ACCORDION */}
        <div className="space-y-3">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-xl bg-[#151821] border border-[#232838] overflow-hidden transition-colors hover:border-[#2563FF]/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#F8FAFC] pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`h-7 w-7 rounded-lg bg-[#08090D] border border-[#232838] flex items-center justify-center text-[#2563FF] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#2563FF] text-white border-[#2563FF]" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-[#1E2433] pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* DUVIDA EXTRA */}
        <div className="mt-10 text-center p-6 rounded-2xl bg-[#08090D] border border-[#232838]">
          <p className="text-xs sm:text-sm text-[#94A3B8] mb-3">
            Ficou com alguma dúvida que não está aqui?
          </p>
          <a
            href={siteConfig.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#60A5FA] hover:text-white transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-[#2563FF]" />
            <span>Fale diretamente com Daniel Faluchi no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
