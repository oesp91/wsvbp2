'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#14151a]/95 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[--color-bun-cyan] to-[--color-bun-pink] opacity-0 blur group-hover:opacity-20 transition-opacity" />
              <span className="relative text-lg font-bold tracking-tight text-white">
                yunseo.sol
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="#about"
              className="relative px-4 py-2 text-sm font-medium text-[--color-bun-text-muted] hover:text-white transition-colors group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#experience"
              className="relative px-4 py-2 text-sm font-medium text-[--color-bun-text-muted] hover:text-white transition-colors group"
            >
              <span className="relative z-10">Experience</span>
              <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#activities"
              className="relative px-4 py-2 text-sm font-medium text-[--color-bun-text-muted] hover:text-white transition-colors group"
            >
              <span className="relative z-10">Activities</span>
              <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#projects"
              className="relative px-4 py-2 text-sm font-medium text-[--color-bun-text-muted] hover:text-white transition-colors group"
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="relative px-4 py-2 text-sm font-medium text-[--color-bun-text-muted] hover:text-white transition-colors group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="ml-4 h-6 w-px bg-white/10" />

            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative ml-4 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[--color-bun-cyan] to-[--color-bun-pink] transition-transform group-hover:scale-105" />
              <span className="relative z-10">Hire Me</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative p-2 text-[--color-bun-text-muted] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
