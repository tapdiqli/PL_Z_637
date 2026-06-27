import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ConciergeFAQ } from "@/components/sections/ConciergeFAQ";
import { MessageCircle, Clock, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ Concierge | Perguntas Frequentes Casino — ReelSorte",
  description:
    "Respostas detalhadas sobre bónus de casino, segurança, levantamentos VIP e o serviço concierge ReelSorte para jogadores em Portugal.",
};

const conciergeFeatures = [
  { icon: MessageCircle, title: "Canais Directos", desc: "WhatsApp, Telegram e email VIP — sem filas de espera ou chatbots." },
  { icon: Clock, title: "Disponível 24/7", desc: "O seu gestor de conta responde a qualquer hora, todos os dias do ano." },
  { icon: Headphones, title: "Resolução Prioritária", desc: "Problemas com bónus, levantamentos ou limites resolvidos no mesmo dia." },
];

export default function ConciergeFAQPage() {
  return (
    <PageShell>
      <PageHeader
        highlight="FAQ Concierge"
        title="— Perguntas Frequentes"
        description="Respostas detalhadas sobre bónus de casino, segurança, levantamentos e a experiência VIP ReelSorte em Portugal."
      />

      <section className="mb-16">
        <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-8">
          O Serviço <span className="text-portal-purple">Concierge VIP</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {conciergeFeatures.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="bg-portal-white border border-portal-purple-light/10 rounded-2xl p-6 shadow-sm">
              <Icon className="w-8 h-8 text-portal-purple mb-4" />
              <h3 className="font-rubik font-bold text-portal-purple-dark mb-2">{title}</h3>
              <p className="text-portal-gray font-nunito text-sm">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <ConciergeFAQ />

      <div className="mt-12">
        <Link href="/contact" className="text-portal-purple font-rubik font-bold hover:underline text-sm mr-6">
          Ainda tem dúvidas? Contacte-nos →
        </Link>
        <Link href="/" className="text-portal-gray hover:underline text-sm font-nunito">
          ← Voltar à página inicial
        </Link>
      </div>
    </PageShell>
  );
}
