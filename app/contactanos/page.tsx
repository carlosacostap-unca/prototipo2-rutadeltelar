import Link from "next/link";

export default function Contactanos() {
  return (
    <main className="min-h-screen bg-stone-900 text-stone-100 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver al inicio
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Contáctanos</h1>
            <div className="w-24 h-1 bg-indigo-500 mb-8"></div>
            <p className="text-xl opacity-80 max-w-3xl mb-12">
              ¿Tienes alguna consulta o sugerencia? Envíanos un mensaje y el equipo de la Ruta del Telar te responderá a la brevedad.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div className="bg-stone-800/50 rounded-2xl p-8 border border-white/5">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="nombre" className="text-sm font-medium text-stone-300">Nombre</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                className="w-full bg-stone-900/50 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="apellido" className="text-sm font-medium text-stone-300">Apellido</label>
                            <input 
                                type="text" 
                                id="apellido" 
                                className="w-full bg-stone-900/50 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder="Tu apellido"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-stone-300">Correo Electrónico</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full bg-stone-900/50 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                            placeholder="tucorreo@ejemplo.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="asunto" className="text-sm font-medium text-stone-300">Asunto</label>
                        <select 
                            id="asunto" 
                            className="w-full bg-stone-900/50 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none"
                        >
                            <option value="">Selecciona un motivo</option>
                            <option value="consulta">Consulta General</option>
                            <option value="visita">Planificación de Visita</option>
                            <option value="prensa">Prensa y Comunicación</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="mensaje" className="text-sm font-medium text-stone-300">Mensaje</label>
                        <textarea 
                            id="mensaje" 
                            rows={5}
                            className="w-full bg-stone-900/50 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                            placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-4 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors shadow-lg shadow-indigo-900/20"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>

            {/* Información adicional */}
            <div className="space-y-8">
                <div className="bg-indigo-900/20 rounded-2xl p-8 border border-indigo-500/20">
                    <h3 className="text-2xl font-bold mb-6 text-indigo-300">Oficina Central</h3>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-indigo-500/20 p-3 rounded-lg mr-4 text-indigo-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-200">Dirección</h4>
                                <p className="text-stone-400">Av. Güemes 800, San Fernando del Valle de Catamarca</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="bg-indigo-500/20 p-3 rounded-lg mr-4 text-indigo-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-200">Teléfono</h4>
                                <p className="text-stone-400">+54 383 445-5600</p>
                                <p className="text-sm text-stone-500">Lunes a Viernes, 8:00 - 18:00 hs</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-indigo-500/20 p-3 rounded-lg mr-4 text-indigo-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-200">Email</h4>
                                <p className="text-stone-400">contacto@rutadeltelar.gob.ar</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-stone-800 rounded-2xl p-8 border border-white/5">
                    <h3 className="text-xl font-bold mb-4 text-stone-200">Redes Sociales</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-stone-700 hover:bg-indigo-600 text-stone-300 hover:text-white p-3 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="bg-stone-700 hover:bg-pink-600 text-stone-300 hover:text-white p-3 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="bg-stone-700 hover:bg-sky-500 text-stone-300 hover:text-white p-3 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
