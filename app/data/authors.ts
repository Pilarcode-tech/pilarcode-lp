/**
 * Autores do blog. Usado para E-E-A-T: bloco de bio no artigo, pagina de autor
 * (/blog/autor/[slug]) e author tipo Person no JSON-LD Article.
 */
export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  /** Caminho do avatar em /public (ex.: "/authors/henrique-franca.jpg"). Vazio => mostra iniciais. */
  avatar: string;
  links: {
    linkedin?: string;
    instagram?: string;
    site?: string;
  };
}

export const authors: Author[] = [
  {
    slug: "henrique-franca",
    name: "Henrique França",
    role: "Fundador da Pilarcode",
    bio: "Henrique França é fundador da Pilarcode, software house que desenvolve sistemas sob medida para empresas. Atua há mais de 7 anos com desenvolvimento de software, com passagens por Ambev Tech e VAGAS.com, e hoje lidera a construção de plataformas como nPonto (ponto eletrônico), Nubius (gestão de redes) e o Sucalog Hub (operações logísticas). Escreve sobre desenvolvimento sob medida, integração de sistemas e as decisões técnicas que separam um projeto que dura de um que vira dívida.",
    // Atencao: o caminho e case-sensitive em producao (Linux). O arquivo real e .JPG (maiusculo).
    avatar: "/authors/henrique-franca.JPG",
    links: {
      linkedin: "https://www.linkedin.com/in/euhenriquefranca/",
    },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((author) => author.name === name);
}

/** URL canonica da pagina de autor no site. */
export function authorPageUrl(slug: string): string {
  return `https://pilarcode.com.br/blog/autor/${slug}`;
}

/**
 * URL de autoria usada no rel="author" e no JSON-LD (campo url do Person):
 * prioriza o LinkedIn real; se ainda nao houver, usa a pagina de autor do site
 * (sempre crawlavel, evita link morto / placeholder).
 */
export function authorProfileUrl(author: Author): string {
  return author.links.linkedin || authorPageUrl(author.slug);
}
