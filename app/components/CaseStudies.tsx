import Link from "next/link";
import { caseStudies } from "../data/cases";

export default function CaseStudies() {
  return (
    <section
      aria-labelledby="cases-title"
      className="max-w-[1514px] mx-auto py-12 lg:py-16"
    >
      <p className="text-xs font-extrabold tracking-widest text-[#211cda]">
        PROJETOS DA PILARCODE
      </p>
      <h2
        id="cases-title"
        className="font-manrope text-3xl lg:text-4xl font-semibold text-gray-900 mt-3"
      >
        Software e sites em uso
      </h2>
      <p className="font-dmsans text-gray-600 mt-4 max-w-2xl">
        Conheça as funcionalidades e os objetivos de projetos que fazem parte do
        nosso trabalho.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {caseStudies.map((project) => (
          <Link
            key={project.slug}
            href={"/cases/" + project.slug}
            className="group rounded-3xl border border-gray-200 bg-white p-6 hover:border-[#211cda]/40 transition-colors"
          >
            <p className="font-dmsans text-sm text-[#211cda]">
              {project.category}
            </p>
            <h3 className="font-manrope text-2xl font-semibold text-gray-900 mt-3">
              {project.name}
            </h3>
            <p className="font-dmsans text-gray-600 leading-relaxed mt-4">
              {project.description}
            </p>
            <span className="inline-block text-sm font-semibold text-[#211cda] mt-6">
              Conhecer o projeto →
            </span>
          </Link>
        ))}
      </div>
      <Link
        href="/cases"
        className="inline-block mt-6 text-[#211cda] font-semibold"
      >
        Ver todos os projetos →
      </Link>
    </section>
  );
}
