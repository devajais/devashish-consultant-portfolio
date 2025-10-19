import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
];

const Header: React.FC = () => {
  const linkClass = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300";
  const activeLinkClass = "bg-brand-primary/10 text-brand-primary";
  const inactiveLinkClass = "text-text-secondary hover:text-text-primary";
  const ctaButtonClass = "px-5 py-2 text-sm font-bold text-base-bg bg-brand-primary rounded-full transition-all transform hover:scale-105 hover:bg-brand-secondary shadow-lg hover:shadow-brand-primary/40";

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fadeInDown">
      <nav className="hidden md:flex items-center gap-2 bg-base-card/50 backdrop-blur-lg border border-base-border rounded-full p-2 shadow-2xl">
        <NavLink 
          to="/" 
          className="text-lg font-bold text-text-primary hover:text-brand-primary transition-colors px-4 py-1"
          data-cursor-hover
        >
          DJ
        </NavLink>
        <div className="w-px h-6 bg-base-border mx-2"></div>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
            data-cursor-hover
          >
            {link.label}
          </NavLink>
        ))}
        <div className="w-px h-6 bg-base-border mx-2"></div>
        <NavLink
          to="/contact"
          className={ctaButtonClass}
          data-cursor-hover
        >
          Start Your Journey
        </NavLink>
      </nav>
      
      {/* Mobile Header */}
      <nav className="md:hidden flex items-center justify-between w-[90vw] bg-base-card/80 backdrop-blur-lg border border-base-border rounded-full p-2 shadow-2xl">
        <NavLink 
          to="/" 
          className="text-lg font-bold text-text-primary hover:text-brand-primary transition-colors px-3 py-1"
        >
          DJ
        </NavLink>
        <NavLink
          to="/contact"
          className="px-4 py-2 text-sm font-bold text-base-bg bg-brand-primary rounded-full transition-transform transform hover:scale-105"
        >
          Get Started
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;