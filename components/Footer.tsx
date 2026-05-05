import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-xl font-bold tracking-tighter text-primary mb-4 block">
            shouryaEduTech
          </Link>
          <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
            Engineering the future through rigorous, high-density technical education. 
            Focused on AI, systems, and clean code principles.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Company</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/about" className="text-on-surface-variant hover:text-primary text-sm">About Us</Link></li>
            <li><Link href="/courses" className="text-on-surface-variant hover:text-primary text-sm">Courses</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary text-sm">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Connect</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="#" className="text-on-surface-variant hover:text-primary text-sm">LinkedIn</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary text-sm">GitHub</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary text-sm">Twitter</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-xs">
        <p>© 2024 shouryaEduTech Engineering. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-primary underline">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
