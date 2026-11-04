"use client";

import { ActionButton } from "../../components/ui/action";
import { openOrcamento } from "../../utils/orcamento";

interface CtaBoxProps {
  title?: string;
  children?: React.ReactNode;
  /** Origem do CTA (ex.: "blog-quanto-custa") */
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
        <ActionButton variant="light" onClick={() => openOrcamento(source)}>
          {buttonLabel}
        </ActionButton>
      </div>
    </aside>
  );
};

export default CtaBox;
