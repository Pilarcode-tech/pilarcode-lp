import Image from "next/image";
import Link from "next/link";
import type { Author } from "../../data/authors";

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/**
 * Bloco de autoria ao final do artigo (sinal de E-E-A-T).
 * Avatar (ou iniciais como fallback), nome com link para a pagina de autor,
 * role, bio curta e link do LinkedIn com rel="author".
 */
const AuthorBio = ({ author }: { author: Author }) => {
  const authorUrl = `/blog/autor/${author.slug}`;

  return (
    <aside className="not-prose mt-14 rounded-3xl border border-gray-200 bg-[#f8f9fc] p-6 lg:p-8">
      <div className="flex items-start gap-5">
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={`Foto de ${author.name}`}
            width={64}
            height={64}
            className="rounded-full object-cover shrink-0"
          />
        ) : (
          <div
            aria-hidden="true"
            className="shrink-0 w-16 h-16 rounded-full bg-[#211cda] text-white font-manrope font-semibold text-xl flex items-center justify-center"
          >
            {initials(author.name)}
          </div>
        )}

        <div className="flex-1">
          <p className="font-dmsans text-xs uppercase tracking-widest text-gray-500 mb-1">
            Escrito por
          </p>
          <Link
            href={authorUrl}
            className="font-manrope text-lg font-semibold text-gray-900 hover:text-[#211cda] transition-colors"
          >
            {author.name}
          </Link>
          <p className="font-dmsans text-sm text-[#211cda] font-medium">
            {author.role}
          </p>

          {author.bio ? (
            <p className="font-dmsans text-sm text-gray-600 leading-relaxed mt-3">
              {author.bio}
            </p>
          ) : null}

          <div className="flex items-center gap-4 mt-4">
            {author.links.linkedin ? (
              <a
                href={author.links.linkedin}
                target="_blank"
                rel="author noopener noreferrer"
                className="font-manrope text-sm font-semibold text-[#211cda] hover:text-[#060554] transition-colors"
              >
                Ver perfil
              </a>
            ) : (
              <Link
                href={authorUrl}
                className="font-manrope text-sm font-semibold text-[#211cda] hover:text-[#060554] transition-colors"
              >
                Ver perfil
              </Link>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AuthorBio;
