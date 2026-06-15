"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhysicsCard from "./PhysicsCard";
import * as Simulations from "./Simulations";

const content = {
  "Semana 2": {
    "Movimiento 3D": {
      title: "Cinemática 3D: Niebla Volumétrica",
      caseStudy: "En motores gráficos como Unreal Engine, la niebla no es una imagen plana, sino un volumen compuesto por partículas. El software debe calcular la posición exacta de cada partícula de agua o polvo en un espacio de tres ejes (X, Y, Z) para que la luz se disperse correctamente. Si un personaje camina a través de ella, el software recalcula los vectores de posición para desplazar la niebla de forma realista.",
      concept: "El movimiento en tres dimensiones describe la ubicación de un objeto mediante un vector de posición 'r'. La fórmula r = xî + yĵ + zk utiliza vectores unitarios 'î, ĵ, k' para definir las direcciones en los ejes X, Y y Z. Cada componente (x, y, z) representa una coordenada escalar que varía en el tiempo, permitiendo definir desplazamientos complejos en el espacio virtual.",
      equation: "r(t) = x(t)î + y(t)ĵ + z(t)k",
      justification: "Sin el cálculo de vectores en 3D, los entornos virtuales carecerían de profundidad real. La cinemática vectorial permite que el software simule la tridimensionalidad, logrando que objetos como la niebla reaccionen a la iluminación y al movimiento del usuario de manera coherente y físicamente precisa.",
      visualLabel: "Partículas moviéndose aleatoriamente en tres ejes, ilustrando la dispersión de un fluido en un entorno tridimensional.",
      simulation: <Simulations.Simulation3D />
    },
    "MCU": {
      title: "MCU: Velocidad de Giro en Discos HDD",
      caseStudy: "Los discos duros mecánicos graban datos en sectores que rotan a miles de revoluciones por minuto. El software del controlador del disco debe sincronizar el momento exacto en que el cabezal baja a leer, basándose en qué tan rápido está girando el plato. Si la velocidad de giro varía, el software debe compensarlo para no leer el sector equivocado.",
      concept: "El Movimiento Circular Uniforme (MCU) ocurre cuando un objeto recorre una trayectoria circular con una rapidez constante. La fórmula v = ω · R relaciona la velocidad lineal (v) con la velocidad angular (ω), expresada en radianes por segundo (rad/s), y el radio (R) de la trayectoria. Aquí, 'v' determina la velocidad con la que un bit de datos pasa bajo el cabezal de lectura.",
      equation: "v = ω · R (ω en rad/s)",
      justification: "El MCU es crítico para la integridad de los datos en hardware rotativo. Permite al software predecir la posición exacta de un sector de información en el tiempo. Sin esta ley física, el acceso a la información sería imposible, ya que el sistema no tendría una referencia temporal precisa sobre la rotación del disco.",
      visualLabel: "Un plato girando a velocidad angular constante, destacando la trayectoria circular de un bit de datos específico.",
      simulation: <Simulations.SimulationMCU />
    }
  },
  "Semana 3": {
    "F. Centrípeta": {
      title: "Dinámica: Estabilidad en Curvas de Drones",
      caseStudy: "Cuando un dron autónomo realiza un giro para evitar un obstáculo, el software debe inclinar su chasis. Esta inclinación redirige parte del empuje de los motores hacia el centro de la curva, generando la fuerza necesaria para que el dron no siga recto por inercia y se mantenga dentro de su ruta de navegación planeada.",
      concept: "La Fuerza Centrípeta (Fc) es la fuerza neta que actúa sobre un cuerpo en movimiento circular, dirigida siempre hacia el centro de la trayectoria. Se calcula como Fc = m · v² / r, donde 'm' es la masa, 'v' la rapidez tangencial y 'r' el radio de curvatura. Es la responsable de 'vencer' la inercia que empujaría al dron hacia fuera del giro.",
      equation: "Fc = m · v² / r",
      justification: "La física resuelve el control de trayectoria autónoma. Si el software no calculara la Fc necesaria basándose en la masa del dron y la velocidad del aire, el dispositivo derraparía, siendo incapaz de seguir rutas precisas o de maniobrar de forma segura en espacios reducidos.",
      visualLabel: "Un dron en trayectoria curva con un vector de fuerza (Fc) constante apuntando hacia el centro de rotación.",
      simulation: <Simulations.SimulationCentripetal />
    },
    "Fricción": {
      title: "Fricción: Inercia de Frenado en UI",
      caseStudy: "En las interfaces móviles, el 'scroll' imita el roce de un objeto real deslizándose sobre una superficie física. Al lanzar una lista de contactos, el software aplica un algoritmo de fricción que reduce la velocidad gradualmente, logrando una desaceleración natural que evita un paro brusco visualmente agresivo.",
      concept: "La Fricción Cinética (fk) es la fuerza que se opone al movimiento de un objeto en deslizamiento. Se define por fk = μk · N, donde 'μk' es el coeficiente de fricción cinética (que define la aspereza de la superficie simulada) y 'N' es la fuerza normal. En software, este valor determina qué tan 'fluida' o 'pesada' se percibe la navegación táctil.",
      equation: "f_k = μ_k · N",
      justification: "La fricción simulada mejora la experiencia de usuario (UX). Al aplicar leyes físicas de rozamiento, el software crea una interacción predecible y orgánica. Sin esto, los elementos de la interfaz se detendrían de forma artificial, rompiendo la sensación de manipulación directa del contenido.",
      visualLabel: "Un bloque deslizándose que experimenta una fuerza de fricción opuesta, resultando en una desaceleración uniforme.",
      simulation: <Simulations.SimulationFriction />
    }
  },
  "Semana 4": {
    "Trabajo": {
      title: "Trabajo: Gestión de Carga en CPUs",
      caseStudy: "El Sistema Operativo monitorea constantemente el gasto energético de los procesos. Al ejecutar una tarea pesada, como el cifrado de archivos, el SO calcula el 'trabajo' de cómputo realizado para decidir si debe activar sistemas de enfriamiento o redistribuir la potencia entre los núcleos del procesador.",
      concept: "El Trabajo Mecánico (W) se define como el producto de una fuerza (F) aplicada sobre un cuerpo y el desplazamiento (d) que este recorre en la dirección de la fuerza. La fórmula W = F · d · cos(θ) cuantifica la energía transferida al sistema. En computación, el trabajo se traduce directamente en consumo de vatios y generación de calor térmico.",
      equation: "W = F · d · cos(θ)",
      justification: "Modelar el procesamiento como trabajo físico permite una gestión de hardware eficiente. El software utiliza esta relación para cuantificar el costo energético de cada tarea, optimizando el rendimiento térmico y prolongando la integridad de los circuitos del procesador mediante un control preciso del consumo.",
      visualLabel: "Un sistema de pistón realizando trabajo mecánico mediante el desplazamiento de una carga bajo una fuerza aplicada.",
      simulation: <Simulations.SimulationWork />
    },
    "Cons. Energía": {
      title: "Energía: Eficiencia en Dispositivos Móviles",
      caseStudy: "La gestión inteligente de batería en smartphones utiliza el principio de conservación para optimizar recursos. Si el software detecta que la pantalla consume más energía, debe reducir automáticamente la potencia del procesador de fondo para que la energía total disponible en la batería se distribuya de forma eficiente.",
      concept: "La Ley de Conservación de la Energía establece que la energía total de un sistema aislado permanece constante. La Energía Mecánica (Em) es la suma de la energía Cinética (Ec) y la Potencial (Ep). En un dispositivo, la energía química de la batería se transforma en luz, sonido y calor, pero la cantidad total antes y después de la transformación es la misma.",
      equation: "E_mec = E_c + E_p = Constante",
      justification: "Esta ley permite que el software estime el tiempo de vida del dispositivo. Al modelar la batería como un sistema de energía que se transforma continuamente, el software puede predecir el agotamiento del recurso y activar modos de ahorro críticos para el usuario antes de un apagado inesperado.",
      visualLabel: "Un flujo de energía que se transforma entre diferentes estados, manteniendo el balance total del sistema.",
      simulation: <Simulations.SimulationEnergy />
    }
  },
  "Semana 5": {
    "Impulso": {
      title: "Impulso: Orientación de Micro-satélites",
      caseStudy: "Los satélites de tipo CubeSat utilizan propulsores de gas frío para orientarse en el vacío. Como no existe resistencia del aire, el software debe calcular pulsos de fuerza extremadamente breves y precisos. Un 'empujón' incorrecto cambiaría el momento lineal del satélite de forma irreversible, dejándolo fuera de control.",
      concept: "El Impulso (J) es el producto de la fuerza (F) aplicada y el intervalo de tiempo (Δt) de aplicación, lo que resulta en un cambio en la cantidad de movimiento (Δp). En el espacio, el impulso es la herramienta fundamental del software para corregir la trayectoria y la actitud de navegación de una aeronave.",
      equation: "J = F · Δt = Δp",
      justification: "En el vacío, donde no hay fricción, el impulso es la única forma de modificar la dirección. El software depende de esta precisión física para garantizar que las maniobras consuman el mínimo de combustible posible, extendiendo la vida útil de la misión espacial mediante cálculos de momento exactos.",
      visualLabel: "Un cuerpo en el vacío experimentando un cambio de velocidad tras la aplicación de un pulso de fuerza instantáneo.",
      simulation: <Simulations.SimulationImpulse />
    },
    "Colisiones": {
      title: "Colisiones: Pruebas de Seguridad en CAD",
      caseStudy: "El software de diseño industrial simula colisiones de vehículos contra estructuras rígidas para evaluar la seguridad de los pasajeros. Al detectar el impacto, el programa calcula la deformación de la carrocería y la pérdida de energía cinética, permitiendo predecir daños estructurales sin destruir prototipos físicos reales.",
      concept: "En una Colisión Inelástica, los cuerpos chocan y pierden parte de su energía cinética original, la cual se transforma en calor y deformación permanente. Aunque la energía se transforma, la cantidad de movimiento se conserva, permitiendo al software predecir la velocidad final (vf) compartida por los objetos tras el impacto.",
      equation: "m1v1 + m2v2 = (m1+m2)vf",
      justification: "La simulación de colisiones salva vidas. Al integrar leyes de impacto inelástico, el software permite a los ingenieros diseñar zonas de deformación programada que absorban la energía del choque, protegiendo a los ocupantes antes de que el primer vehículo físico salga de la línea de ensamblaje.",
      visualLabel: "Dos masas impactando y deformándose, ilustrando la conservación del momento y la disipación de energía cinética.",
      simulation: <Simulations.SimulationCollision />
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

      <div className="relative min-h-[500px] w-full max-w-4xl mx-auto pt-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${activeWeek}-${activeSubject}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="w-full"
          >
            <PhysicsCard
              {...(content[activeWeek as keyof typeof content] as any)[activeSubject]}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
