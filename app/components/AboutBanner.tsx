"use client";

import { useMobile } from "../hooks";
import { ActionButton } from "./ui/action";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { openOrcamento } from "../utils/orcamento";

const AboutBanner = () => {
  const isMobile = useMobile();
  return (
    <div className="max-w-[1514px] mx-auto bg-[#211cda] rounded-3xl overflow-hidden relative">
      {/* Decorative background pattern */}
      {!isMobile && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/about-pattern.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Gradient orbs */}
      <div className="absolute top-[-100px] right-[-50px] w-[400px] h-[400px] rounded-full bg-[#278deb] opacity-[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[20%] w-[300px] h-[300px] rounded-full bg-[#278deb] opacity-[0.06] blur-[100px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 p-8 md:p-16 relative z-10">
        {/* Left column - text */}
        <div className="lg:w-[45%] flex flex-col gap-6">
          <div>
            <h2 className="font-extrabold text-white text-xs tracking-widest">
              SOBRE NÓS
            </h2>
            <p className="text-2xl lg:text-3xl text-white font-medium mt-3 leading-relaxed">
              Uma equipe de{" "}
              <span className="text-[#278deb] font-bold">especialistas</span>{" "}
              dedicados a transformar ideias em soluções digitais de alto
              impacto.
            </p>
          </div>
          <div>
            <p className="font-dmsans text-white/90 text-base">
              Inovação, qualidade e compromisso com o seu resultado.
            </p>
            <ActionButton
              variant="light"
              className="mt-6"
              onClick={() =>
                openOrcamento(isMobile ? "about-mobile" : "about-desktop")
              }
            >
              Solicitar orçamento
            </ActionButton>
          </div>
        </div>

        {/* Right column - checklist */}
        <div className="lg:w-[55%] flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
              <CheckCircleOutlineIcon
                sx={{
                  color: "#278deb",
                  fontSize: 22,
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              />
              <div>
                <p className="text-white font-medium text-sm">
                  Entrega de Excelência
                </p>
                <p className="text-white/60 text-xs mt-1 leading-relaxed">
                  Os mais altos níveis de qualidade em todas as soluções.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircleOutlineIcon
                sx={{
                  color: "#278deb",
                  fontSize: 22,
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              />
              <div>
                <p className="text-white font-medium text-sm">
                  Sempre Disponíveis
                </p>
                <p className="text-white/60 text-xs mt-1 leading-relaxed">
                  Equipe pronta para te ajudar a qualquer momento.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircleOutlineIcon
                sx={{
                  color: "#278deb",
                  fontSize: 22,
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              />
              <div>
                <p className="text-white font-medium text-sm">
                  Abertos a Revisões
                </p>
                <p className="text-white/60 text-xs mt-1 leading-relaxed">
                  Ajustamos o necessário para garantir sua total satisfação.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircleOutlineIcon
                sx={{
                  color: "#278deb",
                  fontSize: 22,
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              />
              <div>
                <p className="text-white font-medium text-sm">
                  Parceria de Longo Prazo
                </p>
                <p className="text-white/60 text-xs mt-1 leading-relaxed">
                  Relacionamentos duradouros baseados em confiança e resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
