import Link from "next/link";
import { Scale, Clock, AlertTriangle, Shield, HeartHandshake } from "lucide-react";

export function ResponsibleGambling() {
  return (
    <div className="bg-portal-white border-l-4 border-portal-yellow rounded-r-2xl p-8 md:p-12 shadow-lg border border-portal-purple-light/10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0 w-20 h-20 bg-portal-purple/10 rounded-full flex items-center justify-center border border-portal-purple-light/20">
          <Scale className="w-10 h-10 text-portal-purple" aria-hidden="true" />
        </div>
        <div className="text-left">
          <h2 className="font-rubik text-3xl font-extrabold text-portal-purple-dark mb-4">
            Compromisso com o <span className="text-portal-purple">Jogo Responsável</span>
          </h2>
          <div className="space-y-6 text-portal-gray font-nunito leading-relaxed">
            <p>
              No ReelSorte, acreditamos que o entretenimento num casino online deve
              assentar em responsabilidade, autoconsciência e controlo. Jogar deve ser
              sempre um passatempo agradável — nunca um fardo financeiro. Exigimos que
              todos os parceiros disponibilizem ferramentas robustas de jogo responsável.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                { icon: Clock, title: "Limites de Jogo", desc: "Ferramentas para definir limites de depósito, perdas e tempo de sessão, mantendo o jogo dentro do orçamento de entretenimento." },
                { icon: AlertTriangle, title: "Alertas de Realidade", desc: "Notificações automáticas sobre duração da sessão e posição financeira para manter o jogador sempre informado." },
                { icon: Shield, title: "Autoexclusão", desc: "Mecanismos imediatos de pausa e autoexclusão que bloqueiam o acesso à conta por períodos predefinidos." },
                { icon: HeartHandshake, title: "Apoio Profissional", desc: "Acesso directo a organizações certificadas de apoio ao jogo problemático, com assistência confidencial quando necessário." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="w-6 h-6 text-portal-purple flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-rubik font-bold text-portal-purple-dark mb-1">{title}</h3>
                    <p className="text-sm text-portal-gray">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-portal-gray-light border border-portal-purple-light/10 rounded-lg p-6 mt-6">
              <h3 className="font-rubik font-bold text-portal-purple mb-2">Precisa de Ajuda?</h3>
              <p className="text-sm font-nunito">
                Se sente que o jogo está a afectar negativamente a sua vida, procure ajuda
                imediatamente. Visite{" "}
                <Link href="https://www.jogoresponsavel.pt/" target="_blank" rel="noopener noreferrer" className="text-portal-purple-dark underline hover:text-portal-purple transition-colors">
                  JogoResponsavel.pt
                </Link>{" "}
                ou contacte o{" "}
                <Link href="https://www.sicad.pt/" target="_blank" rel="noopener noreferrer" className="text-portal-purple-dark underline hover:text-portal-purple transition-colors">
                  SICAD
                </Link>
                . Jogue com responsabilidade. Proibido a menores de 18 anos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
