import React from 'react';
import { Button } from '../ui/Button';

const CtaBanner: React.FC = () => {
  return (
    <section className="bg-gold py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-primary font-medium mb-8">
          Your Future Clients Are Already Searching.
        </h2>
        <p className="font-body text-primary/80 text-xl mb-10 max-w-2xl mx-auto">
          Don't let them find your competition. Claim this exclusive website design today and start building your legacy.
        </p>
        <div className="flex justify-center">
            <Button variant="primary" className="px-10 py-5 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Now
            </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;