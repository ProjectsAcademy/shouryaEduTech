'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FAB() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 flex items-center group bg-primary-container text-white rounded-full p-4 elevation-2 transition-all hover:pr-8"
    >
      <HelpCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 font-medium text-xs tracking-widest uppercase">
        Have a question?
      </span>
    </motion.button>
  );
}
