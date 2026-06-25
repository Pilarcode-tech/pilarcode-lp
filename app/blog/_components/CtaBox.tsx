"use client";

import ArrowForward from "@mui/icons-material/ArrowForwardRounded";
import { openOrcamento } from "../../utils/orcamento";

interface CtaBoxProps {
  title?: string;
  children?: React.ReactNode;
  /** UTM source (ex.: "blog-quanto-custa") */
  source?: string;
  buttonLabel?: string;
}

/**
 * Box de CTA reutilizavel dentro dos artigos MDX.
 * Usa os mesmos tokens visuais da LP (cor primaria, fontes, raio).
 */
const CtaBox = ({
  title = "Pronto para tirar seu projeto do papel?",
  children = "Converse com nosso time e receba uma proposta sem compromisso em ate 24 horas.",
  source = "blog-cta",
  buttonLabel = "Solicitar orçamento",
}: CtaBoxProps) => {
  return (
    <aside className="not-prose my-10 rounded-3xl bg-[#211cda] p-8 lg:p-10 relative overflow-hidden">
      <div className="absolute top-[-60px] right-[-40px] w-[260px] h-[260px] rounded-full bg-[#278deb] opacity-[0.12] blur-[80px] pointer-events-none" />
      <div className="relative z-10">
        <h2 className="font-manrope text-xl lg:text-2xl font-semibold text-white mb-2">
          {title}
        </h2>
        <p className="font-dmsans text-sm lg:text-base text-white/80 mb-6 max-w-xl">
          {children}
        </p>
        <button
          onClick={() => openOrcamento(source)}
          className="bg-white text-[#211cda] px-6 py-3.5 rounded-full font-manrope font-semibold text-sm hover:bg-white/90 transition-colors cursor-pointer inline-flex items-center gap-2"
        >
          {buttonLabel}
          <ArrowForward fontSize="small" />
        </button>
      </div>
    </aside>
  );
};

export default CtaBox;
