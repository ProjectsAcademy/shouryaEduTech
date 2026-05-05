'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Github, Chrome, Code2, AlertTriangle } from 'lucide-react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 elevation-2 border border-outline-variant/30">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-primary p-3 rounded-2xl mb-4 elevation-1">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Access Terminal</h1>
            <p className="text-on-surface-variant text-sm mt-2">Initialize your engineering session</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-4 pl-12 pr-4 outline-none focus:border-primary transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Password</label>
                <button type="button" className="text-[10px] font-bold text-on-tertiary-container hover:underline uppercase tracking-tight">Forgot Key?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-4 pl-12 pr-4 outline-none focus:border-primary transition-all font-medium"
                />
              </div>
            </div>

            <button 
              disabled={isLoading}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/30" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-on-surface-variant font-bold tracking-widest leading-none">Or Continue With</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 border border-outline-variant rounded-xl hover:bg-surface-container transition-all">
              <Github className="w-5 h-5" />
              <span className="text-sm font-bold">GitHub</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 border border-outline-variant rounded-xl hover:bg-surface-container transition-all">
              <Chrome className="w-5 h-5" />
              <span className="text-sm font-bold">Google</span>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center space-y-4">
          <p className="text-on-surface-variant text-sm font-medium">
            New operative? <Link href="#" className="text-primary font-bold hover:underline">Apply for Entry</Link>
          </p>
          <div className="flex items-center justify-center gap-6 text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Legal</Link>
          </div>
        </div>
      </motion.div>

      {/* Auth Notice */}
      <div className="mt-12 max-w-xs flex gap-3 text-on-surface-variant/50">
        <AlertTriangle className="w-4 h-4 mt-0.5" />
        <p className="text-[10px] leading-relaxed font-medium uppercase tracking-tight">
          This is a secure technical environment. Unauthorized access attempts are logged and monitored.
        </p>
      </div>
    </div>
  );
}
