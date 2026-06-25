import type { MetadataRoute } from "next";
import { services } from "./data/services";
import { getPublishedPosts } from "./data/blog";

// Data ISO (YYYY-MM-DD) da última revisão de conteúdo das páginas estáticas (home e legais).
// Atualize manualmente quando o conteúdo dessas páginas mudar. Evita usar a data do build
// (new Date()), que faria todas as URLs parecerem "atualizadas" a cada deploy.
const SITE_LAST_REVIEWED = "2026-06-24";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastReviewed = new Date(SITE_LAST_REVIEWED);

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `https://pilarcode.com.br/servicos/${service.slug}`,
    // Usa a data real de revisão do serviço quando definida; fallback para a data do build.
    lastModified: service.updatedAt ? new Date(service.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Artigos do blog (apenas publicados; drafts ficam fora do sitemap).
  const blogPosts: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `https://pilarcode.com.br/blog/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://pilarcode.com.br",
      lastModified: lastReviewed,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages,
    {
      url: "https://pilarcode.com.br/blog",
      lastModified: lastReviewed,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts,
    {
      url: "https://pilarcode.com.br/politica-de-privacidade",
      lastModified: lastReviewed,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://pilarcode.com.br/termos-de-uso",
      lastModified: lastReviewed,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://pilarcode.com.br/cookies",
      lastModified: lastReviewed,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
