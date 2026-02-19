import React from 'react';
import { Button } from '../ui/Button';

const AgentSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col md:flex-row h-auto">
        {/* Left: Image */}
        <div 
          className="w-full md:w-1/2 bg-cover bg-center min-h-[500px] md:min-h-[700px]"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4kS3mU9807EPzBavFfA5ZiOFgQ2oqLMBldPpSazU6gIL-FgK3sfw1EXHp5hQsW9oPPNtW4sMVsXQdGIqRamgtWlmjlZXks06qzgOnj4jE1t0nPCoykGzx6MJJQ7PMiQ__sQKC4xVUs77tJjMuTix7xj8RNsK3atxUE9Jih-Z6cN45vCjSWVQi1JeXaLP7nslJJ9nCz_yNhFOT5hejQ3taLLjIdGGHy_Fraqsrl5e3eIobjdzbYsFsJQrTCgLWR6gKIczcdafrrOY')" }}
          aria-label="Professional real estate agent"
        ></div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-background-light">
          <span className="font-mono text-gold text-sm uppercase tracking-widest mb-4">The Agent</span>
          <h2 className="font-display italic text-5xl text-primary font-medium mb-6">
            Your Name.<br />
            Your Story.<br />
            Your Clients.
          </h2>
          
          <div className="border-l-4 border-gold pl-6 my-8">
            <p className="font-display italic text-2xl text-primary/80 leading-relaxed">
              "Real estate isn't about homes. It's about people, their stories, and finding the perfect setting for their next chapter."
            </p>
          </div>
          
          <p className="font-body text-mocha text-lg leading-relaxed mb-8">
            Use this section to introduce yourself. Share your philosophy, your achievements, and why clients love working with you. This template is designed to let your personality shine through.
          </p>
          
          <div className="w-fit">
            <Button variant="primary">Read My Full Bio</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;