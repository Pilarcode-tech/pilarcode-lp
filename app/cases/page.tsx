import type { Metadata } from "next";
import { Header, Footer } from "../components";
import CaseStudies from "../components/CaseStudies";

const description =
  "Conheça os projetos nPonto, Fieldis e Moretão Produções: exemplos de software sob medida, plataformas web e sites desenvolvidos pela Pilarcode.";
export const metadata: Metadata = {
  title: "Projetos de software e sites",
  description,
  alternates: { canonical: "/cases" },
  openGraph: {
    type: "website",
    url: "/cases",
    title: "Projetos de software e sites | Pilarcode",
    description,
    siteName: "Pilarcode",
    locale: "pt_BR",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos de software e sites | Pilarcode",
    description,
    images: ["/og-image.png"],
  },
};
export default function CasesPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <header className="mx-4 mb-12 rounded-3xl bg-gradient-to-br from-[#211cda] to-[#060554] lg:mx-auto lg:max-w-[1514px]">
          <div className="px-6 py-14 lg:px-16 lg:py-20">
            <p className="text-xs font-extrabold tracking-widest text-white/70">
              PROJETOS DA PILARCODE
            </p>
            <h1 className="mt-4 max-w-3xl font-manrope text-3xl font-semibold leading-tight text-white lg:text-5xl">
              Tecnologia pensada para cada negócio.
            </h1>
            <p className="mt-5 max-w-2xl font-dmsans text-base leading-relaxed text-white/80">
              Conheça nossos projetos de software, plataformas web e sites: do
              desafio inicial à solução desenvolvida.
            </p>
          </div>
        </header>
        <CaseStudies listing />
      </main>
      <Footer />
    </>
  );
}
