"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

import Link from "next/link";

interface CardItem {
  title: string;
  description: string;
  bg: string;
  href?: string;
}

interface FlipCarouselProps {
  items: CardItem[];
}

export default function FlipCarousel({ items }: FlipCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const gap = 40; // Gap between cards
    const cardWidth = 300; // Fixed card width
    const totalWidth = (cardWidth + gap) * items.length - gap;
    const startX = (container.offsetWidth - cardWidth) / 2; // Center first card

    // Initial positioning
    gsap.set(track, { x: startX });
    
    // Animation update function
    const updateCards = () => {
      const trackX = gsap.getProperty(track, "x") as number;
      
      cards.forEach((card, i) => {
        const cardX = trackX + i * (cardWidth + gap); // Card position relative to container
        const center = container.offsetWidth / 2;
        const dist = cardX + cardWidth / 2 - center;
        const progress = dist / (center + cardWidth); // Normalized distance (-1 to 1 approx)
        
        // 3D Effect logic
        const scale = 1 - Math.min(Math.abs(progress) * 0.4, 0.4); // Scale down as it moves away
        const rotation = Math.max(Math.min(progress * 45, 45), -45); // Rotate slightly
        const opacity = 1 - Math.min(Math.abs(progress) * 0.6, 0.6);
        const zIndex = Math.round(100 - Math.abs(dist));

        gsap.set(card, {
          scale: scale,
          rotationY: rotation,
          opacity: opacity,
          zIndex: zIndex,
          transformOrigin: "center center",
          transformPerspective: 1000
        });
      });
    };

    // Initialize Draggable
    Draggable.create(track, {
      type: "x",
      inertia: true, // Will work if InertiaPlugin is available, otherwise just drag
      bounds: {
        minX: startX - (totalWidth - cardWidth), // Prevent dragging too far left
        maxX: startX // Prevent dragging too far right (start position)
      },
      edgeResistance: 0.65,
      onDrag: updateCards,
      onThrowUpdate: updateCards, // For inertia if available
      onDragEnd: function() {
        // Snap to nearest card
        const currentX = this.x;
        const cardSpace = cardWidth + gap;
        // Calculate nearest index
        // x = startX - index * cardSpace
        // index = (startX - x) / cardSpace
        let index = Math.round((startX - currentX) / cardSpace);
        index = Math.max(0, Math.min(items.length - 1, index));
        
        const targetX = startX - index * cardSpace;
        
        gsap.to(track, {
          x: targetX,
          duration: 0.5,
          ease: "power2.out",
          onUpdate: updateCards
        });
      }
    });

    // Initial update
    updateCards();

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full h-[500px] overflow-hidden relative perspective-1000 select-none cursor-grab active:cursor-grabbing touch-pan-y">
      <div ref={trackRef} className="absolute top-0 left-0 h-full flex items-center" style={{ gap: '40px' }}>
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            className={`w-[300px] h-[400px] flex-shrink-0 rounded-2xl p-8 flex flex-col justify-end shadow-2xl ${item.bg} relative transform-style-3d group`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-white/80 text-lg leading-snug mb-4">{item.description}</p>
              {item.href && (
                <Link 
                  href={item.href}
                  className="absolute inset-0 z-20"
                  draggable={false}
                  aria-label={`Ver detalles de ${item.title}`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Visual hint for interaction */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-sm font-light tracking-widest uppercase pointer-events-none animate-pulse">
        Desliza para explorar
      </div>
    </div>
  );
}
