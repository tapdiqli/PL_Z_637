import { Crown, Shield, Diamond, Target, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Crown,
    title: "Concierge VIP 24/7",
    desc: "Gestor de conta dedicado disponível a qualquer hora para aumentar limites de mesa, personalizar bónus de casino e resolver questões técnicas com rapidez.",
  },
  {
    icon: Shield,
    title: "Segurança Bancária",
    desc: "Todos os casinos recomendados utilizam encriptação AES-256, proteção de dados conforme o RGPD e protocolos rigorosos para proteger depósitos e levantamentos.",
  },
  {
    icon: Diamond,
    title: "Bónus Personalizados",
    desc: "Cashback à medida, bónus de depósito exclusivos e recompensas de fidelidade calibradas ao seu estilo de jogo — slots, roleta ou blackjack ao vivo.",
  },
  {
    icon: Target,
    title: "Levantamentos Prioritários",
    desc: "Limites de levantamento elevados e processamento acelerado para que os seus ganhos no casino online cheguem à conta sem atrasos desnecessários.",
  },
  {
    icon: Users,
    title: "Torneios Exclusivos",
    desc: "Acesso a torneios privados de poker, blackjack e slots online com prémios elevados, reservados apenas para membros VIP ReelSorte.",
  },
  {
    icon: Award,
    title: "Eventos VIP Globais",
    desc: "Convites para eventos desportivos premium, galas exclusivas e experiências de casino presencial em destinos de luxo pelo mundo.",
  },
];

export function ExclusiveBenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, idx) => {
        const Icon = benefit.icon;
        return (
          <article
            key={idx}
            className="bg-portal-white border border-portal-purple-light/10 p-8 rounded-2xl hover:border-portal-yellow/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="w-14 h-14 rounded-full bg-portal-yellow/20 flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-portal-purple" aria-hidden="true" />
            </div>
            <h3 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-3">
              {benefit.title}
            </h3>
            <p className="text-portal-gray font-nunito leading-relaxed">{benefit.desc}</p>
          </article>
        );
      })}
    </div>
  );
}
