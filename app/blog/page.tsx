import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts, formatDateBR } from "../data/blog";
import { Header, Footer } from "../components";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdo sobre desenvolvimento de software, apps, sites e automação para empresas que querem crescer com tecnologia sob medida.",
  alternates: {
    canonical: "https://pilarcode.com.br/blog",
  },
  openGraph: {
    type: "website",
    url: "https://pilarcode.com.br/blog",
    siteName: "Pilarcode",
    title: "Blog | Pilarcode",
    description:
      "Conteúdo sobre desenvolvimento de software, apps, sites e automação para empresas que querem crescer com tecnologia sob medida.",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog da Pilarcode",
      },
    ],
  },
};

export default function BlogIndex() {
  const posts = getPublishedPosts();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog Pilarcode",
    description:
      "Artigos sobre desenvolvimento de software, apps, sites e automação.",
    url: "https://pilarcode.com.br/blog",
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
        name: "Blog",
        item: "https://pilarcode.com.br/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="bg-white min-h-screen">
        <section className="container mx-auto px-4 py-12 lg:py-20">
          <header className="max-w-3xl mb-10 lg:mb-16">
            <p className="font-extrabold text-[#278deb] text-xs tracking-widest mb-3">
              BLOG
            </p>
            <h1 className="font-manrope text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Ideias e guias sobre tecnologia sob medida
            </h1>
            <p className="font-dmsans text-lg text-gray-600 leading-relaxed mt-5">
              Conteúdo prático sobre desenvolvimento de software, apps, sites,
              integrações e automação para quem quer tomar boas decisões de
              tecnologia.
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="font-dmsans text-gray-500">
              Em breve, novos artigos por aqui.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const fm = post.frontmatter;
                return (
                  <Link
                    key={fm.slug}
                    href={`/blog/${fm.slug}`}
                    className="group flex flex-col rounded-3xl border border-gray-200 bg-white p-6 hover:border-[#211cda]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 text-xs font-dmsans text-gray-500 mb-4">
                      <time dateTime={fm.publishedAt}>
                        {formatDateBR(fm.publishedAt)}
                      </time>
                      <span aria-hidden="true">·</span>
                      <span>{fm.readingTime} de leitura</span>
                    </div>
                    <h2 className="font-manrope text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#211cda] transition-colors">
                      {fm.title}
                    </h2>
                    <p className="font-dmsans text-sm text-gray-600 leading-relaxed flex-1">
                      {fm.description}
                    </p>
                    <span className="font-manrope font-semibold text-sm text-[#211cda] mt-5 inline-flex items-center gap-1">
                      Ler artigo
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
