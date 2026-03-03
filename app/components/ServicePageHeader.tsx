"use client";

import { openWhatsAppChat } from "../utils/whatsapp";
import ArrowForward from "@mui/icons-material/ArrowForwardRounded";

interface ServicePageHeaderProps {
  title: string;
  subtitle: string;
  gradient: string;
  whatsappMessage: string;
}

const ServicePageHeader = ({
  title,
  subtitle,
  gradient,
  whatsappMessage,
}: ServicePageHeaderProps) => {
  return (
    <section
      className={`relative bg-gradient-to-br ${gradient} overflow-hidden rounded-3xl mx-4 lg:mx-auto lg:max-w-[1514px]`}
    >
      {/* Decorative orbs */}
      <div className="absolute top-[-80px] right-[-60px] w-[300px] h-[300px] rounded-full bg-white opacity-[0.06] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-40px] left-[-40px] w-[200px] h-[200px] rounded-full bg-white opacity-[0.04] blur-[60px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <h1
          className="text-white font-manrope text-3xl lg:text-5xl xl:text-6xl font-semibold max-w-3xl"
          style={{ lineHeight: "1.15" }}
        >
          {title}
        </h1>
        <p className="text-white/80 font-dmsans text-base lg:text-lg mt-5 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => openWhatsAppChat(whatsappMessage)}
            className="bg-white text-[#211cda] px-6 py-3.5 rounded-full font-manrope font-semibold text-sm hover:bg-white/90 transition-colors cursor-pointer flex items-center gap-2"
          >
            Solicitar Orçamento
            <ArrowForward fontSize="small" />
          </button>
          <a
            href="/#servicos"
            className="text-white/80 hover:text-white font-dmsans text-sm transition-colors border border-white/30 hover:border-white/60 px-6 py-3.5 rounded-full"
          >
            Ver Todos os Serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicePageHeader;
