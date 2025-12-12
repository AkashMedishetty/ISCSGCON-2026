'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Conference', href: '/about' },
    { name: 'Scientific Program', href: '/program-schedule' },
    { name: 'Registration', href: '/register' },
    { name: 'Abstracts', href: '/abstracts' },
    { name: 'Venue Information', href: '/venue' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
    { name: 'Cookies Policy', href: '/cookies-policy' },
  ];

  return (
    <footer className="relative" style={{ backgroundColor: '#d7c0d0' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              <span style={{ color: '#8e518d' }}>ISCSG</span>
              <span style={{ color: '#1a365d' }}>CON</span>
              <span style={{ color: '#8e518d' }}> 2026</span>
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#1a365d' }}>
              8th International Conference on Stem Cells and Regenerative Medicine. 
              Join leading experts in cellular therapy at Taj Deccan, Hyderabad.
            </p>
            
            <div className="space-y-2 text-sm pt-2">
              <div className="flex items-center gap-2" style={{ color: '#1a365d' }}>
                <Calendar className="w-4 h-4" style={{ color: '#8e518d' }} />
                <span>March 14-15, 2026</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#1a365d' }}>
                <MapPin className="w-4 h-4" style={{ color: '#8e518d' }} />
                <span>Taj Deccan, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#1a365d' }}>
                <span className="font-bold" style={{ color: '#8e518d' }}>300+</span>
                <span>Expected Delegates</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4 uppercase tracking-wider" style={{ color: '#1a365d' }}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm flex items-center gap-2 group transition-colors hover:opacity-80"
                    style={{ color: '#1a365d' }}
                  >
                    <span className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: '#8e518d' }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-base font-bold mb-4 uppercase tracking-wider" style={{ color: '#1a365d' }}>Contact</h4>
            
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: '#8e518d' }}>Conference Manager</p>
                <p className="text-sm" style={{ color: '#1a365d' }}>Ms. Lakhshmi Prabha</p>
              </div>

              <div className="space-y-1.5">
                <a 
                  href="tel:+919052192744"
                  className="flex items-center gap-2 text-sm transition-colors hover:opacity-80"
                  style={{ color: '#1a365d' }}
                >
                  <Phone className="w-4 h-4" />
                  +91 9052192744
                </a>
                <a 
                  href="mailto:contact@iscsgcon2026.com"
                  className="flex items-center gap-2 text-sm transition-colors hover:opacity-80"
                  style={{ color: '#1a365d' }}
                >
                  <Mail className="w-4 h-4" />
                  contact@iscsgcon2026.com
                </a>
              </div>

              <div className="pt-3 border-t" style={{ borderColor: 'rgba(26, 54, 93, 0.2)' }}>
                <p className="font-semibold text-sm mb-1" style={{ color: '#8e518d' }}>Apple Events</p>
                <p className="text-xs" style={{ color: '#1a365d' }}>Lakhshmi Prabha: +91 9052192744</p>
                <p className="text-xs opacity-70" style={{ color: '#1a365d' }}>Conference Management</p>
              </div>
            </div>
          </div>

          {/* Tech Partner */}
          <div>
            <h4 className="text-base font-bold mb-4 uppercase tracking-wider" style={{ color: '#1a365d' }}>Tech Partner</h4>
            <a 
              href="https://purplehatevents.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="text-xl font-bold hover:opacity-80 transition-opacity" style={{ color: '#8e518d' }}>
                PurpleHat Events
              </div>
              <p className="text-xs mt-1 opacity-70" style={{ color: '#1a365d' }}>purplehatevents.in</p>
            </a>
            
            <div className="mt-6">
              <p className="text-xs mb-2 opacity-70" style={{ color: '#1a365d' }}>Organized by</p>
              <p className="text-sm font-medium" style={{ color: '#1a365d' }}>Indian Stem Cell Study Group</p>
              <p className="text-xs mb-3 opacity-70" style={{ color: '#1a365d' }}>In association with Dept. of Orthopedics</p>
              <Image 
                src="/LOGOS/3.png" 
                alt="Yashoda Hospitals" 
                width={80} 
                height={80} 
                className="object-contain"
                sizes="80px"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 pt-6 border-t" style={{ borderColor: 'rgba(26, 54, 93, 0.2)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-center md:text-left opacity-70" style={{ color: '#1a365d' }}>
              © {currentYear} ISCSGCON 2026. All rights reserved.
            </p>
            
            <div className="flex gap-4 md:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs transition-colors hover:opacity-100 opacity-70"
                  style={{ color: '#1a365d' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
