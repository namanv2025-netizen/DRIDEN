'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { 
  Brain, Eye, Thermometer, Map, ShieldAlert, Battery, 
  Layers, Cpu, Activity, Wind, Lock, Network 
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Data structures
const coreFeatures = [
  { icon: <Brain size={24} />, title: "AI-Powered Autonomous Flight" },
  { icon: <Eye size={24} />, title: "Computer Vision" },
  { icon: <Thermometer size={24} />, title: "Thermal Imaging Support" },
  { icon: <Map size={24} />, title: "GPS & RTK Navigation" },
  { icon: <ShieldAlert size={24} />, title: "Obstacle Avoidance" },
  { icon: <Battery size={24} />, title: "Long-Endurance Flight" },
  { icon: <Layers size={24} />, title: "Modular Payload System" },
  { icon: <Cpu size={24} />, title: "Real-Time Data Processing" },
  { icon: <Activity size={24} />, title: "Live Telemetry" },
  { icon: <Wind size={24} />, title: "Carbon Fiber Airframe" },
  { icon: <Lock size={24} />, title: "Secure Communication" },
  { icon: <Network size={24} />, title: "Expandable Sensor Platform" }
];

const techStack = [
  { name: "Artificial Intelligence", desc: "Core decision making engine" },
  { name: "Computer Vision", desc: "Real-time environment mapping" },
  { name: "Machine Learning", desc: "Adaptive flight behavior" },
  { name: "SLAM", desc: "Simultaneous Localization and Mapping" },
  { name: "LiDAR", desc: "High-precision 3D scanning" },
  { name: "Thermal Vision", desc: "Heat signature detection" },
  { name: "GPS", desc: "Global positioning tracking" },
  { name: "RTK", desc: "Centimeter-level accuracy" },
  { name: "Edge Computing", desc: "On-board data processing" },
  { name: "ROS", desc: "Robot Operating System" },
  { name: "Pixhawk", desc: "Advanced flight controller" },
  { name: "ArduPilot", desc: "Open source autopilot" },
  { name: "NVIDIA Jetson", desc: "AI compute module" },
  { name: "OpenCV", desc: "Vision processing library" },
  { name: "TensorFlow", desc: "Deep learning framework" }
];

const applications = [
  "Search & Rescue", "Disaster Response", "Industrial Inspection",
  "Agriculture", "Infrastructure Monitoring", "Disaster Assessment",
  "Defense Research", "Environmental Monitoring", "Wildlife Protection",
  "Emergency Response"
];

const futureVision = [
  "Swarm Drone Technology", "Fully Autonomous Navigation", "AI Mission Planning",
  "BVLOS Operations", "Cloud Fleet Management", "Digital Twin Simulation",
  "Disaster Intelligence Platform", "Drone Docking Station", "Edge AI Processing"
];

