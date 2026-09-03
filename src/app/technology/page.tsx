'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const techBlocks = containerRef.current.querySelectorAll('.tech-block');
      
      techBlocks.forEach((block, index) => {
        gsap.fromTo(block,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 75%',
            }
          }
        );
      });
    }
  }, []);

  const techItems = [
    { title: "Artificial Intelligence", desc: "Our proprietary neural networks process over 10 million parameters per second, enabling real-time decision making and autonomous flight path generation without ground control intervention.", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&grayscale" },
    { title: "Computer Vision", desc: "Multi-spectral 8K camera arrays combined with edge-computing allow our drones to identify, classify, and track thousands of dynamic objects in complex environments.", img: "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?auto=format&fit=crop&q=80&grayscale" },
    { title: "Thermal Vision", desc: "Military-grade radiometric thermal sensors detect heat signatures through dense foliage, smoke, and total darkness, essential for search & rescue and defense.", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&grayscale" },
    { title: "Autonomous Navigation", desc: "V-SLAM (Visual Simultaneous Localization and Mapping) algorithms enable centimeter-perfect navigation even in completely GPS-denied environments like deep canyons or indoors.", img: "https://images.unsplash.com/photo-1517457210348-703079e57d4b?auto=format&fit=crop&q=80&grayscale" },
    { title: "LiDAR Integration", desc: "Solid-state LiDAR scanners map environments in 3D in real-time, providing flawless obstacle avoidance and highly accurate topographical data.", img: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&grayscale" },
    { title: "Real-time Data Processing", desc: "Onboard quantum-inspired processors handle heavy data loads, streaming encrypted, compressed intelligence back to command centers with near-zero latency.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&grayscale" }
  ];

  return (
    <div className="w-full min-h-screen bg-brand-black text-brand-white pt-32 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl" ref={containerRef}>
        
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-[0.2em] mb-6">Core Technology</h1>
          <div className="w-16 h-[1px] bg-brand-white/30 mx-auto mb-8"></div>
          <p className="text-xl text-brand-white/60 max-w-2xl mx-auto leading-relaxed tracking-wide">
            The advanced hardware and software powering the world's most intelligent aerial systems.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {techItems.map((tech, index) => (
            <div key={index} className={`tech-block flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-brand-charcoal border border-white/5 relative overflow-hidden rounded-sm group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/80 to-transparent z-10"></div>
                   <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 mix-blend-luminosity" style={{ backgroundImage: `url('${tech.img}')` }}></div>
                   
                   {/* Abstract technical overlay */}
                   <div className="absolute top-4 left-4 z-20">
                     <div className="text-[10px] font-mono tracking-widest text-brand-white/40">SYS.{index + 1} // ACTIVE</div>
                   </div>
                   <div className="absolute bottom-4 right-4 z-20 flex gap-1">
                     <div className="w-1 h-4 bg-brand-white/40 animate-pulse"></div>
                     <div className="w-1 h-2 bg-brand-white/20"></div>
                     <div className="w-1 h-6 bg-brand-white/60"></div>
                   </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">{tech.title}</h2>
                <p className="text-brand-white/50 leading-relaxed text-sm tracking-wide">
                  {tech.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
