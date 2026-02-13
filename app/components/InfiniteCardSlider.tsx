"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface CardItem {
  title: string;
  description: string;
  bg: string;
}

interface InfiniteCardSliderProps {
  items: CardItem[];
  speed?: number; // Duration for one full cycle
  direction?: "left" | "right";
}

export default function InfiniteCardSlider({ 
  items, 
  speed = 20, 
  direction = "left" 
}: InfiniteCardSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Clone items to ensure seamless loop if not enough items to fill width, 
    // but typically for infinite scroll we need enough content. 
    // Here we assume items are rendered twice in the DOM for the loop effect.
    
    const totalWidth = slider.scrollWidth / 2;
    
    gsap.to(slider, {
      x: direction === "left" ? -totalWidth : 0,
      duration: speed,
      ease: "none",
      repeat: -1,
      startAt: { x: direction === "left" ? 0 : -totalWidth },
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
      }
    });

    // Pause on hover
    const pause = () => gsap.globalTimeline.pause();
    const resume = () => gsap.globalTimeline.play();

    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", resume);

    return () => {
        slider.removeEventListener("mouseenter", pause);
        slider.removeEventListener("mouseleave", resume);
    };

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-8">
      <div ref={sliderRef} className="flex gap-6 w-max">
        {/* Render items twice for infinite loop effect */}
        {[...items, ...items].map((item, i) => (
          <div 
            key={i} 
            className={`w-72 h-96 flex-shrink-0 rounded-xl p-6 flex flex-col justify-end ${item.bg} transition-transform hover:scale-105 hover:shadow-xl`}
          >
            <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
            <p className="text-white/80 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
