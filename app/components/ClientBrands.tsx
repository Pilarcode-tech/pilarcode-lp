import ArrowIcon from "./ArrowIcon";
import Image from "next/image";
import Link from "next/link";
import BrandMotion from "./BrandMotion";
const brands = [
  {
    slug: "nponto",
    name: "nPonto",
    href: "/cases/nponto",
    detail: "Produto digital",
  },
  {
    slug: "fieldis",
    name: "Fieldis",
    href: "/cases/fieldis",
    detail: "Produto digital",
  },
  {
    slug: "moretao-producoes",
    name: "Moretão Produções",
    href: "/cases/moretao-producoes",
    detail: "Presença digital",
  },
  { slug: "sucalog", name: "Sucalog", detail: "Sistema personalizado" },
  { slug: "natura", name: "Natura", detail: "Grupo franqueado · DP e RH" },
  { slug: "usaflex", name: "Usaflex", detail: "Grupo franqueado · DP e RH" },
  { slug: "havanna", name: "Havanna", detail: "Grupo franqueado · DP e RH" },
];

function BrandMark({ slug }: { slug: string }) {
  if (slug === "nponto")
    return (
      <span className="font-manrope text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
        nPonto.
      </span>
    );
  if (slug === "fieldis")
    return (
      <span className="font-manrope text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
        Fieldis
      </span>
    );
  if (slug === "sucalog")
    return (
      <Image
        src="/clients/sucalog.png"
        alt="Sucalog"
        width={4511}
        height={3147}
        sizes="224px"
        className="h-32 w-56 object-contain"
      />
    );
  if (slug === "natura")
    return (
      <Image
        src="/clients/natura.webp"
        alt="Natura"
        width={420}
        height={320}
        sizes="160px"
        className="h-16 w-40 object-contain"
      />
    );
  if (slug === "usaflex")
    return (
      <Image
        src="/clients/usaflex.svg"
        alt="Usaflex"
        width={160}
        height={48}
        className="h-10 w-40 object-contain"
      />
    );
  if (slug === "havanna")
    return (
      <Image
        src="/clients/havanna.png"
        alt="Havanna"
        width={181}
        height={50}
        className="h-10 w-40 object-contain"
      />
    );
  return (
    <span className="relative block h-12 w-44 overflow-hidden">
      <Image
        src="/clients/moretao-producoes.webp"
        alt="Moretão Produções"
        width={1080}
        height={1920}
        sizes="240px"
        className="absolute left-1/2 top-1/2 h-auto w-[240px] max-w-none -translate-x-1/2 -translate-y-1/2 brightness-0"
      />
    </span>
  );
}

export default function ClientBrands() {
  return (
    <BrandMotion>
      <div
        role="region"
        aria-label="Produtos e marcas presentes nas operações atendidas"
        tabIndex={0}
        className="brand-cloud relative overflow-hidden border-y border-gray-100 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#211cda] sm:py-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        <div className="brand-track flex w-max">
          {[false, true].map((duplicate) => (
            <div
              key={String(duplicate)}
              aria-hidden={duplicate ? true : undefined}
              inert={duplicate ? true : undefined}
              className="brand-group flex shrink-0"
            >
              {brands.map((brand) => {
                const content = (
                  <>
                    <div className="flex h-32 items-center justify-center opacity-85 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0">
                      <BrandMark slug={brand.slug} />
                    </div>
                    <span className="font-dmsans text-xs text-gray-500">
                      {brand.detail}
                      {brand.href ? <ArrowIcon /> : null}
                    </span>
                  </>
                );
                const className =
                  "group flex w-[220px] shrink-0 flex-col items-center justify-center gap-3 px-6 py-4 sm:w-[280px] lg:w-[calc((100vw-160px)/3)] min-[1514px]:w-[451px]";
                return brand.href ? (
                  <Link
                    key={brand.slug}
                    href={brand.href}
                    tabIndex={duplicate ? -1 : undefined}
                    aria-label={`Conhecer o projeto ${brand.name}`}
                    className={className}
                  >
                    {content}
                  </Link>
                ) : (
                  <div
                    key={brand.slug}
                    aria-label={`${brand.name}: ${brand.detail}`}
                    className={className}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-5 max-w-3xl text-center font-dmsans text-xs leading-relaxed text-gray-500">
        DP e RH para grupo franqueado com operações Natura, Usaflex e Havanna.
      </p>
    </BrandMotion>
  );
}
