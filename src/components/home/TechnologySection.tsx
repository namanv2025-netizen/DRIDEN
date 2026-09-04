'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrainCircuit, MapPin, Camera, Radio, ShieldAlert, Package } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function TechnologySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const techCards = containerRef.current.querySelectorAll('.tech-card');
      
      gsap.fromTo(techCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }
  }, []);

  const technologies = [
    {
      icon: <BrainCircuit size={28} strokeWidth={1.5} />,
      title: "AI-Powered Emergency Detection",
      description: "Advanced machine learning algorithms instantly identify signs of distress, structural damage, and human presence in chaotic environments."
    },
    {
      icon: <MapPin size={28} strokeWidth={1.5} />,
      title: "Real-Time Location & GPS Tracking",
      description: "Centimeter-level RTK positioning combined with GPS tracking ensures precise navigation even in disconnected or remote disaster zones."
    },
    {
      icon: <Camera size={28} strokeWidth={1.5} />,
      title: "Thermal & Visual Cameras",
      description: "Dual-payload infrared and high-resolution optical cameras allow operators to locate individuals through smoke, dense foliage, or total darkness."
    },
    {
      icon: <Radio size={28} strokeWidth={1.5} />,
      title: "Live Video & Communication",
      description: "Ultra-low latency data links stream encrypted high-definition video and support two-way audio to communicate with victims in real time."
    },
    {
      icon: <ShieldAlert size={28} strokeWidth={1.5} />,
      title: "Autonomous Flight & Obstacle Avoidance",
      description: "Next-generation spatial awareness and V-SLAM technology enables the drone to actively dodge obstacles and navigate complex spaces autonomously."
    },
    {
      icon: <Package size={28} strokeWidth={1.5} />,
      title: "Emergency Supply Delivery",
      description: "Integrated payload drop mechanisms can securely transport and accurately deploy medical kits, radios, or survival gear to isolated individuals."
    }
  ];

  return (
    <section id="technology" className="py-24 md:py-32 bg-brand-black relative border-t border-white/5" ref={containerRef}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-6">Our Technology</h2>
          <div className="w-16 h-[1px] bg-brand-white/30 mx-auto mb-8"></div>
          <p className="text-brand-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Engineered for the most demanding rescue operations. Our systems combine advanced artificial intelligence, precision hardware, and reliable autonomous capabilities to save lives when every second counts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <div key={i} className="tech-card bg-brand-charcoal border border-white/5 p-10 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-500 rounded-sm group flex flex-col items-start cursor-default">
              <div className="text-brand-white/40 mb-8 group-hover:text-brand-white transition-colors duration-500">
                {tech.icon}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-brand-white mb-4 group-hover:-translate-y-1 transition-transform duration-500">
                {tech.title}
              </h3>
              <div className="w-8 h-[1px] bg-white/20 mb-6 group-hover:w-16 transition-all duration-500"></div>
              <p className="text-brand-white/50 text-sm leading-relaxed font-light group-hover:text-brand-white/70 transition-colors duration-500">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
