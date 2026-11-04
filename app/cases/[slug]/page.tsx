import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "../../data/cases";
import { getServiceBySlug } from "../../data/services";
import { Header, Footer } from "../../components";
import { projectVisuals } from "../../components/ProjectCard";
import ProjectArtwork from "../../components/ProjectArtwork";
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
        <div className="mx-auto max-w-[1514px] px-6 pb-6 pt-5 lg:px-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap gap-2 font-dmsans text-xs text-gray-500"
          >
            <Link href="/">Início</Link>
            <span aria-hidden="true">/</span>
            <Link href="/cases">Projetos</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.name}</span>
          </nav>
        </div>
        <article>
          <header
            className={`relative mx-4 overflow-hidden rounded-3xl bg-gradient-to-br ${projectVisuals[slug].gradient} lg:mx-auto lg:max-w-[1514px]`}
          >
            <div className="pointer-events-none absolute bottom-0 right-12 hidden h-full w-80 opacity-50 lg:block [&_svg]:h-80 [&_svg]:w-80">
              <ProjectArtwork slug={slug} />
            </div>
            <div className="relative px-6 py-14 lg:px-16 lg:py-20">
              <p className="font-dmsans text-sm text-white/75">
                {project.category}
              </p>
              <h1 className="mt-4 font-manrope text-4xl font-semibold tracking-tight text-white lg:text-6xl">
                {project.name}
              </h1>
              <p className="mt-6 max-w-2xl font-dmsans text-base leading-relaxed text-white/80 lg:text-lg">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-5 rounded-full bg-white px-6 py-3.5 font-manrope text-sm font-semibold text-[#211cda]"
              >
                Visitar o site <span aria-hidden="true">↗</span>
              </a>
            </div>
          </header>
          <div className="mx-auto grid max-w-[1514px] gap-12 px-6 py-16 lg:grid-cols-3 lg:gap-16 lg:px-16 lg:py-24">
            <aside className="lg:col-span-1">
              <p className="text-xs font-extrabold tracking-widest text-[#211cda]">
                SOBRE O PROJETO
              </p>
              <h2 className="mt-3 font-manrope text-2xl font-semibold leading-snug text-gray-800">
                Do desafio à solução.
              </h2>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="font-manrope text-sm font-semibold text-gray-800">
                  Serviços relacionados
                </h3>
                <ul className="mt-4 space-y-3">
                  {project.serviceSlugs.map((serviceSlug) => {
                    const service = getServiceBySlug(serviceSlug);
                    return service ? (
                      <li key={serviceSlug}>
                        <Link
                          className="inline-flex items-center gap-2 font-dmsans text-sm text-gray-500 hover:text-[#211cda]"
                          href={`/servicos/${serviceSlug}`}
                        >
                          {service.title}
                          <span aria-hidden="true">↗</span>
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            </aside>
            <div className="space-y-10 lg:col-span-2">
              <section>
                <h2 className="font-manrope text-2xl font-semibold text-gray-800">
                  O desafio
                </h2>
                <p className="mt-4 font-dmsans text-base leading-relaxed text-gray-500">
                  {project.challenge}
                </p>
              </section>
              <section className="border-t border-gray-100 pt-10">
                <h2 className="font-manrope text-2xl font-semibold text-gray-800">
                  A solução
                </h2>
                <p className="mt-4 font-dmsans text-base leading-relaxed text-gray-500">
                  {project.solution}
                </p>
                <ul className="mt-6 space-y-4">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 font-dmsans text-sm leading-relaxed text-gray-600"
                    >
                      <span aria-hidden="true" className="text-[#278deb]">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="rounded-3xl border border-gray-100 bg-[#f8f9fc] p-6 lg:p-8">
                <h2 className="font-manrope text-xl font-semibold text-gray-800">
                  O que o projeto reúne
                </h2>
                <p className="mt-3 font-dmsans text-base leading-relaxed text-gray-500">
                  {project.outcome}
                </p>
              </section>
            </div>
          </div>
        </article>
        <ServiceCTA serviceName="projeto digital" source={"case-" + slug} />
      </main>
      <Footer />
    </>
  );
}
