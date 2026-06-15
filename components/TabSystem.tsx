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
      concept: "El movimiento en tres dimensiones describe la posición de un objeto usando un vector de posición 'r'. La fórmula r = xî + yĵ + zk utiliza 'î, ĵ, k' para representar las direcciones en los ejes X, Y y Z. Cada componente (x, y, z) es una coordenada que cambia con el tiempo para definir el desplazamiento.",
      equation: "r(t) = x(t)î + y(t)ĵ + z(t)k",
      justification: "Sin el cálculo de vectores en 3D, los entornos virtuales carecerían de profundidad. La cinemática permite que el software simule la tridimensionalidad del mundo real, logrando que objetos como la niebla reaccionen a la iluminación y al movimiento del jugador de manera coherente.",
      visualLabel: "Simulación: Partículas moviéndose aleatoriamente en tres ejes, simulando la dispersión de un fluido gaseoso.",
      simulation: <Simulations.Simulation3D />
    },
    "MCU": {
      title: "MCU: Velocidad de Giro en Discos HDD",
      caseStudy: "Los discos duros mecánicos graban datos en sectores que rotan a miles de revoluciones por minuto. El software del controlador del disco debe sincronizar el momento exacto en que el cabezal baja a leer, basándose en qué tan rápido está girando el plato. Si la velocidad de giro varía, el software debe compensarlo para no leer el sector equivocado.",
      concept: "El Movimiento Circular Uniforme (MCU) describe un objeto que recorre una trayectoria circular a una velocidad angular (ω) constante. La fórmula v = ω · R relaciona la velocidad lineal (v) con la velocidad angular y el radio (R). Aquí, 'v' es la rapidez con la que un punto del disco pasa bajo el cabezal.",
      equation: "v = ω · R (Donde ω = rad/s)",
      justification: "El MCU es fundamental para la integridad de los datos. Permite al software predecir la posición temporal de un bit de información. Sin esta ley física, el acceso a la información sería caótico, ya que el sistema no tendría una referencia temporal fija para la rotación del hardware.",
      visualLabel: "Simulación: Un plato girando a velocidad angular constante, destacando un punto (sector de datos) en rotación.",
      simulation: <Simulations.SimulationMCU />
    }
  },
  "Semana 3": {
    "F. Centrípeta": {
      title: "Dinámica: Estabilidad en Curvas de Drones",
      caseStudy: "Cuando un dron autónomo realiza un giro para evitar un obstáculo, el software debe inclinar el chasis del dron. Esta inclinación redirige parte del empuje de los motores hacia el centro de la curva, generando la fuerza necesaria para que el dron no siga recto por inercia y se salga de su trayectoria.",
      concept: "La Fuerza Centrípeta (Fc) es la fuerza resultante que actúa sobre un cuerpo en movimiento circular, dirigida hacia el centro. Se calcula como Fc = m · v² / r, donde 'm' es la masa, 'v' la velocidad y 'r' el radio de giro. Es la fuerza que 'tira' del dron hacia adentro de la curva.",
      equation: "Fc = m · v² / r",
      justification: "La física resuelve el problema del control de trayectoria. Si el software no calculara la Fc necesaria basándose en la velocidad y el radio del giro, el dron derraparía en el aire, siendo incapaz de seguir rutas precisas en entornos urbanos o cerrados.",
      visualLabel: "Simulación: Un objeto en órbita con una flecha central que representa la fuerza constante que lo mantiene en su ruta.",
      simulation: <Simulations.SimulationCentripetal />
    },
    "Fricción": {
      title: "Fricción: Inercia de Frenado en UI",
      caseStudy: "En las interfaces móviles, el 'scroll' imita el comportamiento de un objeto real deslizándose sobre una mesa. Cuando lanzas una lista de contactos hacia arriba, el software aplica un algoritmo de fricción que reduce la velocidad gradualmente hasta detenerla, evitando un paro brusco que resultaría molesto al ojo humano.",
      concept: "La Fricción Cinética (fk) es la fuerza que se opone al movimiento de un objeto que ya se está deslizando. Se define como fk = μk · N, donde 'μk' es el coeficiente de roce y 'N' la fuerza normal. En software, μk determina qué tan 'pesada' o 'lisa' se siente la interfaz al tacto.",
      equation: "f_k = μ_k · N",
      justification: "La fricción simulada humaniza la tecnología. Al aplicar leyes físicas de roce, el software logra que la interacción sea predecible y cómoda. Sin esto, las listas de datos se detendrían instantáneamente, rompiendo la ilusión de fluidez y naturalidad táctil.",
      visualLabel: "Simulación: Un bloque deslizándose sobre una superficie que pierde velocidad progresivamente hasta detenerse.",
      simulation: <Simulations.SimulationFriction />
    }
  },
  "Semana 4": {
    "Trabajo": {
      title: "Trabajo: Gestión de Carga en CPUs",
      caseStudy: "El Sistema Operativo monitorea el gasto energético de cada aplicación. Si un software de edición de fotos aplica un filtro a millones de píxeles, el SO calcula el 'trabajo' de cómputo para decidir si activa los ventiladores o reduce la potencia del chip para evitar daños por calor.",
      concept: "En física, el Trabajo (W) ocurre cuando una fuerza (F) se aplica sobre un objeto desplazándolo una distancia (d). La fórmula W = F · d representa la transferencia de energía necesaria para mover una carga. En computación, la 'fuerza' es el voltaje y la 'distancia' es la cantidad de operaciones procesadas.",
      equation: "W = F · d (Joules)",
      justification: "Modelar el procesamiento como trabajo mecánico permite una gestión térmica eficiente. El software utiliza esta analogía física para cuantificar el costo real de una tarea, optimizando el rendimiento del hardware y prolongando la vida útil de los componentes electrónicos.",
      visualLabel: "Simulación: Un pistón moviéndose verticalmente, representando la transferencia de energía por cada ciclo de procesamiento.",
      simulation: <Simulations.SimulationWork />
    },
    "Cons. Energía": {
      title: "Energía: Eficiencia en Dispositivos Móviles",
      caseStudy: "La gestión de batería en un smartphone utiliza la conservación de energía para distribuir recursos. Si el usuario sube el brillo de la pantalla, el software debe 'quitar' energía del procesador o de las antenas de radio para que la suma total de energía consumida no exceda la capacidad de entrega de la batería.",
      concept: "La Ley de Conservación de la Energía establece que la energía no se crea ni se destruye, solo se transforma. La Energía Mecánica total (E_mec) es la suma de la Cinética (Ec) y la Potencial (Ep). En un sistema cerrado como una batería, el gasto de una forma de energía debe ser compensado por otra.",
      equation: "E_mec = E_c + E_p = Cte",
      justification: "Esta ley permite que el software estime con precisión el tiempo de vida del dispositivo. Al entender que la energía es un recurso finito que se transforma en calor y luz, el software puede tomar decisiones inteligentes de ahorro sin que el usuario lo note.",
      visualLabel: "Simulación: Un medidor de energía que oscila, mostrando cómo el recurso se consume y transforma dinámicamente.",
      simulation: <Simulations.SimulationEnergy />
    }
  },
  "Semana 5": {
    "Impulso": {
      title: "Impulso: Orientación de Micro-satélites",
      caseStudy: "Los satélites CubeSat usan pequeños tanques de aire comprimido para girar en el espacio. Como no hay gravedad ni aire que los frene, el software debe calcular pulsos de milisegundos de duración para dar un 'empujoncito' exacto. Un pulso demasiado largo haría que el satélite gire sin control para siempre.",
      concept: "El Impulso (J) es el cambio en la cantidad de movimiento (momentum) de un objeto. Se calcula multiplicando la Fuerza (F) por el intervalo de tiempo (Δt) que se aplica. Es la medida de cuánto cambia el estado de movimiento de un cuerpo tras una interacción rápida.",
      equation: "J = F · Δt = Δp",
      justification: "En el vacío del espacio, el impulso es la única forma de cambiar la dirección. El software depende de esta fórmula para garantizar que las maniobras sean precisas y no desperdicien el combustible limitado del satélite, asegurando el éxito de la misión.",
      visualLabel: "Simulación: Un cuerpo lanzando un pulso de masa en una dirección y reaccionando con un movimiento opuesto.",
      simulation: <Simulations.SimulationImpulse />
    },
    "Colisiones": {
      title: "Colisiones: Pruebas de Seguridad en CAD",
      caseStudy: "El software de diseño industrial simula colisiones de vehículos contra barreras. Al detectar el impacto, el programa calcula cómo se deforma el metal y cuánto rebota el auto. Estas colisiones son 'inelásticas' porque los objetos se quedan pegados o se deforman permanentemente en lugar de rebotar como pelotas de hule.",
      concept: "En una Colisión Inelástica, los cuerpos chocan y pierden energía cinética, la cual se transforma en deformación y calor. La cantidad de movimiento se conserva, permitiendo calcular la velocidad final (vf) de los objetos tras el impacto uniendo sus masas (m1, m2).",
      equation: "m1v1 + m2v2 = (m1+m2)vf",
      justification: "La física de colisiones en software permite salvar vidas. Al simular choques digitalmente, los desarrolladores pueden identificar fallos estructurales en un diseño antes de que se fabrique el auto real, garantizando que el vehículo proteja a los pasajeros en un impacto real.",
      visualLabel: "Simulación: Dos bloques impactando y deteniéndose mientras uno cambia su forma, ilustrando la pérdida de energía cinética.",
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
