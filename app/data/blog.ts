import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Frontmatter de cada artigo do blog (content/blog/*.mdx).
 * Os campos obrigatorios devem existir em todo arquivo; os opcionais tem fallback.
 */
export interface PostFrontmatter {
  title: string;
  description: string;
  slug: string;
  keyword: string;
  keywordsSecundarias?: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  readingTime: string;
  ogImage?: string;
  draft?: boolean;
}

export interface Post {
  frontmatter: PostFrontmatter;
  /** Corpo MDX ja sem o frontmatter (extraido pelo gray-matter). */
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function listMdxFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  return {
    // garante que o slug do frontmatter bate com o nome do arquivo (fonte da rota)
    frontmatter: { ...frontmatter, slug: frontmatter.slug || slug },
    content,
  };
}

export function getAllPosts(): Post[] {
  return listMdxFiles()
    .map((file) => getPostBySlug(file.replace(/\.mdx$/, "")))
    .filter((post): post is Post => post !== null);
}

/** Artigos publicados (draft !== true), ordenados por publishedAt desc. */
export function getPublishedPosts(): Post[] {
  return getAllPosts()
    .filter((post) => post.frontmatter.draft !== true)
    .sort((a, b) =>
      a.frontmatter.publishedAt < b.frontmatter.publishedAt ? 1 : -1
    );
}

/** Formata uma data ISO (YYYY-MM-DD) como DD/MM/YYYY de forma deterministica (sem depender de locale). */
export function formatDateBR(iso: string): string {
  const [year, month, day] = iso.split("T")[0].split("-");
  if (!year || !month || !day) return iso;
  return `${day}/${month}/${year}`;
}
