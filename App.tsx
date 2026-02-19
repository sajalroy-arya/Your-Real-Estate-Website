import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import TrustSection from './components/sections/TrustSection';
import FeaturedProperties from './components/sections/FeaturedProperties';
import AgentSection from './components/sections/AgentSection';
import Testimonials from './components/sections/Testimonials';
import HowItWorks from './components/sections/HowItWorks';
import CtaBanner from './components/sections/CtaBanner';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <FeaturedProperties />
        <AgentSection />
        <Testimonials />
        <HowItWorks />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;