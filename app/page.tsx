'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FAB } from '@/components/FAB';
import { Rocket, ArrowRight, Monitor, Cpu, GraduationCap, Users, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const featuredPrograms = [
  {
    title: 'Advanced Full-Stack Engineering',
    description: 'Master modern web architecture from database design to scalable frontend applications using React, Node.js, and PostgreSQL.',
    duration: '12 Weeks',
    tags: ['REACT', 'NODE.JS', 'TYPESCRIPT'],
    icon: <Monitor className="w-8 h-8" />,
    color: 'border-secondary',
  },
  {
    title: 'Applied AI & Machine Learning',
    description: 'Build production-ready AI models. Dive deep into neural networks, natural language processing, and deploying ML pipelines.',
    duration: '16 Weeks',
    tags: ['PYTHON', 'TENSORFLOW', 'PYTORCH'],
    icon: <Cpu className="w-8 h-8" />,
    color: 'border-tertiary-container',
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <header className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden rounded-3xl elevation-1 bg-surface-container-low">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://picsum.photos/seed/techhero/1920/1080"
                alt="Workspace"
                fill
                className="object-cover opacity-10"
                priority
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent" />
            </div>
            
            <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 inline-flex items-center gap-2 bg-secondary-container/20 px-4 py-2 rounded-full border border-secondary-container/30"
              >
                <Rocket className="w-4 h-4 text-secondary" />
                <span className="font-medium text-xs tracking-widest text-secondary grayscale-[0.5]">NEW COHORT STARTING SOON</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold mb-6 text-balance"
              >
                Master the Future of Software Engineering
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-on-surface-variant max-w-2xl mb-10 text-balance"
              >
                Elevate your career with industry-leading curriculum, rigorous projects, and expert mentorship. Built for those who demand excellence in code.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity w-full sm:w-auto justify-center">
                  EXPLORE PROGRAMS <ArrowRight className="w-4 h-4" />
                </button>
                <button className="bg-white border border-outline-variant px-8 py-4 rounded-xl font-bold hover:bg-surface-container transition-colors w-full sm:w-auto">
                  VIEW CURRICULUM
                </button>
              </motion.div>
            </div>
          </header>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b border-outline-variant/30 pb-6">
          <h2 className="text-3xl font-bold">Featured Programs</h2>
          <Link href="/courses" className="text-sm font-bold text-on-tertiary-container hover:underline flex items-center gap-1 uppercase tracking-wider">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPrograms.map((program, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className={`elevation-1 rounded-2xl p-8 border-t-4 ${program.color} flex flex-col h-full bg-white transition-all`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-surface-container p-4 rounded-2xl text-primary">
                  {program.icon}
                </div>
                <span className="bg-surface-container-low text-on-surface-variant text-xs font-bold px-3 py-1.5 rounded-lg border border-outline-variant/20">
                  {program.duration}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
              <p className="text-on-surface-variant mb-8 flex-grow leading-relaxed">
                {program.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {program.tags.map(tag => (
                  <span key={tag} className="bg-surface-container-low text-on-primary-fixed-variant text-[10px] font-bold px-2 py-1 rounded tracking-tighter uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="bg-secondary text-white w-full py-4 rounded-xl font-bold uppercase tracking-wider hover:opacity-90 transition-all">
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-primary-container rounded-3xl p-10 md:p-16 relative overflow-hidden text-white elevation-2">
          {/* Background Decorative Icon */}
          <div className="absolute -top-20 -right-20 opacity-5 pointer-events-none select-none">
            <TrendingUp size={400} />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Accelerate Your Career Trajectory</h2>
            <p className="text-lg text-on-primary-container mb-12 max-w-xl">
              We don't just teach code; we forge engineers. Our career services provide 
              the strategic edge needed in a competitive tech landscape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <GraduationCap />, title: 'Industry Mentorship', desc: '1-on-1 guidance from senior engineers at top tech companies.' },
                { icon: <Briefcase />, title: 'Portfolio Development', desc: 'Build a rigorous, production-grade portfolio that demands attention.' },
                { icon: <Users />, title: 'Alumni Network', desc: 'Join an exclusive network of high-performing engineers globally.' },
                { icon: <Monitor />, title: 'Interview Prep', desc: 'Rigorous mock interviews and whiteboard algorithm practice.' },
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-xl h-fit text-secondary-container">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-sm text-on-primary-container/80 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FAB />
    </div>
  );
}
