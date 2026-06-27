import { Mail, MessageCircle, Clock } from "lucide-react";

export function ContactContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <article className="bg-portal-white border border-portal-purple-light/10 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-portal-yellow/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-portal-purple" aria-hidden="true" />
            </div>
            <h2 className="font-rubik text-xl font-bold text-portal-purple-dark">Email VIP</h2>
          </div>
          <p className="text-portal-gray font-nunito mb-3">
            Para questões sobre bónus exclusivos, parcerias ou apoio a membros VIP.
          </p>
          <a href="mailto:concierge@reelsorte.com" className="text-portal-purple font-rubik font-medium hover:underline">
            concierge@reelsorte.com
          </a>
        </article>

        <article className="bg-portal-white border border-portal-purple-light/10 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-portal-yellow/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-portal-purple" aria-hidden="true" />
            </div>
            <h2 className="font-rubik text-xl font-bold text-portal-purple-dark">Concierge Directo</h2>
          </div>
          <p className="text-portal-gray font-nunito">
            Membros VIP registados têm acesso a gestor de conta dedicado via WhatsApp ou
            Telegram, disponível 24 horas por dia, 7 dias por semana.
          </p>
        </article>

        <article className="bg-portal-white border border-portal-purple-light/10 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-portal-yellow/20 flex items-center justify-center">
              <Clock className="w-6 h-6 text-portal-purple" aria-hidden="true" />
            </div>
            <h2 className="font-rubik text-xl font-bold text-portal-purple-dark">Horário de Resposta</h2>
          </div>
          <p className="text-portal-gray font-nunito">
            Respondemos a todos os emails em até 24 horas. Pedidos urgentes de membros
            VIP são priorizados e tratados no mesmo dia.
          </p>
        </article>
      </div>

      <div className="bg-portal-white border border-portal-purple-light/10 rounded-2xl p-8 md:p-10 shadow-sm">
        <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-6">Envie-nos uma Mensagem</h2>
        <form className="space-y-5" action="mailto:concierge@reelsorte.com" method="post" encType="text/plain">
          <div>
            <label htmlFor="name" className="block text-sm font-nunito font-medium text-portal-purple-dark mb-2">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-portal-gray-light border border-portal-gray/20 rounded-lg px-4 py-3 text-portal-purple-dark font-nunito focus:outline-none focus:border-portal-purple/50 transition-colors"
              placeholder="O seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-nunito font-medium text-portal-purple-dark mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-portal-gray-light border border-portal-gray/20 rounded-lg px-4 py-3 text-portal-purple-dark font-nunito focus:outline-none focus:border-portal-purple/50 transition-colors"
              placeholder="email@exemplo.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-nunito font-medium text-portal-purple-dark mb-2">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-portal-gray-light border border-portal-gray/20 rounded-lg px-4 py-3 text-portal-purple-dark font-nunito focus:outline-none focus:border-portal-purple/50 transition-colors resize-none"
              placeholder="Como podemos ajudar?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-portal-purple hover:bg-portal-purple-light text-portal-white font-rubik font-bold text-sm uppercase tracking-wider transition-colors shadow-lg"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
