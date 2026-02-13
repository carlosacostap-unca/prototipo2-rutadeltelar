import Link from "next/link";
import FlipCarousel from "@/app/components/FlipCarousel";

const productos = [
  {
    title: "Poncho de Vicuña",
    description: "Prenda de lujo tejida con la fibra más fina del mundo.",
    bg: "bg-amber-800",
    href: "/estaciones/londres/poncho-vicuna"
  },
  {
    title: "Manta Criolla",
    description: "Tejido tradicional con lana de oveja y tintes naturales.",
    bg: "bg-amber-700"
  },
  {
    title: "Bufanda Llama",
    description: "Suavidad y calidez en una pieza versátil para el uso diario.",
    bg: "bg-amber-600"
  },
  {
    title: "Camino de Mesa",
    description: "Diseños geométricos inspirados en la iconografía aguada.",
    bg: "bg-amber-900"
  },
  {
    title: "Chalina",
    description: "Tejido ligero y elegante, ideal para media estación.",
    bg: "bg-yellow-800"
  }
];

const experiencias = [
  {
    title: "Visita al Shinkal",
    description: "Recorrido por el sitio arqueológico inca más importante del sur.",
    bg: "bg-stone-800"
  },
  {
    title: "Taller de Nuez",
    description: "Aprende el proceso de confitado de la nuez, dulce típico local.",
    bg: "bg-stone-700"
  },
  {
    title: "Ruta del Adobe",
    description: "Arquitectura colonial y capillas históricas en el camino.",
    bg: "bg-stone-600"
  },
  {
    title: "Fiesta de la Nuez",
    description: "Celebración popular con música, danza y productos regionales.",
    bg: "bg-stone-900"
  },
  {
    title: "Trekking",
    description: "Caminatas por senderos naturales con vistas panorámicas.",
    bg: "bg-gray-800"
  }
];

export default function LondresPage() {
  return (
    <main className="min-h-screen bg-stone-900 text-stone-100 p-8 md:p-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header con botón volver */}
        <div className="mb-12">
            <Link href="/estaciones" className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver a Estaciones
            </Link>
            
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 text-amber-500">Londres</h1>
            <div className="w-24 h-1 bg-amber-500 mb-8"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="text-xl opacity-90 leading-relaxed text-justify">
                    <p className="mb-6">
                        Londres, fundada en 1558, es la segunda ciudad más antigua de Argentina. Situada al pie de las sierras del Shincal, es un tesoro vivo de historia precolombina y colonial.
                    </p>
                    <p>
                        Conocida como la "Cuna de la Nuez", esta localidad combina paisajes áridos con verdes nogales y una tradición textil que se ha transmitido de generación en generación. Aquí, el tiempo parece detenerse entre ruinas incas y telares que siguen cantando historias antiguas.
                    </p>
                </div>
                <div className="bg-amber-900/30 rounded-2xl p-8 border border-amber-500/20">
                    <h3 className="text-2xl font-bold mb-4 text-amber-400">Datos de Interés</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="font-bold text-amber-200 w-32">Ubicación:</span>
                            <span>Departamento Belén, Ruta Nacional 40</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-amber-200 w-32">Altitud:</span>
                            <span>1.200 m.s.n.m.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-amber-200 w-32">Clima:</span>
                            <span>Árido de sierras y bolsones</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-amber-200 w-32">Fundación:</span>
                            <span>1558 (Juan Pérez de Zurita)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Sliders Section */}
        <div className="space-y-20">
            <section>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-100">Productos Locales</h2>
                    <span className="text-amber-500 text-sm font-bold uppercase tracking-widest">Artesanía Textil</span>
                </div>
                <FlipCarousel items={productos} />
            </section>

            <section>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-100">Experiencias</h2>
                    <span className="text-stone-400 text-sm font-bold uppercase tracking-widest">Vivencias Únicas</span>
                </div>
                <FlipCarousel items={experiencias} />
            </section>
        </div>
      </div>
    </main>
  );
}