export default function ProjectOverviewPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up elements
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );
      });

      // Stagger elements
      gsap.utils.toArray('.stagger-container').forEach((container: any) => {
        const items = container.querySelectorAll('.stagger-item');
        gsap.fromTo(items,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-black text-brand-white font-sans overflow-x-hidden selection:bg-brand-white selection:text-brand-black">
      
      {/* 1. PAGE TITLE & HERO */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center">
        <h1 className="reveal-up text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tight mb-8">
          Project<br />Overview
        </h1>
        <div className="reveal-up w-24 h-[2px] bg-brand-white/30 mb-8"></div>
        <p className="reveal-up text-xl md:text-3xl text-brand-white/70 max-w-3xl font-light tracking-wide leading-relaxed">
          "Building the next generation of autonomous aerial systems for mission-critical operations."
        </p>
      </section>

      {/* 2 & 3. INTRODUCTION & OBJECTIVE */}
      <section className="py-24 px-6 border-t border-brand-white/10 bg-brand-charcoal relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="reveal-up">
            <h3 className="text-xs uppercase tracking-[0.3em] text-brand-white/50 mb-6">Introduction</h3>
            <p className="text-lg md:text-xl text-brand-white/80 leading-relaxed font-light">
              DRIDEN is an aerospace and autonomous robotics company focused on designing intelligent unmanned aerial systems that combine advanced AI, computer vision, precision engineering, and autonomous flight capabilities. Our mission is to develop reliable drone platforms for real-world applications where performance, safety, and innovation are essential.
            </p>
          </div>
          <div className="reveal-up">
            <h3 className="text-xs uppercase tracking-[0.3em] text-brand-white/50 mb-6">Project Objective</h3>
            <p className="text-lg md:text-xl text-brand-white/80 leading-relaxed font-light">
              Design and develop intelligent autonomous drone platforms capable of supporting Search & Rescue, Disaster Response, Industrial Inspection, Infrastructure Monitoring, Environmental Analysis, and future mission-critical applications.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE FEATURES */}
      <section className="py-32 px-6 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-up mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-6">Core Features</h2>
            <div className="w-12 h-[1px] bg-brand-white/20 mx-auto"></div>
          </div>
          <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, i) => (
              <Card key={i} className="stagger-item group flex flex-col justify-center min-h-[180px]">
                <div className="text-brand-white/50 group-hover:text-brand-white transition-colors duration-500 mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest">{feature.title}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-32 px-6 border-t border-brand-white/5 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-up mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-6">Technology Stack</h2>
            <div className="w-12 h-[1px] bg-brand-white/20 mx-auto"></div>
          </div>
          <div className="stagger-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-white/10 border border-brand-white/10 rounded-sm overflow-hidden">
            {techStack.map((tech, i) => (
              <div key={i} className="stagger-item bg-brand-charcoal p-8 hover:bg-brand-white/5 transition-colors duration-500 flex flex-col justify-center text-center">
                <h4 className="text-md font-bold uppercase tracking-wide mb-2">{tech.name}</h4>
                <p className="text-xs text-brand-white/50 font-mono tracking-tighter">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. APPLICATIONS */}
      <section className="py-32 px-6 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-up mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-6">Applications</h2>
            <div className="w-12 h-[1px] bg-brand-white/20 mx-auto"></div>
          </div>
          <div className="stagger-container grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, i) => (
              <div key={i} className="stagger-item relative h-48 md:h-64 rounded-sm overflow-hidden group cursor-default border border-brand-white/10">
                <div className="absolute inset-0 bg-brand-charcoal group-hover:bg-brand-white/5 transition-colors duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex items-end">
                  <h3 className="text-2xl font-light uppercase tracking-widest group-hover:-translate-y-2 transition-transform duration-500">
                    {app}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROJECT GALLERY */}
      <section className="py-32 px-6 border-t border-brand-white/5 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-up mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-6">Project Gallery</h2>
            <div className="w-12 h-[1px] bg-brand-white/20 mx-auto"></div>
          </div>
          <div className="reveal-up">
            <ProjectGallery />
          </div>
        </div>
      </section>

      {/* 10. FUTURE DEVELOPMENT */}
      <section className="py-32 px-6 bg-brand-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="reveal-up mb-20">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-6">Future Vision</h2>
            <div className="w-12 h-[1px] bg-brand-white/20 mx-auto"></div>
          </div>
          <div className="stagger-container flex flex-wrap justify-center gap-4">
            {futureVision.map((item, i) => (
              <span key={i} className="stagger-item px-6 py-3 rounded-full border border-brand-white/20 text-sm uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-colors duration-500 cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CALL TO ACTION */}
      <section className="py-40 px-6 border-t border-brand-white/10 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brand-charcoal to-brand-black opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 reveal-up">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-16">Interested in Collaborating with DRIDEN?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full px-12 py-5 text-sm tracking-widest">Contact Us</Button>
            </Link>
            <Link href="/technology" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full px-12 py-5 text-sm tracking-widest">Explore Technology</Button>
            </Link>
            <Link href="/gallery" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full px-12 py-5 text-sm tracking-widest border-brand-white/20 hover:border-brand-white/50">View Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
