"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-display font-bold text-3xl lg:text-5xl text-on-surface mb-6"
          >
            Veja como a <span className="text-primary">Making</span> transforma o seu dia a dia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant font-body"
          >
            Descubra em menos de 2 minutos por que as maiores agências estão migrando para a nossa plataforma.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(53,16,106,0.15)] bg-surface-container group"
        >
          {/* Video Placeholder Container */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative flex items-center justify-center">
            {/* The pulsing button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-24 h-24 rounded-full bg-surface-container-lowest shadow-2xl flex items-center justify-center z-20 group-hover:bg-primary transition-colors duration-500"
            >
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-50" />
              <Play className="w-10 h-10 text-primary group-hover:text-white ml-2 transition-colors duration-500" />
            </motion.button>

            {/* Simulated UI inside video */}
            <div className="absolute inset-0 z-10 bg-black/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
