'use client';

import React from 'react';
import { HeroSection } from './HeroSection';
import { VisionSection } from './VisionSection';
import { WhyDridenSection } from './WhyDridenSection';
import { AboutSection } from './AboutSection';
import { SolutionsSection } from './SolutionsSection';

export function HomeContent() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <HeroSection />
      <VisionSection />
      <WhyDridenSection />
      <AboutSection />
      <SolutionsSection />
    </div>
  );
}
