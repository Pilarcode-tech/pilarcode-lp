import Image from "next/image";
import Link from "next/link";

export default function Founder() {
  return (
    <section
      aria-labelledby="founder-title"
      className="mx-auto max-w-[1514px] py-16 lg:py-24"
    >
      <div className="grid items-center gap-10 px-4 md:px-10 lg:grid-cols-5 lg:gap-20 lg:px-16">
        <div className="relative mx-auto w-full max-w-sm lg:col-span-2 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-2/3 w-2/3 rounded-[28px] bg-gradient-to-br from-[#278deb]/10 to-[#211cda]/10"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e9eaf0]">
            <Image
              src="/authors/henrique-franca-fundador.jpg"
              alt="Henrique França, fundador e CEO da Pilarcode"
              fill
              sizes="(min-width: 1024px) 480px, (min-width: 768px) 384px, 90vw"
              className="object-cover object-[50%_42%]"
            />
          </div>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-extrabold tracking-widest text-[#211cda]">
            QUEM ESTÁ POR TRÁS DA PILARCODE
          </p>
          <h2
            id="founder-title"
            className="mt-4 max-w-xl text-3xl font-medium leading-tight text-gray-800 lg:text-4xl"
          >
            Tecnologia feita por pessoas.
            <br />
            <span className="text-[#278deb]">Parceria de verdade.</span>
          </h2>
          <p className="mt-6 max-w-xl font-dmsans text-base leading-relaxed text-gray-500">
            À frente da Pilarcode, Henrique França conecta visão de negócio e
            desenvolvimento de software para transformar ideias em produtos
            digitais.
          </p>
          <p className="mt-4 max-w-xl font-dmsans text-base leading-relaxed text-gray-500">
            Sua atuação reúne o planejamento da solução, as decisões técnicas e
            a construção de plataformas como nPonto e Fieldis, com atenção ao
            que cada operação precisa.
          </p>
          <div className="mt-8 border-t border-gray-100 pt-6">
            <p className="font-manrope text-lg font-semibold text-gray-900">
              Henrique França
            </p>
            <p className="mt-1 font-dmsans text-sm text-gray-500">
              Fundador e CEO · Pilarcode
            </p>
            <Link
              href="/blog/autor/henrique-franca"
              className="mt-5 inline-flex items-center gap-4 font-dmsans text-sm font-medium text-[#211cda] hover:text-[#060554]"
            >
              Conheça minha visão sobre tecnologia{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
