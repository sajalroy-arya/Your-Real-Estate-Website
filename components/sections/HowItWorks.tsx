import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Select",
      description: "Choose this premium template as the foundation for your online presence. It's built for growth."
    },
    {
      number: "02",
      title: "Customize",
      description: "Add your branding, your listings, and your story. Our intuitive tools make it simple."
    },
    {
      number: "03",
      title: "Launch",
      description: "Go live and start attracting high-quality leads immediately. Your digital empire awaits."
    }
  ];

  return (
    <section className="bg-primary py-24 px-6 text-white relative overflow-hidden">
        {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="font-mono text-gold text-sm uppercase tracking-widest block mb-2">Process</span>
          <h2 className="font-display italic text-4xl md:text-5xl font-medium">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-8 md:pl-0 pt-10 border-l border-gold/30 md:border-l-0 md:border-t">
              <span className="absolute -left-3 md:-top-3 md:left-0 text-gold text-2xl">•</span>
              <span className="absolute top-0 right-0 font-mono text-8xl text-white/5 font-bold -z-10 select-none">
                {step.number}
              </span>
              <h3 className="font-sans text-xl font-bold uppercase tracking-wide mb-4">
                {step.title}
              </h3>
              <p className="font-body text-white/70 text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;