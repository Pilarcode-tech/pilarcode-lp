import { trackQuoteClick } from "./analytics";

export const ORCAMENTO_URL = "https://orcamento.pilarcode.com.br";

export const openOrcamento = (source?: string) => {
  trackQuoteClick(source);
  const url = source
    ? `${ORCAMENTO_URL}/?cta_source=${encodeURIComponent(source)}`
    : ORCAMENTO_URL;
  window.open(url, "_blank", "noopener,noreferrer");
};
