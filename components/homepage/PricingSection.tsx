'use client';

import { useRef, useEffect, useState } from 'react';
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
    features: ['Full conference access', 'Scientific sessions', 'Certificate of participation', 'Conference materials'],
  },
  {
    title: 'Consultant',
    price: '₹5,000',
    description: 'Practicing clinicians',
    features: ['Full conference access', 'CME credits', 'Networking dinner', 'Conference materials'],
  },
  {
    title: 'Workshop',
    price: '₹3,500',
    description: 'Hands-on training add-on',
    features: ['Live demonstrations', 'Biologics workshop', 'Practical sessions', 'Workshop certificate'],
  },
];

const highlights = [
  'Workshop-Live Demonstration of Biologics',
  'National & International Faculty with Extensive Experience in Regenerative Medicine',
  'Brainstorming Lok Adalats',
  'Comprehensive Scientific Program',
  'Live Demonstrations of Biologics',
  'Integrative Frontiers-Bridging Modern Multispecialty Care',
];

const scopeOfStemCells = [
  { title: 'ORTHOPEDICS', items: ['Cartilage Regeneration', 'Bone Healing', 'Tendon Repair', 'AVN Treatment'] },
  { title: 'OPHTHALMOLOGY', items: ['Corneal Repair', 'Retinal Therapy', 'Ocular Surface Healing'] },
  { title: 'DERMATOLOGY', items: ['Wound Healing', 'Hair Regeneration', 'Scar Modulation'] },
  { title: 'PLASTIC SURGERY', items: ['Soft-tissue Repair', 'Burn Reconstruction', 'Fat Therapies'] },
  { title: 'OB & GYN', items: ['Cord Banking', 'Endometrial Regeneration', 'Ovarian Restoration'] },
  { title: 'NEUROLOGY', items: ['Neural Repair', 'Stroke Recovery', 'Spinal Regeneration'] },
  { title: 'DENTISTRY', items: ['Pulp Regeneration', 'Periodontal Repair', 'Bone Grafting'] },
  { title: 'ENT', items: ['Airway Reconstruction', 'Hearing Restoration', 'Cartilage Repair'] },
];

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate pricing cards on scroll
      gsap.fromTo(
        '.pricing-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Animate highlights
      gsap.fromTo(
        '.highlight-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.highlights-section',
            start: 'top 85%',
          },
        }
      );

      // Animate scope cards
      gsap.fromTo(
        '.scope-card',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.scope-section',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 md:py-20 overflow-hidden"
      style={{ backgroundColor: '#b8c8d8' }}
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm font-medium uppercase tracking-widest mb-2" style={{ color: '#8e518d' }}>
            Registration
          </p>
          <h2 className="text-2xl md:text-4xl font-bold" style={{ color: '#1a365d' }}>
            Conference Pricing
          </h2>
        </div>

        {/* Pricing Cards - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.title}
              className="pricing-card group relative bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl transition-all duration-500 cursor-pointer"
              style={{
                transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredCard === index 
                  ? '0 25px 50px -12px rgba(142, 81, 141, 0.25)' 
                  : '0 10px 40px -10px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Decorative top border */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
                style={{ 
                  backgroundColor: '#8e518d',
                  opacity: hoveredCard === index ? 1 : 0.5,
                }}
              />
              
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold mb-1" style={{ color: '#1a365d' }}>
                  {tier.title}
                </h3>
                <p className="text-sm text-gray-500">{tier.description}</p>
              </div>
              
              <div className="text-center mb-6">
                <span className="text-4xl font-bold" style={{ color: '#8e518d' }}>
                  {tier.price}
                </span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm" style={{ color: '#1a365d' }}>
                    <span 
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                      style={{ backgroundColor: '#8e518d' }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href="/register"
                className="block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300"
                style={{
                  backgroundColor: hoveredCard === index ? '#8e518d' : 'transparent',
                  color: hoveredCard === index ? 'white' : '#8e518d',
                  border: '2px solid #8e518d',
                }}
              >
                Register Now
              </Link>
            </div>
          ))}
        </div>

        {/* Pricing Cards - Mobile */}
        <div className="md:hidden space-y-4 mb-10">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className="pricing-card bg-white/70 backdrop-blur-md rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-base font-bold" style={{ color: '#1a365d' }}>
                    {tier.title}
                  </h3>
                  <p className="text-xs text-gray-500">{tier.description}</p>
                </div>
                <span className="text-2xl font-bold" style={{ color: '#8e518d' }}>
                  {tier.price}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {tier.features.map((feature) => (
                  <span 
                    key={feature} 
                    className="text-xs px-2 py-1 rounded-full bg-white/80"
                    style={{ color: '#1a365d' }}
                  >
                    ✓ {feature}
                  </span>
                ))}
              </div>
              
              <Link
                href="/register"
                className="block w-full text-center py-2.5 rounded-lg font-semibold text-white text-sm"
                style={{ backgroundColor: '#8e518d' }}
              >
                Register Now
              </Link>
            </div>
          ))}
        </div>

        {/* Conference Highlights */}
        <div className="highlights-section mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#1a365d' }}>
              Conference Highlights
            </h3>
          </div>
          
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-5 md:p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="highlight-item flex items-start gap-3 p-3 md:p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-colors duration-300"
                >
                  <span 
                    className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold"
                    style={{ backgroundColor: '#8e518d' }}
                  >
                    •
                  </span>
                  <span className="text-sm md:text-base leading-relaxed" style={{ color: '#1a365d' }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scope of Stem Cells */}
        <div className="scope-section">
          <div className="text-center mb-6 md:mb-8">
            <span
              className="inline-block px-4 md:px-6 py-2 rounded-full text-white text-sm md:text-base font-semibold shadow-lg"
              style={{ backgroundColor: '#8e518d' }}
            >
              Scope of Stem Cells
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {scopeOfStemCells.map((scope) => (
              <div 
                key={scope.title} 
                className="scope-card bg-white/60 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg hover:bg-white/80 transition-all duration-300"
              >
                <h4
                  className="font-bold text-[10px] md:text-xs mb-2 px-2 py-1 rounded-lg inline-block"
                  style={{ backgroundColor: 'rgba(142, 81, 141, 0.15)', color: '#8e518d' }}
                >
                  {scope.title}
                </h4>
                <ul className="space-y-1">
                  {scope.items.map((item) => (
                    <li 
                      key={item} 
                      className="text-[10px] md:text-xs leading-relaxed"
                      style={{ color: '#1a365d' }}
                    >
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
