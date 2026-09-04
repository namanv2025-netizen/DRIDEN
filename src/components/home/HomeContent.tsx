'use client';

import React from 'react';
import { HeroSection } from './HeroSection';
import { VisionSection } from './VisionSection';
import { WhyDridenSection } from './WhyDridenSection';
import { AboutSection } from './AboutSection';
import { HowItWorksSection } from './HowItWorksSection';
import { SolutionsSection } from './SolutionsSection';
import { TechnologySection } from './TechnologySection';

export function HomeContent() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <HeroSection />
      <VisionSection />
      <WhyDridenSection />
      <AboutSection />
      <HowItWorksSection />
      <SolutionsSection />
      <TechnologySection />
    </div>
  );
}
