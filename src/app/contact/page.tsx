import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ContactContent } from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contacto | Apoio VIP ReelSorte — Casino Online Portugal",
  description:
    "Entre em contacto com a equipa ReelSorte para apoio VIP, parcerias ou questões sobre casinos online e bónus exclusivos em Portugal.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        highlight="Contacto"
        title="— Fale connosco"
        description="Dúvida sobre um operador listado, sugestão de melhoria ou questão sobre os nossos critérios? Envie-nos uma mensagem."
      />

      <ContactContent />

      <section className="mt-16 max-w-3xl space-y-4 text-portal-gray font-nunito leading-relaxed">
        <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark">
          Parcerias e <span className="text-portal-purple">Media</span>
        </h2>
        <p>
          Operadores de casino online licenciados podem contactar a nossa equipa comercial em{" "}
          <a href="mailto:partnerships@reelsorte.com" className="text-portal-purple hover:underline">
            partnerships@reelsorte.com
          </a>
          .
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
