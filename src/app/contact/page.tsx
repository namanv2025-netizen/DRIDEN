'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-brand-black text-brand-white pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-[0.2em] mb-6">Contact DRIDEN</h1>
          <div className="w-16 h-[1px] bg-brand-white/30 mx-auto mb-8"></div>
          <p className="text-xl text-brand-white/60 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Inquire about enterprise deployments, defense contracts, or research partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-10">Global Headquarters</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-white/40 mb-2">Address</h3>
                <p className="text-brand-white/80 tracking-wide">
                  One Aerospace Way<br/>
                  Innovation District<br/>
                  Austin, TX 78701
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-white/40 mb-2">Direct Inquiry</h3>
                <p className="text-brand-white/80 tracking-wide">enterprise@driden.com</p>
                <p className="text-brand-white/80 tracking-wide">+1 (800) 555-0199</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-white/40 mb-2">Defense Contracts</h3>
                <p className="text-brand-white/80 tracking-wide">defense@driden.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-charcoal p-10 border border-white/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-white/40 mb-2">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-brand-white focus:outline-none focus:border-white transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-white/40 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-brand-white focus:outline-none focus:border-white transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-white/40 mb-2">Organization</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-brand-white focus:outline-none focus:border-white transition-colors" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-white/40 mb-2">Official Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-brand-white focus:outline-none focus:border-white transition-colors" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-white/40 mb-2">Message / Inquiry Details</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 text-brand-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
              </div>

              <div className="pt-4">
                <Button variant="primary" className="w-full">Submit Inquiry</Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
