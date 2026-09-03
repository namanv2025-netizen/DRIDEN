'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const textElements = containerRef.current.querySelectorAll('.reveal-text');
      
      gsap.fromTo(textElements,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
        }
      );
    }
  }, []);

  return (
    <section id="vision" className="py-40 bg-brand-black relative border-t border-white/5 overflow-hidden" ref={containerRef}>
      {/* Subtle Technical Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <h2 className="reveal-text text-5xl md:text-8xl font-bold uppercase tracking-[0.2em] mb-12 text-brand-white">
          Our Vision
        </h2>
        <div className="reveal-text w-16 h-[1px] bg-brand-white/30 mx-auto mb-16"></div>
        <p className="reveal-text text-2xl md:text-4xl text-brand-white/80 max-w-4xl mx-auto leading-relaxed tracking-wide font-light">
          Building autonomous aerial intelligence that enhances safety, efficiency, and mission-critical operations across the globe.
        </p>
      </div>
    </section>
  );
}
