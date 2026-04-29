"use client";

import Image from "next/image";
import Link from "next/link";
import { openOrcamento, ORCAMENTO_URL } from "../utils/orcamento";

const Footer = () => {
  return (
    <footer className="bg-[#060554] p-6 lg:p-10 lg:pb-2 lg:px-20 text-white relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-[-100px] right-[10%] w-[400px] h-[300px] rounded-full bg-[#278deb] opacity-[0.05] blur-[120px] pointer-events-none" />
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-2 lg:gap-8">
        <h2 className="text-3xl lg:text-4xl 2xl:text-5x1">Entre em contato</h2>
        <div className="border-t-2 flex-1 mt-2 hidden md:block" aria-hidden="true"></div>
        <a
          href={ORCAMENTO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            openOrcamento("footer-cta");
          }}
          className="text-2xl lg:text-4xl 2xl:text-6x1 text-white/20 hover:text-white/40 transition-colors"
          aria-label="Solicitar orçamento online"
        >
          Solicitar orçamento
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-0 pb-10 xl:pb-0 border-b border-white">
        <div className="flex gap-4 justify-between items-start">
          <div className="flex flex-col w-full gap-1 md:gap-2 lg:gap-3">
            <Image alt="Bandeira do Brasil" src="/brasil.svg" width={24} height={24} />
            <h3 className="font-semibold">Brasil, São Paulo</h3>
          </div>
          <div className="hidden lg:block" />
        </div>
        <div className="flex gap-4 xl:border-x justify-between items-start xl:justify-around xl:border-gradient-bottom xl:pb-20">
          <div className="flex flex-col gap-1 w-full xl:w-fit md:gap-2 lg:gap-3">
            <Image alt="Ícone de e-mail" src="/mail.svg" width={24} height={24} />
            <h3 className="font-semibold">E-mail</h3>
            <a
              href="mailto:contato@pilarcode.com.br"
              className="font-regular text-sm text-white/80 hover:text-white transition-colors"
            >
              contato@pilarcode.com.br
            </a>
          </div>
          <div className="flex flex-col w-full gap-1 xl:w-fit md:gap-2 lg:gap-3">
            <Image alt="Ícone de orçamento" src="/message.svg" width={24} height={24} />
            <h3 className="font-semibold">Orçamento</h3>
            <a
              href={ORCAMENTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openOrcamento("footer-orcamento");
              }}
              className="font-regular text-sm text-white/80 cursor-pointer hover:text-white transition-colors"
            >
              orcamento.pilarcode.com.br
            </a>
          </div>
        </div>
        <div className="flex gap-4 justify-between items-start md:justify-around xl:pl-10">
          <div className="flex flex-col gap-1 w-full md:gap-2 lg:gap-3">
            <Image alt="Ícone de redes sociais" src="/brand.svg" width={24} height={24} />
            <h3 className="font-semibold">Redes Sociais</h3>
            <div className="grid grid-cols-2 gap-1 lg:grid-cols-2">
              <a
                href="https://instagram.com/pilarcode"
                target="_blank"
                rel="noopener noreferrer"
                className="font-regular text-sm text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/pilarcode"
                target="_blank"
                rel="noopener noreferrer"
                className="font-regular text-sm text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pb-8 border-b border-white/10">
        <h3 className="font-semibold text-sm mb-4">Nossos Serviços</h3>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Serviços">
          <Link href="/servicos/desenvolvimento-de-apps" className="text-sm text-white/60 hover:text-white transition-colors">Desenvolvimento de Apps</Link>
          <Link href="/servicos/desenvolvimento-web" className="text-sm text-white/60 hover:text-white transition-colors">Desenvolvimento Web</Link>
          <Link href="/servicos/software-sob-medida" className="text-sm text-white/60 hover:text-white transition-colors">Software Sob Medida</Link>
          <Link href="/servicos/integracao-de-sistemas" className="text-sm text-white/60 hover:text-white transition-colors">Integração de Sistemas</Link>
          <Link href="/servicos/e-commerce" className="text-sm text-white/60 hover:text-white transition-colors">E-Commerce</Link>
          <Link href="/servicos/automacao-de-processos" className="text-sm text-white/60 hover:text-white transition-colors">Automação de Processos</Link>
        </nav>
      </div>
      <div className="flex flex-col w-full gap-2 md:gap-2 lg:gap-3 xl:flex-row justify-between items-center xl:items-end mt-6">
        <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 text-xs">
          <p className="w-full text-center xl:text-left">
            &copy; 2026 Pilarcode - Todos os direitos reservados.
          </p>
        </div>
        <nav className="flex xl:mt-0 justify-around gap-4 text-white/80 text-sm" aria-label="Links legais">
          <Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">LGPD</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
