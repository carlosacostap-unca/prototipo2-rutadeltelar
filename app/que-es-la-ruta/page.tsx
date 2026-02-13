import Link from "next/link";

export default function QueEsLaRuta() {
  return (
    <main className="min-h-screen bg-stone-900 text-stone-100 p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver al inicio
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">¿Qué es la Ruta del Telar?</h1>
            <div className="w-24 h-1 bg-rose-500 mb-8"></div>
        </div>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed opacity-90 text-justify">
            <p>
                En Catamarca, la Ruta del Telar abarca desde las singularidades del territorio, favorables para la cría de llamas y ovejas, la captura y esquila de vicuñas (animales en silvestría) de las que se extraen fibras de alta calidad; la reivindicación de los rituales culturales en torno a ella; la revalorización de las técnicas ancestrales en el proceso de transformación artesanal; hasta la comercialización de productos de alto valor material y cultural. Por tratarse de un proyecto inclusivo, se suman otras actividades productivas y de servicios, con el objetivo de conformar un producto turístico sustentable.
            </p>
            <p>
                La Ruta del Telar Catamarca propone impulsar el sueño colectivo de artesanas y artesanos que muestran orgullosos sus trabajos elaborados a través de técnicas milenarias bajo la cosmovisión andina. Más de 300 familias dedicadas al tejido tradicional en telar criollo participan de esta iniciativa, que se desarrolla en el marco de valles, sitios arqueológicos y comidas regionales, preservando los saberes ancestrales de las culturas originarias transmitidos de generación en generación.
            </p>
            <p>
                Se trata de un proyecto de desarrollo local cuyo principal objetivo es fortalecer las cadenas de valor en la región y crear un producto integral que combine la riqueza natural, arqueológica, cultural y productiva de las zonas que lo integran, destacando la diversidad y singularidad de cada estación fomentando la participación de la comunidad local en el proceso.
            </p>
            <p>
                El proyecto Ruta del Telar – OVOP Catamarca es impulsado por el Gobierno de Catamarca a través del Ministerio de Trabajo, Planificación y Recursos Humanos de la provincia, junto a la Agencia de Cooperación Internacional del Japón (JICA) en articulación con todos los municipios de las localidades que integran Ruta del Telar.
            </p>
        </div>
      </div>
    </main>
  );
}
