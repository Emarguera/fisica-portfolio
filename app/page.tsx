import TabSystem from "@/components/TabSystem";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <header className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-[2/1] bg-gradient-to-b from-blue-500/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient">
              Portafolio de Física I
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium">
              Aplicaciones en Ingeniería de Software
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-4">
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-bold mb-1">Estudiante</p>
              <p className="text-lg font-semibold">Esteban Ruiz Monge</p>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Curso</p>
              <p className="text-lg font-semibold">Física I - FUN-18</p>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Docente</p>
              <p className="text-lg font-semibold text-gray-300">Andrés Castro Núñez</p>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <TabSystem />
      </section>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-sm text-gray-500">
            © 2026 Esteban Ruiz Monge · Universidad CENFOTEC
          </p>
          <div className="flex justify-center space-x-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-xs text-gray-600 uppercase tracking-widest font-bold">Proyecto Académico</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
