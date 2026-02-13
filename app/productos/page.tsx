import Link from "next/link";

const productos = [
  {
    name: "Ponchos",
    description: "Prenda emblemática de Catamarca, tejida en telar criollo con lana de vicuña, llama u oveja. Destacan por su finura y diseños tradicionales.",
    category: "Indumentaria",
    href: "/productos/ponchos"
  },
  {
    name: "Mantas",
    description: "Piezas de abrigo de gran tamaño, caracterizadas por su suavidad y calidez. Ideales para el hogar o uso personal.",
    category: "Hogar"
  },
  {
    name: "Bufandas y Chalinas",
    description: "Accesorios versátiles tejidos con fibras finas. Ofrecen elegancia y protección contra el frío con texturas únicas.",
    category: "Accesorios"
  },
  {
    name: "Tapices",
    description: "Obras de arte textil que plasman paisajes, iconografía precolombina y escenas de la vida cotidiana de los valles.",
    category: "Decoración"
  },
  {
    name: "Alfombras",
    description: "Tejidos resistentes y coloridos, elaborados con técnicas de nudo o telar, que aportan calidez a cualquier ambiente.",
    category: "Hogar"
  },
  {
    name: "Fajas",
    description: "Cintas tejidas con complejos patrones geométricos, utilizadas tradicionalmente como cinturones o elementos decorativos.",
    category: "Accesorios"
  }
];

export default function Productos() {
  return (
    <main className="min-h-screen bg-stone-900 text-stone-100 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
            <Link href="/?s=3" className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver al inicio
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Nuestros Productos</h1>
            <div className="w-24 h-1 bg-amber-500 mb-8"></div>
            <p className="text-xl opacity-80 max-w-3xl mb-12">
              Descubre la excelencia artesanal de la Ruta del Telar. Cada pieza es única, fruto de saberes ancestrales y fibras naturales de la más alta calidad.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto, index) => {
                // @ts-ignore
                const hasLink = !!producto.href;
                
                const CardContent = (
                    <div className={`group flex flex-col bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 hover:transform hover:scale-[1.02] h-full ${hasLink ? 'cursor-pointer' : ''}`}>
                        <div className="h-64 bg-stone-800 relative overflow-hidden">
                            {/* Placeholder visual para imagen de producto */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                            <div className="absolute top-4 right-4 bg-amber-900/80 text-amber-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {producto.category}
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-amber-100/90">{producto.name}</h3>
                                {hasLink && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                )}
                            </div>
                            <p className="text-stone-300 leading-relaxed text-sm flex-1">
                                {producto.description}
                            </p>
                        </div>
                    </div>
                );

                if (hasLink) {
                    return (
                        // @ts-ignore
                        <Link key={index} href={producto.href} className="block h-full">
                            {CardContent}
                        </Link>
                    );
                }

                return <div key={index} className="h-full">{CardContent}</div>;
            })}
        </div>
      </div>
    </main>
  );
}
