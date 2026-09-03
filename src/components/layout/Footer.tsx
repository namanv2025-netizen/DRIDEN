import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-black pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-brand-white mb-6">
              <span className="font-bold text-xl tracking-[0.2em] uppercase">DRIDEN</span>
            </Link>
            <p className="text-brand-white/50 text-xs mb-8 leading-relaxed max-w-sm">
              Engineering the future of autonomous flight. We build intelligent aerial systems for missions where precision, reliability, and innovation matter most.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-brand-white/40 hover:text-brand-white transition-colors duration-300">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-brand-white/40 hover:text-brand-white transition-colors duration-300">
                <FaLinkedin className="w-4 h-4" />
              </a>

            </div>
          </div>


        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-brand-white/30 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} DRIDEN Aerospace. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
