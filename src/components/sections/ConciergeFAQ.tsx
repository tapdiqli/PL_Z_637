import { BookOpen } from "lucide-react";

const faqs = [
  {
    q: "Como são selecionados os melhores casinos online?",
    a: "A nossa equipa avalia mais de 100 critérios antes de recomendar um casino online: solidez financeira, velocidade de levantamentos, auditoria RNG por entidades independentes, licenciamento e qualidade do apoio VIP. Apenas operadores no top 1% são incluídos.",
  },
  {
    q: "Os meus dados pessoais estão protegidos?",
    a: "A segurança é inegociável. Todos os casinos recomendados utilizam encriptação AES-256 e cumprem o RGPD. Muitos parceiros aceitam também criptomoedas, oferecendo uma camada adicional de privacidade financeira.",
  },
  {
    q: "O que é o serviço concierge VIP?",
    a: "Diferente do apoio ao cliente standard, o concierge VIP é um gestor de conta dedicado, disponível 24/7 por canais directos. Gere limites, acelera levantamentos, organiza bónus personalizados e assiste em pedidos exclusivos.",
  },
  {
    q: "Os bónus de casino são adaptados ao meu perfil?",
    a: "Sim. Após definir o seu perfil de jogador, as promoções genéricas são substituídas por ofertas personalizadas. Se prefere roleta ao vivo, receberá cashback em jogos de mesa em vez de rodadas grátis irrelevantes para slots.",
  },
  {
    q: "Quão rápidos são os levantamentos VIP?",
    a: "Membros ReelSorte beneficiam de filas financeiras prioritárias. Levantamentos por carteira digital ou criptomoeda processam-se em minutos. Transferências bancárias são aceleradas para concluir em 24 horas.",
  },
  {
    q: "Posso perder o estatuto VIP?",
    a: "O estatuto elite requer actividade premium consistente, mas o gestor de conta comunica sempre os requisitos com transparência, garantindo tempo suficiente para manter o seu nível e privilégios associados.",
  },
];

export function ConciergeFAQ() {
  return (
    <div className="bg-portal-white border border-portal-purple-light/10 rounded-3xl p-8 md:p-12 shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {faqs.map((faq, idx) => (
          <article
            key={idx}
            className="bg-portal-gray-light border border-portal-gray/10 rounded-xl p-8 hover:border-portal-purple-light/30 transition-colors"
          >
            <h3 className="font-rubik font-bold text-portal-purple-dark mb-4 text-lg flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-portal-purple flex-shrink-0 mt-1" aria-hidden="true" />
              {faq.q}
            </h3>
            <p className="text-portal-gray font-nunito leading-relaxed">{faq.a}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
