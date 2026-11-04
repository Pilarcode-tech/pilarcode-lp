"use client";

import BackgroundPaths from "./ui/background-paths";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { openOrcamento } from "../utils/orcamento";

export default function Hero() {
  return (
    <section
      aria-label="Desenvolvimento de software sob medida"
      className="py-6 lg:py-10"
    >
      <BackgroundPaths
        count={27}
        speed={0.3}
        spread={1.4}
        angle={-12}
        interactive={false}
        className="flex min-h-[550px] items-center justify-center rounded-[32px] bg-gradient-to-b from-[#f5f8ff] via-white to-white py-8 sm:min-h-[580px] lg:min-h-[640px] lg:py-16"
      >
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-3 text-center md:px-10">
          <p className="mb-5 inline-flex lg:mb-7 items-center gap-2.5 rounded-full border border-[#211cda]/10 bg-white/90 px-4 py-2 font-dmsans text-[10px] font-medium uppercase tracking-[0.14em] text-[#211cda] sm:text-[11px]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#278deb]"
            />
            Pilarcode · Tecnologia com propósito
          </p>
          <h1 className="font-manrope text-[32px] font-medium leading-[1.1] tracking-[-0.045em] text-gray-900 sm:text-5xl lg:text-[72px]">
            Software sob medida.
            <br />
            <span className="bg-gradient-to-r from-[#278deb] to-[#211cda] bg-clip-text text-transparent">
              Para o seu próximo passo.
            </span>
          </h1>
          <p className="mt-5 max-w-xl font-dmsans text-sm sm:text-base leading-relaxed text-gray-600 lg:mt-7 lg:text-lg">
            Seu negócio é único. A tecnologia também pode ser. Criamos sistemas,
            sites e aplicativos que conectam sua operação e dão forma às suas
            ideias.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-6 lg:mt-9">
            <InteractiveHoverButton onClick={() => openOrcamento("hero")}>
              Conte sobre seu projeto
            </InteractiveHoverButton>
            <a
              href="#projetos"
              className="inline-flex min-h-12 items-center gap-3 rounded-full px-3 font-dmsans text-sm font-medium text-gray-700 hover:text-[#211cda]"
            >
              Conheça nossos projetos <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="mt-10 hidden flex-wrap sm:flex items-center justify-center gap-x-5 gap-y-2 font-dmsans text-[11px] text-gray-500 lg:mt-12">
            <span>Estratégia de produto</span>
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#278deb]/40"
            />
            <span>Design de experiência</span>
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#278deb]/40"
            />
            <span>Engenharia de software</span>
          </div>
        </div>
      </BackgroundPaths>
    </section>
  );
}
