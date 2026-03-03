"use client";

import Image from "next/image";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { openWhatsAppChat } from "../utils/whatsapp";

interface ServiceCTAProps {
  serviceName: string;
  whatsappMessage: string;
}

const ServiceCTA = ({ serviceName, whatsappMessage }: ServiceCTAProps) => {
  return (
    <section className="mx-4 lg:mx-auto lg:max-w-[1514px] mb-16 lg:mb-24">
      <div className="bg-[#211cda] min-h-[350px] flex flex-col lg:flex-row items-center gap-6 rounded-3xl overflow-hidden relative">
        {/* Gradient orb */}
        <div className="absolute top-[-60px] right-[-40px] w-[300px] h-[300px] rounded-full bg-[#278deb] opacity-[0.1] blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-40px] left-[-20px] w-[200px] h-[200px] rounded-full bg-white opacity-[0.04] blur-[60px] pointer-events-none" />

        <div className="flex-1 pt-10 pb-6 lg:py-12 px-8 lg:pl-16 z-10">
          <p className="text-xs font-extrabold text-white/60 font-manrope tracking-widest">
            VAMOS COMEÇAR?
          </p>
          <h2
            style={{ lineHeight: "1.2" }}
            className="text-white font-manrope text-2xl font-regular mt-3 lg:text-4xl xl:text-5xl"
          >
            Pronto para investir em{" "}
            <span className="font-blisstwin text-[#278deb]">
              {serviceName}
            </span>
            ?
          </h2>
          <p className="text-white/70 font-dmsans text-sm mt-3 max-w-md">
            Converse com nosso time de especialistas e descubra como podemos
            transformar seu negócio.
          </p>
        </div>

        <div className="flex-1 px-8 lg:px-0 pb-6 lg:pb-0 z-10">
          <p className="font-medium font-manrope text-base text-white">
            Solicite um orçamento sem compromisso
          </p>
          <p className="text-sm text-white/60 font-manrope mt-2 max-w-sm">
            Respondemos em até 24 horas com uma proposta personalizada para o
            seu projeto.
          </p>
          <button
            onClick={() => openWhatsAppChat(whatsappMessage)}
            className="text-white font-medium flex text-xs items-center gap-2 mt-4 cursor-pointer"
          >
            <div className="relative w-[20px] h-[20px]">
              <Image alt="whatsapp" src="/whatsapp-filled.svg" fill={true} />
            </div>
            Converse no WhatsApp <ArrowOutwardIcon fontSize="small" />
          </button>
        </div>

        <div className="px-8 lg:pr-16 pb-10 lg:pb-0 flex items-center z-10">
          <div
            className="flex items-center gap-2"
            onClick={() => openWhatsAppChat(whatsappMessage)}
          >
            <button className="p-4 px-6 bg-white rounded-full font-manrope font-semibold text-xs cursor-pointer hover:bg-white/90 transition-colors">
              FALAR COM ESPECIALISTA
            </button>
            <button className="p-4 border border-white/40 hover:border-white text-white rounded-full font-manrope font-semibold text-xs cursor-pointer transition-colors">
              <ArrowForward fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
