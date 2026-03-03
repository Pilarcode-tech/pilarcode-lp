"use client";

import React from "react";
import Link from "next/link";
import ArrowForward from "@mui/icons-material/ArrowForwardRounded";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { openWhatsAppChat } from "../utils/whatsapp";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  slug: string;
}

const serviceCards: ServiceCardProps[] = [
  {
    title: "Desenvolvimento de Apps",
    description:
      "Aplicativos intuitivos e de alta performance, personalizados para as necessidades do seu negócio.",
    icon: <CodeIcon sx={{ fontSize: 32, color: "#fff" }} />,
    gradient: "from-[#278deb] to-[#211cda]",
    slug: "desenvolvimento-de-apps",
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Sites atraentes, funcionais e otimizados para todos os dispositivos, com foco em conversão.",
    icon: <WebIcon sx={{ fontSize: 32, color: "#fff" }} />,
    gradient: "from-[#03515d] to-[#278deb]",
    slug: "desenvolvimento-web",
  },
  {
    title: "Software Sob Medida",
    description:
      "Soluções de software personalizadas que atendem às necessidades específicas da sua empresa.",
    icon: <SettingsIcon sx={{ fontSize: 32, color: "#fff" }} />,
    gradient: "from-[#211cda] to-[#060554]",
    slug: "software-sob-medida",
  },
  {
    title: "Integração de Sistemas",
    description:
      "Conectamos sistemas distintos para criar um ambiente de TI coeso e eficiente.",
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 32, color: "#fff" }} />,
    gradient: "from-[#278deb] to-[#211cda]",
    slug: "integracao-de-sistemas",
  },
  {
    title: "E-Commerce",
    description:
      "Plataformas de comércio eletrônico eficientes, projetadas para impulsionar suas vendas online.",
    icon: <ShoppingCartIcon sx={{ fontSize: 32, color: "#fff" }} />,
    gradient: "from-[#278deb] to-[#03515d]",
    slug: "e-commerce",
  },
  {
    title: "Automação de Processos",
    description:
      "Otimize operações, reduza erros e aumente a eficiência com automação inteligente.",
    icon: <AutoFixHighIcon sx={{ fontSize: 32, color: "#fff" }} />,
    gradient: "from-[#211cda] to-[#278deb]",
    slug: "automacao-de-processos",
  },
];

const phrases = [
  "Apps sob medida",
  "Sites responsivos",
  "Integração de sistemas",
  "Automação inteligente",
  "E-commerce eficiente",
  "Transformação digital",
  "Software personalizado",
  "Inovação contínua",
  "Performance máxima",
];

const ServiceCard = ({
  title,
  description,
  icon,
  gradient,
  slug,
}: ServiceCardProps) => {
  return (
    <Link
      href={`/servicos/${slug}`}
      className="min-w-[325px] max-w-[325px] h-[450px] rounded-3xl shadow-2xl shadow-black/10 my-4 p-3.5 bg-white flex flex-col group hover:shadow-xl transition-shadow duration-300"
      style={{
        boxShadow:
          "0 0px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="p-4 flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-[#278deb] p-2.5 px-4 rounded-full text-[10px] text-white font-dmsans">
            Disponível
          </span>
          <div className="w-4 h-4 bg-black/20 rounded-full" />
        </div>
        <h3 className="font-medium text-[22px] mb-2 w-[220px] group-hover:text-[#211cda] transition-colors">{title}</h3>
        <span className="text-[#A0A0A0] text-[14px]">{description}</span>
      </div>
      <div
        className={`h-[200px] relative rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center`}
      >
        {icon}
      </div>
    </Link>
  );
};

const ServiceCardOnboard = () => {
  return (
    <div
      className="min-w-[325px] max-w-[325px] h-[450px] rounded-3xl shadow-2xl shadow-black/10 my-4 ml-4 p-12 pt-10 bg-gradient-to-br from-[#211cda] to-[#060554] flex flex-col justify-between"
      style={{
        boxShadow:
          "0 0px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div>
        <span className="bg-white p-2 px-3.5 w-fit rounded-xl text-sm text-[#060554] font-semibold font-manrope">
          Olá, empreendedor
        </span>
        <p className="text-white text-3xl mt-5 font-manrope font-light">
          Transforme <br /> sua ideia <br /> em{" "}
          <span className="font-blisstwin font-normal">realidade</span>
        </p>
        <p className="text-white mt-2 font-dm">
          Soluções tecnológicas <br /> sob medida para seu negócio.
        </p>
      </div>
      <div
        className="flex items-center align-center gap-2 cursor-pointer"
        onClick={() => openWhatsAppChat()}
      >
        <span className="text-black text-[12px] bg-white p-4 px-7 rounded-full font-semibold">
          Descubra
        </span>
        <div className="text-white rounded-full w-12 h-12 p-2.5 px-4 border border-white flex items-center justify-center">
          <ArrowForward
            sx={{
              width: 18,
              height: 18,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const HorizontalScroll = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
      onMouseDown={(e) => {
        const element = e.currentTarget as HTMLDivElement;
        const startX = e.pageX - element.offsetLeft;
        const scrollLeft = element.scrollLeft;

        const handleMouseMove = (e: MouseEvent) => {
          const x = e.pageX - element.offsetLeft;
          const walk = (x - startX) * 0.8;
          element.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      }}
      style={{ userSelect: "none" }}
    >
      <div className="flex space-x-1 w-max md:mx-auto md:px-20 select-none">
        {children}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <HorizontalScroll>
        <ServiceCardOnboard />
        {serviceCards.map((card) => (
          <ServiceCard
            key={card.title}
            title={card.title}
            description={card.description}
            icon={card.icon}
            gradient={card.gradient}
            slug={card.slug}
          />
        ))}
      </HorizontalScroll>
      <div
        className="bg-gradient-to-r from-[#060554] to-[#211cda] bg-cover bg-center bg-no-repeat pt-20 pb-3 h-[300px] -mt-[260px] flex items-end"
      >
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-scroll inline-block">
            {phrases.map((phrase, index) => (
              <div key={index} className="mx-8 inline-block">
                <span className="flex items-center gap-2 text-white text-sm font-medium">
                  <AddCircleOutlineIcon fontSize="small" />
                  {phrase}
                </span>
              </div>
            ))}
            {phrases.map((phrase, index) => (
              <div key={`duplicate-${index}`} className="mx-8 inline-block">
                <span className="flex items-center gap-2 text-white text-sm font-medium">
                  <AddCircleOutlineIcon fontSize="small" />
                  {phrase}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 50s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Services;
