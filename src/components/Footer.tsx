import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../config";

export function Footer() {
  return (
    <footer className="border-t border-[#1E2433] bg-[#050609] py-12 text-[#94A3B8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#151821]">
          
          {/* IDENTIDADE & PROFISSÃO */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-2xl tracking-tight font-bold" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              <span className="text-[#F8FAFC] tracking-tight">{siteConfig.brand.name}</span>
              <span className="text-[#2563FF] font-extrabold">{siteConfig.brand.highlight}</span>
            </div>
            <p className="text-sm text-[#F8FAFC] font-medium">
              {siteConfig.brand.expertName} • {siteConfig.brand.role}
            </p>
            <p className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-[#64748B]">
              <MapPin className="h-3.5 w-3.5 text-[#2563FF]" />
              <span>{siteConfig.brand.city}</span>
            </p>
          </div>

          {/* LINKS DE CONTATO */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F8FAFC] hover:text-[#2563FF] transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-[#2563FF]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={siteConfig.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F8FAFC] hover:text-[#2563FF] transition-colors"
            >
              <Instagram className="h-4 w-4 text-[#2563FF]" />
              <span>Instagram</span>
            </a>

            <a
              href={`mailto:${siteConfig.brand.email}`}
              className="flex items-center gap-2 text-[#F8FAFC] hover:text-[#2563FF] transition-colors"
            >
              <Mail className="h-4 w-4 text-[#2563FF]" />
              <span>{siteConfig.brand.email}</span>
            </a>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-2">
          <p>© {siteConfig.brand.year} {siteConfig.brand.name} {siteConfig.brand.highlight}. Todos os direitos reservados.</p>
          <p className="text-[11px]">Desenvolvido por {siteConfig.brand.expertName}</p>
        </div>
      </div>
    </footer>
  );
}
