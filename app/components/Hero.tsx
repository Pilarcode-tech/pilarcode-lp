"use client";

import { ShineBorder } from "./ui/shine-border";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { openOrcamento } from "../utils/orcamento";

export default function Hero() {
  return (
    <section className="grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-20">
      <div>
        <p className="mb-6 flex items-center gap-3 font-dmsans text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">
          <span className="h-px w-8 bg-[#278deb]" aria-hidden="true" />
          Tecnologia com propósito
        </p>
        <h1 className="max-w-3xl font-manrope text-[38px] font-medium leading-[1.12] tracking-[-0.045em] text-gray-900 sm:text-5xl lg:text-[60px] xl:text-[68px]">
          Desenvolvimento de{" "}
          <span className="text-[#278deb]">software sob medida.</span>
        </h1>
        <p className="mt-6 max-w-lg font-dmsans text-base leading-relaxed text-gray-500 lg:text-lg">
          Transformamos desafios do seu negócio em sistemas, sites e
          aplicativos. Da primeira ideia à solução em operação.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-9 lg:gap-7">
          <InteractiveHoverButton onClick={() => openOrcamento("hero")}>
            Conte sobre seu projeto
          </InteractiveHoverButton>
          <a
            href="#projetos"
            className="inline-flex min-h-12 items-center gap-3 font-dmsans text-sm font-medium text-gray-700 hover:text-[#211cda]"
          >
            Explore os projetos <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-gray-100 pt-5 font-dmsans text-xs text-gray-500 lg:mt-12">
          <span>Software & aplicativos</span>
          <span aria-hidden="true" className="text-gray-300">
            /
          </span>
          <span>Web & e-commerce</span>
          <span aria-hidden="true" className="text-gray-300">
            /
          </span>
          <span>Integrações</span>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="relative hidden aspect-square max-h-[460px] overflow-hidden rounded-[40px] border border-[#e8edf8] bg-[#f5f7fc] lg:block"
      >
        <ShineBorder />
        <svg viewBox="0 0 460 460" fill="none" className="h-full w-full">
          <defs>
            <linearGradient
              id="pillar-top"
              x1="140"
              y1="120"
              x2="320"
              y2="250"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#278deb" />
              <stop offset="1" stopColor="#211cda" />
            </linearGradient>
            <linearGradient
              id="pillar-side"
              x1="230"
              y1="170"
              x2="320"
              y2="330"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#211cda" />
              <stop offset="1" stopColor="#060554" />
            </linearGradient>
          </defs>
          <circle cx="230" cy="230" r="171" stroke="#dfe5f2" />
          <circle
            cx="230"
            cy="230"
            r="126"
            stroke="#dfe5f2"
            strokeDasharray="3 8"
          />
          <path d="M60 230h70m200 0h70M230 60v65m0 210v65" stroke="#d2dcee" />
          <path
            d="m140 237 90-52 90 52-90 52-90-52Z"
            fill="#211cda"
            fillOpacity=".07"
          />
          <path
            d="m140 210 90 52 90-52v64l-90 52-90-52v-64Z"
            fill="url(#pillar-side)"
          />
          <path d="m140 210 90-52 90 52-90 52-90-52Z" fill="url(#pillar-top)" />
          <path
            d="m155 169 75-44 75 44-75 44-75-44Z"
            fill="white"
            stroke="#d6dff0"
          />
          <path d="m172 169 58-34 58 34-58 34-58-34Z" fill="#eef4ff" />
          <path
            d="m210 163-10 6 10 6m40-12 10 6-10 6m-24 4 8-20"
            stroke="#278deb"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M230 262v64" stroke="white" strokeOpacity=".2" />
          <circle cx="60" cy="230" r="5" fill="#278deb" />
          <circle cx="400" cy="230" r="5" fill="#211cda" />
          <circle cx="230" cy="60" r="5" fill="#211cda" />
          <circle cx="230" cy="400" r="5" fill="#278deb" />
          <path
            d="m84 84 9 9m274 274 9 9M84 376l9-9M367 93l9-9"
            stroke="#bccce5"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute bottom-6 left-7 right-7 flex items-center justify-between font-dmsans text-[10px] uppercase tracking-[0.14em] text-gray-500">
          <span>Estratégia. Design. Código.</span>
          <span className="text-[#211cda]">Pilarcode ↗</span>
        </div>
      </div>
    </section>
  );
}
