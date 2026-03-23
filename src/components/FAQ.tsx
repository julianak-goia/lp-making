"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "A plataforma se integra com o Facebook e Google Ads?",
    answer: "Sim, a Making possui integração nativa com o ecossistema Meta Ads, Google Ads, TikTok e LinkedIn, permitindo puxar dados e construir dashboards sem complicação."
  },
  {
    question: "A IA pode ser treinada para a voz do meu cliente?",
    answer: "Exatamente. O módulo de IA permite que você faça o upload de brand guidelines e posts anteriores, garantindo que todo texto gerado tenha exatamente a entonação correta da marca do seu cliente."
  },
  {
    question: "O acesso de clientes é gratuito?",
    answer: "Nos planos Premium e Unlimited, você pode criar uma área de cliente ('white-label') sem custo adicional para eles, mostrando dados de forma segura e transparente."
  },
  {
    question: "Como funciona a segurança e privacidade?",
    answer: "Temos criptografia ponta a ponta e auditorias de segurança constantes. Seguimos todos os rigorosos protocolos de controle da LGPD e GDPR."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-surface-container-low border-t border-outline-variant/15">
      <div className="container mx-auto px-6 lg:px-24 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl lg:text-5xl text-primary mb-6"
          >
            Perguntas Frequentes
          </motion.h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`bg-surface-container-lowest rounded-2xl border transition-colors ${isOpen ? "border-primary/20 shadow-md" : "border-outline-variant/15"}`}
              >
                <button
                  className="w-full text-left px-8 py-6 flex items-center justify-between font-display font-bold text-lg text-on-surface focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {faq.question}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-secondary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 font-body text-on-surface-variant leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
