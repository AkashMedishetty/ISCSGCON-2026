'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HeroSection = dynamic(
  () => import('@/components/homepage/HeroSection'),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen w-full" style={{ backgroundColor: '#b8c8d8' }} />
    ),
  }
);

const PricingSection = dynamic(
  () => import('@/components/homepage/PricingSection'),
  { ssr: false }
);

const CommitteeSection = dynamic(
  () => import('@/components/homepage/CommitteeSection'),
  { ssr: false }
);

const ExploreHyderabadSection = dynamic(
  () => import('@/components/homepage/ExploreHyderabadSection'),
  { ssr: false }
);

const CTASection = dynamic(
  () => import('@/components/homepage/CTASection'),
  { ssr: false }
);

const FooterSection = dynamic(
  () => import('@/components/homepage/FooterSection'),
  { ssr: false }
);

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Mobile Welcome Section Component
function MobileWelcomeSection() {
  return (
    <section className="md:hidden py-8 px-4" style={{ backgroundColor: '#b8c8d8' }}>
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 mx-auto max-w-md">
        <p className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: '#8e518d' }}>
          Dear Esteemed Colleagues
        </p>
        <h2 className="text-lg font-bold mb-2" style={{ color: '#1a365d' }}>
          Welcome to ISCSGCON 2026
        </h2>
        <p className="text-xs leading-relaxed mb-3" style={{ color: '#1a365d' }}>
          It is our privilege to invite you to the <span className="font-semibold">8th International Conference on Stem Cells and Regenerative Medicine</span>. 
          This prestigious gathering brings together leading researchers, clinicians, and innovators shaping the future of cellular therapy.
        </p>
        <p className="text-xs leading-relaxed mb-3" style={{ color: '#1a365d' }}>
          Our scientific program features <span className="font-semibold">Hands-on Workshops</span> covering advanced techniques in 
          mesenchymal stem cell isolation, PRP preparation, and regenerative orthopedic procedures. 
          <span className="font-semibold"> CME Symposiums</span> will address cutting-edge topics including cartilage regeneration, 
          bone healing applications, and cellular immunotherapy.
        </p>
        <p className="text-xs leading-relaxed mb-4" style={{ color: '#1a365d' }}>
          An enriching experience awaits you with keynote sessions from international pioneers, 
          abstract presentations, and networking opportunities in the vibrant city of Hyderabad.
        </p>
        <div className="flex justify-center gap-3">
          <div className="bg-white/60 rounded-xl px-3 py-2 text-center">
            <p className="text-lg font-bold" style={{ color: '#8e518d' }}>50+</p>
            <p className="text-[9px]" style={{ color: '#1a365d' }}>Speakers</p>
          </div>
          <div className="bg-white/60 rounded-xl px-3 py-2 text-center">
            <p className="text-lg font-bold" style={{ color: '#8e518d' }}>300+</p>
            <p className="text-[9px]" style={{ color: '#1a365d' }}>Attendees</p>
          </div>
          <div className="bg-white/60 rounded-xl px-3 py-2 text-center">
            <p className="text-lg font-bold" style={{ color: '#8e518d' }}>15+</p>
            <p className="text-[9px]" style={{ color: '#1a365d' }}>Workshops</p>
          </div>
          <div className="bg-white/60 rounded-xl px-3 py-2 text-center">
            <p className="text-lg font-bold" style={{ color: '#8e518d' }}>2</p>
            <p className="text-[9px]" style={{ color: '#1a365d' }}>Days</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Force scroll to top immediately
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    
    setMounted(true);
    
    // Set smooth scrolling after initial position is set
    const timer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 200);
    
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Show loading placeholder until mounted
  if (!mounted) {
    return (
      <main className="relative overflow-x-hidden bg-[#b8c8d8]">
        <div className="min-h-screen w-full" style={{ backgroundColor: '#b8c8d8' }} />
      </main>
    );
  }

  return (
    <main className="relative overflow-x-hidden bg-[#b8c8d8]">
      <HeroSection />
      <MobileWelcomeSection />
      <PricingSection />
      <CommitteeSection />
      <ExploreHyderabadSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
