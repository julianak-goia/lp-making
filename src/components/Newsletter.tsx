"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Newsletter() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[2.5rem] bg-primary text-white overflow-hidden shadow-2xl"
        >
          {/* Decorative background curves */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 p-12 lg:p-20 flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-5xl mb-6">
              Pronto para elevar o nível da sua agência?
            </h2>
            <p className="text-lg text-primary-fixed-dim font-body mb-10 max-w-2xl">
              Deixe seu email abaixo para receber o acesso antecipado à versão 2.0 da Making Publicidade e garanta 30 dias off.
            </p>

            <form className="w-full max-w-md flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="w-full h-14 pl-6 pr-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-body backdrop-blur-sm"
                  required
                />
              </div>
              <Button size="lg" variant="secondary" className="h-14 bg-white text-primary border-none hover:bg-neutral-100 flex-shrink-0">
                Inscrever-se <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
            <p className="text-xs text-primary-fixed-dim/70 mt-6 font-body">
              Prometemos não enviar spam. Você pode se desinscrever a qualquer momento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
