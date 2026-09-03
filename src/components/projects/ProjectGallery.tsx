'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  { id: 1, title: 'Drone CAD Model', src: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&grayscale' },
  { id: 2, title: 'Engineering Drawing', src: 'https://images.unsplash.com/photo-1579820010410-c10411aaaa88?auto=format&fit=crop&q=80&grayscale' },
  { id: 3, title: '3D Render', src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&grayscale' },
  { id: 4, title: 'Prototype Assembly', src: 'https://images.unsplash.com/photo-1517457210348-703079e57d4b?auto=format&fit=crop&q=80&grayscale' },
  { id: 5, title: 'Flight Testing', src: 'https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&grayscale' },
  { id: 6, title: 'Mission Demonstration', src: 'https://images.unsplash.com/photo-1521405924368-64c5b82836ab?auto=format&fit=crop&q=80&grayscale' },
];

export function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img) => (
          <div 
            key={img.id} 
            className="group relative aspect-video bg-brand-charcoal overflow-hidden cursor-pointer border border-white/5 rounded-sm"
            onClick={() => setSelectedImage(img.src)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 mix-blend-luminosity"
              style={{ backgroundImage: `url('${img.src}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 z-10">
              <h4 className="text-brand-white text-lg font-bold tracking-wide">{img.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-12 bg-black/90 backdrop-blur-lg"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-8 text-white/50 hover:text-white uppercase tracking-widest text-xs z-20"
              onClick={() => setSelectedImage(null)}
            >
              Close [X]
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative w-full max-w-6xl aspect-video rounded-sm overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${selectedImage}')` }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
