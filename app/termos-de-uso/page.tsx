import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site da Pilarcode.",
};

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-[#211cda] text-sm font-medium hover:underline"
        >
          &larr; Voltar ao início
        </Link>

        <h1 className="text-3xl font-medium text-gray-900 mt-8 mb-2">
          Termos de Uso
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          Última atualização: março de 2026
        </p>

        <div className="prose prose-gray prose-sm max-w-none space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              1. Aceitação dos termos
            </h2>
            <p>
              Ao acessar e utilizar o site pilarcode.com.br, você concorda com
              estes Termos de Uso. Caso não concorde com qualquer disposição,
              recomendamos que não utilize o site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              2. Sobre a Pilarcode
            </h2>
            <p>
              A Pilarcode é uma empresa de soluções tecnológicas sediada em São
              Paulo, Brasil, que oferece serviços de desenvolvimento de
              aplicativos, sites, software sob medida, integração de sistemas,
              e-commerce e automação de processos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              3. Uso do site
            </h2>
            <p>Este site destina-se a:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Apresentar os serviços oferecidos pela Pilarcode;
              </li>
              <li>
                Facilitar o contato entre potenciais clientes e nossa equipe;
              </li>
              <li>
                Fornecer informações institucionais sobre a empresa.
              </li>
            </ul>
            <p className="mt-2">
              Você se compromete a utilizar o site de forma lícita, sem
              prejudicar seu funcionamento ou a experiência de outros usuários.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              4. Propriedade intelectual
            </h2>
            <p>
              Todo o conteúdo do site — incluindo textos, imagens, logotipos,
              ícones, layout e código-fonte — é de propriedade da Pilarcode ou
              licenciado para uso, sendo protegido pela legislação brasileira de
              direitos autorais e propriedade intelectual.
            </p>
            <p className="mt-2">
              É proibida a reprodução, distribuição ou uso comercial de qualquer
              conteúdo sem autorização prévia e por escrito da Pilarcode.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              5. Serviços e orçamentos
            </h2>
            <p>
              As informações sobre serviços apresentadas no site têm caráter
              informativo. Orçamentos, prazos e condições específicas serão
              definidos mediante contato direto com nossa equipe e formalizados
              por contrato próprio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              6. Limitação de responsabilidade
            </h2>
            <p>A Pilarcode não se responsabiliza por:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Interrupções temporárias no acesso ao site por motivos técnicos
                ou de manutenção;
              </li>
              <li>
                Danos decorrentes do uso de informações obtidas no site sem
                contratação formal;
              </li>
              <li>
                Conteúdos de sites de terceiros acessados por meio de links
                disponíveis neste site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              7. Links externos
            </h2>
            <p>
              O site pode conter links para redes sociais e plataformas de
              terceiros (Instagram, LinkedIn). A Pilarcode não se
              responsabiliza pelo conteúdo ou políticas de privacidade desses
              serviços externos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              8. Privacidade
            </h2>
            <p>
              O tratamento de dados pessoais é regido pela nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-[#211cda] hover:underline"
              >
                Política de Privacidade
              </Link>
              , que faz parte integrante destes Termos de Uso.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              9. Alterações nos termos
            </h2>
            <p>
              A Pilarcode reserva-se o direito de modificar estes Termos de Uso
              a qualquer momento, sem aviso prévio. A versão atualizada estará
              sempre disponível nesta página.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              10. Legislação aplicável
            </h2>
            <p>
              Estes Termos de Uso são regidos pela legislação da República
              Federativa do Brasil. Qualquer controvérsia será submetida ao
              foro da comarca de São Paulo/SP.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              11. Contato
            </h2>
            <p>
              Em caso de dúvidas sobre estes Termos de Uso:
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li>
                <strong>Pilarcode</strong>
              </li>
              <li>
                E-mail:{" "}
                <a
                  href="mailto:contato@pilarcode.com.br"
                  className="text-[#211cda] hover:underline"
                >
                  contato@pilarcode.com.br
                </a>
              </li>
              <li>
                Solicite um orçamento:{" "}
                <a
                  href="https://orcamento.pilarcode.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#211cda] hover:underline"
                >
                  orcamento.pilarcode.com.br
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
