"use client";

import { actionClassName } from "./ui/action";
import ArrowIcon from "./ArrowIcon";

import ShapeLandingHero from "./ui/shape-landing-hero";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { openOrcamento } from "../utils/orcamento";
import { CountUp } from "./ui/count-up";

// Início da carreira do fundador em desenvolvimento de software.
const CAREER_START_YEAR = 2020;
const yearsSince = (year: number) => new Date().getFullYear() - year;
const yearsActive = () => yearsSince(CAREER_START_YEAR);
// Estimativa conservadora: conta só os projetos rastreáveis; há outros em repositórios de clientes.
const DELIVERED_PROJECTS = 15;

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
          <a href="#projetos" className={actionClassName("outline-light", "")}>
            Conheça nossos projetos <ArrowIcon />
          </a>
        </div>
        <ul className="mt-9 flex flex-col items-center justify-center gap-2 font-dmsans text-xs text-white/80 sm:mt-12 sm:flex-row sm:gap-0 sm:text-sm">
          <li>
            <CountUp
              to={yearsSince(CAREER_START_YEAR)}
              getValue={yearsActive}
              suffix="+"
              className="font-semibold text-white"
            />{" "}
            anos desenvolvendo software
          </li>
          <li aria-hidden="true" className="mx-4 hidden text-[#64b5ff] sm:block">
            /
          </li>
          <li>
            <CountUp
              to={DELIVERED_PROJECTS}
              suffix="+"
              className="font-semibold text-white"
            />{" "}
            projetos entregues
          </li>
          <li aria-hidden="true" className="mx-4 hidden text-[#64b5ff] sm:block">
            /
          </li>
          <li>Web, iOS e Android</li>
        </ul>
      </ShapeLandingHero>
    </div>
  );
}
