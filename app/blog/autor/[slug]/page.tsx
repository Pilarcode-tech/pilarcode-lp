import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { authors, getAuthorBySlug, authorPageUrl } from "../../../data/authors";
import { getPublishedPosts, formatDateBR } from "../../../data/blog";
import { Header, Footer } from "../../../components";

export const dynamicParams = false;

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};

  const description =
    author.bio || `${author.name}, ${author.role} na Pilarcode.`;

  return {
    title: `${author.name}`,
    description,
    alternates: {
      canonical: authorPageUrl(author.slug),
    },
    openGraph: {
      type: "profile",
      url: authorPageUrl(author.slug),
      siteName: "Pilarcode",
      title: `${author.name} | Pilarcode`,
      description,
      locale: "pt_BR",
    },
  };
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const posts = getPublishedPosts().filter(
    (post) => post.frontmatter.author === author.name
  );

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    url: authorPageUrl(author.slug),
    worksFor: {
      "@type": "Organization",
      name: "Pilarcode",
      url: "https://pilarcode.com.br",
    },
    ...(author.links.linkedin
      ? { sameAs: [author.links.linkedin] }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Header />

      <main className="bg-white min-h-screen">
        <section className="container mx-auto px-4 py-12 lg:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10 max-w-3xl mx-auto">
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
                <span className="text-gray-900 font-medium">{author.name}</span>
              </li>
            </ol>
          </nav>

          {/* Cabecalho do autor */}
          <header className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start gap-6 mb-12">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt={`Foto de ${author.name}`}
                width={96}
                height={96}
                className="rounded-full object-cover shrink-0"
              />
            ) : (
              <div
                aria-hidden="true"
                className="shrink-0 w-24 h-24 rounded-full bg-[#211cda] text-white font-manrope font-semibold text-3xl flex items-center justify-center"
              >
                {initials(author.name)}
              </div>
            )}
            <div>
              <h1 className="font-manrope text-3xl lg:text-4xl font-semibold text-gray-900">
                {author.name}
              </h1>
              <p className="font-dmsans text-[#211cda] font-medium mt-1">
                {author.role}
              </p>
              {author.bio ? (
                <p className="font-dmsans text-base text-gray-600 leading-relaxed mt-4">
                  {author.bio}
                </p>
              ) : null}
              {author.links.linkedin ? (
                <a
                  href={author.links.linkedin}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="inline-block font-manrope text-sm font-semibold text-[#211cda] hover:text-[#060554] transition-colors mt-4"
                >
                  LinkedIn
                </a>
              ) : null}
            </div>
          </header>

          {/* Artigos do autor */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-manrope text-xl font-semibold text-gray-900 mb-6">
              Artigos de {author.name}
            </h2>
            {posts.length === 0 ? (
              <p className="font-dmsans text-gray-500">
                Nenhum artigo publicado ainda.
              </p>
            ) : (
              <ul className="space-y-6">
                {posts.map((post) => {
                  const fm = post.frontmatter;
                  return (
                    <li key={fm.slug}>
                      <Link
                        href={`/blog/${fm.slug}`}
                        className="group block rounded-2xl border border-gray-200 p-5 hover:border-[#211cda]/30 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center gap-3 text-xs font-dmsans text-gray-500 mb-2">
                          <time dateTime={fm.publishedAt}>
                            {formatDateBR(fm.publishedAt)}
                          </time>
                          <span aria-hidden="true">·</span>
                          <span>{fm.readingTime} de leitura</span>
                        </div>
                        <h3 className="font-manrope text-lg font-semibold text-gray-900 group-hover:text-[#211cda] transition-colors">
                          {fm.title}
                        </h3>
                        <p className="font-dmsans text-sm text-gray-600 leading-relaxed mt-1">
                          {fm.description}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
