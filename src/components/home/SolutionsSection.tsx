'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "PRECISION ENGINEERING",
    expandedDescription: "Every mission depends on reliable technology. Our systems are designed with precision to process information accurately, maintain stable operation, and support critical decisions. From data collection to mission execution, every component is built to work together smoothly. The focus is on reliability, accuracy, and performance in demanding environments."
  },
  {
    title: "AI-POWERED INTELLIGENCE",
    expandedDescription: "AI helps turn complex information into useful decisions. Our system analyzes real-time data, identifies important patterns, and helps teams understand what is happening around them. This allows faster decision-making and smarter mission planning. The goal is to use intelligent technology to make emergency operations more efficient and effective."
  },
  {
    title: "AUTONOMOUS NAVIGATION",
    expandedDescription: "Our autonomous navigation technology helps systems move through challenging environments with minimal human intervention. It uses real-time information to understand surroundings, plan routes, and adjust movement when conditions change. This supports safer and more efficient missions while reducing unnecessary delays and manual effort."
  },
  {
    title: "RELIABLE MISSION PERFORMANCE",
    expandedDescription: "Technology is only valuable when it performs reliably in real situations. Our systems are designed to maintain stable operation, execute planned missions accurately, and provide dependable information throughout the operation. Every part of the system works toward one goal: completing critical missions safely, efficiently, and reliably."
  }
];

const getCardStyle = (index: number) => {
  switch (index) {
    case 0:
      // slightly left + normal width
      return "md:mr-16 lg:mr-24";
    case 1:
      // slightly right + slightly narrower
      return "md:ml-20 lg:ml-32 md:mr-8 lg:mr-12 mt-4";
    case 2:
      // slightly left + slightly wider
      return "md:mr-12 lg:mr-16 md:-ml-4 mt-4";
    case 3:
      // slightly right + normal width
      return "md:ml-16 lg:ml-24 mt-4";
    default:
      return "";
  }
};

const SolutionItem = ({ 
  solution, 
  index, 
  mouseX, 
  mouseY 
}: { 
  solution: typeof solutions[0], 
  index: number,
  mouseX: any,
  mouseY: any
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const numberStr = `0${index + 1}`;

  // subtle parallax effect based on index to give them slightly different movement speeds
  const parallaxX = useTransform(mouseX, [0, 1], [0, (index % 2 === 0 ? 2 : -2)]);
  const parallaxY = useTransform(mouseY, [0, 1], [0, (index % 2 === 0 ? 3 : 1)]);

  return (
    <motion.div 
      className={`solution-item border p-6 md:p-8 rounded-[1.5rem] cursor-pointer transition-all duration-500 ease-out group ${
        isOpen 
          ? 'border-white/30 bg-white/[0.04] shadow-[0_0_40px_rgba(255,255,255,0.03)]' 
          : 'border-white/10 bg-brand-charcoal hover:bg-white/[0.02] hover:-translate-y-1.5 hover:shadow-[0_10_30px_rgba(0,0,0,0.5)] hover:border-white/20'
      } ${getCardStyle(index)}`}
      onClick={() => setIsOpen(!isOpen)}
      style={{ x: parallaxX, y: parallaxY }}
    >
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-6">
        
        {/* Left side: Number + Title */}
        <div className="flex gap-4 md:gap-6 flex-1 items-start">
          <span className="text-brand-white/30 text-base md:text-lg font-medium font-mono mt-1 transition-colors duration-500 group-hover:text-brand-white/50">
            {numberStr}
          </span>
          <div className="flex flex-col flex-1">
            <h3 className={`text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.15em] font-bold transition-colors duration-500 ${isOpen ? 'text-white' : 'text-brand-white/80 group-hover:text-white'}`}>
              {solution.title}
            </h3>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="w-12 h-[1px] bg-white/20 mt-6 mb-4"
                  />
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-brand-white/70 text-sm md:text-base font-sans tracking-wide leading-relaxed max-w-3xl pb-2"
                  >
                    {solution.expandedDescription}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Right side: Plus Button */}
        <div className="flex items-start justify-end self-end md:self-auto shrink-0">
          <motion.div 
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
              isOpen 
                ? 'border-white/40 bg-white/10 text-white' 
                : 'border-white/15 bg-white/[0.02] text-white/50 group-hover:border-white/30 group-hover:bg-white/[0.05] group-hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              animate={{ rotate: isOpen ? 45 : 0 }} 
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Plus size={20} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </div>
        
      </div>
    </motion.div>
  );
};

export function SolutionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax setup
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Normalize coordinates between 0 and 1
    const { clientX, clientY } = e;
    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    if (containerRef.current) {
      const listItems = containerRef.current.querySelectorAll('.solution-item');
      
      gsap.fromTo(listItems,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }
  }, []);

  return (
    <section 
      id="solutions" 
      className="py-24 md:py-32 bg-brand-charcoal relative border-t border-white/5 overflow-hidden" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-20 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-8 text-center">Solutions</h2>
          <div className="w-16 h-[1px] bg-brand-white/30 mx-auto"></div>
        </div>

        <div className="flex flex-col gap-4 md:gap-0">
          {solutions.map((solution, i) => (
            <SolutionItem 
              key={i} 
              solution={solution} 
              index={i} 
              mouseX={smoothMouseX}
              mouseY={smoothMouseY}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
