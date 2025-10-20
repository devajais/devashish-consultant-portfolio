import React from 'react';
import { CaseStudy } from '../types';

const caseStudiesData: CaseStudy[] = [
  {
    title: "Glimpass",
    subtitle: "From Launch to Successful Acquisition",
    role: "Co-Founder",
    challenge: "Lead frontend and cloud infrastructure for a complex mapping platform.",
    process: "Utilized React.js for a dynamic frontend, with Docker and GCP for scalable cloud infrastructure. Managed a NoSQL database (ArangoDB) to handle complex data relationships.",
    outcome: "Successfully acquired, validating the product's technical foundation and market fit. A full-cycle startup success.",
    acquired: true,
  },
  {
    title: "markAIble",
    subtitle: "Engineering for High-Performance Scale",
    role: "Co-Founder & COO (Technology)",
    challenge: "Develop a voice AI system to handle over 1000 concurrent calls with minimal latency.",
    process: "Architected a voice orchestration model using OpenAI, Deepgram, and 11labs, containerized with Docker and deployed on GCP for massive scale.",
    outcome: "Delivered a resilient platform exceeding concurrency targets, showcasing deep AI architectural expertise.",
  },
  {
    title: "Neurolaw AI",
    subtitle: "Building a Vision from the Ground Up",
    role: "CTO & Lead Technical Architect",
    challenge: "Transform a complex legal tech idea into a structured, scalable, and market-ready product.",
    process: "Led a team of 8, defining the architecture, roadmap, and agile processes to rapidly execute the founder's vision.",
    outcome: "Successfully launched a powerful product, demonstrating leadership from ideation through to team management and execution.",
  },
];

const cardHoverEffect = "group relative p-px rounded-lg bg-base-card hover:bg-base-bg transition-all duration-300";
const cardInnerClass = "relative bg-base-card rounded-lg p-8 h-full space-y-6";
const animatedBorder = "absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-borderGlow";


const CaseStudyCard: React.FC<{ study: CaseStudy, index: number }> = ({ study, index }) => (
    <div style={{ animationDelay: `${index * 100}ms` }} className={`animate-fadeInUp ${cardHoverEffect}`}>
        <div className={cardInnerClass}>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <h2 className="text-3xl font-bold text-brand-primary">{study.title}</h2>
                {study.acquired && (
                    <span className="mt-2 sm:mt-0 inline-block bg-brand-primary/10 text-brand-secondary px-4 py-1 rounded-full font-semibold">Acquired</span>
                )}
            </div>
            <p className="text-lg font-semibold text-text-primary">{study.subtitle}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-bold text-text-primary mb-1">Role</h4>
                    <p className="text-text-secondary">{study.role}</p>
                </div>
                <div>
                    <h4 className="font-bold text-text-primary mb-1">Challenge</h4>
                    <p className="text-text-secondary">{study.challenge}</p>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-text-primary mb-1">Process</h4>
                <p className="text-text-secondary">{study.process}</p>
            </div>

            <div>
                <h4 className="font-bold text-text-primary mb-1">Outcome</h4>
                <p className="text-text-secondary">{study.outcome}</p>
            </div>
        </div>
        <div className={animatedBorder}></div>
    </div>
);


const CaseStudiesPage: React.FC = () => {
  return (
    <section id="case-studies" className="space-y-16 pt-20">
        <section className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-text-primary">Case Studies</h1>
            <p className="max-w-3xl mx-auto text-lg text-text-secondary">
                Challenges tackled. Results delivered. A showcase of impact.
            </p>
        </section>

        <div className="space-y-12">
            {caseStudiesData.map((study, index) => (
                <CaseStudyCard key={index} study={study} index={index} />
            ))}
        </div>
    </section>
  );
};

export default CaseStudiesPage;