import Link from "next/link";
import { BadgeCheck, BookOpen, Scale, Users } from "lucide-react";

const topics = [
  {
    icon: BadgeCheck,
    title: "Licenciamento SRIJ",
    desc: "Em Portugal, apenas operadores autorizados pelo Serviço de Regulação e Inspeção de Jogos (SRIJ) podem oferecer jogos a dinheiro real online. Verifique sempre a licença antes de se registar.",
  },
  {
    icon: Users,
    title: "Idade mínima legal",
    desc: "É ilegal participar em jogos online com dinheiro real se tiver menos de 18 anos. Os operadores licenciados são obrigados a verificar a identidade e a idade durante o registo.",
  },
  {
    icon: BookOpen,
    title: "Compreender requisitos de aposta",
    desc: "Bónus de casino incluem normalmente requisitos de aposta — o valor que deve jogar antes de levantar ganhos associados ao bónus. Leia sempre os T&C completos no site do operador.",
  },
  {
    icon: Scale,
    title: "Riscos financeiros",
    desc: "O jogo envolve risco de perda monetária. Nunca aposte dinheiro necessário para despesas essenciais. Trate o jogo como entretenimento pago, não como forma de obter rendimento.",
  },
];

export function PortugalGamblingGuide() {
  return (
    <section id="guia-portugal" className="scroll-mt-24" aria-labelledby="guia-portugal-heading">
      <header className="mb-8 max-w-2xl">
        <p className="text-xs font-rubik font-bold uppercase tracking-widest text-portal-purple mb-2">
          Guia educativo
        </p>
        <h2
          id="guia-portugal-heading"
          className="font-rubik text-3xl md:text-4xl font-extrabold text-portal-purple-dark mb-4"
        >
          Jogo online licenciado em Portugal
        </h2>
        <p className="font-nunito text-portal-gray text-lg leading-relaxed">
          Conteúdo informativo para residentes em Portugal. O nosso objectivo é ajudá-lo a
          compreender o enquadramento legal e a tomar decisões informadas — não incentivamos
          o jogo nem garantimos resultados.
        </p>
      </header>

      <div className="space-y-4">
        {topics.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="flex gap-4 bg-portal-white border border-portal-purple-light/10 rounded-2xl p-5 md:p-6 shadow-sm"
          >
            <div className="w-11 h-11 rounded-full bg-portal-yellow/15 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-portal-purple" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-rubik text-lg font-bold text-portal-purple-dark mb-1.5">
                {title}
              </h3>
              <p className="font-nunito text-sm text-portal-gray leading-relaxed">{desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-portal-purple-light/15 bg-portal-purple/5 p-5">
        <p className="font-nunito text-sm text-portal-gray leading-relaxed">
          Para informação oficial sobre regulamentação em Portugal, consulte o{" "}
          <Link
            href="https://www.srij.turismodeportugal.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-portal-purple font-medium hover:underline"
          >
            portal SRIJ
          </Link>
          . O ReelSorte não substitui aconselhamento jurídico ou financeiro.
        </p>
      </div>
    </section>
  );
}
