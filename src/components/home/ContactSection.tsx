'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.contact-reveal');
      gsap.fromTo(elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }
  }, []);

  return (
    <section id="contact" className="py-32 bg-brand-charcoal relative border-t border-white/5" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24 text-center contact-reveal">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-[0.2em] mb-6">Let's Build The Future Together</h2>
          <div className="w-16 h-[1px] bg-brand-white/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="contact-reveal bg-brand-black p-10 border border-white/5 rounded-sm">
            <h3 className="text-xl uppercase tracking-widest font-bold mb-8">Direct Inquiry</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-white/50 mb-2">Full Name</label>
                <input type="text" className="w-full bg-brand-charcoal border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-white/50 mb-2">Email Address</label>
                <input type="email" className="w-full bg-brand-charcoal border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-white/50 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-brand-charcoal border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none transition-colors resize-none"></textarea>
              </div>
              <Button variant="primary" className="mt-4 bg-white text-black hover:bg-white/80 border-none">Send Transmission</Button>
            </form>
          </div>

          <div className="contact-reveal flex flex-col justify-between gap-12">
            <div>
              <h3 className="text-xl uppercase tracking-widest font-bold mb-6">Global Headquarters</h3>
              <p className="text-brand-white/70 leading-relaxed mb-6 font-light">
                1200 Aerospace Blvd<br />
                Silicon Valley, CA 94025<br />
                United States
              </p>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-widest text-white/50 w-24">Email</span>
                  <a href="mailto:contact@driden.com" className="text-white hover:text-white/70 transition-colors">contact@driden.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-widest text-white/50 w-24">Phone</span>
                  <span className="text-white">+1 (800) 555-0199</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Response Time</span>
                <span className="font-bold text-sm tracking-widest uppercase">&lt; 24 Hours</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Working Hours</span>
                <span className="font-bold text-sm tracking-widest uppercase">24/7 Global Support</span>
              </div>
            </div>
            
            <div className="w-full h-48 bg-brand-black border border-white/5 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&grayscale')" }}></div>
               <span className="relative z-10 text-xs font-mono tracking-widest bg-black/50 px-4 py-2 border border-white/10">[ Google Maps Initializing ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
