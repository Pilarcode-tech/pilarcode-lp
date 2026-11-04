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
      <main className="container mx-auto px-4 py-10">
        <h1 className="font-manrope text-4xl lg:text-5xl font-semibold text-gray-900">
          Projetos de software e sites da Pilarcode
        </h1>
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
