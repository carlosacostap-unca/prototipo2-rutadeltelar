import Link from "next/link";

const roles = [
  {
    title: "Para Artesanos",
    description: "Si produces textiles tradicionales, únete a nuestra red para acceder a capacitaciones, insumos y nuevos canales de comercialización.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l.77.77a4.308 4.308 0 0 1 6.11 6.11l-.77.77a5.4 5.4 0 0 0 1.54-7.65z"></path>
        <path d="M16.2 9.6a5.4 5.4 0 0 0-7.65 0l-.77-.77a4.308 4.308 0 0 1 6.11-6.11l.77.77a5.4 5.4 0 0 0 1.54 6.11z"></path>
        <path d="M12 12l-8.5 8.5"></path>
        <path d="M8.5 8.5l-5 5"></path>
        <path d="M12 12l3.5-3.5"></path>
      </svg>
    ),
    action: "Inscribirse como Artesano"
  },
  {
    title: "Para Voluntarios",
    description: "Colabora en la organización de eventos, preservación del patrimonio y asistencia técnica en las comunidades locales.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    action: "Quiero ser Voluntario"
  },
  {
    title: "Para Prestadores Turísticos",
    description: "Si tienes un alojamiento, restaurante o servicio turístico en la zona, intégrate al circuito oficial de la Ruta del Telar.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"></path>
        <path d="M5 21V7l8-4 8 4v14"></path>
        <path d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
      </svg>
    ),
    action: "Registrar Servicio"
  }
];

export default function Sumate() {
  return (
    <main className="min-h-screen bg-stone-900 text-stone-100 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
            <Link href="/?s=7" className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver al inicio
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Sumate a la Ruta</h1>
            <div className="w-24 h-1 bg-teal-500 mb-8"></div>
            <p className="text-xl opacity-80 max-w-3xl mb-12">
              Este proyecto crece gracias a la participación de todos. Descubre cómo puedes ser parte activa de la preservación y promoción de nuestra cultura.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {roles.map((role, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 group flex flex-col">
                    <div className="mb-6 text-teal-400 group-hover:scale-110 transition-transform duration-300">
                        {role.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-stone-100">{role.title}</h3>
                    <p className="text-stone-300 leading-relaxed mb-8 flex-1">
                        {role.description}
                    </p>
                    <button className="w-full py-3 px-6 rounded-lg bg-teal-900/50 hover:bg-teal-700 text-teal-100 font-medium transition-colors border border-teal-500/30">
                        {role.action}
                    </button>
                </div>
            ))}
        </div>

        <div className="bg-stone-800 rounded-2xl p-8 md:p-12 border border-white/5 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Tienes otra propuesta?</h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8">
                Estamos abiertos a nuevas ideas, colaboraciones institucionales y proyectos de investigación que enriquezcan la Ruta del Telar.
            </p>
            <a 
                href="mailto:contacto@rutadeltelar.gob.ar" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 rounded-full font-bold text-lg hover:bg-stone-200 transition-colors"
            >
                Escríbenos
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </a>
        </div>
      </div>
    </main>
  );
}
