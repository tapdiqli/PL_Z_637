"use client";

import { useState } from "react";

export function HomeContact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contacto" className="scroll-mt-24">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-rubik font-bold uppercase tracking-widest text-portal-purple mb-2">
          Linha directa
        </p>
        <h2 className="font-rubik text-3xl md:text-4xl font-extrabold text-portal-purple-dark mb-4">
          Fale connosco
        </h2>
        <p className="font-nunito text-portal-gray text-lg leading-relaxed">
          Dúvida sobre um operador listado, sugestão de melhoria ou questão sobre os
          nossos critérios? Envie-nos uma mensagem.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="font-rubik text-xl font-bold text-portal-purple-dark">
            Contacto com leitores
          </h3>
          <p className="font-nunito text-portal-gray leading-relaxed">
            Use o formulário para falar com a equipa ReelSorte. Cada mensagem é lida,
            mesmo que nem sempre consigamos responder com prioridade imediata.
          </p>
          <ul className="space-y-3">
            {[
              "Objectivo de resposta em 48 horas úteis para mensagens enviadas por este formulário.",
              "Pode perguntar sobre o método, critérios ou uma ficha específica.",
              "Os dados servem só para tratar o seu pedido, conforme a política de privacidade.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-nunito text-sm text-portal-gray">
                <span className="w-1.5 h-1.5 rounded-full bg-portal-yellow mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-portal-white border border-portal-purple-light/10 rounded-2xl p-6 md:p-8 shadow-sm">
          {submitted ? (
            <p className="font-nunito text-portal-purple-dark text-lg py-8 text-center">
              Obrigado. Respondemos assim que possível.
            </p>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label htmlFor="home-name" className="block text-sm font-nunito font-medium text-portal-purple-dark mb-1.5">
                  Nome
                </label>
                <input
                  id="home-name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-portal-gray-light border border-portal-gray/20 rounded-lg px-4 py-3 text-portal-purple-dark font-nunito focus:outline-none focus:border-portal-purple/50"
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label htmlFor="home-email" className="block text-sm font-nunito font-medium text-portal-purple-dark mb-1.5">
                  Email
                </label>
                <input
                  id="home-email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-portal-gray-light border border-portal-gray/20 rounded-lg px-4 py-3 text-portal-purple-dark font-nunito focus:outline-none focus:border-portal-purple/50"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div>
                <label htmlFor="home-message" className="block text-sm font-nunito font-medium text-portal-purple-dark mb-1.5">
                  Mensagem
                </label>
                <textarea
                  id="home-message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-portal-gray-light border border-portal-gray/20 rounded-lg px-4 py-3 text-portal-purple-dark font-nunito focus:outline-none focus:border-portal-purple/50 resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-portal-purple hover:bg-portal-purple-light text-portal-white font-rubik font-bold text-sm uppercase tracking-wide transition-colors"
              >
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
