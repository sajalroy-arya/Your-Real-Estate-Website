import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { Button } from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled || isOpen ? 'bg-background-light/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      } border-b border-[#E5E0D8]`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Building2 className="text-primary w-8 h-8" strokeWidth={1.5} />
          <span className="font-display italic text-2xl font-bold text-primary tracking-wide hidden sm:block">
            This Website Can Be Yours
          </span>
           <span className="font-display italic text-2xl font-bold text-primary tracking-wide sm:hidden">
            TWCBY
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-bold uppercase tracking-wider text-primary hover:text-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
            <Button variant="gold" className="!py-3 !px-6 rounded-full text-xs">
                Claim This Site
            </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute w-full bg-background-light border-b border-[#E5E0D8] transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-sans text-lg font-bold uppercase tracking-wider text-primary hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="gold" onClick={() => setIsOpen(false)}>
            Claim This Site
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;