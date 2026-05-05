'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FAB } from '@/components/FAB';
import { Clock, Tag, Search, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const categories = ['All Sessions', 'Python & Data', 'Web Development', 'Cloud & DevOps', 'Machine Learning'];

const courses = [
  {
    title: 'Python for Data Engineering',
    description: 'Build robust data pipelines from scratch. Learn foundational Python concepts applied to real-world data engineering scenarios.',
    duration: '12 Weeks',
    level: 'Beginner',
    price: '$149',
    category: 'Python',
    image: 'https://picsum.photos/seed/code1/800/600',
    color: 'border-secondary'
  },
  {
    title: 'Advanced Cloud Architecture',
    description: 'Design highly available, scalable, and secure enterprise infrastructure using AWS native services.',
    duration: '8 Weeks',
    level: 'Advanced',
    price: '$199',
    category: 'AWS',
    image: 'https://picsum.photos/seed/cloud1/800/600',
    color: 'border-primary'
  },
  {
    title: 'Full-Stack React Development',
    description: 'Master component patterns, state management, and server-side rendering with the latest React 19 features.',
    duration: '10 Weeks',
    level: 'Intermediate',
    price: '$179',
    category: 'Web Dev',
    image: 'https://picsum.photos/seed/react1/800/600',
    color: 'border-on-tertiary-container'
  },
  {
    title: 'Deep Learning with PyTorch',
    description: 'Dive deep into neural networks, architectural patterns, and training state-of-the-art vision and language models.',
    duration: '14 Weeks',
    level: 'Advanced',
    price: '$249',
    category: 'AI',
    image: 'https://picsum.photos/seed/ai1/800/600',
    color: 'border-secondary'
  }
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('All Sessions');

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-[0.05]" />
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore Courses</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Master the latest technologies with our rigorous, industry-aligned curriculum. Build your engineering portfolio today.
          </p>
        </section>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300",
                  activeTab === cat 
                    ? "bg-primary-container text-white border-primary-container elevation-1"
                    : "bg-white text-on-surface-variant border-outline-variant hover:border-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
            <input 
              type="text"
              placeholder="Search curriculum..."
              className="w-full bg-white border border-outline-variant rounded-xl py-3 pl-11 pr-4 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none font-medium transition-all"
            />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "group bg-white rounded-2xl overflow-hidden elevation-1 border-t-2 flex flex-col h-full transition-all hover:elevation-2",
                course.color
              )}
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-bold elevation-1">
                  {course.price}
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary/80 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                    {course.category}
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm text-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                    {course.level}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-on-tertiary-container transition-colors">
                  {course.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed flex-grow">
                  {course.description}
                </p>

                <div className="mt-auto pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </div>
                  </div>
                  <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-on-primary-container transition-all flex items-center gap-2">
                    View Syllabus <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-24 bg-gradient-to-br from-primary-container to-tertiary-container rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-white elevation-2">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Start Your Technical Journey</h2>
            <p className="text-on-primary-container/80 text-lg leading-relaxed">
              Register for a 7-day free trial to access select course modules and experience our rigorous learning environment.
            </p>
          </div>
          <button className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-lg shadow-secondary/10 hover:opacity-90 active:scale-95 transition-all w-full lg:w-auto">
            Claim Free Trial
          </button>
        </section>
      </main>

      <Footer />
      <FAB />
    </div>
  );
}
