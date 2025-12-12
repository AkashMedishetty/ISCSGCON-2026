'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MedicalShaderBg = dynamic(
  () => import('./MedicalShaderBg').then((mod) => mod.MedicalShaderBg),
  { ssr: false }
);

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 overflow-hidden"
    >
      {/* Shader Background */}
      <MedicalShaderBg />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center"
      >
        <p className="text-xs md:text-sm font-medium uppercase tracking-wider mb-2" style={{ color: '#8e518d' }}>
          March 14-15, 2026 • Taj Deccan, Hyderabad
        </p>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#1a365d' }}>
          Join the Future of<br />
          <span style={{ color: '#8e518d' }}>
            Regenerative Medicine
          </span>
        </h2>
        
        <p className="text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#1a365d' }}>
          Connect with 300+ leading researchers, clinicians, and innovators shaping the future of stem cell therapy. 
          Don&apos;t miss this opportunity to be part of groundbreaking discoveries.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold rounded-full text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#8e518d' }}
          >
            Register Now
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <Link
            href="/program-schedule"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold rounded-full border-2 hover:bg-[#1a365d]/10 transition-all"
            style={{ borderColor: '#1a365d', color: '#1a365d' }}
          >
            View Program
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-10 md:mt-14 grid grid-cols-3 gap-6 md:gap-10 max-w-lg mx-auto">
          {[
            { value: '50+', label: 'Expert Speakers' },
            { value: '300+', label: 'Attendees' },
            { value: '8', label: 'Specialties' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold" style={{ color: '#8e518d' }}>{stat.value}</p>
              <p className="text-xs md:text-sm" style={{ color: '#1a365d' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CTASection;
