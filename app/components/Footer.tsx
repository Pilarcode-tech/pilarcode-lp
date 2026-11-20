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
          className="text-2xl lg:text-4xl 2xl:text-6x1 text-white/75 hover:text-white transition-colors"
          aria-label="Solicitar orçamento online"
        >
          Solicitar orçamento
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-0 pb-10 xl:pb-0 border-b border-white">
        <div className="flex gap-4 justify-between items-start">
          <div className="flex flex-col w-full gap-1 md:gap-2 lg:gap-3">
            <Image alt="Bandeira do Brasil" src="/brasil.svg" width={24} height={24} />
            <h3 className="font-semibold">Atendimento em todo o Brasil</h3>
          </div>
          <div className="hidden lg:block" />
        </div>
        <div className="flex gap-4 xl:border-x justify-between items-start xl:justify-around xl:border-gradient-bottom xl:pb-20">
          <div className="flex flex-col gap-1 w-full xl:w-fit md:gap-2 lg:gap-3">
            <Image alt="Ícone de e-mail" src="/mail.svg" width={24} height={24} />
            <h3 className="font-semibold">E-mail</h3>
            <a
              href="mailto:contato@pilarcode.com.br"
              className="inline-flex min-h-11 items-center break-all font-regular text-sm text-white/80 hover:text-white transition-colors lg:min-h-0"
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
              className="inline-flex min-h-11 items-center break-all font-regular text-sm text-white/80 cursor-pointer hover:text-white transition-colors lg:min-h-0"
            >
              orcamento.pilarcode.com.br
            </a>
          </div>
        </div>
        <div className="flex gap-4 justify-between items-start md:justify-around xl:pl-10">
          <div className="flex flex-col gap-1 w-full md:gap-2 lg:gap-3">
            <Image alt="Ícone de redes sociais" src="/brand.svg" width={24} height={24} />
            <h3 className="font-semibold">Redes Sociais</h3>
            <div className="grid grid-cols-2 gap-x-4 lg:gap-1">
              <a
                href="https://instagram.com/pilarcode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center break-all font-regular text-sm text-white/80 cursor-pointer hover:text-white transition-colors lg:min-h-0"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/pilarcode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center break-all font-regular text-sm text-white/80 cursor-pointer hover:text-white transition-colors lg:min-h-0"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pb-8 border-b border-white/10">
        <h3 className="font-semibold text-sm mb-4">Nossos Serviços</h3>
        <nav className="flex flex-wrap gap-x-6 gap-y-0 lg:gap-y-2" aria-label="Serviços">
          <Link href="/servicos/desenvolvimento-de-apps" className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white transition-colors lg:min-h-0">Desenvolvimento de Apps</Link>
          <Link href="/servicos/desenvolvimento-web" className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white transition-colors lg:min-h-0">Desenvolvimento Web</Link>
          <Link href="/servicos/software-sob-medida" className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white transition-colors lg:min-h-0">Software Sob Medida</Link>
          <Link href="/servicos/integracao-de-sistemas" className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white transition-colors lg:min-h-0">Integração de Sistemas</Link>
          <Link href="/servicos/e-commerce" className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white transition-colors lg:min-h-0">E-Commerce</Link>
          <Link href="/servicos/automacao-de-processos" className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white transition-colors lg:min-h-0">Automação de Processos</Link>
        </nav>
      </div>
      <div className="flex flex-col w-full gap-2 md:gap-2 lg:gap-3 xl:flex-row justify-between items-center xl:items-end mt-6">
        <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 text-xs">
          <p className="w-full text-center xl:text-left">
            &copy; 2026 Pilarcode - Todos os direitos reservados.
          </p>
        </div>
        <nav className="flex flex-wrap xl:mt-0 justify-center gap-x-4 text-white/80 text-sm" aria-label="Navegação do rodapé">
          <Link href="/cases" className="inline-flex min-h-11 items-center hover:text-white transition-colors lg:min-h-0">Projetos</Link>
          <Link href="/blog" className="inline-flex min-h-11 items-center hover:text-white transition-colors lg:min-h-0">Blog</Link>
          <Link href="/termos-de-uso" className="inline-flex min-h-11 items-center hover:text-white transition-colors lg:min-h-0">Termos de Uso</Link>
          <Link href="/cookies" className="inline-flex min-h-11 items-center hover:text-white transition-colors lg:min-h-0">Cookies</Link>
          <Link href="/politica-de-privacidade" className="inline-flex min-h-11 items-center hover:text-white transition-colors lg:min-h-0">LGPD</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
