import React from 'react';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.24a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    title: "Tech Foundation for Non-Tech Founders",
    description: "From vision to funded plan. Your startup journey starts here.",
    details: ["Idea Validation & Tech Roadmapping", "Grant & Funding Strategy", "Building Your Initial Pitch Deck", "Defining Your MVP Scope"]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "MVP Development",
    description: "Bringing your funded concept to life with a successful MVP launch.",
    details: ["Agile Methodologies", "Rapid Prototyping", "Go-to-Market Tech Strategy"]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "AI & LLM Integration",
    description: "Build a competitive edge with intelligent, AI-powered features.",
    details: ["Voice-to-Voice Orchestration", "Scalable AI Architecture", "Model Fine-tuning"]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    title: "Fractional CTO",
    description: "Strategic leadership to scale your tech, team, and vision.",
    details: ["Executive Tech Leadership", "Team Scaling & Mentorship", "Architectural Oversight"]
  },
];

const cardHoverEffect = "group relative p-px rounded-lg bg-base-card hover:bg-base-bg transition-all duration-300";
const cardInnerClass = "relative bg-base-card rounded-lg p-8 h-full flex flex-col";
const animatedBorder = "absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-borderGlow";

const ServicesPage: React.FC = () => {
  const [featuredService, ...otherServices] = servicesData;

  return (
    <section id="services" className="space-y-20 pt-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-text-primary">Your Journey to Launch</h1>
        <p className="max-w-3xl mx-auto text-lg text-text-secondary">
          A structured pathway from a simple idea to a scalable tech business.
        </p>
      </section>

      {/* Featured Service */}
      <section>
        <div className={`animate-fadeInUp ${cardHoverEffect}`}>
            <div className={`${cardInnerClass} md:flex-row md:items-center md:gap-8`}>
              <div className="flex-shrink-0 mb-6 md:mb-0">{featuredService.icon}</div>
              <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-text-primary mb-3">{featuredService.title}</h3>
                  <p className="text-text-secondary mb-6">{featuredService.description}</p>
                   <ul className="grid sm:grid-cols-2 gap-2">
                      {featuredService.details.map(detail => (
                           <li key={detail} className="flex items-center text-text-secondary">
                              <svg className="h-5 w-5 text-brand-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                              <span>{detail}</span>
                          </li>
                      ))}
                  </ul>
              </div>
            </div>
            <div className={animatedBorder}></div>
          </div>
      </section>

      {/* Other Services */}
      <section className="grid md:grid-cols-3 gap-8">
        {otherServices.map((service, index) => (
          <div key={service.title} style={{ animationDelay: `${index * 100}ms` }} className={`animate-fadeInUp ${cardHoverEffect}`}>
            <div className={cardInnerClass}>
              <div className="flex-shrink-0 mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-2 text-sm">
                  {service.details.map(detail => (
                       <li key={detail} className="flex items-center text-text-secondary">
                          <svg className="h-5 w-5 text-brand-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                          <span>{detail}</span>
                      </li>
                  ))}
              </ul>
            </div>
            <div className={animatedBorder}></div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ServicesPage;