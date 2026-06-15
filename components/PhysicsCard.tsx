"use client";

import { motion } from "framer-motion";
import React from "react";

interface PhysicsCardProps {
  title: string;
  caseStudy: string;
  concept: string;
  equation: string;
  justification: string;
  visualLabel: string;
  simulation: React.ReactNode;
}

export default function PhysicsCard({
  title,
  caseStudy,
  concept,
  equation,
  justification,
  visualLabel,
  simulation,
}: PhysicsCardProps) {
  return (
    <div className="card-apple w-full space-y-8">
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
            <div className="w-full h-full flex items-center justify-center relative z-10">
              {simulation}
            </div>
          </div>
          <p className="text-xs text-gray-500 italic">Elemento de Apoyo: {visualLabel}</p>
        </div>
      </div>
    </div>
  );
}
