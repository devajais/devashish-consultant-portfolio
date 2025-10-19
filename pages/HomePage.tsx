import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage: React.FC = () => {
  const ctaButtonClass = "px-8 py-3 text-lg font-bold text-base-bg bg-brand-primary rounded-full transition-all transform hover:scale-105 hover:bg-brand-secondary shadow-lg hover:shadow-brand-primary/40 animate-subtle-pulse";
  const secondaryButtonClass = "px-8 py-3 text-lg font-bold text-brand-primary border-2 border-brand-primary rounded-full transition-all transform hover:scale-105 hover:bg-brand-primary/10";

  return (
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
  );
};

export default HomePage;
