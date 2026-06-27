import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Política de Cookies | ReelSorte",
  description:
    "Saiba como o ReelSorte utiliza cookies e tecnologias semelhantes. Informação sobre tipos de cookies, finalidades e como gerir as suas preferências.",
};

export default function CookiePolicyPage() {
  return (
    <PageShell>
      <PageHeader
        highlight="Política de Cookies"
        title="— ReelSorte"
        description="Esta política explica o que são cookies, como os utilizamos no reelsorte.com e quais as opções disponíveis para gerir as suas preferências."
      />

      <div className="max-w-3xl space-y-8 text-portal-gray font-nunito leading-relaxed">
        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">
            O Que São <span className="text-portal-purple">Cookies</span>?
          </h2>
          <p>
            Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando
            visita um website. Permitem que o site reconheça o seu browser, memorize
            preferências e recolha informação estatística sobre a utilização do serviço.
          </p>
        </section>

        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">
            Cookies Que <span className="text-portal-purple">Utilizamos</span>
          </h2>
          <ul className="space-y-4 list-none">
            {[
              { title: "Cookies Essenciais", desc: "Necessários para o funcionamento básico do site, incluindo navegação e acesso a áreas seguras." },
              { title: "Cookies Analíticos", desc: "Ajudam-nos a compreender como os visitantes interagem com o site, permitindo melhorar conteúdos e experiência." },
              { title: "Cookies de Marketing", desc: "Utilizados para medir a eficácia das nossas campanhas e apresentar ofertas relevantes de casinos parceiros." },
              { title: "Cookies de Afiliados", desc: "Quando clica num link para um casino parceiro, cookies de rastreio podem ser definidos para atribuir correctamente a referência ReelSorte." },
            ].map((item) => (
              <li key={item.title} className="bg-portal-white border border-portal-purple-light/10 rounded-xl p-6 shadow-sm">
                <h3 className="font-rubik font-bold text-portal-purple-dark mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">
            Alterações e <span className="text-portal-purple">Contacto</span>
          </h2>
          <p>
            Para questões sobre cookies ou privacidade, contacte-nos em{" "}
            <a href="mailto:concierge@reelsorte.com" className="text-portal-purple hover:underline">
              concierge@reelsorte.com
            </a>{" "}
            ou consulte a nossa{" "}
            <Link href="/privacy" className="text-portal-purple hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>
          <p className="mt-4 text-sm text-portal-gray">Última actualização: Junho 2026</p>
        </section>
      </div>

      <div className="mt-12">
        <Link href="/" className="text-portal-purple font-rubik font-bold hover:underline text-sm">
          ← Voltar à página inicial
        </Link>
      </div>
    </PageShell>
  );
}
