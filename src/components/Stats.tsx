"use client";

import { motion } from "framer-motion";

export function Stats() {
  const stats = [
    { value: "400+", label: "Agências Atendidas" },
    { value: "98%", label: "Satisfação" },
    { value: "50Mi+", label: "Leads Gerados" },
    { value: "24/7", label: "Suporte Especializado" },
  ];

  return (
    <section className="py-20 bg-surface-container-low border-y border-outline-variant/15">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <span className="font-display font-bold text-4xl lg:text-5xl text-primary">
                {stat.value}
              </span>
              <span className="text-sm font-medium uppercase tracking-widest text-on-surface-variant">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
