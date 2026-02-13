import Link from "next/link";

interface Productor {
  name: string;
  specialty: string;
  phone: string;
}

interface EstacionProduccion {
  name: string;
  description: string;
  slug: string; // Para linkear a la estación si se desea
  productores: Productor[];
}

const estaciones: EstacionProduccion[] = [
  {
    name: "Belén",
    description: "Conocida como la 'Cuna del Poncho', Belén es el epicentro de la tradición textil catamarqueña. Aquí se tejen ponchos de vicuña, llama y oveja con técnicas ancestrales.",
    slug: "belen",
    productores: [
      { name: "Artesanías 'El Telar de Belén'", specialty: "Ponchos de Vicuña y Llama", phone: "5493835111111" },
      { name: "Familia Avar Saracho", specialty: "Tejidos tradicionales", phone: "5493835222222" },
      { name: "Rua Chaky", specialty: "Ponchos finos de oveja", phone: "5493835333333" }
    ]
  },
  {
    name: "Londres",
    description: "En la segunda ciudad más antigua del país, la tradición del poncho se entrelaza con la historia incaica. Sus artesanos destacan por el hilado fino y el teñido natural.",
    slug: "londres",
    productores: [
      { name: "Cooperativa 'Cuna de la Nuez'", specialty: "Ponchos de Llama y Oveja", phone: "5493835444444" },
      { name: "Tejedores del Shincal", specialty: "Diseños precolombinos", phone: "5493835555555" }
    ]
  },
  {
    name: "Villa Vil",
    description: "Puerta de entrada a la Puna, donde la fibra de llama y vicuña es la protagonista. Los ponchos de esta región son conocidos por su rusticidad elegante y calidez extrema.",
    slug: "villa-vil",
    productores: [
      { name: "Artesanos de la Puna", specialty: "Fibra de Vicuña pura", phone: "5493835666666" },
      { name: "Hilanderas de Villa Vil", specialty: "Ponchos rústicos", phone: "5493835777777" }
    ]
  },
  {
    name: "Laguna Blanca",
    description: "Hogar de la Reserva de la Biosfera y del Chaku de la Vicuña. Aquí se obtiene la fibra más fina de manera sustentable, dando origen a prendas de valor incalculable.",
    slug: "laguna-blanca",
    productores: [
      { name: "Asociación Mesa Local", specialty: "Certificación de origen Vicuña", phone: "5493835888888" }
    ]
  }
];

export default function PonchosPage() {
  return (
    <main className="min-h-screen bg-stone-900 text-stone-100 p-8 md:p-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
            <Link href="/productos" className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver a Productos
            </Link>
            
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 text-amber-500">Ponchos</h1>
            <div className="w-24 h-1 bg-amber-500 mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                <div className="text-lg opacity-90 leading-relaxed text-justify space-y-4">
                    <p>
                        El poncho catamarqueño es mucho más que una prenda de abrigo; es un símbolo de identidad, tradición y maestría artesanal. Reconocido mundialmente por su calidad, cada pieza cuenta una historia tejida con paciencia y sabiduría transmitida de generación en generación.
                    </p>
                    <p>
                        Realizados en telares criollos con lanas de vicuña, llama u oveja, los ponchos de la Ruta del Telar se destacan por sus diseños, que pueden ser lisos, con guardas o con complejos patrones iconográficos. El proceso, desde la esquila hasta el fleco final, es enteramente manual y respetuoso con el medio ambiente.
                    </p>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden bg-stone-800 shadow-2xl border border-white/10 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 to-stone-900/40 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-stone-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-stone-600">
                            <path d="M20.42 4.82A7 7 0 0 0 12 1.5a7 7 0 0 0-8.42 3.32 3 3 0 0 0-.42 1.43V22a1 1 0 0 0 1.56.83L12 18.17l7.29 4.66A1 1 0 0 0 20.85 22V6.25a3 3 0 0 0-.43-1.43z"></path>
                        </svg>
                    </div>
                    <div className="absolute bottom-4 right-4 z-20 bg-black/60 px-3 py-1 rounded text-xs text-amber-400 font-bold uppercase tracking-wider">
                        Símbolo Cultural
                    </div>
                </div>
            </div>
        </div>

        {/* Estaciones y Productores */}
        <div className="space-y-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-stone-200">Estaciones Productoras</h2>
            
            {estaciones.map((estacion, index) => (
                <div key={index} className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-amber-500/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-amber-500 mb-2">{estacion.name}</h3>
                            <p className="text-stone-400 max-w-2xl text-sm md:text-base">{estacion.description}</p>
                        </div>
                        <Link href={`/estaciones`} className="px-4 py-2 rounded-full border border-stone-600 text-stone-400 hover:text-white hover:border-white text-sm transition-all text-center">
                            Ver Estación
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {estacion.productores.map((productor, pIndex) => (
                            <div key={pIndex} className="bg-stone-900/50 p-5 rounded-xl border border-white/5 flex flex-col justify-between hover:bg-stone-900 transition-colors">
                                <div>
                                    <h4 className="font-bold text-stone-200 mb-1">{productor.name}</h4>
                                    <p className="text-xs text-stone-500 uppercase tracking-wide mb-4">{productor.specialty}</p>
                                </div>
                                <a 
                                    href={`https://wa.me/${productor.phone}?text=Hola, estoy interesado en sus ponchos de ${estacion.name}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full py-2 px-4 bg-green-600/90 hover:bg-green-500 text-white rounded-lg text-sm font-bold transition-colors gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    Contactar
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
