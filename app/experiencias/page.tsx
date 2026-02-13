import Link from "next/link";

const experiencias = [
  {
    title: "Talleres de Tejido",
    description: "Aprende las técnicas ancestrales directamente de las manos de los artesanos. Desde el hilado hasta el tejido en telar criollo.",
    duration: "2-4 horas",
    location: "Belén y Santa María"
  },
  {
    title: "Esquila de Vicuñas (Chaku)",
    description: "Participa en la captura y esquila sustentable de vicuñas en silvestría, una práctica ancestral que respeta el bienestar animal.",
    duration: "Día completo",
    location: "Antofagasta de la Sierra"
  },
  {
    title: "Ruta Gastronómica",
    description: "Degusta los sabores de Catamarca: nueces confitadas, vinos de altura y platos regionales que acompañan el recorrido.",
    duration: "Variable",
    location: "Todo el recorrido"
  },
  {
    title: "Visitas a Talleres Artesanales",
    description: "Ingresa a los hogares y talleres de los tejedores para conocer su historia, su vida cotidiana y el proceso creativo.",
    duration: "1-2 horas",
    location: "Londres y Belén"
  },
  {
    title: "Caminatas Arqueológicas",
    description: "Explora los vestigios de las civilizaciones precolombinas que habitaron la región, como el Shinkal de Quimivil.",
    duration: "3-5 horas",
    location: "Londres"
  }
];

export default function Experiencias() {
  return (
    <main className="min-h-screen bg-stone-900 text-stone-100 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
            <Link href="/?s=4" className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver al inicio
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Experiencias Vivenciales</h1>
            <div className="w-24 h-1 bg-orange-500 mb-8"></div>
            <p className="text-xl opacity-80 max-w-3xl mb-12">
              La Ruta del Telar no es solo un recorrido visual, es una inmersión en la cultura viva. Participa, aprende y conecta con la esencia de Catamarca.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {experiencias.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-orange-100">{exp.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-stone-400 mb-4 uppercase tracking-wide font-medium">
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                {exp.duration}
                            </span>
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                {exp.location}
                            </span>
                        </div>
                        <p className="text-stone-300 leading-relaxed">
                            {exp.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
