import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Pilarcode conforme a Lei Geral de Proteção de Dados (LGPD).",
};

export default function PoliticaDePrivacidade() {
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
          Política de Privacidade
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          Última atualização: março de 2026
        </p>

        <div className="prose prose-gray prose-sm max-w-none space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              1. Introdução
            </h2>
            <p>
              A Pilarcode (&quot;nós&quot;, &quot;nosso&quot;) está comprometida
              com a proteção dos seus dados pessoais. Esta Política de
              Privacidade explica como coletamos, usamos, armazenamos e
              protegemos suas informações, em conformidade com a Lei Geral de
              Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              2. Dados que coletamos
            </h2>
            <p>Podemos coletar os seguintes dados:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <strong>Dados de contato:</strong> nome, e-mail e número de
                telefone fornecidos voluntariamente por você ao entrar em
                contato conosco ou solicitar um orçamento.
              </li>
              <li>
                <strong>Dados de navegação:</strong> endereço IP, tipo de
                navegador, páginas acessadas, tempo de permanência e dados de
                cookies (veja nossa{" "}
                <Link
                  href="/cookies"
                  className="text-[#211cda] hover:underline"
                >
                  Política de Cookies
                </Link>
                ).
              </li>
              <li>
                <strong>Dados de uso:</strong> informações sobre como você
                interage com nosso site para melhorar a experiência do usuário.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              3. Finalidade do tratamento
            </h2>
            <p>Utilizamos seus dados para:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Responder a solicitações de contato e orçamento;</li>
              <li>Fornecer informações sobre nossos serviços;</li>
              <li>Melhorar a experiência de navegação no site;</li>
              <li>Cumprir obrigações legais e regulatórias;</li>
              <li>
                Enviar comunicações relevantes, quando autorizado por você.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              4. Base legal
            </h2>
            <p>
              O tratamento de dados é realizado com base no seu consentimento,
              na execução de contrato ou pré-contrato, no legítimo interesse da
              Pilarcode e no cumprimento de obrigações legais, conforme previsto
              na LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              5. Compartilhamento de dados
            </h2>
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com
              terceiros para fins de marketing. Seus dados podem ser
              compartilhados apenas com:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Prestadores de serviços essenciais (hospedagem, analytics) que
                seguem padrões adequados de segurança;
              </li>
              <li>Autoridades públicas, quando exigido por lei.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              6. Seus direitos (LGPD)
            </h2>
            <p>
              Conforme a LGPD, você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Confirmar a existência de tratamento de dados;</li>
              <li>Acessar seus dados pessoais;</li>
              <li>Corrigir dados incompletos ou desatualizados;</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados;</li>
              <li>Revogar o consentimento a qualquer momento;</li>
              <li>Solicitar a portabilidade dos dados.</li>
            </ul>
            <p className="mt-2">
              Para exercer qualquer desses direitos, entre em contato pelo
              e-mail{" "}
              <a
                href="mailto:contato@pilarcode.com.br"
                className="text-[#211cda] hover:underline"
              >
                contato@pilarcode.com.br
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              7. Segurança dos dados
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger
              seus dados contra acesso não autorizado, perda, alteração ou
              destruição. Utilizamos criptografia, controle de acesso e
              monitoramento contínuo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              8. Retenção de dados
            </h2>
            <p>
              Seus dados serão mantidos apenas pelo período necessário para
              cumprir as finalidades descritas nesta política ou conforme
              exigido por lei. Após esse período, os dados serão eliminados de
              forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              9. Alterações nesta política
            </h2>
            <p>
              Reservamo-nos o direito de atualizar esta Política de Privacidade
              a qualquer momento. Alterações significativas serão comunicadas
              por meio do nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
              10. Contato
            </h2>
            <p>
              Para dúvidas sobre esta política ou sobre o tratamento dos seus
              dados pessoais, entre em contato:
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
              <li>São Paulo, Brasil</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
