'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, MapPin, Camera, Radio, Package, Navigation, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.step-item');
      
      gsap.fromTo(items,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }
  }, []);

  const steps = [
    {
      icon: <Target size={24} strokeWidth={1.5} />,
      title: "Detects People in Emergency Situations",
    },
    {
      icon: <MapPin size={24} strokeWidth={1.5} />,
      title: "Uses GPS to Locate the Affected Area",
    },
    {
      icon: <Camera size={24} strokeWidth={1.5} />,
      title: "Uses Camera & Thermal Imaging to Identify People",
    },
    {
      icon: <Radio size={24} strokeWidth={1.5} />,
      title: "Sends Real-Time Location and Video to the Rescue Team",
    },
    {
      icon: <Package size={24} strokeWidth={1.5} />,
      title: "Can Deliver Essential Emergency Supplies",
    },
    {
      icon: <Navigation size={24} strokeWidth={1.5} />,
      title: "Uses Autonomous Navigation and Obstacle Avoidance",
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      title: "Helps Rescue Teams Respond Faster and More Safely",
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-brand-black relative border-t border-white/5 overflow-hidden" ref={containerRef}>
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-6">How Our Rescue Drone Works</h2>
          <div className="w-16 h-[1px] bg-brand-white/30 mb-8"></div>
          <p className="text-brand-white/60 text-lg font-light max-w-2xl leading-relaxed">
            A seamless integration of hardware and software designed to save lives when every second counts.
          </p>
        </div>

        <div className="flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-[1.35rem] before:w-[1px] before:bg-white/10 ml-2 md:ml-0">
          {steps.map((step, i) => (
            <div key={i} className="step-item flex items-center gap-6 md:gap-8 group">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-brand-charcoal flex items-center justify-center shrink-0 z-10 group-hover:border-white/30 group-hover:bg-white/[0.05] transition-colors duration-500 text-brand-white/50 group-hover:text-brand-white relative">
                {step.icon}
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-md pointer-events-none"></div>
              </div>
              <div className="flex-1 bg-brand-charcoal border border-white/5 p-6 md:p-8 rounded-sm group-hover:border-white/15 group-hover:bg-white/[0.02] transition-colors duration-500">
                <h3 className="text-lg md:text-xl font-medium tracking-wide text-brand-white/80 group-hover:text-white transition-colors duration-500">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
