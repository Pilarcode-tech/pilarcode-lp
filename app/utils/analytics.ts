const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Mede intenção de contato. O envio efetivo do formulário deve usar generate_lead no destino. */
export function trackQuoteClick(source = "unspecified") {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID || !/^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID)) return;

  try {
    // Preserva cliques ocorridos antes do carregamento da biblioteca do Google.
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      // A fila gtag usa o objeto arguments conforme o snippet oficial do Google.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("event", "request_quote", {
      send_to: GA_MEASUREMENT_ID,
      cta_source: source,
      page_path: window.location.pathname,
      link_url: "https://orcamento.pilarcode.com.br",
      transport_type: "beacon",
    });
  } catch {
    // Uma falha ou bloqueio do Analytics não pode impedir a abertura do orçamento.
  }
}
