'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FAB } from '@/components/FAB';
import { Eye, Flag, Lightbulb, ShieldCheck, Users, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

const values = [
  {
    title: 'Precision Engineering',
    desc: 'We treat education with the same rigor as mission-critical software. Every curriculum is architected for maximum performance and clarity.',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: 'Innovation First',
    desc: 'We embrace the bleeding edge. AI is not just a subject; it is integrated into how we learn, code, and solve problems from day one.',
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: 'Global Community',
    desc: 'Engineering is a team sport. We foster a collaborative ecosystem where developers elevate each other through shared knowledge.',
    icon: <Users className="w-8 h-8" />,
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            Bridging the gap between rigorous academic discipline and the high-velocity world of AI and software engineering. We build the tools for tomorrow's technical leaders.
          </p>
        </header>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Vision */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 md:p-10 elevation-1 border-t-4 border-secondary flex flex-col h-full overflow-hidden group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-surface-container rounded-2xl text-primary">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-on-surface-variant mb-8 leading-relaxed flex-grow text-balance">
              To cultivate a global ecosystem of elite software engineers who build resilient, scalable, and ethically grounded technologies. We envision a world where technical education perfectly mirrors the demands of the modern technology industry.
            </p>
            <div className="relative h-48 w-full rounded-2xl overflow-hidden mt-auto">
              <Image 
                src="https://picsum.photos/seed/vision/800/400"
                alt="Vision"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 md:p-10 elevation-1 border-t-4 border-primary-container flex flex-col h-full overflow-hidden group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-surface-container rounded-2xl text-primary">
                <Flag className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-on-surface-variant mb-8 leading-relaxed flex-grow text-balance">
              To deliver highly dense, precision-engineered learning experiences. We provide a rigorous, professional-grade workstation environment that eliminates cognitive load and accelerates mastery.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['High-Clarity Density', 'Clean Tech', 'Empowered Focus'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-surface-container-low text-primary font-bold text-xs rounded-full border border-outline-variant/30">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 border-b border-outline-variant/30 pb-4">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 elevation-1 group hover:border-secondary transition-colors border border-transparent"
              >
                <div className="bg-primary text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-primary/10">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Footprint */}
        <section className="bg-white rounded-3xl p-8 md:p-12 elevation-1 relative overflow-hidden">
          <div className="relative z-10 flex flex-col gap-6 max-w-2xl">
            <h2 className="text-3xl font-bold">Global Footprint</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Our digital campus spans the globe, with hub nodes in major tech capitals. We believe engineering talent has no borders.
            </p>
            <div className="w-full h-64 bg-surface-container-low rounded-2xl relative overflow-hidden border border-outline-variant/30 flex items-center justify-center">
              <Globe className="w-16 h-16 text-primary/10 absolute opacity-20" />
              <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-outline-variant/50 flex items-center gap-3 elevation-1">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-sm font-bold tracking-tight">System Hubs Online: 24</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FAB />
    </div>
  );
}
