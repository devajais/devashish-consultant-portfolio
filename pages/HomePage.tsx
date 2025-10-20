import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutSection from '../pages/AboutPage';
import ServicesSection from '../pages/ServicesPage';
// import CaseStudiesPage from '../pages/CaseStudiesPage';
// import BlogPage from '../pages/BlogPage';

const HomePage: React.FC = () => {
  const ctaButtonClass = "px-8 py-3 text-lg font-bold text-base-bg bg-brand-primary rounded-full transition-all transform hover:scale-105 hover:bg-brand-secondary shadow-lg hover:shadow-brand-primary/40 animate-subtle-pulse";
  const secondaryButtonClass = "px-8 py-3 text-lg font-bold text-brand-primary border-2 border-brand-primary rounded-full transition-all transform hover:scale-105 hover:bg-brand-primary/10";

  return (
    <>
      <div className="text-center pt-20 flex flex-col justify-center items-center min-h-[60vh]">
        <div className="space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary leading-tight">
            Devashish Jaiswal
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-primary animate-glow">
            Fractional CTO & AI Architect
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            I partner with ambitious founders to build, scale, and launch world-class technology products. From idea validation to successful exits, I provide the strategic technical leadership you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <NavLink
              to="/contact"
              className={ctaButtonClass}
              data-cursor-hover
            >
              Start Your Journey
            </NavLink>
            <NavLink
              to="/case-studies"
              className={secondaryButtonClass}
              data-cursor-hover
            >
              View My Work
            </NavLink>
          </div>
        </div>
      </div>
      <AboutSection />
      <ServicesSection />
      {/* <CaseStudiesPage /> */}
      {/* <BlogPage /> */}
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-12">What People Say</h2>
          <div className="group relative p-px rounded-lg bg-base-card hover:bg-base-bg transition-all duration-300">
            <div className="relative bg-base-card rounded-lg p-8">
              <div className="text-6xl text-brand-primary mb-4">&ldquo;</div>
              <p className="text-xl text-text-secondary italic mb-6">
                Devashish is an exceptional technical leader who brings both deep expertise and strategic vision. His ability to architect scalable AI systems while mentoring teams is truly remarkable. He transformed our complex idea into a production-ready platform, delivering beyond expectations.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <p className="text-lg font-bold text-brand-primary">Shivang Jain</p>
                  <p className="text-sm text-text-secondary">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
