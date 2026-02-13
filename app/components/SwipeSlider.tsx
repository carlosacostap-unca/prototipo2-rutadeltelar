"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Observer);

const sections = [
  {
    title: "Bienvenido",
    subtitle: "Ruta del Telar",
    description: "Explora la tradición y el arte de nuestros tejidos.",
    longText: [
      "En Catamarca, la Ruta del Telar abarca desde las singularidades del territorio, favorables para la cría de llamas y ovejas, la captura y esquila de vicuñas (animales en silvestría) de las que se extraen fibras de alta calidad; la reivindicación de los rituales culturales en torno a ella; la revalorización de las técnicas ancestrales en el proceso de transformación artesanal; hasta la comercialización de productos de alto valor material y cultural. Por tratarse de un proyecto inclusivo, se suman otras actividades productivas y de servicios, con el objetivo de conformar un producto turístico sustentable.",
      "La Ruta del Telar Catamarca propone impulsar el sueño colectivo de artesanas y artesanos que muestran orgullosos sus trabajos elaborados a través de técnicas milenarias bajo la cosmovisión andina. Más de 300 familias dedicadas al tejido tradicional en telar criollo participan de esta iniciativa, que se desarrolla en el marco de valles, sitios arqueológicos y comidas regionales, preservando los saberes ancestrales de las culturas originarias transmitidos de generación en generación.",
      "Se trata de un proyecto de desarrollo local cuyo principal objetivo es fortalecer las cadenas de valor en la región y crear un producto integral que combine la riqueza natural, arqueológica, cultural y productiva de las zonas que lo integran, destacando la diversidad y singularidad de cada estación fomentando la participación de la comunidad local en el proceso.",
      "El proyecto Ruta del Telar – OVOP Catamarca es impulsado por el Gobierno de Catamarca a través del Ministerio de Trabajo, Planificación y Recursos Humanos de la provincia, junto a la Agencia de Cooperación Internacional del Japón (JICA) en articulación con todos los municipios de las localidades que integran Ruta del Telar."
    ],
    bg: "bg-stone-900",
    text: "text-stone-100"
  },
  {
    title: "Descubre",
    subtitle: "Nuestra Historia",
    description: "Generaciones de sabiduría en cada hilo.",
    bg: "bg-rose-900",
    text: "text-rose-100"
  },
  {
    title: "Explora",
    subtitle: "Los Tejidos",
    description: "Colores y texturas que cuentan historias.",
    bg: "bg-emerald-900",
    text: "text-emerald-100"
  },
  {
    title: "Contacta",
    subtitle: "Visítanos",
    description: "Ven y conoce el proceso artesanal.",
    bg: "bg-amber-900",
    text: "text-amber-100"
  }
];

export default function SwipeSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const gotoPanel = contextSafe((index: number, isNext: boolean) => {
    if (animating.current || index === currentIndexRef.current) return;
    animating.current = true;

    const slides = gsap.utils.toArray(".panel") as HTMLElement[];
    const currentSlide = slides[currentIndexRef.current];
    const nextSlide = slides[index];

    // Ensure proper stacking
    gsap.set(slides, { zIndex: 0 });
    gsap.set(currentSlide, { zIndex: 1 });
    gsap.set(nextSlide, { zIndex: 2 });

    // Animation
    gsap.fromTo(nextSlide, 
        { xPercent: isNext ? 100 : -100, scale: 1 },
        { xPercent: 0, scale: 1, duration: 1, ease: "power3.inOut" }
    );
    
    gsap.fromTo(currentSlide,
        { xPercent: 0, scale: 1 },
        {
            xPercent: isNext ? -20 : 20,
            scale: 0.9,
            duration: 1,
            ease: "power3.inOut",
            onComplete: () => {
                animating.current = false;
                currentIndexRef.current = index;
                setCurrentIndex(index);
            }
        }
    );
  });

  useGSAP(() => {
    const slides = gsap.utils.toArray(".panel") as HTMLElement[];
    gsap.set(slides, { xPercent: 100, zIndex: 0 });
    gsap.set(slides[0], { xPercent: 0, zIndex: 1 });

    const observer = Observer.create({
      target: containerRef.current,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: (self) => {
        // Prevent navigation if interacting with the scrollable text
        if ((self.event?.target as HTMLElement)?.closest('.no-swipe')) return;
        
        if (!animating.current && currentIndexRef.current > 0) {
            gotoPanel(currentIndexRef.current - 1, false);
        }
      },
      onUp: (self) => {
        // Prevent navigation if interacting with the scrollable text
        if ((self.event?.target as HTMLElement)?.closest('.no-swipe')) return;

        if (!animating.current && currentIndexRef.current < slides.length - 1) {
            gotoPanel(currentIndexRef.current + 1, true);
        }
      },
      tolerance: 10,
      preventDefault: true
    });

    return () => observer.kill();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden bg-black touch-none">
        {/* Navigation Indicators */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
            {sections.map((_, i) => (
                <button 
                    key={i} 
                    onClick={() => gotoPanel(i, i > currentIndex)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${i === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>

      {sections.map((section, i) => (
        <div
          key={i}
          className={`panel absolute inset-0 flex flex-col items-center justify-center p-8 text-center ${section.bg} ${section.text}`}
        >
          {section.longText ? (
             <div className="flex flex-col md:flex-row max-w-6xl w-full gap-8 md:gap-16 items-center md:items-start text-left h-full md:h-auto justify-center">
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest mb-4 opacity-80">
                        {section.subtitle}
                    </h3>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        {section.title}
                    </h2>
                    <p className="text-xl opacity-90 italic">
                        {section.description}
                    </p>
                </div>
                <div className="flex-1 no-swipe overflow-y-auto max-h-[50vh] md:max-h-[70vh] pr-4 text-base md:text-lg leading-relaxed opacity-90 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    {section.longText.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
             </div>
          ) : (
            <div className="max-w-4xl">
                <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest mb-4 opacity-80">
                    {section.subtitle}
                </h3>
                <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                    {section.title}
                </h2>
                <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90 leading-relaxed">
                    {section.description}
                </p>
            </div>
          )}
        </div>
      ))}
      
      <div className="absolute bottom-8 w-full text-center z-50 opacity-50 text-white text-sm animate-bounce pointer-events-none">
        Desliza fuera del texto para navegar
      </div>
    </div>
  );
}
