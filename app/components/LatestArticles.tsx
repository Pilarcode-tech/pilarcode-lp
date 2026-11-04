import Link from "next/link";
import { getPublishedPosts, formatDateBR } from "../data/blog";

export default function LatestArticles() {
  const posts = getPublishedPosts().slice(0, 3);
  if (!posts.length) return null;
  return (
    <section
      aria-labelledby="articles-title"
      className="max-w-[1514px] mx-auto py-12 lg:py-16"
    >
      <p className="text-xs font-extrabold tracking-widest text-[#211cda]">
        GUIAS PARA SUA EMPRESA
      </p>
      <h2
        id="articles-title"
        className="font-manrope text-3xl lg:text-4xl font-semibold text-gray-900 mt-3"
      >
        Decisões de tecnologia com mais clareza
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {posts.map(({ frontmatter: post }) => (
          <Link
            key={post.slug}
            href={"/blog/" + post.slug}
            className="rounded-3xl border border-gray-200 bg-white p-6 hover:border-[#211cda]/40 transition-colors"
          >
            <time dateTime={post.publishedAt} className="text-sm text-gray-500">
              {formatDateBR(post.publishedAt)}
            </time>
            <h3 className="font-manrope text-xl font-semibold text-gray-900 mt-3">
              {post.title}
            </h3>
            <p className="font-dmsans text-gray-600 leading-relaxed mt-3">
              {post.description}
            </p>
            <span className="inline-block text-sm font-semibold text-[#211cda] mt-5">
              Ler o guia →
            </span>
          </Link>
        ))}
      </div>
      <Link
        href="/blog"
        className="inline-block mt-6 text-[#211cda] font-semibold"
      >
        Ver todos os artigos →
      </Link>
    </section>
  );
}
