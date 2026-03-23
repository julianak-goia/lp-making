"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Standard",
      price: isAnnual ? "99" : "129",
      description: "Perfeito para agências iniciantes.",
      features: ["Até 5 clientes", "Análises básicas", "Suporte por email", "1 usuário"],
      highlight: false,
    },
    {
      name: "Premium",
      price: isAnnual ? "199" : "249",
      description: "Para quem quer acelerar o crescimento.",
      features: ["Clientes Ilimitados", "IA Criativa Ilimitada", "Suporte 24/7", "Equipe de 5 pessoas", "Múltiplas integrações"],
      highlight: true,
    },
    {
      name: "Unlimited",
      price: "Sob Consulta",
      description: "Soluções personalizadas para o seu tamanho.",
      features: ["Tudo do Premium", "Gerente de Sucesso Dedicado", "Infraestrutura dedicada", "Desenvolvimento personalizado"],
      highlight: false,
      isCustom: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl lg:text-5xl text-primary mb-6"
          >
            Planos que cabem no seu bolso
          </motion.h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setIsAnnual(false)}
              className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-primary" : "text-on-surface-variant"}`}
            >
              Mensal
            </button>
            <div 
              className="w-14 h-8 bg-surface-container-high rounded-full p-1 cursor-pointer flex items-center shadow-inner"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <motion.div
                layout
                className="w-6 h-6 bg-primary rounded-full shadow"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <button
              onClick={() => setIsAnnual(true)}
              className={`text-sm font-semibold transition-colors ${isAnnual ? "text-primary" : "text-on-surface-variant"}`}
            >
              Anual <span className="text-secondary text-xs ml-1 bg-secondary/10 px-2 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 rounded-[2rem] flex flex-col justify-between transition-all ${
                plan.highlight 
                  ? "bg-gradient-to-br from-primary to-primary-container text-white shadow-2xl scale-100 lg:scale-105 z-10" 
                  : "bg-surface-container-lowest shadow-sm border border-outline-variant/15"
              }`}
            >
              <div>
                <h3 className={`font-display text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-on-surface"}`}>
                  {plan.name}
                </h3>
                <p className={`font-body text-sm mb-6 ${plan.highlight ? "text-white/80" : "text-on-surface-variant"}`}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  {plan.isCustom ? (
                    <span className={`font-display text-4xl font-bold ${plan.highlight ? "text-white" : "text-primary"}`}>
                      {plan.price}
                    </span>
                  ) : (
                    <>
                      <span className={`font-display text-4xl font-bold ${plan.highlight ? "text-white" : "text-primary"}`}>
                        R$ {plan.price}
                      </span>
                      <span className={`font-body text-sm ${plan.highlight ? "text-white/80" : "text-on-surface-variant"}`}>
                        /mês
                      </span>
                    </>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.highlight ? "text-tertiary-fixed" : "text-secondary"}`} />
                      <span className={`font-body text-sm ${plan.highlight ? "text-white/90" : "text-on-surface-variant"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.highlight ? "secondary" : "default"}
                className={`w-full ${plan.highlight ? "bg-white text-primary border-none shadow-lg hover:shadow-xl" : ""}`}
              >
                {plan.isCustom ? "Fale com Vendas" : "Comece Agora"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
