import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const navLinks = [
  { path: '/', label: 'Home', hash: false },
  { path: '/#about', label: 'About', hash: true },
  { path: '/#services', label: 'Services', hash: true },
  { path: '/case-studies', label: 'Case Studies', hash: true },
  { path: '/blog', label: 'Blog', hash: true },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
  }, [location]);

  const linkClass = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300";
  const activeLinkClass = "bg-brand-primary/10 text-brand-primary";
  const inactiveLinkClass = "text-text-secondary hover:text-text-primary";
  const ctaButtonClass = "px-5 py-2 text-sm font-bold text-base-bg bg-brand-primary rounded-full transition-all transform hover:scale-105 hover:bg-brand-secondary shadow-lg hover:shadow-brand-primary/40";

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  const renderLink = (link: typeof navLinks[0], isMobile: boolean = false) => {
    const mobileClass = isMobile ? "block text-center text-lg py-2" : "";
    if (link.hash) {
      return (
        <HashLink
          key={link.path}
          to={link.path}
          smooth
          scroll={scrollWithOffset}
          className={`${linkClass} ${inactiveLinkClass} ${mobileClass}`}
          data-cursor-hover
        >
          {link.label}
        </HashLink>
      );
    }
    return (
      <NavLink
        key={link.path}
        to={link.path}
        className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass} ${mobileClass}`}
        isActive={() => location.pathname === link.path}
        data-cursor-hover
      >
        {link.label}
      </NavLink>
    );
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fadeInDown w-[90vw] md:w-auto">
      {/* Desktop Header */}
      <nav className="hidden md:flex items-center gap-2 bg-base-card/50 backdrop-blur-lg border border-base-border rounded-full p-2 shadow-2xl">
        <NavLink 
          to="/" 
          className="text-lg font-bold text-text-primary hover:text-brand-primary transition-colors px-4 py-1"
          data-cursor-hover
        >
          DJ
        </NavLink>
        <div className="w-px h-6 bg-base-border mx-2"></div>
        {navLinks.map(link => renderLink(link))}
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
      <div className="md:hidden relative w-full">
        <nav className="flex items-center justify-between w-full bg-base-card/80 backdrop-blur-lg border border-base-border rounded-full p-2 shadow-2xl">
          <NavLink 
            to="/" 
            className="text-lg font-bold text-text-primary hover:text-brand-primary transition-colors px-3 py-1"
          >
            DJ
          </NavLink>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-10 p-2" aria-label="Toggle menu">
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block h-0.5 w-full bg-text-primary transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-text-primary transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-text-primary transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 right-0 mt-2 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
          <div className="bg-base-card/90 backdrop-blur-lg border border-base-border rounded-2xl p-4 shadow-2xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => renderLink(link, true))}
              <div className="w-full h-px bg-base-border my-2"></div>
              <NavLink
                to="/contact"
                className={`${ctaButtonClass} text-center`}
                data-cursor-hover
              >
                Start Your Journey
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;