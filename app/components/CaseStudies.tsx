"use client";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { openWhatsAppChat } from "../utils/whatsapp";

interface CaseCardProps {
  title: string;
  category: string;
  description: string;
  gradient: string;
  tags: string[];
}

const cases: CaseCardProps[] = [
  {
    title: "Beesby",
    category: "Plataforma Digital",
    description:
      "Plataforma de serviços digitais especializada em inovações tecnológicas. Modernizamos o site com recursos tecnológicos avançados e uma experiência de usuário aprimorada.",
    gradient: "from-[#278deb] to-[#03515d]",
    tags: ["Web", "UX/UI", "Next.js"],
  },
  {
    title: "Conexão Varejo",
    category: "E-Commerce B2B",
    description:
      "Canal de varejo B2B que conecta varejistas com fornecedores da indústria, oferecendo condições de compra vantajosas e uma experiência de compra simplificada.",
    gradient: "from-[#211cda] to-[#060554]",
    tags: ["E-Commerce", "Integração", "React"],
  },
];

const CaseCard = ({
  title,
  category,
  description,
  gradient,
  tags,
}: CaseCardProps) => {
  return (
    <div
      className="rounded-3xl shadow-2xl shadow-black/10 bg-white flex flex-col overflow-hidden"
      style={{
        boxShadow:
          "0 0px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        className={`h-[200px] bg-gradient-to-br ${gradient} flex items-center justify-center`}
      >
        <h2 className="text-white text-4xl font-bold font-manrope">{title}</h2>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-[#278deb] text-xs font-semibold uppercase tracking-wider">
          {category}
        </span>
        <p className="text-gray-600 text-sm mt-3 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <div className="max-w-[1514px] mx-auto">
      <div className="mb-8">
        <p className="font-extrabold text-gray-400 text-xs uppercase tracking-widest">
          NOSSO TRABALHO
        </p>
        <h2 className="text-3xl lg:text-4xl font-medium text-gray-800 mt-2 font-jakarta">
          Cases de{" "}
          <span className="bg-gradient-to-b from-[#278deb] to-[#278deb] bg-clip-text text-transparent">
            sucesso
          </span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm max-w-xl">
          Conheça alguns dos projetos que desenvolvemos para nossos clientes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((c) => (
          <CaseCard key={c.title} {...c} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() =>
            openWhatsAppChat("Olá! Gostaria de saber mais sobre os projetos da Pilarcode.")
          }
          className="text-[#211cda] hover:text-[#060554] font-medium flex text-sm items-center gap-1 transition-colors duration-200"
        >
          Quer um projeto como esses? Fale conosco <ArrowOutwardIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
