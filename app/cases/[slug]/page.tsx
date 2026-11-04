import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "../../data/cases";
import { getServiceBySlug } from "../../data/services";
import { Header, Footer } from "../../components";
import ServiceCTA from "../../components/ServiceCTA";

export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) return {};
  const title = "Case " + project.name + ": " + project.category.toLowerCase();
  return {
    title,
    description: project.description,
    alternates: { canonical: "/cases/" + slug },
    openGraph: {
      type: "website",
      url: "/cases/" + slug,
      title: title + " | Pilarcode",
      description: project.description,
      siteName: "Pilarcode",
      locale: "pt_BR",
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: title + " | Pilarcode",
      description: project.description,
      images: ["/og-image.png"],
    },
  };
}
export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) notFound();
  const url = "https://pilarcode.com.br/cases/" + slug;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://pilarcode.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projetos",
        item: "https://pilarcode.com.br/cases",
      },
      { "@type": "ListItem", position: 3, name: project.name, item: url },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="bg-white">
        <article className="max-w-3xl mx-auto px-4 py-12 lg:py-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap gap-2 text-sm text-gray-500 mb-8"
          >
            <Link href="/">Início</Link>
            <span aria-hidden="true">/</span>
            <Link href="/cases">Projetos</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.name}</span>
          </nav>
          <p className="text-sm font-semibold text-[#211cda]">
            {project.category}
          </p>
          <h1 className="font-manrope text-4xl lg:text-5xl font-semibold text-gray-900 mt-3">
            {project.name}
          </h1>
          <p className="font-dmsans text-xl text-gray-600 leading-relaxed mt-5">
            {project.description}
          </p>
          <div className="font-dmsans text-gray-600 leading-relaxed space-y-10 mt-12">
            <section>
              <h2 className="font-manrope text-2xl font-semibold text-gray-900 mb-4">
                O desafio
              </h2>
              <p>{project.challenge}</p>
            </section>
            <section>
              <h2 className="font-manrope text-2xl font-semibold text-gray-900 mb-4">
                A solução
              </h2>
              <p>{project.solution}</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-manrope text-2xl font-semibold text-gray-900 mb-4">
                O que o projeto reúne
              </h2>
              <p>{project.outcome}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-[#211cda] font-semibold"
              >
                Visitar {project.name} →
              </a>
            </section>
            <section>
              <h2 className="font-manrope text-2xl font-semibold text-gray-900 mb-4">
                Serviços relacionados
              </h2>
              <ul className="space-y-3">
                {project.serviceSlugs.map((serviceSlug) => {
                  const service = getServiceBySlug(serviceSlug);
                  return service ? (
                    <li key={serviceSlug}>
                      <Link
                        className="text-[#211cda] underline underline-offset-4"
                        href={"/servicos/" + serviceSlug}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </section>
          </div>
        </article>
        <ServiceCTA serviceName="projeto digital" source={"case-" + slug} />
      </main>
      <Footer />
    </>
  );
}
