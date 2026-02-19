import React from 'react';
import { ShieldCheck, TrendingUp, Palette } from 'lucide-react';

const TrustSection: React.FC = () => {
  const cards = [
    {
      icon: <ShieldCheck className="w-12 h-12" strokeWidth={1} />,
      title: "Credibility",
      description: "Establish trust immediately with a professional design that speaks to high-net-worth clients before you even meet them."
    },
    {
      icon: <TrendingUp className="w-12 h-12" strokeWidth={1} />,
      title: "Conversion",
      description: "Turn casual visitors into qualified leads with optimized user flows, clear calls-to-action, and lead capture forms."
    },
    {
      icon: <Palette className="w-12 h-12" strokeWidth={1} />,
      title: "Branding",
      description: "Make it yours with easy customization tools. Your colors, your logo, your story—seamlessly integrated."
    }
  ];

  return (
    <section className="bg-primary py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col gap-6 group">
              <div className="text-gold transition-transform duration-300 group-hover:-translate-y-2 flex justify-center md:justify-start">
                {card.icon}
              </div>
              <div>
                <h3 className="font-sans text-white text-xl font-bold uppercase tracking-wide mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-white/70 leading-relaxed text-lg">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;