import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { EditorialMethod } from "@/components/sections/EditorialMethod";
import { AffiliateDisclosure } from "@/components/sections/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Método | Como Avaliamos Operadores — ReelSorte",
  description:
    "Saiba como o ReelSorte avalia casinos online em Portugal: critérios editoriais, afiliação transparente, verificação prática e actualização de ofertas.",
};

export default function MetodoPage() {
  return (
    <PageShell>
      <PageHeader
        highlight="Método"
        title="— avaliação editorial"
        description="Valorizamos a utilidade do bónus, a clareza das regras e a experiência no telemóvel — não slogans genéricos ou promessas vagas."
      />

      <EditorialMethod />

      <div className="mt-20">
        <AffiliateDisclosure />
      </div>

      <section className="mt-16 max-w-3xl space-y-6 text-portal-gray font-nunito leading-relaxed">
        <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark">
          Actualização e <span className="text-portal-purple">revisão</span>
        </h2>
        <p>
          Revisamos as fichas sempre que um operador altera termos promocionais, métodos
          de pagamento ou condições de licenciamento. Se um parceiro deixa de cumprir os
          nossos critérios mínimos de segurança ou transparência, é removido da lista.
        </p>
        <p>
          Tem questões sobre um critério específico?{" "}
          <Link href="/contact" className="text-portal-purple hover:underline">
            Contacte-nos
          </Link>{" "}
          — respondemos com prazer sobre o nosso processo editorial.
        </p>
      </section>

      <div className="mt-12">
        <Link href="/" className="text-portal-purple font-rubik font-bold hover:underline text-sm">
          ← Voltar à página inicial
        </Link>
      </div>
    </PageShell>
  );
}
