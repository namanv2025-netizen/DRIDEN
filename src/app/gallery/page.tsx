'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const images = gridRef.current.querySelectorAll('.gallery-img');
      
      gsap.fromTo(images,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          }
        }
      );
    }
  }, []);

  const galleryData = [
    { span: 'col-span-1 md:col-span-2 row-span-2', img: 'https://images.unsplash.com/photo-1541887059124-bba8c6c9688d?auto=format&fit=crop&q=80&grayscale' },
    { span: 'col-span-1 md:col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1579820010410-c10411aaaa88?auto=format&fit=crop&q=80&grayscale' },
    { span: 'col-span-1 md:col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1508210134444-245f479a8e99?auto=format&fit=crop&q=80&grayscale' },
    { span: 'col-span-1 md:col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&grayscale' },
    { span: 'col-span-1 md:col-span-2 row-span-1', img: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&grayscale' },
    { span: 'col-span-1 md:col-span-1 row-span-2', img: 'https://images.unsplash.com/photo-1622312684826-a05e2ed37452?auto=format&fit=crop&q=80&grayscale' },
    { span: 'col-span-1 md:col-span-2 row-span-1', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&grayscale' },
  ];

  return (
    <div className="w-full min-h-screen bg-brand-black text-brand-white pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-[0.2em] mb-6">Media Gallery</h1>
          <div className="w-16 h-[1px] bg-brand-white/30 mx-auto mb-8"></div>
          <p className="text-xl text-brand-white/60 max-w-2xl mx-auto leading-relaxed tracking-wide">
            DRIDEN systems in operation across the globe.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          {galleryData.map((item, index) => (
            <div key={index} className={`gallery-img relative overflow-hidden group border border-white/5 bg-brand-charcoal ${item.span}`}>
               <div 
                 className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 mix-blend-luminosity"
                 style={{ backgroundImage: `url('${item.img}')` }}
               ></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
