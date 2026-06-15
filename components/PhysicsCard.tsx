"use client";

import { motion } from "framer-motion";

interface PhysicsCardProps {
  title: string;
  caseStudy: string;
  concept: string;
  equation: string;
  justification: string;
  visualLabel: string;
}

export default function PhysicsCard({
  title,
  caseStudy,
  concept,
  equation,
  justification,
  visualLabel,
}: PhysicsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="card-apple w-full max-w-4xl mx-auto space-y-8"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        <div className="h-1 w-12 bg-blue-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Caso de Uso</h3>
            <p className="text-lg text-gray-200 leading-relaxed">{caseStudy}</p>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Concepto Físico</h3>
            <p className="text-lg text-gray-200">{concept}</p>
            <div className="mt-3 p-4 bg-black/40 rounded-xl border border-white/5 font-mono text-blue-400 text-xl text-center">
              {equation}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Justificación</h3>
            <p className="text-gray-300 leading-relaxed">{justification}</p>
          </section>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-full aspect-square glass rounded-3xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
            <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">{visualLabel}</span>
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-32 h-32 rounded-full border border-blue-500/20" />
            </motion.div>
          </div>
          <p className="text-xs text-gray-500 italic">Visualización del concepto físico aplicado</p>
        </div>
      </div>
    </motion.div>
  );
}
