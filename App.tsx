import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ParticleBackground from './components/GridBackground';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  // Fix: Move global setup from incorrect HomePage.tsx to App.tsx's useEffect.
  useEffect(() => {
    document.title = 'Devashish Jaiswal | Fractional CTO';

    // Prevent duplicate script/style injection
    if (document.getElementById('app-global-styles')) return;

    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);

    const tailwindConfigScript = document.createElement('script');
    tailwindConfigScript.innerHTML = `
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              'brand-primary': '#00F5FF', // Electric Cyan
              'brand-secondary': '#00B8D9', // Deeper Cyan
              'base-bg': '#0D0D0D', // Near Black
              'base-card': '#1A1A1A', // Very Dark Gray
              'base-border': '#292929', // Dark Gray
              'text-primary': '#E0E0E0', // Light Gray (Off-white)
              'text-secondary': '#A0A0A0', // Medium Gray
            },
            fontFamily: {
              sans: ['Poppins', 'sans-serif'],
            },
            keyframes: {
              glow: {
                '0%, 100%': { textShadow: '0 0 10px theme(colors.brand-primary/50%)' },
                '50%': { textShadow: '0 0 25px theme(colors.brand-primary/80%)' },
              },
              fadeInUp: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
               fadeInDown: {
                '0%': { opacity: '0', transform: 'translateY(-100%)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              'subtle-pulse': {
                '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 theme(colors.brand-primary/30%)' },
                '50%': { transform: 'scale(1.02)', boxShadow: '0 0 0 10px theme(colors.brand-primary/0%)' },
              },
              borderGlow: {
                '0%, 100%': { 'border-image-source': 'linear-gradient(90deg, theme(colors.brand-primary), theme(colors.brand-secondary))' },
                '50%': { 'border-image-source': 'linear-gradient(90deg, theme(colors.brand-secondary), theme(colors.brand-primary))' },
              },
               'modal-in': {
                '0%': { opacity: '0', transform: 'scale(0.95)' },
                '100%': { opacity: '1', transform: 'scale(1)' },
              },
              'modal-out': {
                '0%': { opacity: '1', transform: 'scale(1)' },
                '100%': { opacity: '0', transform: 'scale(0.95)' },
              }
            },
            animation: {
              glow: 'glow 4s ease-in-out infinite',
              fadeInUp: 'fadeInUp 0.8s ease-out forwards',
              fadeInDown: 'fadeInDown 0.5s ease-out forwards',
              'subtle-pulse': 'subtle-pulse 2.5s ease-in-out infinite',
              borderGlow: 'borderGlow 3s linear infinite',
              'modal-in': 'modal-in 0.2s ease-out forwards',
              'modal-out': 'modal-out 0.2s ease-out forwards',
            },
          },
        },
      }
    `;
    tailwindScript.onload = () => {
      document.head.appendChild(tailwindConfigScript);
    };

    const googleFontsPreconnect1 = document.createElement('link');
    googleFontsPreconnect1.rel = 'preconnect';
    googleFontsPreconnect1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(googleFontsPreconnect1);

    const googleFontsPreconnect2 = document.createElement('link');
    googleFontsPreconnect2.rel = 'preconnect';
    googleFontsPreconnect2.href = 'https://fonts.gstatic.com';
    googleFontsPreconnect2.crossOrigin = 'anonymous';
    document.head.appendChild(googleFontsPreconnect2);
    
    const googleFontsLink = document.createElement('link');
    googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap';
    googleFontsLink.rel = 'stylesheet';
    document.head.appendChild(googleFontsLink);

    const globalStyles = document.createElement('style');
    globalStyles.id = 'app-global-styles';
    globalStyles.innerHTML = `
      :root {
        cursor: none;
      }
      .custom-cursor .cursor-dot {
        position: fixed;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        width: 6px;
        height: 6px;
        background-color: #00F5FF;
        border-radius: 50%;
        z-index: 9999;
        pointer-events: none;
        transition: transform 0.1s ease-out;
      }
      .custom-cursor .cursor-outline {
        position: fixed;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        border: 2px solid #00F5FF;
        border-radius: 50%;
        z-index: 9999;
        pointer-events: none;
        transition: all 0.2s ease-out;
      }
      .custom-cursor .cursor-outline.hovered {
        transform: translate(-50%, -50%) scale(1.5);
        background-color: rgba(0, 245, 255, 0.2);
      }
    `;
    document.head.appendChild(globalStyles);
  }, []);

  return (
    <HashRouter>
  <ParticleBackground />
  <CustomCursor />
  <div className="relative z-10 min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16 animation-fadeInUp pt-24">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
    <Footer />
  </div>
</HashRouter>
  );
};

export default App;
