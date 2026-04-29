import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de Cookies do site da Pilarcode.",
};

export default function Cookies() {
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
          Política de Cookies
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          Última atualização: março de 2026
        </p>

        <div className="prose prose-gray prose-sm max-w-none space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              1. O que são cookies?
            </h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu
              dispositivo (computador, tablet ou celular) quando você visita um
              site. Eles permitem que o site reconheça seu dispositivo e
              armazene informações sobre suas preferências e interações.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              2. Cookies que utilizamos
            </h2>

            <h3 className="text-base font-medium text-gray-700 mt-4 mb-2">
              Cookies essenciais
            </h3>
            <p>
              Necessários para o funcionamento básico do site. Sem eles,
              recursos fundamentais não funcionariam corretamente. Não requerem
              consentimento.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Gerenciamento de sessão e navegação;</li>
              <li>Preferências de segurança.</li>
            </ul>

            <h3 className="text-base font-medium text-gray-700 mt-4 mb-2">
              Cookies de desempenho
            </h3>
            <p>
              Coletam informações anônimas sobre como os visitantes utilizam o
              site, ajudando-nos a melhorar sua experiência.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Páginas mais visitadas;</li>
              <li>Tempo de permanência;</li>
              <li>Origem do tráfego.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              3. Como gerenciar cookies
            </h2>
            <p>
              Você pode controlar e/ou excluir cookies a qualquer momento
              através das configurações do seu navegador:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <strong>Google Chrome:</strong> Configurações &gt; Privacidade e
                segurança &gt; Cookies e outros dados do site
              </li>
              <li>
                <strong>Firefox:</strong> Configurações &gt; Privacidade e
                Segurança &gt; Cookies e dados de sites
              </li>
              <li>
                <strong>Safari:</strong> Preferências &gt; Privacidade &gt;
                Gerenciar dados de sites
              </li>
              <li>
                <strong>Edge:</strong> Configurações &gt; Cookies e permissões
                de site
              </li>
            </ul>
            <p className="mt-2">
              A desativação de cookies pode impactar a funcionalidade de
              algumas áreas do site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              4. Cookies de terceiros
            </h2>
            <p>
              Podemos utilizar serviços de terceiros que definem seus próprios
              cookies, como ferramentas de analytics. Esses cookies seguem as
              políticas de privacidade dos respectivos provedores.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              5. Base legal
            </h2>
            <p>
              O uso de cookies essenciais é baseado no legítimo interesse para
              o funcionamento do site. Para cookies de desempenho, solicitamos
              seu consentimento conforme previsto na LGPD (Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              6. Alterações nesta política
            </h2>
            <p>
              Esta Política de Cookies pode ser atualizada periodicamente.
              Recomendamos que você revise esta página regularmente para se
              manter informado.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              7. Mais informações
            </h2>
            <p>
              Para saber mais sobre como tratamos seus dados pessoais, consulte
              nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-[#211cda] hover:underline"
              >
                Política de Privacidade
              </Link>
              . Em caso de dúvidas:
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
