'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FAB } from '@/components/FAB';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, ArrowRight, Star, Terminal, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const roadmapNodes = [
  {
    stage: 'STG-01',
    title: 'Foundations of Logistics',
    desc: 'Core paradigms of modern software architecture. Mastering clean code, patterns, and state management.',
    icon: <Terminal className="w-5 h-5 text-primary" />,
    status: 'completed',
    items: ['Clean Architecture Patterns', 'Advanced TypeScript', 'Complex State Management']
  },
  {
    stage: 'STG-02',
    title: 'Distributed Systems & Cloud',
    desc: 'Architecting for scale. Microservices, event-driven architectures, and high-availability cloud deployments.',
    icon: <Zap className="w-5 h-5 text-primary" />,
    status: 'in-progress',
    items: ['Docker & Kubernetes', 'Event Sourcing', 'AWS Advanced Networking']
  },
  {
    stage: 'STG-03',
    title: 'Engineered Intelligence',
    desc: 'Integrating AI into the production stack. RAG, fine-tuning, and scalable inference patterns.',
    icon: <Star className="w-5 h-5 text-primary" />,
    status: 'locked',
    items: ['Vector Databases', 'Prompt Engineering Patterns', 'Custom Model Deployment']
  }
];

export default function LearningPathPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative">
        <div className="absolute inset-x-0 top-0 h-[600px] bg-grid pointer-events-none opacity-[0.05]" />
        {/* Header */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-primary" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Technical Roadmap</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Path to Mastery</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Our curriculum is architected to take you from foundational logic to production-grade technical leadership. Each stage is a mission-critical milestone.
          </p>
        </section>

        {/* Roadmap Visualization */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block" />

          <div className="space-y-16 relative">
            {roadmapNodes.map((node, idx) => (
              <motion.div 
                key={node.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-8 md:gap-0",
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Node Card */}
                <div className="w-full md:w-[45%]">
                  <div className={cn(
                    "bg-white rounded-2xl p-8 elevation-1 border-l-4 transition-all hover:elevation-2",
                    node.status === 'completed' ? "border-secondary" : 
                    node.status === 'in-progress' ? "border-on-tertiary-container" : "border-outline-variant"
                  )}>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase bg-surface-container-low px-2 py-1 rounded">
                        {node.stage}
                      </span>
                      {node.status === 'completed' ? (
                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                      ) : node.status === 'in-progress' ? (
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse" />
                          <span className="text-[10px] font-bold text-on-tertiary-container uppercase">Live</span>
                        </div>
                      ) : (
                        <Circle className="w-5 h-5 text-outline-variant" />
                      )}
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{node.title}</h3>
                    <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                      {node.desc}
                    </p>

                    <div className="space-y-3">
                      {node.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 text-xs font-medium text-on-surface">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Node Icon */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-outline-variant items-center justify-center elevation-1 z-10">
                   {node.icon}
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Stats */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Modules Completed', value: '14/28', percent: 50 },
            { label: 'Technical Proficiency', value: 'Advanced', percent: 85 },
            { label: 'Project Readiness', value: 'High', percent: 92 },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 elevation-1 border border-outline-variant/10">
              <h4 className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-4">{stat.label}</h4>
              <div className="flex items-end justify-between mb-2">
                <span className="text-3xl font-bold">{stat.value}</span>
                <span className="text-sm font-bold text-secondary">{stat.percent}%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.percent}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Next Step CTA */}
        <section className="mt-24 text-center max-w-2xl mx-auto">
          <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center gap-3 mx-auto hover:opacity-90 transition-all active:scale-95 elevation-2">
            Continue Your Journey <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-6 text-on-surface-variant text-sm">
            Current Focus: Distributed Systems & Microservices Architecture
          </p>
        </section>
      </main>

      <Footer />
      <FAB />
    </div>
  );
}
