'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll('.reveal-section');
      
      sections.forEach((section) => {
        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
            }
          }
        );
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-brand-black text-brand-white pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <section className="reveal-section mb-32 text-center pt-12">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-[0.2em] mb-6">About DRIDEN</h1>
          <div className="w-16 h-[1px] bg-brand-white/30 mx-auto mb-8"></div>
          <p className="text-xl text-brand-white/60 max-w-3xl mx-auto leading-relaxed tracking-wide">
            We exist to push the boundaries of autonomous intelligence and precision engineering.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="reveal-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">Mission</h2>
            <p className="text-brand-white/50 leading-relaxed text-sm tracking-wide">
              To design and manufacture the world's most advanced autonomous aerial systems, capable of executing complex missions in the harshest environments on Earth without human intervention.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">Vision</h2>
            <p className="text-brand-white/50 leading-relaxed text-sm tracking-wide">
              A future where intelligent robotics seamlessly integrate with human operations to save lives, protect infrastructure, and secure borders with zero margin for error.
            </p>
          </div>
        </section>

        {/* Core Values / Engineering */}
        <section className="reveal-section border-t border-white/10 pt-20">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-16 text-center">Engineering Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-4">Autonomous Intelligence</h3>
              <p className="text-brand-white/50 text-sm leading-relaxed">
                Our drones don't just fly; they think. Utilizing onboard neural processing, DRIDEN systems can dynamically assess environments and make real-time decisions without human input.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-4">Manufacturing</h3>
              <p className="text-brand-white/50 text-sm leading-relaxed">
                Every component is milled from aerospace-grade aluminum and carbon fiber. We control the entire supply chain to guarantee military-spec reliability in every unit we ship.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-4">Research</h3>
              <p className="text-brand-white/50 text-sm leading-relaxed">
                We invest heavily in the future of computer vision and solid-state battery technology, ensuring DRIDEN remains at the absolute bleeding edge of the aerospace industry.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
