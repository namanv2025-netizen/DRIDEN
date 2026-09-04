'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Cpu, FlaskConical, Target, Eye, ChevronRight } from 'lucide-react';

const ParticleField = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1
          }}
          animate={{
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.1, 0.6, 0.1]
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const cards = [
  {
    id: '01',
    title: 'Innovation',
    label: 'Focus',
    icon: Cpu,
    desc: 'Developing next-generation autonomous aerial systems powered by AI and precision engineering.',
    bullets: [
      'Advanced computer vision integration',
      'Proprietary flight control algorithms',
      'Edge-computing hardware design'
    ],
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&grayscale'
  },
  {
    id: '02',
    title: 'Research',
    label: 'Focus',
    icon: FlaskConical,
    desc: 'Continuous R&D in robotics, pushing the limits of what unmanned systems can achieve.',
    bullets: [
      'Material science optimization',
      'Aerodynamic efficiency modeling',
      'Next-gen battery technology'
    ],
    img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&grayscale'
  },
  {
    id: '03',
    title: 'Mission',
    label: 'Pillar',
    icon: Target,
    desc: 'Deploying reliable, life-saving aerial platforms for the most demanding environments.',
    bullets: [
      'Search and rescue operations',
      'Disaster response assessment',
      'Critical infrastructure inspection'
    ],
    img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&grayscale'
  },
  {
    id: '04',
    title: 'Vision',
    label: 'Pillar',
    icon: Eye,
    desc: 'A future where intelligent autonomous flight enhances global safety and efficiency.',
    bullets: [
      'Fully autonomous drone swarms',
      'Global airspace integration',
      'Sustainable aerial operations'
    ],
    img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&grayscale'
  }
];

export function AboutSection() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Technical Grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Radial Spotlight & Blurred Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full blur-[120px]" />
        
        {/* Drone Wireframe / CAD Placeholder */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06] bg-contain bg-no-repeat bg-center mix-blend-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&grayscale')" }} />
        
        <ParticleField />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* LEFT (45%) */}
          <div className="lg:w-[45%] flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/50 block mb-2">
                About Driden
              </span>
              <h2 className="text-5xl md:text-[64px] leading-[1.1] font-bold tracking-tight text-white mb-8">
                Engineering Tomorrow's Autonomous Intelligence
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="w-24 h-[1px] bg-white/40 origin-left mb-10"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-[500px] mb-12"
            >
              <p>
                We are a premier aerospace company pushing the boundaries of autonomous flight.
              </p>
              <p>
                By combining advanced AI, computer vision, and precision engineering, we build systems designed for mission-critical reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              <Button 
                variant="ghost"
                onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Learn More
              </Button>
              <Button 
                variant="primary" 
                withArrow
                onClick={(e) => { e.preventDefault(); document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Our Technology
              </Button>
            </motion.div>


          </div>

          {/* RIGHT (55%) */}
          <div className="lg:w-[55%] flex flex-col gap-4">
            {cards.map((card, idx) => {
              const isOpen = openCard === idx;
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                  onClick={() => toggleCard(idx)}
                  className="group relative cursor-pointer"
                >
                  {/* Card Container */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`relative border border-white/10 rounded-[24px] p-6 md:p-8 overflow-hidden transition-colors duration-500 ${isOpen ? 'bg-[#0a0a0a]' : 'bg-black hover:bg-[#0a0a0a]'}`}
                  >
                    {/* Animated Border Top (Hover) */}
                    <div className="absolute top-0 left-0 h-[1px] w-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-10" />

                    {/* Subtle White Glow on Hover */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 rounded-[24px] pointer-events-none" />

                    <div className="relative z-20">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-5">
                          <motion.div 
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 flex-shrink-0"
                            animate={{ rotate: isOpen ? 15 : 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            <Icon className="w-5 h-5 text-white/80" />
                          </motion.div>
                          <div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-1 font-bold">{card.label}</span>
                            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white">{card.title}</h3>
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex items-center text-[10px] font-bold uppercase tracking-widest text-white/50 gap-2 mt-2">
                          Learn More <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>

                      <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-0 pl-[4.25rem]">
                        {card.desc}
                      </p>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-8 pl-[4.25rem] flex flex-col md:flex-row gap-8">
                              <div className="flex-1">
                                <ul className="space-y-4 mb-8">
                                  {card.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed font-light">
                                      <div className="w-1 h-1 rounded-full bg-white/50 mt-[8px] flex-shrink-0" />
                                      {bullet}
                                    </li>
                                  ))}
                                </ul>
                                <button className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                                  Read More
                                </button>
                              </div>
                              <div className="w-full md:w-40 h-32 md:h-40 rounded-xl overflow-hidden border border-white/10 relative flex-shrink-0 bg-black">
                                <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-60" style={{ backgroundImage: `url('${card.img}')` }} />
                                {/* Overlay Grid on Image */}
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
