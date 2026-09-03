'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const features = [
  {
    id: '01',
    title: 'Precision Engineering',
    content: 'Every airframe is engineered for strength, lightweight performance, and mission reliability.'
  },
  {
    id: '02',
    title: 'AI-Powered Intelligence',
    content: 'Advanced AI enables autonomous decision-making, real-time perception, and adaptive mission execution.'
  },
  {
    id: '03',
    title: 'Autonomous Navigation',
    content: 'Navigate complex environments using GPS, vision, and obstacle avoidance technologies.'
  },
  {
    id: '04',
    title: 'Reliable Mission Performance',
    content: 'Designed for stable operation in demanding conditions with high system reliability.'
  },
  {
    id: '05',
    title: 'Advanced Research',
    content: 'Built through continuous R&D in robotics, AI, and autonomous flight technologies.'
  },
  {
    id: '06',
    title: 'Future-Ready Platform',
    content: 'Modular architecture supports future sensors, payloads, and software upgrades.'
  }
];

export function WhyDridenSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="why" className="py-32 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-8"
          >
            Why Driden
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-16 h-[1px] bg-white/30 mx-auto"
          />
        </div>

        <div className="flex flex-col gap-6">
          {features.map((feature, i) => {
            const isOpen = expandedIndex === i;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => toggleAccordion(i)}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-black/40 backdrop-blur-md border border-white/20 rounded-[20px] p-6 md:p-10 cursor-pointer overflow-hidden relative group hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-colors duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-white/40 font-mono text-sm md:text-base font-bold tracking-widest">{feature.id}</span>
                    <h3 className="text-lg md:text-2xl font-bold uppercase tracking-widest text-white">{feature.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 flex-shrink-0"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <div className="pt-6 pl-[3.25rem] md:pl-[4.5rem]">
                        <motion.p 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="text-white/60 leading-relaxed text-base md:text-lg font-light max-w-2xl"
                        >
                          {feature.content}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
