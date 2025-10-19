import React from 'react';
import { BlogPost } from '../types';

const blogPostsData: BlogPost[] = [
  {
    title: "Your First Tech Hire: Lessons from a Startup CTO",
    description: "Navigating the complexities of hiring your first engineer is crucial. I share insights on what to look for, how to interview, and how to set them up for success."
  },
  {
    title: "The Lean Startup's Guide to Building an AI-Powered MVP",
    description: "You don't need a massive budget to leverage AI. This post breaks down a practical, cost-effective approach to integrating AI into your Minimum Viable Product."
  },
  {
    title: "From Idea to Impact: How a Clear 'Why' Defines Your Product",
    description: "Before a line of code is written, a strong purpose is your most important asset. A look into how aligning your 'why' with your tech strategy leads to impactful products."
  },
  {
    title: "Scaling to 1000 Concurrent Calls: An Architectural Deep Dive",
    description: "A technical breakdown of the challenges and solutions in building a highly-scalable voice AI system, covering architecture, technology choices, and performance tuning."
  },
];

const cardHoverEffect = "group relative p-px rounded-lg bg-base-card hover:bg-base-bg transition-all duration-300";
const cardInnerClass = "relative bg-base-card rounded-lg p-6 h-full";
const animatedBorder = "absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-borderGlow";


const BlogPage: React.FC = () => {
  return (
    <div className="space-y-16 pt-20">
        <section className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-text-primary">Insights & Articles</h1>
            <p className="max-w-3xl mx-auto text-lg text-text-secondary">
                Thoughts on technology, leadership, and building successful startups.
            </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
            {blogPostsData.map((post, index) => (
                <div key={index} style={{ animationDelay: `${index * 100}ms` }} className={`opacity-0 animate-fadeInUp ${cardHoverEffect}`} data-cursor-hover>
                    <div className={cardInnerClass}>
                      <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">{post.title}</h3>
                      <p className="text-text-secondary">{post.description}</p>
                      <span className="text-brand-primary font-semibold mt-4 inline-block">Read More &rarr;</span>
                    </div>
                    <div className={animatedBorder}></div>
                </div>
            ))}
        </section>
    </div>
  );
};

export default BlogPage;