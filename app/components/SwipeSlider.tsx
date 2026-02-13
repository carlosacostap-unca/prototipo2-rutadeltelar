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
    description: "Un programa cultural y productivo que articula territorio, comunidades y saberes ancestrales de Catamarca.",
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
  const detailRef = useRef<HTMLDivElement>(null);
  const detailContentRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);
  const [activeDetailContent, setActiveDetailContent] = useState<string[] | null>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const gotoPanel = contextSafe((index: number, isNext: boolean) => {
    if (animating.current || index === currentIndexRef.current || detailOpen) return;
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

  const openDetail = contextSafe(() => {
    if (detailOpen) return;
    setDetailOpen(true);
    setActiveDetailContent(sections[currentIndexRef.current].longText || null);
    
    gsap.to(detailRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        display: "flex"
    });
  });

  const closeDetail = contextSafe(() => {
    gsap.to(detailRef.current, {
        yPercent: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
            setDetailOpen(false);
            setActiveDetailContent(null);
            // Reset display to hidden after animation
            gsap.set(detailRef.current, { display: "none" });
        }
    });
  });

  useGSAP(() => {
    const slides = gsap.utils.toArray(".panel") as HTMLElement[];
    gsap.set(slides, { xPercent: 100, zIndex: 0 });
    gsap.set(slides[0], { xPercent: 0, zIndex: 1 });
    
    // Initial setup for detail panel
    gsap.set(detailRef.current, { yPercent: 100, opacity: 0, display: "none" });

    const observer = Observer.create({
      target: containerRef.current,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => {
        // Handle Detail View Navigation
        if (detailOpen && detailContentRef.current) {
            const el = detailContentRef.current;
            // If scrolled to top (with tolerance), go to previous section
            if (el.scrollTop <= 5) {
                closeDetail();
                if (currentIndexRef.current > 0) {
                    // Delay navigation slightly to allow close animation to start
                    setTimeout(() => gotoPanel(currentIndexRef.current - 1, false), 100);
                }
            }
            return;
        }

        if (!detailOpen && !animating.current && currentIndexRef.current > 0) {
            gotoPanel(currentIndexRef.current - 1, false);
        }
      },
      onUp: () => {
        // Handle Detail View Navigation
        if (detailOpen && detailContentRef.current) {
            const el = detailContentRef.current;
            // If scrolled to bottom (with tolerance), go to next section
            if (Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) <= 5) {
                closeDetail();
                if (currentIndexRef.current < slides.length - 1) {
                    setTimeout(() => gotoPanel(currentIndexRef.current + 1, true), 100);
                }
            }
            return;
        }

        if (!detailOpen && !animating.current && currentIndexRef.current < slides.length - 1) {
            gotoPanel(currentIndexRef.current + 1, true);
        }
      },
      tolerance: 10,
      preventDefault: !detailOpen // Only prevent default if detail is closed to allow native scroll
    });

    return () => observer.kill();
  }, { scope: containerRef });

  const currentSection = sections[currentIndex];

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden bg-black touch-none">
        {/* Navigation Indicators */}
        <div className={`absolute top-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 transition-opacity duration-300 ${detailOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
                {section.longText && (
                    <button 
                        onClick={openDetail}
                        className="px-8 py-3 border-2 border-white/50 rounded-full text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                        Leer más
                    </button>
                )}
            </div>
        </div>
      ))}
      
      {/* Detail Overlay */}
      <div 
        ref={detailRef}
        className={`fixed inset-0 z-[100] ${currentSection.bg} ${currentSection.text} flex flex-col p-8 md:p-16 overflow-hidden hidden`}
      >
        <button 
            onClick={closeDetail}
            className="absolute top-8 right-8 p-4 rounded-full hover:bg-white/10 transition-colors z-50"
            aria-label="Cerrar detalle"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>

        <div ref={detailContentRef} className="flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent max-w-4xl mx-auto w-full pt-12">
            <h3 className="text-xl font-light uppercase tracking-widest mb-4 opacity-80">
                {currentSection.subtitle}
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
                {currentSection.title}
            </h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed opacity-90 pb-20">
                {activeDetailContent?.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </div>
        </div>
      </div>
      
      <div className={`absolute bottom-8 w-full text-center z-50 opacity-50 text-white text-sm animate-bounce pointer-events-none transition-opacity duration-300 ${detailOpen ? 'opacity-0' : 'opacity-50'}`}>
        Desliza o haz scroll para navegar
      </div>
    </div>
  );
}
