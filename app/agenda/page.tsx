import Link from "next/link";

const eventos = [
  {
    title: "Fiesta Nacional del Poncho",
    date: "Julio 2024",
    location: "San Fernando del Valle de Catamarca",
    description: "La fiesta de invierno más grande de Argentina. Exposición de artesanos, música folclórica y gastronomía regional.",
    month: "JUL"
  },
  {
    title: "Inti Raymi (Fiesta del Sol)",
    date: "21 de Junio",
    location: "Santa María",
    description: "Celebración ancestral que marca el solsticio de invierno, agradeciendo al sol por la vida y las cosechas en un marco arqueológico único.",
    month: "JUN"
  },
  {
    title: "Chaku de la Vicuña",
    date: "Noviembre",
    location: "Antofagasta de la Sierra / Laguna Blanca",
    description: "Práctica ancestral de esquila sustentable de vicuñas. Una experiencia comunitaria única en la Puna catamarqueña.",
    month: "NOV"
  },
  {
    title: "Feria Artesanal de Belén",
    date: "Enero",
    location: "Belén",
    description: "Encuentro de tejedores y artesanos de la 'Cuna del Poncho', con demostraciones de técnicas y venta de productos exclusivos.",
    month: "ENE"
  },
  {
    title: "Festival del Fuerte",
    date: "Enero",
    location: "Andalgalá",
    description: "Festival folclórico que reúne a grandes artistas nacionales y locales, celebrando la identidad cultural de la perla del oeste.",
    month: "ENE"
  },
  {
    title: "Semana de Londres",
    date: "Febrero",
    location: "Londres",
    description: "Celebración del aniversario de la segunda ciudad más antigua del país, con actividades culturales, desfiles y ferias.",
    month: "FEB"
  }
];

export default function Agenda() {
  return (
    <main className="min-h-screen bg-stone-900 text-stone-100 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
            <Link href="/?s=5" className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver al inicio
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Agenda Cultural</h1>
            <div className="w-24 h-1 bg-violet-500 mb-8"></div>
            <p className="text-xl opacity-80 max-w-3xl mb-12">
              Conecta con nuestras tradiciones a través de las festividades que dan vida a la Ruta del Telar durante todo el año.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventos.map((evento, index) => (
                <div key={index} className="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/5 group">
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div className="bg-violet-900/50 text-violet-200 px-4 py-2 rounded-lg text-center min-w-[80px] border border-violet-500/30">
                                <span className="block text-2xl font-bold">{evento.month}</span>
                            </div>
                            <div className="text-right max-w-[60%]">
                                <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">Ubicación</span>
                                <span className="text-sm font-medium text-stone-200">{evento.location}</span>
                            </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-300 transition-colors">{evento.title}</h3>
                        <p className="text-sm text-stone-400 mb-4 font-mono">{evento.date}</p>
                        <p className="text-stone-300 leading-relaxed text-sm">
                            {evento.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
