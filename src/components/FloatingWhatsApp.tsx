import { MessageCircle } from "lucide-react";
import { siteConfig } from "../config";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={siteConfig.brand.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        aria-label="Falar com Daniel Faluchi no WhatsApp"
        className="group relative flex items-center justify-center h-14 w-14 sm:h-14 sm:w-14 rounded-full bg-[#2563FF] text-white shadow-xl shadow-[#2563FF]/40 hover:bg-[#1d4ed8] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {/* Pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#2563FF] opacity-30 animate-ping pointer-events-none" />
        
        <MessageCircle className="h-7 w-7 text-white" />

        {/* Tooltip on hover (desktop) */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#151821] border border-[#232838] px-3 py-1.5 text-xs font-semibold text-[#F8FAFC] shadow-lg md:group-hover:block transition-all">
          Orçamento no WhatsApp
        </span>
      </a>
    </aside>
  );
}
