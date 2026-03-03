"use client";

import ArrowForward from "@mui/icons-material/ArrowForwardRounded";
import { useMobile } from "../hooks";
import { openWhatsAppChat } from "../utils/whatsapp";

const Hero = () => {
  const isMobile = useMobile();
  return (
    <section className="flex mt-5 md:mt-20 font-jakarta justify-center md:justify-start">
      <div className="max-w-7xl flex flex-col md:flex-row gap-10">
        <div className="text-sm text-gray-600 font-medium tracking-wide hidden md:block">
          Tecnologia <br /> & Inovação
        </div>
        <div className="space-y-8 w-fit">
          <div>
            <h1 className="text-5xl lg:text-6xl font-medium text-gray-800 leading-tight w-fit text-center md:text-left">
              Inovação ao
              <br />
              <span className="bg-gradient-to-b from-[#278deb] to-[#278deb] bg-clip-text text-transparent">
                seu alcance{" "}
              </span>
              {isMobile && <br />}
            </h1>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <button
              onClick={() => openWhatsAppChat("Olá! Gostaria de conhecer as soluções da Pilarcode.")}
              className="bg-[#211cda] hover:bg-[#060554] text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg flex items-center gap-2 cursor-pointer"
            >
              Quero inovar
              <div className="bg-white/20 p-1 rounded-lg flex">
                <ArrowForward sx={{ width: 16, height: 16 }} />
              </div>
            </button>
            <a
              href="#servicos"
              className="text-[#211cda] hover:text-[#060554] text-sm font-medium transition-colors duration-200"
            >
              Conheça nossos serviços
            </a>
          </div>
        </div>

        <div className="text-center font-medium space-y-2 w-fit flex flex-col mx-auto md:text-left">
          <p className="text-sm text-black">
            Conectamos você ao <br /> futuro com soluções <br /> tecnológicas sob medida
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
