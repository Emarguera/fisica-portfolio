"use client";

import { motion } from "framer-motion";

export const Simulation3D = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-4 bg-blue-500/40 rounded-full blur-sm"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 40, 0],
          z: [0, 20, -20, 0],
        }}
        transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
        style={{ perspective: 1000 }}
      />
    ))}
    <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-32">Niebla Volumétrica</div>
  </div>
);

export const SimulationMCU = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div
      className="w-32 h-32 border-2 border-dashed border-blue-500/30 rounded-full flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
    </motion.div>
    <div className="absolute text-[10px] text-gray-500 uppercase tracking-widest mt-40">Rotación de Disco</div>
  </div>
);

export const SimulationCentripetal = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-24 h-24 border border-white/10 rounded-full relative">
      <motion.div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-4 bg-blue-500 rounded-sm"
        animate={{ rotate: 360 }}
        style={{ originX: "0.5rem", originY: "3.5rem" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-blue-500/40 origin-bottom"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
    <div className="absolute text-[10px] text-gray-500 uppercase tracking-widest mt-32">Vector Fuerza Central</div>
  </div>
);

export const SimulationFriction = () => (
  <div className="relative w-full h-full flex items-center justify-center flex-col">
    <div className="w-40 h-0.5 bg-white/20 relative">
      <motion.div
        className="absolute -top-6 w-8 h-6 bg-blue-500 rounded-sm"
        initial={{ x: 0 }}
        animate={{ x: 130 }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: [0.22, 1, 0.36, 1], // iOS-like ease out
          repeatDelay: 1
        }}
      />
    </div>
    <div className="mt-8 text-[10px] text-gray-500 uppercase tracking-widest">Desaceleración de Scroll</div>
  </div>
);

export const SimulationWork = () => (
  <div className="relative w-full h-full flex items-center justify-center flex-col">
    <div className="w-12 h-24 border border-white/20 rounded-lg relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 w-full bg-blue-500/40"
        animate={{ height: ["10%", "90%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-full h-1 bg-white"
        animate={{ bottom: ["10%", "90%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    </div>
    <div className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest">Trabajo (F x d)</div>
  </div>
);

export const SimulationEnergy = () => (
  <div className="relative w-full h-full flex items-center justify-center flex-col">
    <div className="w-24 h-12 border border-white/20 rounded-md p-1 relative">
      <motion.div
        className="h-full bg-green-500 rounded-sm"
        animate={{ width: ["100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      />
    </div>
    <div className="mt-6 text-[10px] text-gray-500 uppercase tracking-widest">Ciclo Energético</div>
  </div>
);

export const SimulationImpulse = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div
      className="w-12 h-6 bg-gray-700 rounded-r-full relative"
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <motion.div
        className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full blur-sm"
        animate={{ 
          x: -40,
          scale: [1, 2],
          opacity: [0.8, 0]
        }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
      />
    </motion.div>
    <div className="absolute text-[10px] text-gray-500 uppercase tracking-widest mt-24">Pulso de Propulsión</div>
  </div>
);

export const SimulationCollision = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div
      className="w-8 h-8 bg-blue-500 rounded-sm"
      animate={{ x: [-50, -5] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
    />
    <motion.div
      className="w-8 h-8 bg-gray-600 rounded-sm"
      animate={{ 
        x: [5, 5],
        scaleX: [1, 0.6]
      }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
    />
    <div className="absolute text-[10px] text-gray-500 uppercase tracking-widest mt-24">Deformación por Choque</div>
  </div>
);
