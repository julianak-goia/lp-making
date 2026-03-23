"use client";

import { motion } from "framer-motion";
import { BarChart3, Zap, Shield, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Análise em Tempo Real",
      description: "Acompanhe métricas cruciais instantaneamente com dashboards personalizáveis e relatórios detalhados.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "IA Criativa Incluída",
      description: "Gere copys, ideias de conteúdo e muito mais usando nossos modelos treinados para o mercado publicitário.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Segurança Total",
      description: "Os dados dos seus clientes protegidos com criptografia de ponta a ponta e redundância global.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Gestão de Equipes",
      description: "Atribua tarefas, controle acessos e centralize a comunicação da sua agência em um só lugar.",
      icon: <Users className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 making-bg-secondary">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl lg:text-5xl text-primary mb-6"
          >
            Recursos Incríveis
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-on-surface-variant font-body"
          >
            Tudo o que sua agência de publicidade precisa para escalar e entregar mais valor aos seus clientes, unificado em uma plataforma simples.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(53,16,106,0.08)] transition-all flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-on-surface mb-3">
                {feature.title}
              </h3>
              <p className="text-on-surface-variant font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
