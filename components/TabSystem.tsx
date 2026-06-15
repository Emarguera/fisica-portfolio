"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhysicsCard from "./PhysicsCard";

const content = {
  "Semana 2": {
    "Movimiento 3D": {
      title: "Cinemática en el Renderizado Volumétrico",
      caseStudy: "Cálculo de trayectorias de partículas para simulación de niebla y efectos atmosféricos en motores gráficos.",
      concept: "Posición y desplazamiento vectorial en el espacio tridimensional.",
      equation: "r(t) = x(t)i + y(t)j + z(t)k",
      justification: "La física permite calcular la posición exacta de miles de partículas en tiempo real, creando efectos visuales realistas que no serían posibles con sprites estáticos.",
      visualLabel: "Trayectoria Vectorial"
    },
    "MCU": {
      title: "Sincronización de Discos Giratorios",
      caseStudy: "Control de latencia en la lectura de datos de sistemas de almacenamiento físico (HDD) mediante la velocidad angular constante.",
      concept: "Movimiento Circular Uniforme y frecuencia de rotación.",
      equation: "v = ω · R",
      justification: "Comprender la relación entre la velocidad lineal y angular es crítico para posicionar el cabezal de lectura en el sector correcto del disco con precisión de milisegundos.",
      visualLabel: "Rotación Constante"
    }
  },
  "Semana 3": {
    "F. Centrípeta": {
      title: "Navegación de Drones Autónomos",
      caseStudy: "Algoritmos de control para drones de entrega que deben realizar giros cerrados sin perder estabilidad o desviarse de la ruta.",
      concept: "Fuerza Centrípeta necesaria para mantener una trayectoria curva.",
      equation: "Fc = m · v² / R",
      justification: "El software de vuelo debe calcular la inclinación necesaria del dron para generar la fuerza centrípeta requerida, evitando que la inercia lo desplace fuera de su trayectoria.",
      visualLabel: "Aceleración Radial"
    },
    "Fricción": {
      title: "Inercia de Desplazamiento en UI",
      caseStudy: "Simulación de la fricción cinética en el 'scrolling' inercial de aplicaciones móviles para crear una sensación táctil natural.",
      concept: "Fuerza de fricción como deceleración de un cuerpo en movimiento.",
      equation: "f = μ · N",
      justification: "El uso de la física real en interfaces (fricción) mejora drásticamente la experiencia del usuario al imitar el comportamiento del mundo físico, haciendo la navegación intuitiva.",
      visualLabel: "Deceleración Cinética"
    }
  },
  "Semana 4": {
    "Trabajo": {
      title: "Esfuerzo de Cómputo en CPUs",
      caseStudy: "Optimización de la carga de trabajo en procesadores multinúcleo para minimizar el consumo de energía durante la ejecución de hilos pesados.",
      concept: "Trabajo realizado por una fuerza a lo largo de un desplazamiento (metáfora de carga).",
      equation: "W = F · d · cos(θ)",
      justification: "Modelar el procesamiento como 'trabajo físico' permite a los planificadores de tareas del SO distribuir la carga de manera que se maximice la eficiencia energética por cada ciclo de reloj.",
      visualLabel: "Transferencia de Energía"
    },
    "Cons. Energía": {
      title: "Gestión Térmica en Dispositivos",
      caseStudy: "Redistribución inteligente de recursos en dispositivos móviles para conservar la energía potencial de la batería durante picos de uso.",
      concept: "Ley de Conservación de la Energía Mecánica.",
      equation: "Em = Ec + Ep = Constante",
      justification: "El software de gestión de energía utiliza modelos de conservación para predecir cuánto tiempo puede durar la batería basándose en la tasa de transferencia de energía actual.",
      visualLabel: "Balance Energético"
    }
  },
  "Semana 5": {
    "Impulso": {
      title: "Propulsión de Micro-satélites",
      caseStudy: "Sistemas de control para CubeSats que utilizan pulsos de gas para corregir su orientación en el espacio.",
      concept: "Impulso y cambio en la cantidad de movimiento.",
      equation: "J = F · Δt = Δp",
      justification: "El software debe calcular pulsos extremadamente precisos (fuerza por tiempo) para lograr cambios mínimos en la orientación sin desperdiciar combustible limitado.",
      visualLabel: "Momento Lineal"
    },
    "Colisiones": {
      title: "Simuladores de Impacto (CAD)",
      caseStudy: "Detección de colisiones inelásticas en software de ingeniería para simular la deformación de materiales en accidentes automotrices.",
      concept: "Colisión Inelástica donde la energía cinética no se conserva.",
      equation: "m1v1 + m2v2 = (m1+m2)vf",
      justification: "La física de colisiones permite predecir el daño estructural en modelos digitales antes de fabricar prototipos físicos, ahorrando millones en costos de desarrollo.",
      visualLabel: "Deformación Plástica"
    }
  }
};

export default function TabSystem() {
  const [activeWeek, setActiveWeek] = useState("Semana 2");
  const [activeSubject, setActiveSubject] = useState(Object.keys(content["Semana 2"])[0]);

  const handleWeekChange = (week: string) => {
    setActiveWeek(week);
    setActiveSubject(Object.keys(content[week as keyof typeof content])[0]);
  };

  return (
    <div className="w-full space-y-12">
      <nav className="flex justify-center">
        <div className="glass p-1.5 rounded-2xl flex space-x-1">
          {Object.keys(content).map((week) => (
            <button
              key={week}
              onClick={() => handleWeekChange(week)}
              className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeWeek === week 
                ? "bg-white text-black shadow-lg" 
                : "text-gray-400 hover:text-white"
              }`}
            >
              {week}
            </button>
          ))}
        </div>
      </nav>

      <nav className="flex justify-center">
        <div className="flex space-x-8 border-b border-white/10 pb-4 w-full max-w-2xl justify-center">
          {Object.keys(content[activeWeek as keyof typeof content]).map((subject) => (
            <button
              key={subject}
              onClick={() => setActiveSubject(subject)}
              className={`relative px-2 py-1 text-sm font-semibold transition-colors duration-200 ${
                activeSubject === subject ? "text-blue-500" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {subject}
              {activeSubject === subject && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-[-17px] h-0.5 bg-blue-500"
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      <div className="relative min-h-[600px] flex items-center justify-center pt-8">
        <AnimatePresence mode="wait">
          <PhysicsCard
            key={`${activeWeek}-${activeSubject}`}
            {...(content[activeWeek as keyof typeof content] as any)[activeSubject]}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
