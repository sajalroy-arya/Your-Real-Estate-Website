import React from 'react';
import { Building2, MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 px-6 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="text-gold w-6 h-6" />
              <span className="font-display italic text-xl font-bold">This Website Can Be Yours</span>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed">
              The ultimate real estate template for agents who value design, performance, and results.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-gold mb-6">Explore</h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-white/80">
              {['Properties', 'Agents', 'Services', 'Journal'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-gold mb-6">Contact</h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-white/80">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> 123 Luxury Lane, Beverly Hills
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> hello@premiumestate.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-gold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, label: "IG" },
                { Icon: Linkedin, label: "LI" },
                { Icon: Facebook, label: "FB" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold hover:text-primary transition-all"
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-white/40">
          <p>© 2023 This Website Can Be Yours. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;