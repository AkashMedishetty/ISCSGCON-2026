'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const pricingTiers = [
  {
    title: 'Postgraduate',
    price: '₹2,500',
    description: 'PG students & residents',
    features: ['Full conference access', 'Scientific sessions', 'Certificate', 'Materials'],
  },
  {
    title: 'Consultant',
    price: '₹5,000',
    description: 'Practicing clinicians',
    features: ['Full conference access', 'CME credits', 'Networking dinner', 'Materials'],
  },
  {
    title: 'Workshop',
    price: '₹3,500',
    description: 'Hands-on add-on',
    features: ['Live demonstrations', 'Biologics workshop', 'Practical sessions', 'Certificate'],
  },
];

const highlights = [
  'Live Biologics Demo',
  'International Faculty',
  'Lok Adalats',
  'Scientific Program',
  'Multispecialty Care',
];

const scopeOfStemCells = [
  { title: 'ORTHOPEDICS', items: ['Cartilage Regeneration', 'Bone Healing', 'Tendon Repair', 'AVN'] },
  { title: 'OPHTHALMOLOGY', items: ['Corneal repair', 'Retinal therapy', 'Ocular healing'] },
  { title: 'DERMATOLOGY', items: ['Wound healing', 'Hair regeneration', 'Scar modulation'] },
  { title: 'PLASTIC SURGERY', items: ['Soft-tissue', 'Burn reconstruction', 'Fat therapies'] },
  { title: 'OB & GYN', items: ['Cord banking', 'Endometrial regen', 'Ovarian restoration'] },
  { title: 'NEUROLOGY', items: ['Neural repair', 'Stroke recovery', 'Spinal regen'] },
  { title: 'DENTISTRY', items: ['Pulp regeneration', 'Periodontal repair', 'Bone graft'] },
  { title: 'ENT', items: ['Airway reconstruction', 'Hearing restoration', 'Cartilage repair'] },
];

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const frostedBgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Frosted glass expands from a circle in center
      gsap.set(frostedBgRef.current, {
        scale: 0,
        opacity: 0,
        borderRadius: '50%',
      });

      gsap.to(frostedBgRef.current, {
        scale: 2,
        opacity: 1,
        borderRadius: '0%',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          end: 'top 30%',
          scrub: 0.5,
        },
      });

      // Content fades in with stagger
      gsap.set(contentRef.current, { opacity: 0, y: 40 });
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'top 20%',
          scrub: 0.5,
        },
      });

      // Cards animate in with stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.set(cards, { opacity: 0, y: 30, scale: 0.95 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
            end: 'top 40%',
            scrub: 0.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-6 md:py-14 overflow-hidden"
      style={{ backgroundColor: '#b8c8d8' }}
    >
      {/* Frosted glass background - expands from center */}
      <div
        ref={frostedBgRef}
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[150vw] h-full z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-6">
          <p className="text-[10px] md:text-xs font-medium uppercase tracking-wider mb-0.5 md:mb-1" style={{ color: '#8e518d' }}>
            Registration
          </p>
          <h2 className="text-xl md:text-3xl font-bold" style={{ color: '#1a365d' }}>
            Conference Pricing
          </h2>
        </div>

        {/* Pricing Cards */}
        <div ref={cardsRef} className="grid grid-cols-3 gap-1.5 md:gap-4 mb-6 md:mb-8">
          {pricingTiers.map((tier) => (
            <div key={tier.title} className="bg-white/60 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4 text-center shadow-lg">
              <h3 className="text-[10px] md:text-sm font-bold mb-0.5" style={{ color: '#1a365d' }}>
                {tier.title}
              </h3>
              <p className="text-[8px] md:text-xs text-gray-500 mb-0.5 md:mb-1 hidden md:block">{tier.description}</p>
              <p className="text-sm md:text-xl font-bold mb-1 md:mb-2" style={{ color: '#8e518d' }}>
                {tier.price}
              </p>
              <ul className="space-y-0 md:space-y-0.5 mb-2 md:mb-3 text-left hidden md:block">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-[9px] md:text-[11px] flex items-start gap-1" style={{ color: '#1a365d' }}>
                    <span className="text-green-500 text-[10px]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="block w-full text-center py-1 md:py-1.5 rounded-full text-[9px] md:text-xs font-semibold bg-[#8e518d] text-white hover:bg-[#7a4579] transition-colors"
              >
                Register
              </Link>
            </div>
          ))}
        </div>

        {/* Conference Highlights */}
        <div className="mb-5 md:mb-8">
          <h3 className="text-sm md:text-lg font-bold text-center mb-2 md:mb-3" style={{ color: '#1a365d' }}>
            Conference Highlights
          </h3>
          <div className="flex flex-wrap justify-center gap-1 md:gap-2">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="bg-white/70 backdrop-blur-sm rounded-full px-2 md:px-2.5 py-0.5 md:py-1 text-[9px] md:text-xs shadow-sm"
                style={{ color: '#1a365d' }}
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Scope of Stem Cells */}
        <div>
          <div className="text-center mb-2 md:mb-3">
            <span
              className="inline-block px-2 md:px-3 py-0.5 md:py-1 rounded-full text-white text-[10px] md:text-xs font-semibold"
              style={{ backgroundColor: '#8e518d' }}
            >
              Scope of Stem Cells
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
            {scopeOfStemCells.map((scope) => (
              <div key={scope.title} className="bg-white/50 backdrop-blur-sm rounded-md md:rounded-lg p-1.5 md:p-2.5 shadow-sm">
                <h4
                  className="font-bold text-[8px] md:text-[10px] mb-1 px-1 md:px-1.5 py-0.5 rounded inline-block"
                  style={{ backgroundColor: 'rgba(142, 81, 141, 0.2)', color: '#8e518d' }}
                >
                  {scope.title}
                </h4>
                <ul className="space-y-0">
                  {scope.items.map((item) => (
                    <li key={item} className="text-[8px] md:text-[10px]" style={{ color: '#1a365d' }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
