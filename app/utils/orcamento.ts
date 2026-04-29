export const ORCAMENTO_URL = "https://orcamento.pilarcode.com.br";

export const openOrcamento = (source?: string) => {
  const url = source
    ? `${ORCAMENTO_URL}/?utm_source=${encodeURIComponent(source)}`
    : ORCAMENTO_URL;
  window.open(url, "_blank", "noopener,noreferrer");
};
