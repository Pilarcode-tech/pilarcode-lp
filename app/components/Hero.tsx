"use client";

import ShapeLandingHero from "./ui/shape-landing-hero";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { openOrcamento } from "../utils/orcamento";

export default function Hero() {
  return (
    <div className="pb-10 pt-5 lg:pb-16 lg:pt-8">
      <ShapeLandingHero>
        <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-dmsans text-[10px] font-medium uppercase tracking-[0.15em] text-white/75 sm:text-xs">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-[#64b5ff]"
          />
          Software, Design e Tecnologia
        </p>
        <h1 className="font-manrope text-[32px] font-semibold leading-[1.2] tracking-[-0.045em] text-white sm:text-5xl lg:text-[64px]">
          <span className="block">Software sob medida</span>
          <span className="mt-2 block font-medium">
            para sua{" "}
            <span className="inline-block -rotate-3 px-1 font-blisstwin text-[1.55em] font-normal leading-[0.8] tracking-normal text-[#64b5ff]">
              ideia
            </span>{" "}
            ir além.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl font-dmsans text-sm leading-relaxed text-white/65 sm:text-base lg:mt-9 lg:text-lg">
          Sistemas, sites e aplicativos que respeitam o jeito que seu negócio
          funciona. Da primeira conversa ao produto em operação.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <InteractiveHoverButton
            onClick={() => openOrcamento("hero")}
            className="border border-white/15"
          >
            Vamos tirar do papel
          </InteractiveHoverButton>
          <a
            href="#projetos"
            className="inline-flex min-h-12 items-center gap-5 rounded-full border border-white/20 px-6 py-3 font-dmsans text-sm font-medium text-white/85 hover:border-white/50 hover:text-white"
          >
            Conheça nossos projetos <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="mt-9 hidden sm:block font-dmsans text-[10px] uppercase tracking-[0.16em] text-white/40 sm:mt-12">
          Estratégia de produto{" "}
          <span aria-hidden="true" className="mx-2 text-[#64b5ff]/50">
            /
          </span>{" "}
          Design{" "}
          <span aria-hidden="true" className="mx-2 text-[#64b5ff]/50">
            /
          </span>{" "}
          Engenharia
        </p>
      </ShapeLandingHero>
    </div>
  );
}
