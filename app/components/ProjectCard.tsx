import Link from "next/link";
import ProjectArtwork from "./ProjectArtwork";
import type { CaseStudy } from "../data/cases";

export const projectVisuals: Record<
  string,
  { gradient: string; label: string }
> = {
  nponto: { gradient: "from-[#278deb] to-[#211cda]", label: "nPonto" },
  fieldis: { gradient: "from-[#03515d] to-[#278deb]", label: "Fieldis" },
  "moretao-producoes": {
    gradient: "from-[#211cda] to-[#060554]",
    label: "Moretão",
  },
};

export default function ProjectCard({ project }: { project: CaseStudy }) {
  const visual = projectVisuals[project.slug];
  return (
    <Link
      href={`/cases/${project.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-3.5 transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#211cda]"
    >
      <div
        aria-hidden="true"
        className={`relative flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${visual.gradient}`}
      >
        <ProjectArtwork slug={project.slug} />
        <div className="relative flex h-full w-full flex-col justify-between p-6">
          <span className="w-fit rounded-full border border-white/25 px-3 py-1 font-dmsans text-[10px] tracking-widest text-white/80">
            {project.slug === "moretao-producoes"
              ? "WEBSITE"
              : "PRODUTO DIGITAL"}
          </span>
          <span className="font-manrope text-3xl font-semibold tracking-tight text-white">
            {visual.label}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-3 pb-4 pt-6">
        <p className="font-dmsans text-xs leading-relaxed text-gray-500">
          {project.category}
        </p>
        <h3 className="mt-2 font-manrope text-xl font-semibold text-gray-900 group-hover:text-[#211cda]">
          {project.name}
        </h3>
        <p className="mt-3 flex-1 font-dmsans text-sm leading-relaxed text-gray-500">
          {project.description}
        </p>
        <span className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 font-dmsans text-sm font-medium text-[#211cda]">
          Conhecer o projeto <span aria-hidden="true">↗</span>
        </span>
      </div>
    </Link>
  );
}
