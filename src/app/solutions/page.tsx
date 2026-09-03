'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SolutionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.solution-full-card');
      
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  const solutions = [
    { title: "Search & Rescue", desc: "Equipped with thermal sensors and extreme weather endurance, DRIDEN systems deploy in seconds to locate missing persons in unforgiving environments.", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&grayscale" },
    { title: "Disaster Response", desc: "When infrastructure collapses, our autonomous swarms map disaster zones in real-time, providing crucial data to first responders.", img: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&grayscale" },
    { title: "Defense & Security", desc: "Silent operation, radar-absorbent materials, and encrypted comms make our systems ideal for tactical reconnaissance and border security.", img: "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?auto=format&fit=crop&q=80&grayscale" },
    { title: "Industrial Inspection", desc: "Navigate inside complex machinery and around high-voltage lines automatically, identifying micro-fractures with AI-driven vision.", img: "https://images.unsplash.com/photo-1517457210348-703079e57d4b?auto=format&fit=crop&q=80&grayscale" },
    { title: "Environmental Monitoring", desc: "Track endangered wildlife, monitor deforestation, and sample air quality across thousands of acres autonomously.", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&grayscale" },
  ];

  return (
    <div className="w-full min-h-screen bg-brand-black text-brand-white pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-7xl" ref={containerRef}>
        
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-[0.2em] mb-6">Missions & Solutions</h1>
          <div className="w-16 h-[1px] bg-brand-white/30 mx-auto mb-8"></div>
          <p className="text-xl text-brand-white/60 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Designed to solve the most complex challenges across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {solutions.map((s, i) => (
            <div key={i} className="solution-full-card group cursor-pointer h-[500px] relative overflow-hidden rounded-sm border border-white/5">
               <div className="absolute inset-0 bg-brand-charcoal z-0"></div>
               <div 
                 className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 mix-blend-luminosity z-10"
                 style={{ backgroundImage: `url('${s.img}')` }}
               ></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20"></div>
               
               <div className="absolute inset-0 p-10 flex flex-col justify-end z-30">
                  <h2 className="text-3xl font-bold uppercase tracking-widest mb-4 group-hover:translate-x-2 transition-transform duration-500">{s.title}</h2>
                  <p className="text-brand-white/70 text-sm tracking-wide leading-relaxed max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {s.desc}
                  </p>
               </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
