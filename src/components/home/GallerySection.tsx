'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.gallery-img');
      gsap.fromTo(items,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }
  }, []);

  const galleryImages = [
    "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&grayscale",
    "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?auto=format&fit=crop&q=80&grayscale",
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&grayscale",
    "https://images.unsplash.com/photo-1517457210348-703079e57d4b?auto=format&fit=crop&q=80&grayscale",
    "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&grayscale",
    "https://images.unsplash.com/photo-1521405924368-64c5b82836ab?auto=format&fit=crop&q=80&grayscale"
  ];

  return (
    <section id="gallery" className="py-32 bg-brand-black relative border-t border-white/5" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-8">Gallery</h2>
          <div className="w-16 h-[1px] bg-brand-white/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <div 
              key={i} 
              className="gallery-img aspect-square relative overflow-hidden bg-brand-charcoal cursor-pointer group"
              onClick={() => setSelectedImage(src)}
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" style={{ backgroundImage: `url('${src}')` }}></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-8 right-8 text-white uppercase tracking-widest text-sm z-50 hover:opacity-70 transition-opacity">Close [X]</button>
          <img src={selectedImage} alt="Gallery view" className="max-w-full max-h-full object-contain mix-blend-luminosity" />
        </div>
      )}
    </section>
  );
}
