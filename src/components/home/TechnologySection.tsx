'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TechnologySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const techCards = containerRef.current.querySelectorAll('.tech-card');
      
      gsap.fromTo(techCards,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }
  }, []);

  const technologies = [
    "Artificial Intelligence", "Computer Vision", "Edge AI", "GPS & RTK",
    "Thermal Imaging", "LiDAR", "Obstacle Avoidance", "SLAM", "ROS", "Machine Learning"
  ];

  return (
    <section id="technology" className="py-32 bg-brand-black relative border-t border-white/5" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-8">Technology</h2>
          <div className="w-16 h-[1px] bg-brand-white/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map((tech, i) => (
            <div key={i} className="tech-card border border-white/10 bg-brand-charcoal p-8 text-center hover:bg-white hover:text-black transition-all duration-300 cursor-default rounded-sm">
              <span className="text-xs uppercase tracking-widest font-bold block">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
