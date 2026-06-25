import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import Link from "next/link";
import CtaBox from "@/app/blog/_components/CtaBox";

/**
 * Componentes MDX customizados do blog.
 * - Reusa os tokens visuais da LP (fontes Manrope/DM Sans, cores #211cda/#278deb).
 * - Elementos nativos (table, code, headings...) ganham estilo de leitura confortavel.
 * - Componentes nomeados disponiveis no MDX: <Callout>, <CtaBox>.
 *
 * Usado tanto pela convencao do Next (useMDXComponents) quanto passado
 * explicitamente para <MDXRemote components={mdxComponents} />.
 */

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/** Callout / destaque para observacoes importantes dentro do artigo. */
function Callout({
  children,
  title,
  variant = "info",
}: {
  children: ReactNode;
  title?: string;
  variant?: "info" | "warning" | "success";
}) {
  const styles: Record<string, string> = {
    info: "border-[#278deb] bg-[#278deb]/5",
    warning: "border-amber-400 bg-amber-50",
    success: "border-emerald-500 bg-emerald-50",
  };
  return (
    <div
      className={`not-prose my-6 rounded-2xl border-l-4 p-5 ${styles[variant]}`}
    >
      {title ? (
        <p className="font-manrope font-semibold text-gray-900 mb-1">{title}</p>
      ) : null}
      <div className="font-dmsans text-sm lg:text-base text-gray-700 leading-relaxed [&>p]:mb-0">
        {children}
      </div>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    // Conteudo nao deve introduzir um segundo H1 (o H1 e o titulo do artigo).
    // Caso o autor use "# " no MDX, renderizamos como H2 para preservar a hierarquia.
    <h2
      className="font-manrope text-2xl lg:text-3xl font-semibold text-gray-900 mt-12 mb-4 scroll-mt-28"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-manrope text-2xl lg:text-3xl font-semibold text-gray-900 mt-12 mb-4 scroll-mt-28"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-manrope text-xl lg:text-2xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-28"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="font-manrope text-lg font-semibold text-gray-900 mt-6 mb-2"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="font-dmsans text-base text-gray-700 leading-[1.8] mb-5"
      {...props}
    />
  ),
  a: ({ href, children, ...rest }) => {
    const url = href ?? "#";
    const isInternal = url.startsWith("/") || url.startsWith("#");
    if (isInternal) {
      return (
        <Link
          href={url}
          className="text-[#211cda] font-medium underline underline-offset-2 hover:text-[#060554] transition-colors"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#211cda] font-medium underline underline-offset-2 hover:text-[#060554] transition-colors"
        {...rest}
      >
        {children}
      </a>
    );
  },
  ul: (props) => (
    <ul
      className="font-dmsans text-base text-gray-700 leading-[1.8] mb-5 pl-6 list-disc marker:text-[#278deb] space-y-2"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="font-dmsans text-base text-gray-700 leading-[1.8] mb-5 pl-6 list-decimal marker:text-[#278deb] space-y-2"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  strong: (props) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-[#278deb] pl-5 my-6 italic text-gray-600 font-dmsans"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-gray-200" />,
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : ""}
      alt={alt ?? ""}
      loading="lazy"
      className="rounded-2xl my-6 w-full h-auto"
    />
  ),
  // Tabela estilizada (markdown tables: | a | b |)
  table: (props) => (
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-gray-200">
      <table className="w-full border-collapse text-left font-dmsans text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-[#f8f9fc]" {...props} />,
  th: (props) => (
    <th
      className="px-4 py-3 font-manrope font-semibold text-gray-900 border-b border-gray-200"
      {...props}
    />
  ),
  td: (props) => (
    <td className="px-4 py-3 text-gray-700 border-b border-gray-100 align-top" {...props} />
  ),
  tr: (props) => <tr className="even:bg-gray-50/50" {...props} />,
  // Code block e codigo inline
  pre: (props) => (
    <pre
      className="not-prose my-6 rounded-2xl bg-[#060554] text-white p-5 overflow-x-auto text-sm leading-relaxed"
      {...props}
    />
  ),
  code: ({ className, children, ...rest }) => {
    const isBlock = typeof className === "string" && className.includes("language-");
    if (isBlock) {
      return (
        <code className={`${className} font-mono`} {...rest}>
          {children}
        </code>
      );
    }
    return (
      <code className="bg-[#f8f9fc] border border-gray-200 text-[#211cda] font-mono text-[0.85em] px-1.5 py-0.5 rounded">
        {children}
      </code>
    );
  },
  Callout,
  CtaBox,
};

// Convencao do Next.js (@next/mdx). Inofensiva com next-mdx-remote e util se
// no futuro algum .mdx virar rota; aqui apenas mescla os componentes custom.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...mdxComponents, ...components };
}
