import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPublishedPosts, getPostBySlug, formatDateBR } from "../../data/blog";
import { Header, Footer } from "../../components";
import { mdxComponents } from "../../../mdx-components";

// So gera as paginas dos artigos publicados; slugs de draft -> 404 (nao indexavel).
export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.frontmatter.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

function absoluteImage(ogImage?: string): string {
  const fallback = "https://pilarcode.com.br/og-image.png";
  if (!ogImage) return fallback;
  if (ogImage.startsWith("http")) return ogImage;
  return `https://pilarcode.com.br${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.frontmatter.draft === true) return {};

  const fm = post.frontmatter;
  const url = `https://pilarcode.com.br/blog/${fm.slug}`;
  const image = absoluteImage(fm.ogImage);

  return {
    title: fm.title,
    description: fm.description,
    keywords: [fm.keyword, ...(fm.keywordsSecundarias ?? [])],
    authors: [{ name: fm.author }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      siteName: "Pilarcode",
      title: `${fm.title} | Pilarcode`,
      description: fm.description,
      locale: "pt_BR",
      publishedTime: fm.publishedAt,
      modifiedTime: fm.updatedAt,
      authors: [fm.author],
      images: [{ url: image, width: 1200, height: 630, alt: fm.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${fm.title} | Pilarcode`,
      description: fm.description,
      images: [image],
    },
  };
}

export default async function BlogArticle({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.frontmatter.draft === true) {
    notFound();
  }

  const fm = post.frontmatter;
  const url = `https://pilarcode.com.br/blog/${fm.slug}`;
  const image = absoluteImage(fm.ogImage);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fm.title,
    description: fm.description,
    image: [image],
    author: {
      "@type": "Organization",
      name: fm.author,
      url: "https://pilarcode.com.br",
    },
    publisher: {
      "@type": "Organization",
      name: "Pilarcode",
      logo: {
        "@type": "ImageObject",
        url: "https://pilarcode.com.br/logo.png",
      },
    },
    datePublished: fm.publishedAt,
    dateModified: fm.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
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
      {
        "@type": "ListItem",
        position: 3,
        name: fm.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="bg-white">
        <article className="container mx-auto px-4 py-10 lg:py-16">
          {/* Breadcrumb: Inicio > Blog > Artigo */}
          <nav aria-label="Breadcrumb" className="mb-8 max-w-[68ch] mx-auto">
            <ol className="flex flex-wrap items-center gap-2 text-sm font-dmsans text-gray-500">
              <li>
                <Link href="/" className="hover:text-[#211cda] transition-colors">
                  Início
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">
                /
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#211cda] transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">
                /
              </li>
              <li>
                <span className="text-gray-900 font-medium">{fm.title}</span>
              </li>
            </ol>
          </nav>

          {/* Cabecalho do artigo */}
          <header className="max-w-[68ch] mx-auto mb-10">
            <div className="flex items-center gap-3 text-sm font-dmsans text-gray-500 mb-4">
              <time dateTime={fm.publishedAt}>{formatDateBR(fm.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{fm.readingTime} de leitura</span>
            </div>
            <h1 className="font-manrope text-3xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              {fm.title}
            </h1>
            <p className="font-dmsans text-lg text-gray-600 leading-relaxed mt-5">
              {fm.description}
            </p>
          </header>

          {/* Corpo do artigo (MDX renderizado no servidor).
              O CTA fica a cargo do proprio MDX (via <CtaBox /> no conteudo),
              dando ao autor controle sobre a posicao do CTA. */}
          <div className="max-w-[68ch] mx-auto">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{ parseFrontmatter: false }}
            />
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
