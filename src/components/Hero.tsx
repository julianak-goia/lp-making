"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden making-bg-primary">
      <div className="absolute inset-0 z-0 opacity-40 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/15 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                Versão 2.0 Disponível
              </span>
            </div>

            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              A melhor maneira de gerenciar seus clientes
            </h1>

            <p className="text-white text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              Transforme a maneira como sua agência opera. Análise em tempo real, inteligência artificial criativa e gestão de equipes em um só lugar.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto">
                Comece Gratuitamente <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <PlayCircle className="w-4 h-4 mr-2" /> Ver Apper em Ação
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-64 h-[500px] bg-surface-container-lowest rounded-[3rem] border-[8px] border-surface-container-high shadow-2xl z-20 overflow-hidden flex flex-col"
              style={{ boxShadow: "0px 20px 40px rgba(53, 16, 106, 0.08)" }}
            >
              {/* Fake App Header */}
              <div className="h-12 border-b border-outline-variant/15 bg-surface/50 flex items-center px-4 justify-between">
                <div className="w-4 h-4 rounded-full bg-surface-container-high" />
                <div className="w-16 h-4 rounded-full bg-surface-container-high" />
                <div className="w-4 h-4 rounded-full bg-surface-container-high" />
              </div>

              {/* Fake App Body */}
              <div className="p-4 flex flex-col gap-4 flex-1">
                <div className="w-full h-32 rounded-xl bg-gradient-to-br from-primary to-secondary opacity-15" />
                <div className="w-3/4 h-4 rounded bg-surface-container-high" />
                <div className="w-1/2 h-4 rounded bg-surface-container-high" />
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="w-full h-16 rounded-xl bg-surface-container-low" />
                  <div className="w-full h-16 rounded-xl bg-surface-container-low" />
                </div>
              </div>
            </motion.div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Kinetic Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 isolate">
        <svg
          className="relative w-full h-[40px] min-h-[40px] md:h-[15vh] md:min-h-[100px] max-h-[150px] -mb-[7px]"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(203, 191, 251, 0.7)" />
            {/* //rgba(73, 228, 163, 0.5) */}
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(203, 191, 251, 0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(203, 191, 251, 0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#F6F4FE" />
          </g>
        </svg>
        <style>{`
          .parallax > use {
            animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
          }
          .parallax > use:nth-child(1) {
            animation-delay: -2s;
            animation-duration: 7s;
          }
          .parallax > use:nth-child(2) {
            animation-delay: -3s;
            animation-duration: 10s;
          }
          .parallax > use:nth-child(3) {
            animation-delay: -4s;
            animation-duration: 13s;
          }
          .parallax > use:nth-child(4) {
            animation-delay: -5s;
            animation-duration: 20s;
          }
          @keyframes move-forever {
            0% { transform: translate3d(-90px,0,0); }
            100% { transform: translate3d(85px,0,0); }
          }
        `}</style>
      </div>
    </section>
  );
}
