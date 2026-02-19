import React from 'react';
import { Button } from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
        style={{ 
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcGjI7Rn6xMqrxWtR8pfaIVf4eZCcFshw1o61MqCPnzqihJfnp_TPMfQD2ZXMxWkqS9_kXzJSTBHuZZguruaqMP9otCaLrfo8lZQnz6T2IOGPpuSqVIgDJlhF_C8diFUrrKEQEVzqjq4LL7MwgGb1z8z7bwOVtzX9TaBFpwWoMOYSYQCdHQLvQsrN_SRKsubFhJx8KmCXPwk91FRNrXYPgajV_VxXAEgJV9RoVkvRWlLXZm4zFjQIxPeF6MJviF-K99XPIgUCQMbQ')" 
        }}
        aria-label="Luxurious modern living room"
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/30 bg-gradient-to-b from-primary/40 to-primary/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-8 pt-20 animate-fade-in-up">
        <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] text-shadow-sm px-2">
          Premium Properties.<br />
          Trusted Expertise.<br />
          <span className="text-gold">Your Brand Here.</span>
        </h1>
        
        <p className="font-body text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed px-4">
          Elevate your real estate business with a website designed for credibility and conversion. Built for agents who demand excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto px-6">
          <Button variant="primary" className="min-w-[200px] w-full sm:w-auto">
            Get This Website
          </Button>
          <Button variant="outline" className="min-w-[200px] w-full sm:w-auto">
            See Demo Listings
          </Button>
        </div>
      </div>

      {/* Stat Bar */}
      <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-white font-mono text-sm tracking-wider px-4">
          <div className="flex items-center gap-2">
            <span className="text-gold text-lg font-bold">142</span>
            <span>HOMES SOLD</span>
          </div>
          <div className="hidden sm:block text-white/40">|</div>
          <div className="flex items-center gap-2">
            <span className="text-gold text-lg font-bold">$48M</span>
            <span>VOLUME</span>
          </div>
          <div className="hidden sm:block text-white/40">|</div>
          <div className="flex items-center gap-2">
            <span className="text-gold text-lg font-bold">5-STAR</span>
            <span>RATED</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;