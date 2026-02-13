import Link from "next/link";

const contactos = [
  {
    location: "San Fernando del Valle de Catamarca",
    type: "Oficina de Turismo",
    address: "Gral. Roca 1er. Cuadra, Manzana del Turismo",
    phone: "+54 383 443-7791",
    email: "informes@turismocatamarca.gob.ar",
    website: "turismo.catamarca.gob.ar"
  },
  {
    location: "Belén",
    type: "Dirección de Turismo",
    address: "Lavalle 265",
    phone: "+54 3835 46-1537",
    email: "belenturismo@gmail.com",
    website: "belencatamarca.gob.ar"
  },
  {
    location: "Londres",
    type: "Oficina de Información Turística",
    address: "Ruta Nacional 40 s/n",
    phone: "+54 3835 49-1051",
    email: "turismolondres@gmail.com",
    website: "londres.gob.ar"
  },
  {
    location: "Santa María",
    type: "Secretaría de Turismo",
    address: "San Martín 300",
    phone: "+54 3838 42-1083",
    email: "turismosantamaria@yahoo.com.ar",
    website: "santamaria.gob.ar"
  },
  {
    location: "Antofagasta de la Sierra",
    type: "Casa de Antofagasta",
    address: "Av. Güemes 800 (San Fernando)",
    phone: "+54 383 445-5600",
    email: "antofagastatour@hotmail.com",
    website: "antofagasta.gob.ar"
  }
];

const emergencias = [
  { name: "Emergencias Médicas", number: "107" },
  { name: "Policía", number: "101" },
  { name: "Bomberos", number: "100" },
  { name: "Defensa Civil", number: "103" }
];

export default function Directorio() {
  return (
    <main className="min-h-screen bg-stone-900 text-stone-100 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
            <Link href="/?s=6" className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver al inicio
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Directorio de Contacto</h1>
            <div className="w-24 h-1 bg-cyan-500 mb-8"></div>
            <p className="text-xl opacity-80 max-w-3xl mb-12">
              Información útil y puntos de contacto en cada estación de la Ruta del Telar para planificar tu viaje y resolver consultas.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Oficinas de Turismo
                </h2>
                {contactos.map((contacto, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-cyan-500/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-stone-100">{contacto.location}</h3>
                                <p className="text-cyan-200/80 text-sm font-medium mb-2">{contacto.type}</p>
                                <p className="text-stone-400 flex items-center mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 opacity-70">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    {contacto.address}
                                </p>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p className="flex items-center text-stone-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 opacity-70 text-green-400">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    {contacto.phone}
                                </p>
                                <p className="flex items-center text-stone-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 opacity-70 text-blue-400">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    {contacto.email}
                                </p>
                                <p className="flex items-center text-stone-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 opacity-70 text-purple-400">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                    {contacto.website}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    Emergencias
                </h2>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                    <ul className="space-y-4">
                        {emergencias.map((item, idx) => (
                            <li key={idx} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                                <span className="text-stone-300">{item.name}</span>
                                <span className="text-2xl font-bold text-white">{item.number}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 bg-stone-800 rounded-xl p-6 border border-white/5">
                    <h3 className="text-lg font-bold mb-4">Consejos de Viaje</h3>
                    <ul className="space-y-3 text-sm text-stone-300 list-disc list-inside">
                        <li>Llevar ropa de abrigo, incluso en verano (amplitud térmica).</li>
                        <li>Protección solar y sombreros son indispensables.</li>
                        <li>Hidratarse constantemente por la altura.</li>
                        <li>Cargar combustible siempre que sea posible.</li>
                        <li>Consultar estado de rutas antes de salir.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
