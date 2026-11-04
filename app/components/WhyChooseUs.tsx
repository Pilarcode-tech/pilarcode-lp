import CodeRounded from "@mui/icons-material/CodeRounded";
import TuneRounded from "@mui/icons-material/TuneRounded";
import LayersOutlined from "@mui/icons-material/LayersOutlined";
import ForumOutlined from "@mui/icons-material/ForumOutlined";
import FeatureCarousel from "./FeatureCarousel";
import { BentoCard } from "./ui/bento-grid";

const benefits = [
  {
    title: "Conhecimento técnico",
    description:
      "Especialistas em diferentes tecnologias para encontrar o caminho certo para o seu projeto.",
    Icon: CodeRounded,
  },
  {
    title: "Feito para o seu negócio",
    description:
      "Soluções desenhadas a partir dos processos, objetivos e necessidades da sua empresa.",
    Icon: TuneRounded,
  },
  {
    title: "Tecnologia bem aplicada",
    description:
      "Ferramentas e arquitetura escolhidas para sustentar a evolução do seu produto.",
    Icon: LayersOutlined,
  },
  {
    title: "Parceria de perto",
    description:
      "Comunicação ao longo do desenvolvimento e acompanhamento após a entrega.",
    Icon: ForumOutlined,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="difference-title"
      className="mx-auto scroll-mt-28 max-w-[1514px] overflow-hidden rounded-3xl border border-gray-100 bg-[#f8f9fc]"
    >
      <div className="grid items-center gap-10 p-8 md:p-16 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="text-xs font-extrabold tracking-widest text-[#211cda]">
            DIFERENCIAIS
          </p>
          <h2
            id="difference-title"
            className="mt-3 text-3xl font-medium leading-tight text-gray-800 lg:text-4xl"
          >
            Tecnologia é o meio.
            <br />
            <span className="text-[#278deb]">Seu negócio é o foco.</span>
          </h2>
          <p className="mt-5 max-w-md font-manrope text-sm leading-relaxed text-gray-500">
            Combinamos visão de produto, design e desenvolvimento para
            transformar necessidades reais em soluções que fazem sentido.
          </p>
          <div className="mt-8 flex items-center gap-3 font-dmsans text-xs font-medium text-gray-600">
            <span aria-hidden="true" className="h-px w-8 bg-[#278deb]" />
            Da estratégia à entrega.
          </div>
        </div>
        <FeatureCarousel>
          {benefits.map(({ title, description, Icon }) => (
            <BentoCard
              key={title}
              title={title}
              description={description}
              icon={<Icon sx={{ fontSize: 23 }} />}
            />
          ))}
        </FeatureCarousel>
      </div>
    </section>
  );
}
