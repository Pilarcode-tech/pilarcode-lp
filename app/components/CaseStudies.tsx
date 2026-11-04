import Link from "next/link";
import { caseStudies } from "../data/cases";
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
              PROJETOS
            </p>
            <h2
              id="cases-title"
              className="mt-3 text-3xl font-medium leading-tight text-gray-800 lg:text-4xl"
            >
              Ideias que se tornam{" "}
              <span className="text-[#278deb]">soluções digitais.</span>
            </h2>
            <p className="mt-4 font-manrope text-sm leading-relaxed text-gray-500">
              Conheça os produtos e sites que fazem parte do nosso trabalho.
            </p>
          </div>
          <Link
            href="/cases"
            className="inline-flex w-fit items-center gap-4 rounded-full border border-gray-200 px-5 py-3 font-dmsans text-sm text-gray-700 hover:border-[#211cda] hover:text-[#211cda]"
          >
            Todos os projetos <span aria-hidden="true">↗</span>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {caseStudies.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
