import { actionClassName } from "./ui/action";
import ArrowIcon from "./ArrowIcon";
import Link from "next/link";
import { caseStudies } from "../data/cases";
import ClientBrands from "./ClientBrands";
import ProjectCard from "./ProjectCard";

export default function CaseStudies({
  listing = false,
}: {
  listing?: boolean;
}) {
  return (
    <section
      id={listing ? undefined : "projetos"}
      aria-labelledby={listing ? undefined : "cases-title"}
      className={
        listing
          ? "max-w-[1514px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24"
          : "max-w-[1514px] mx-auto px-8 md:px-16 py-16 lg:py-24"
      }
    >
      {!listing && (
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-extrabold tracking-widest text-[#211cda]">
              PROJETOS & PARCERIAS
            </p>
            <h2
              id="cases-title"
              className="mt-3 text-3xl font-medium leading-tight text-gray-800 lg:text-4xl"
            >
              Marcas e operações que{" "}
              <span className="text-[#278deb]">contam com a gente.</span>
            </h2>
            <p className="mt-4 font-manrope text-sm leading-relaxed text-gray-500">
              Parcerias que ganham forma em produtos, plataformas e experiências
              digitais.
            </p>
          </div>
          <Link href="/cases" className={actionClassName("outline", "w-fit")}>
            Todos os projetos <ArrowIcon />
          </Link>
        </div>
      )}
      {listing ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <ClientBrands />
      )}
    </section>
  );
}
