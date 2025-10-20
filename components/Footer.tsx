import React from 'react';

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-base-bg border-t border-base-border">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-text-secondary text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Devashish Jaiswal. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/devajais/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-primary transition-colors">
            <LinkedInIcon />
          </a>
          <p className="text-text-secondary text-sm">Let's connect.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;