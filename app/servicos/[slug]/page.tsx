import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug, getRelatedServices } from "../../data/services";
import { Header, Footer } from "../../components";
import Breadcrumb from "../../components/Breadcrumb";
import ServicePageHeader from "../../components/ServicePageHeader";
import ServiceFeatureGrid from "../../components/ServiceFeatureGrid";
import ServiceProcessSteps from "../../components/ServiceProcessSteps";
import ServiceFAQ from "../../components/ServiceFAQ";
import ServiceRelatedCards from "../../components/ServiceRelatedCards";
import ServiceCTA from "../../components/ServiceCTA";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://pilarcode.com.br/servicos/${service.slug}`,
    },
    openGraph: {
      type: "website",
      url: `https://pilarcode.com.br/servicos/${service.slug}`,
      siteName: "Pilarcode",
      title: `${service.metaTitle} | Pilarcode`,
      description: service.metaDescription,
      locale: "pt_BR",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} - Pilarcode`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle} | Pilarcode`,
      description: service.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.relatedSlugs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Pilarcode",
      url: "https://pilarcode.com.br",
      logo: "https://pilarcode.com.br/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-11-91895-8384",
        contactType: "sales",
        availableLanguage: ["Portuguese"],
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    serviceType: service.title,
    url: `https://pilarcode.com.br/servicos/${service.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
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
        name: "Serviços",
        item: "https://pilarcode.com.br/#servicos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://pilarcode.com.br/servicos/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="bg-white">
        <Breadcrumb serviceName={service.title} />

        <div className="mt-2 mb-10">
          <ServicePageHeader
            title={service.title}
            subtitle={service.subtitle}
            gradient={service.gradient}
            source={`service-header-${service.slug}`}
          />
        </div>

        {/* Introduction */}
        <section className="container mx-auto px-4 py-12 lg:py-16">
          <div className="max-w-3xl mx-auto">
            {service.introduction.map((paragraph, index) => (
              <p
                key={index}
                className="font-dmsans text-base text-gray-600 leading-relaxed mb-5 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <ServiceFeatureGrid benefits={service.benefits} />

        <ServiceProcessSteps steps={service.processSteps} />

        {/* Technologies */}
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <h2 className="font-manrope text-2xl lg:text-4xl font-semibold text-gray-900 text-center mb-4">
            Tecnologias que Utilizamos
          </h2>
          <p className="text-gray-500 font-dmsans text-center max-w-2xl mx-auto mb-10">
            Ferramentas e frameworks modernos para entregar a melhor solução
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-[#f8f9fc] border border-gray-200 text-gray-700 font-dmsans text-sm px-4 py-2 rounded-full hover:border-[#211cda]/30 hover:text-[#211cda] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <ServiceFAQ faq={service.faq} serviceName={service.title} />

        <ServiceRelatedCards services={relatedServices} />

        <ServiceCTA
          serviceName={service.shortTitle}
          source={`service-cta-${service.slug}`}
        />
      </main>

      <Footer />
    </>
  );
}
