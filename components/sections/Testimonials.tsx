import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "The most professional real estate experience we've ever had. The website made browsing listings a joy.",
      name: "Sarah Jenkins",
      location: "Bought in Beverly Hills",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuImsA3Kb6CzhK033g-NegeYtuFJzwqLDVlzfsxwqwXofydQOyFmm5a4F1HTxSobICBlaCiaZKiuW_A030d8cTdjEbEmgtl8MW0NZZdcvylEMHA6wJpLksfHDOHVmKN-OBuKGegaXUJl73PJ10Ga0GdYpulPPVZBGHNavJFzPPTechN55_wUhdBJq-rVW1KB9NozgrHY38vFWIDrPPdOv9umyrhhdn4IaKvU9bRBLHF6znKRDs59dsRHeyLSlK8c1LRnd2DKhuY4M"
    },
    {
      text: "Incredible attention to detail. Sold our home in record time for over asking price.",
      name: "Michael Ross",
      location: "Sold in Silver Lake",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU32vb0oBxacLcVFjK0T60lUFS5BKvxU5lOT864CQLNGDrkFfZZokhLNkNHEbpMd6hz3mjyWnwORIRXERpbgZF5DXWRANHHtgDfuNentu6W8pVLc54F9MR2AQUzUNpql9npQND6ChRF4LG1MAfXFAITwDvkFWIoZ-sW_uO0B0Ik-zCwoc8gGfxLrHC7jzAYYw-f40_Ig4t1k0XhdV04TZsKKSlC7LkvoMwSIlTMmUMbDfam0Jn4aUHiajOT-DYpIh0uhsVS0_GMJw"
    },
    {
      text: "Found our dream home within a week. The curated selection was spot on.",
      name: "Elena Rodriguez",
      location: "Bought in Malibu",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1hFgDsp9uuqR8asB5nSDKILb_I4atCJa7fSE-qWJxbpNjz6GcQOP2LuAbQG4ck8KutH8VoekN3nn1AuaWHh0mii9KdSByDe_k5rFeDe4oNMNPPOydbrR67Xri2aSIRNv6vfOir9mZxtqQ5tKErXy_RTJR3-6smSDtV1b2m8_P3XC0_TUgq6cTkSdO4cVfGEraMSkoonFsSWAKV-VCCcdyOvZpzJGhpt5dg66axL2HdYqeyygSg-v9MRXhxeGyuFoGw1vu2bUXN0g"
    },
    {
      text: "Professional, courteous, and highly knowledgeable. Highly recommended.",
      name: "David Chen",
      location: "Sold in Downtown",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs7-LwBjtrCe6z1scB8VO7VTlHKHni_QMP0spZlj2ut8YGGTKcDq63s32utlFQ84TGfqn0w5LAyjs5I6IQSFUkcLekHOmWIZyDUVUje3q60aAN803ZZVBvbxalXX7M4juYf3EBZtxLW7fq_RrHOIp2vjY2NAxrJIZuvnB2kcPd8EHRypeEvCjN8WnB1FtOgxFTGMOG2tW5Z1G23GhaMQHedLsluBJYWEyNeq0a2WfYmVnrJVGOlouGO0gNGMvuymLTsPcA9vX5X5E"
    }
  ];

  // Duplicate for infinite scroll
  const allReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-background-light overflow-hidden border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="font-mono text-gold text-sm uppercase tracking-widest block mb-2">Testimonials</span>
        <h2 className="font-display text-4xl text-primary font-medium">What Clients Say</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* The width needs to be calculated or just large enough. w-max works well. */}
        <div className="flex gap-8 animate-scroll w-max px-6 hover:[animation-play-state:paused]">
          {allReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[400px] bg-white p-8 rounded-lg shadow-sm border border-[#E5E0D8] shrink-0"
            >
              <div className="flex text-gold mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-body italic text-lg text-primary/80 mb-6 line-clamp-4">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 bg-gray-200 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${review.image}')` }}
                ></div>
                <div>
                  <p className="font-sans font-bold text-primary text-sm">{review.name}</p>
                  <p className="font-mono text-xs text-mocha">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;