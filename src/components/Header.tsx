import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090D]/90 backdrop-blur-md border-b border-[#1E2433] shadow-lg shadow-black/40 py-2.5 sm:py-3"
          : "bg-[#08090D]/60 backdrop-blur-sm border-b border-[#1E2433]/50 py-3.5 sm:py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* LOGO */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-lg sm:text-xl font-bold tracking-tight transition-opacity hover:opacity-90"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          <span className="text-[#F8FAFC] tracking-tight font-extrabold">{siteConfig.brand.name}</span>
          <span className="text-[#2563FF] font-black">{siteConfig.brand.highlight}</span>
        </a>

        {/* BOTÃO CTA SOLICITAR ORÇAMENTO */}
        <a
          href={siteConfig.brand.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="header-cta-orcamento"
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#2563FF] px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-[#1d4ed8] hover:shadow-[#2563FF]/30 active:scale-[0.98] transition-all duration-200"
        >
          <span>Solicitar orçamento</span>
          <ArrowUpRight className="h-4 w-4 text-white/90" />
        </a>
      </div>
    </header>
  );
}
