import React from 'react';
import { ArrowRight, Bed, Bath, Move } from 'lucide-react';

interface Property {
  id: number;
  image: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  tag: string;
  tagType: 'dark' | 'gold';
  title: string;
  alt: string;
}

const FeaturedProperties: React.FC = () => {
  const properties: Property[] = [
    {
      id: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNYxW6nXPPgbTLEJTvZbya1n6B-V06opr2K-LQbKA7iiUP6-Q0ZYTIbEmFO7PCEfmzH-pf30du9xjDpzN0gG-bcXijy-BiFReHzi3p_auNPQZDXkwu58i4eOA3rLM6g-AvrHoOIcNfyqG9jbIalgkA6rJfl98VHdvQhGxeLUy95gsHK2FwmQBdqjxtGv1g8RYi1S0HVD4Yn-xRfNpqaYx7PM4JLjSiONBXu83ykpjqyf_HCUrqb89GGSWIoOAcQe9_sSsPtkfTLdQ',
      price: '$4.5M',
      location: 'Beverly Hills',
      beds: 5,
      baths: 4,
      sqft: '4,200',
      tag: 'Featured',
      tagType: 'dark',
      title: '123 Maple Dr',
      alt: 'Modern luxury villa with pool'
    },
    {
      id: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHNjz9CYQonueZdGAjdhCyWg6tdU5CfrfN3wERccq0ldcTkfuhvPeSRBCWq73Z2VPz54bGy7w3vSRG7uum5RFAtGdL41ScQVuQYkUhm3-mHFADtKJjk-mImOQ8Tznb8C2jczUVqJkZWDwhG8ifoQj3wSgeh5allFwumIXouWtTnriusBTpmMZGZVmM_JcTPnUc9Ko0hvwAh45oNJW6Z_bbxaqInoI0zAWL-Bax0tTsEMVli7O14VupH7loWJFfenkkAvOJ7vhKCV4',
      price: '$2.8M',
      location: 'Hollywood Hills',
      beds: 3,
      baths: 3,
      sqft: '2,800',
      tag: 'Sold',
      tagType: 'gold',
      title: '88 Sunset Blvd',
      alt: 'Luxury kitchen interior'
    },
    {
      id: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj4mx0-HnQRAbcGKtSSNmSkw7FDhTDip4_ry2IWWXCzzmkRy17N76eQ2Y1WD35gqXLALznOHK2pK1p3Uj0dc50rEfT0IwQufH4zMq4kfPJkWwieojV27rvRAwoFb0otYl2zJ3bBlHbEJEh6GiemByRO_vFc2ALGgPLMD_cWs38MIBOdkngv3HUaxv7xL6pGNhuWSKtu7RkoBvOLZ86Zl__nTWcxxj5ADN3btP_Lf6_rZQgX4JrTEjxpUuVIyazcvesn7kvhwu_0AA',
      price: '$5.2M',
      location: 'Malibu',
      beds: 6,
      baths: 5.5,
      sqft: '5,100',
      tag: 'New',
      tagType: 'dark',
      title: '45 Ocean View',
      alt: 'Modern white architectural house'
    },
    {
      id: 4,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcGjI7Rn6xMqrxWtR8pfaIVf4eZCcFshw1o61MqCPnzqihJfnp_TPMfQD2ZXMxWkqS9_kXzJSTBHuZZguruaqMP9otCaLrfo8lZQnz6T2IOGPpuSqVIgDJlhF_C8diFUrrKEQEVzqjq4LL7MwgGb1z8z7bwOVtzX9TaBFpwWoMOYSYQCdHQLvQsrN_SRKsubFhJx8KmCXPwk91FRNrXYPgajV_VxXAEgJV9RoVkvRWlLXZm4zFjQIxPeF6MJviF-K99XPIgUCQMbQ',
      price: '$3.1M',
      location: 'Santa Monica',
      beds: 3,
      baths: 2,
      sqft: '2,100',
      tag: 'View',
      tagType: 'dark',
      title: '77 Pacific Coast',
      alt: 'Beachfront view'
    },
    {
      id: 5,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4kS3mU9807EPzBavFfA5ZiOFgQ2oqLMBldPpSazU6gIL-FgK3sfw1EXHp5hQsW9oPPNtW4sMVsXQdGIqRamgtWlmjlZXks06qzgOnj4jE1t0nPCoykGzx6MJJQ7PMiQ__sQKC4xVUs77tJjMuTix7xj8RNsK3atxUE9Jih-Z6cN45vCjSWVQi1JeXaLP7nslJJ9nCz_yNhFOT5hejQ3taLLjIdGGHy_Fraqsrl5e3eIobjdzbYsFsJQrTCgLWR6gKIczcdafrrOY',
      price: '$7.5M',
      location: 'Bel Air',
      beds: 6,
      baths: 7,
      sqft: '8,000',
      tag: 'Exclusive',
      tagType: 'gold',
      title: 'The Bel Air Estate',
      alt: 'Mega mansion'
    }
  ];

  return (
    <section className="py-20 px-6 bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div>
            <span className="font-sans text-gold text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              Curated Portfolio
            </span>
            <h2 className="font-display italic text-4xl text-primary font-medium">
              Featured Properties
            </h2>
          </div>
          <a href="#" className="group flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors">
            View All
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Horizontal Staggered Scroll Container */}
        {/* pb-16 to allow space for the 'levitating' items that are pushed down */}
        <div className="flex gap-6 overflow-x-auto pb-16 pt-4 px-2 -mx-2 no-scrollbar snap-x cursor-grab active:cursor-grabbing">
          {properties.map((prop, index) => (
            <div 
              key={prop.id} 
              className={`
                relative flex-none w-[260px] md:w-[320px] snap-center transition-transform duration-500
                ${index % 2 !== 0 ? 'mt-12' : 'mt-0'} 
                hover:-translate-y-2 group
              `}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-md">
                {/* Tag */}
                <div className="absolute top-3 left-3 z-20">
                  <span className={`
                    px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm backdrop-blur-md
                    ${prop.tagType === 'gold' 
                      ? 'bg-gold/90 text-primary' 
                      : 'bg-primary/80 text-white'}
                  `}>
                    {prop.tag}
                  </span>
                </div>

                <img 
                  src={prop.image} 
                  alt={prop.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <div className="flex justify-between items-end mb-1">
                     <p className="font-display text-2xl font-medium">{prop.price}</p>
                  </div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/80 mb-2 truncate">{prop.title}</p>
                  
                  {/* Icons */}
                  <div className="flex items-center gap-3 text-white/90 text-[10px] font-sans border-t border-white/20 pt-2">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3 h-3" strokeWidth={2} /> {prop.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3 h-3" strokeWidth={2} /> {prop.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Move className="w-3 h-3" strokeWidth={2} /> {prop.sqft}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer for right padding in scroll view */}
          <div className="w-2 flex-none"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;