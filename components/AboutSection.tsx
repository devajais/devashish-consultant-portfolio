import React, { useState } from 'react';
import { Skill } from '../types';

const skillsData: Skill[] = [
  {
    category: "Leadership",
    items: ["Fractional CTO", "Team Building & Mentorship", "Technical Strategy", "Product Roadmapping"],
  },
  {
    category: "Technology",
    items: ["Large Language Models (LLM)", "AI Integration", "Cloud Architecture (GCP)", "Docker", "React.js", "Java", "Node.js"],
  },
];

const cardHoverEffect = "group relative p-px rounded-lg bg-base-card hover:bg-base-bg transition-all duration-300";
const cardInnerClass = "relative bg-base-card rounded-lg p-6 h-full";
const animatedBorder = "absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-borderGlow";

const ImageModal: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] animate-modal-in"
      onClick={onClose}
    >
      <img 
        src={src} 
        alt="Devashish Jaiswal" 
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      />
    </div>
  );
};

const AboutSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="space-y-20 py-20">
       {isModalOpen && <ImageModal src="dp-removebg-preview (1).png" onClose={() => setIsModalOpen(false)} />}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-text-primary">About Me</h1>
        <p className="text-2xl italic text-brand-primary animate-glow">"Decide, Commit, Succeed."</p>
      </div>

      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex justify-center items-center">
            <div className="relative group" data-cursor-hover onClick={() => setIsModalOpen(true)}>
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-1000 animate-tilt"></div>
              <img src="https://media.licdn.com/dms/image/v2/D5603AQE8QuPNnRlZgw/profile-displayphoto-shrink_400_400/B56ZeIfTRhHEAg-/0/1750341597624?e=1762387200&v=beta&t=StVTJYBNqgrlYeL433FH04IT6titPzGhzVSywC1JA7w" alt="Devashish Jaiswal" className="relative rounded-full h-64 w-64 md:h-80 md:w-80 object-cover bg-base-card shadow-xl border-4 border-base-card cursor-pointer" />
            </div>
        </div>
        <div className="md:col-span-3 space-y-4 text-text-secondary text-lg">
            <h2 className="text-3xl font-bold mb-4 text-text-primary">Your Path from Idea to Impact.</h2>
            <p>
              I empower non-technical founders, bridging the gap between great ideas and successful products.
            </p>
            <p>
             My journey is turning ambitious ideas into reality. From architecting AI systems to leading successful exits, I'm your guide and technical partner.
            </p>
        </div>
      </div>
      
      <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">My Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
              <div className={cardHoverEffect}>
                  <div className={`${cardInnerClass} text-center`}>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2">Clarity from Chaos</h3>
                    <p className="text-text-secondary">Defining a clear technical path in the fast-paced startup world.</p>
                  </div>
                   <div className={animatedBorder}></div>
              </div>
              <div className={cardHoverEffect}>
                   <div className={`${cardInnerClass} text-center`}>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2">Impact over Perfection</h3>
                    <p className="text-text-secondary">Shipping value quickly, iterating based on real-world feedback.</p>
                   </div>
                   <div className={animatedBorder}></div>
              </div>
              <div className={cardHoverEffect}>
                  <div className={`${cardInnerClass} text-center`}>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2">Building Bold Teams</h3>
                    <p className="text-text-secondary">Empowering engineers to own innovation and become leaders.</p>
                  </div>
                   <div className={animatedBorder}></div>
              </div>
          </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">Skills & Expertise</h2>
        <div className="space-y-8">
          {skillsData.map((skillCategory) => (
            <div key={skillCategory.category} className={cardHoverEffect}>
              <div className={`${cardInnerClass} p-8`}>
                <h3 className="text-2xl font-bold text-brand-primary mb-6">{skillCategory.category}</h3>
                <ul className="flex flex-wrap gap-3">
                  {skillCategory.items.map((item) => (
                    <li key={item} className="bg-brand-primary/10 text-brand-secondary px-4 py-2 rounded-full text-sm font-medium" data-cursor-hover>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={animatedBorder}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
