'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/Card';

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.project-card');
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }
  }, []);

  const projects = [
    { title: "Search & Rescue Drone", overview: "Next-gen thermal search capabilities.", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&grayscale" },
    { title: "Industrial Inspection Platform", overview: "Close-proximity infrastructure scanning.", img: "https://images.unsplash.com/photo-1517457210348-703079e57d4b?auto=format&fit=crop&q=80&grayscale" },
    { title: "Autonomous Navigation System", overview: "V-SLAM driven GPS-denied navigation.", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&grayscale" },
    { title: "AI Vision Platform", overview: "Real-time edge processing and tracking.", img: "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?auto=format&fit=crop&q=80&grayscale" },
    { title: "Future Drone Swarm Research", overview: "Coordinated multi-agent mission planning.", img: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&grayscale" },
  ];

  return (
    <section id="projects" className="py-32 bg-brand-charcoal relative border-t border-white/5" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-8">Project Overview</h2>
          <div className="w-16 h-[1px] bg-brand-white/30 mx-auto mb-10"></div>
          <p className="text-xl text-brand-white/70 max-w-2xl mx-auto font-light">Showcasing our current flagship projects and advanced research initiatives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Card
              key={i}
              className="project-card cursor-pointer group hover:border-white/30 p-0 h-[400px] flex flex-col justify-end relative rounded-sm"
              onClick={() => setActiveProject(p)}
              glass={false}
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-luminosity" style={{ backgroundImage: `url('${p.img}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
              <div className="relative z-10 p-8">
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3 group-hover:-translate-y-2 transition-transform duration-500">{p.title}</h3>
                <div className="w-8 h-[1px] bg-white/50 group-hover:w-16 transition-all duration-500"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <div className="bg-brand-charcoal border border-white/10 p-10 max-w-2xl w-full relative rounded-sm shadow-2xl">
            <button className="absolute top-6 right-6 text-white/50 hover:text-white uppercase tracking-widest text-xs bg-black/50 p-2 rounded" onClick={() => setActiveProject(null)}>Close [X]</button>
            <div className="w-full h-64 mb-8 rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-80" style={{ backgroundImage: `url('${activeProject.img}')` }}></div>
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-[0.1em] mb-4">{activeProject.title}</h2>
            <p className="text-brand-white/80">{activeProject.overview}</p>
          </div>
        </div>
      )}
    </section>
  );
}
