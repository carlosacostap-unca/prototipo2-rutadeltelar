import Link from "next/link";

const productores = [
  {
    name: "María Gómez",
    specialty: "Hilado fino y teñido natural",
    location: "Barrio San Isidro, Londres",
    phone: "5493835123456"
  },
  {
    name: "Cooperativa 'El Telar'",
    specialty: "Tejidos tradicionales en telar criollo",
    location: "Centro, Londres",
    phone: "5493835654321"
  },
  {
    name: "Juan Pérez",
    specialty: "Diseños contemporáneos en fibra de vicuña",
    location: "Ruta 40, Km 4080",
    phone: "5493835987654"
  }
];

export default function PonchoVicunaPage() {
  return (
    <main className="min-h-screen bg-stone-900 text-stone-100 p-8 md:p-16">
      <div className="max-w-5xl mx-auto">
        {/* Header con navegación */}
        <div className="mb-12">
            <Link href="/estaciones/londres" className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver a Londres
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-amber-500">Poncho de Vicuña</h1>
            <p className="text-xl text-stone-300 font-light tracking-wide mb-8">El "Oro de los Andes" hecho prenda</p>
            <div className="w-24 h-1 bg-amber-500 mb-12"></div>
        </div>

        {/* Sección de Información Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 text-lg text-stone-300 leading-relaxed text-justify">
                <p>
                    El poncho de vicuña es una de las piezas textiles más exquisitas y valoradas del mundo. Tejido con la fibra de la vicuña, un camélido silvestre que habita en la Puna, esta prenda destaca por su extrema suavidad, ligereza y capacidad térmica.
                </p>
                <p>
                    En Londres y Belén, la tradición de tejer ponchos se remonta a siglos atrás. El proceso comienza con el "Chaku", la esquila sustentable de la vicuña, seguido por un minucioso descerdado manual para separar la fibra fina de la gruesa. Luego, el hilado se realiza con huso, logrando un hilo de grosor uniforme y resistencia única.
                </p>
                <p>
                    Finalmente, el tejido en telar criollo requiere meses de dedicación. Cada poncho es una obra de arte irrepetible que lleva impresa la identidad de su tejedor y la historia de la tierra catamarqueña.
                </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden bg-stone-800 shadow-2xl border border-white/10 group">
                 {/* Placeholder para imagen del producto */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 to-stone-900/40 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-stone-800">
                     <span className="text-stone-600 text-lg uppercase tracking-widest font-bold">Imagen del Poncho</span>
                </div>
                {/* Detalles flotantes */}
                <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                        <span className="block text-xs text-amber-400 uppercase tracking-wider mb-1">Material</span>
                        <span className="text-white font-medium">100% Fibra de Vicuña</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Sección de Productores */}
        <div className="bg-stone-800/30 rounded-3xl p-8 md:p-12 border border-white/5">
            <h2 className="text-3xl font-bold mb-8 text-center text-amber-100">Productores Locales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productores.map((productor, index) => (
                    <div key={index} className="bg-stone-800 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all hover:-translate-y-1 shadow-lg">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-900/30 text-amber-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{productor.name}</h3>
                        <p className="text-stone-400 text-sm mb-4 min-h-[40px]">{productor.specialty}</p>
                        <div className="flex items-center text-xs text-stone-500 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            {productor.location}
                        </div>
                        <a 
                            href={`https://wa.me/${productor.phone}?text=Hola, estoy interesado en sus productos de vicuña.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full py-3 px-4 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold transition-colors gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            Contactar
                        </a>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </main>
  );
}
