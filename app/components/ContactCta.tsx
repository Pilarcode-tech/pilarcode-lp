"use client";

import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useMobile } from "../hooks";
import { openOrcamento } from "../utils/orcamento";

const ContactCta = () => {
  const isMobile = useMobile();
  return (
    <section className="bg-[#211cda] min-h-[350px] flex flex-col lg:flex-row items-center gap-6 rounded-3xl lg:mt-20 mt-10 mx-auto max-w-[1514px] overflow-hidden relative">
      {/* Decorative background wave */}
      {!isMobile && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/cta-wave.svg')",
            backgroundSize: "300%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        />
      )}

      {/* Gradient orb */}
      <div className="absolute top-[-60px] right-[-40px] w-[300px] h-[300px] rounded-full bg-[#278deb] opacity-[0.1] blur-[80px] pointer-events-none" />

      <div className="flex-1 pt-10 pb-6 lg:py-12 px-8 lg:pl-16 z-10">
        <p className="text-xs font-extrabold text-white/60 font-manrope tracking-widest">
          VAMOS CONVERSAR
        </p>
        <h2
          style={{ lineHeight: "1.2" }}
          className="text-white font-manrope text-2xl font-regular mt-3 lg:text-4xl xl:text-5xl"
        >
          Transforme sua{" "}
          <span className="font-blisstwin text-[#278deb]">ideia</span> em
          realidade digital
        </h2>
        <p className="text-white/70 font-dmsans text-sm mt-3 max-w-md">
          Da concepção ao lançamento, a Pilarcode cuida de cada detalhe do seu
          projeto.
        </p>
      </div>

      <div className="flex-1 px-8 lg:px-0 pb-6 lg:pb-0 z-10">
        <p className="font-medium font-manrope text-base text-white">
          Quer começar seu projeto de tecnologia?
        </p>
        <p className="text-sm text-white/60 font-manrope mt-2 max-w-sm">
          Responda 4 perguntas rápidas e receba uma proposta personalizada em
          até 24h, sem compromisso.
        </p>
        <button
          onClick={() => openOrcamento("contact-cta-link")}
          className="text-white font-medium flex text-xs items-center gap-2 mt-4 hover:text-[#278deb] transition-colors"
        >
          Solicitar orçamento <ArrowOutwardIcon fontSize="small" />
        </button>
      </div>

      <div className="px-8 lg:pr-16 pb-10 lg:pb-0 flex items-center z-10">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => openOrcamento("contact-cta")}
        >
          <button className="p-4 px-6 bg-white rounded-full font-manrope font-semibold text-xs cursor-pointer hover:bg-white/90 transition-colors">
            SOLICITAR ORÇAMENTO
          </button>
          <button className="p-4 border border-white/40 hover:border-white text-white rounded-full font-manrope font-semibold text-xs cursor-pointer transition-colors">
            <ArrowForward fontSize="small" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
