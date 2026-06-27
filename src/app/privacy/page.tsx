import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Política de Privacidade | ReelSorte",
  description: "Política de privacidade do ReelSorte — como recolhemos, utilizamos e protegemos os seus dados.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        highlight="Política de Privacidade"
        title="— ReelSorte"
        description="Esta política descreve como o ReelSorte recolhe, utiliza e protege os seus dados pessoais em conformidade com o RGPD."
      />

      <div className="max-w-3xl space-y-8 text-portal-gray font-nunito leading-relaxed">
        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">Dados Recolhidos</h2>
          <p>
            Podemos recolher dados de utilização anónimos, informação de contacto quando nos
            envia mensagens, e identificadores de campanha (como gclid) para atribuição de afiliados.
          </p>
        </section>
        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">Finalidade</h2>
          <p>
            Utilizamos dados para melhorar o serviço, responder a pedidos de contacto e medir
            a eficácia das nossas recomendações editoriais.
          </p>
        </section>
        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">Os Seus Direitos</h2>
          <p>
            Tem direito de acesso, rectificação, eliminação e oposição ao tratamento dos seus
            dados. Contacte-nos em{" "}
            <a href="mailto:concierge@reelsorte.com" className="text-portal-purple hover:underline">
              concierge@reelsorte.com
            </a>
            .
          </p>
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
