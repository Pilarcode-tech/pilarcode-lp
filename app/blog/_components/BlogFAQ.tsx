import type { FaqItem } from "../../data/blog";

/**
 * Secao visivel de Perguntas Frequentes do artigo (server component, estatico).
 * O conteudo aqui deve bater com o JSON-LD FAQPage emitido pela pagina do artigo
 * (dados estruturados precisam refletir conteudo visivel, conforme as diretrizes do Google).
 */
const BlogFAQ = ({ faq }: { faq: FaqItem[] }) => {
  if (!faq?.length) return null;

  return (
    <section className="max-w-[68ch] mx-auto mt-14" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="font-manrope text-2xl lg:text-3xl font-semibold text-gray-900 mb-6"
      >
        Perguntas frequentes
      </h2>
      <dl className="divide-y divide-gray-200">
        {faq.map((item, index) => (
          <div key={index} className="py-5 first:pt-0">
            <dt className="font-manrope font-semibold text-lg text-gray-900 mb-2">
              {item.question}
            </dt>
            <dd className="font-dmsans text-base text-gray-700 leading-[1.8]">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default BlogFAQ;
