"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote: "A Making mudou completamente a forma como entregamos relatórios. Nossos clientes sentem que somos muito mais profissionais.",
      author: "Carlos Silveira",
      role: "CEO, Agência Córtex",
      initials: "CS",
    },
    {
      quote: "Depois que migramos para a Making, nosso tempo de resposta e organização das campanhas melhorou em 200%.",
      author: "Joana Alves",
      role: "Head de Operações, Vértice",
      initials: "JA",
    },
    {
      quote: "O uso da IA nativa economiza horas do nosso time criativo. Simplesmente o melhor investimento que fizemos no ano.",
      author: "Marcos Túlio",
      role: "Diretor de Arte, Studio Bold",
      initials: "MT",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-container-low">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl lg:text-5xl text-primary mb-6"
          >
            O que dizem sobre nós
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant font-body"
          >
            Junte-se a dezenas de agências que já transformaram seus processos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-[1.5rem] shadow-sm flex flex-col justify-between"
            >
              <p className="text-lg text-on-surface-variant/90 leading-relaxed font-body italic mb-8">
                "{testi.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-outline-variant/15 pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary font-display">
                  {testi.initials}
                </div>
                <div>
                  <h4 className="font-bold text-on-surface font-display">{testi.author}</h4>
                  <p className="text-sm text-on-surface-variant">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
