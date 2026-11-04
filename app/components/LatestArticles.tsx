import Link from "next/link";
import { getPublishedPosts, formatDateBR } from "../data/blog";

export default function LatestArticles() {
  const posts = getPublishedPosts().slice(0, 3);
  if (!posts.length) return null;
  return (
    <section
      aria-labelledby="articles-title"
      className="mx-auto mb-16 max-w-[1514px] overflow-hidden rounded-3xl border border-gray-100 bg-[#f8f9fc] lg:mb-24"
    >
      <div className="grid gap-10 p-8 md:p-16 lg:grid-cols-5 lg:gap-16 lg:p-16">
        <div className="lg:col-span-2">
          <p className="text-xs font-extrabold tracking-widest text-[#211cda]">
            CONTEÚDO & INSIGHTS
          </p>
          <h2
            id="articles-title"
            className="mt-3 text-3xl font-medium leading-tight text-gray-800 lg:text-4xl"
          >
            Tecnologia com <span className="text-[#278deb]">mais clareza.</span>
          </h2>
          <p className="mt-4 font-manrope text-sm leading-relaxed text-gray-500">
            Guias práticos para planejar seu próximo projeto e tomar decisões
            com segurança.
          </p>
          <Link
            href="/blog"
            className="mt-7 inline-flex items-center gap-4 rounded-full border border-gray-200 bg-white px-5 py-3 font-dmsans text-sm text-gray-700 hover:border-[#211cda] hover:text-[#211cda]"
          >
            Visitar o blog <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="divide-y divide-gray-200 lg:col-span-3">
          {posts.map(({ frontmatter: post }) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-center gap-5 py-6 first:pt-0 last:pb-0"
            >
              <div className="flex-1">
                <p className="font-dmsans text-xs text-gray-500">
                  <time dateTime={post.publishedAt}>
                    {formatDateBR(post.publishedAt)}
                  </time>
                  <span aria-hidden="true"> · </span>
                  {post.readingTime} de leitura
                </p>
                <h3 className="mt-2 font-manrope text-base font-semibold leading-relaxed text-gray-800 group-hover:text-[#211cda] lg:text-lg">
                  {post.title}
                </h3>
              </div>
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#211cda] group-hover:border-[#211cda]"
              >
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
