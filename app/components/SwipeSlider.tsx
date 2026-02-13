"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(Observer);

const sections = [
  {
    title: "Bienvenido",
    subtitle: "Ruta del Telar",
    description: "Un programa cultural y productivo que articula territorio, comunidades y saberes ancestrales de Catamarca.",
    bg: "bg-stone-900",
    text: "text-stone-100"
  },
  {
    title: "¿Qué es la ruta del telar?",
    subtitle: "Institucional",
    description: "Conoce más sobre nuestro proyecto y misión.",
    link: "/que-es-la-ruta",
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
      onDown: () => {
        if (!animating.current && currentIndexRef.current > 0) {
            gotoPanel(currentIndexRef.current - 1, false);
        }
      },
      onUp: () => {
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
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 transition-opacity duration-300">
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
            <div className="max-w-4xl">
                <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest mb-4 opacity-80">
                    {section.subtitle}
                </h3>
                <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                    {section.title}
                </h2>
                <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90 leading-relaxed mb-10">
                    {section.description}
                </p>
                {section.link && (
                    <Link
                        href={section.link}
                        className="inline-block px-8 py-3 border-2 border-white/50 rounded-full text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                        Ver más
                    </Link>
                )}
            </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 w-full text-center z-50 opacity-50 text-white text-sm animate-bounce pointer-events-none transition-opacity duration-300">
        Desliza o haz scroll para navegar
      </div>
    </div>
  );
}
