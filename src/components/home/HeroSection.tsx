'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { HeroMedia } from './HeroMedia';

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(headlineRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.2 }
    )
    .fromTo(subheadlineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=1'
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.8'
    );
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-start pt-16 md:pt-20 pb-24 overflow-hidden bg-brand-black">
      <div className="absolute inset-0 z-0">
        <HeroMedia />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <h1 ref={headlineRef} className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-bold uppercase tracking-tight mb-6 text-black mix-blend-difference" style={{ color: 'white' }}>
            Engineering <br /> The Future <br /> Of Autonomous <br /> Flight
          </h1>
          <p ref={subheadlineRef} className="text-lg md:text-xl text-brand-white/80 mb-10 max-w-2xl leading-relaxed tracking-wide">
            DRIDEN develops intelligent autonomous aerial systems for Search & Rescue, Disaster Response, Industrial Inspection, and future AI-powered robotics.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap gap-6">
            <Button 
              variant="primary" 
              withArrow
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              OUR TECHNOLOGY
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
