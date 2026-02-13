import Link from "next/link";

const estaciones = [
  {
    name: "Londres",
    description: "La segunda ciudad más antigua del país, rica en historia y tradición.",
    img: "bg-amber-900"
  },
  {
    name: "Belén",
    description: "Cuna del Poncho. Famosa por sus tejidos de vicuña y llama.",
    img: "bg-rose-900"
  },
  {
    name: "Cóndor Huasi",
    description: "Pequeña localidad con gran riqueza arqueológica y textil.",
    img: "bg-orange-900"
  },
  {
    name: "La Puerta de San José",
    description: "Entrada a los valles y hogar de artesanos tradicionales.",
    img: "bg-yellow-900"
  },
  {
    name: "San Fernando",
    description: "Punto de partida y centro de comercialización de artesanías.",
    img: "bg-stone-800"
  },
  {
    name: "Hualfín",
    description: "Tierra de viñedos y tejidos ancestrales entre montañas.",
    img: "bg-red-900"
  },
  {
    name: "El Durazno",
    description: "Paisajes de altura y tradiciones que perduran en el tiempo.",
    img: "bg-pink-900"
  },
  {
    name: "Corral Quemado",
    description: "Comunidad arraigada a la tierra y a la producción artesanal.",
    img: "bg-purple-900"
  },
  {
    name: "Villa Vil",
    description: "Puerta de acceso a la Puna y sus secretos textiles.",
    img: "bg-indigo-900"
  },
  {
    name: "Laguna Blanca",
    description: "Reserva de la Biosfera y santuario de la vicuña.",
    img: "bg-cyan-900"
  },
  {
    name: "El Peñón",
    description: "Oasis en la Puna, rodeado de volcanes y campos de piedra pómez.",
    img: "bg-teal-900"
  },
  {
    name: "Antofagasta de la Sierra",
    description: "Hogar de la vicuña en la Puna catamarqueña.",
    img: "bg-slate-800"
  },
  {
    name: "San José",
    description: "Historia y fe se entrelazan con la labor de los artesanos.",
    img: "bg-blue-900"
  },
  {
    name: "Santa María",
    description: "Capital de los Valles Calchaquíes, con fuerte identidad precolombina.",
    img: "bg-emerald-900"
  }
];

export default function Estaciones() {
  return (
    <main className="min-h-screen bg-stone-900 text-stone-100 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
            <Link href="/?s=2" className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver al inicio
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Estaciones de la Ruta</h1>
            <div className="w-24 h-1 bg-emerald-500 mb-8"></div>
            <p className="text-xl opacity-80 max-w-3xl mb-12">
              Recorre los puntos clave donde la tradición textil cobra vida. Cada estación ofrece una experiencia única conectada con el territorio y sus artesanos.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {estaciones.map((estacion, index) => {
        const CardContent = (
            <>
                <div className={`h-48 ${estacion.img} relative`}>
                    {/* Placeholder para imagen */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 text-4xl font-bold uppercase tracking-widest">
                        {estacion.name.charAt(0)}
                    </div>
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{estacion.name}</h3>
                    <p className="text-stone-300 leading-relaxed">
                        {estacion.description}
                    </p>
                </div>
            </>
        );

        return estacion.name === "Londres" ? (
            <Link key={index} href="/estaciones/londres" className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition-colors bg-white/5 block">
                {CardContent}
            </Link>
        ) : (
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition-colors bg-white/5">
                {CardContent}
            </div>
        );
    })}
        </div>
      </div>
    </main>
  );
}
