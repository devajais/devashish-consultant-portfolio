// import React from 'react';

// const cardHoverEffect = "group relative p-px rounded-lg bg-base-card";
// const cardInnerClass = "relative bg-base-card rounded-lg p-8";
// const animatedBorder = "absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-borderGlow";

// const ContactPage: React.FC = () => {
//   return (
//     <div className="max-w-3xl mx-auto text-center pt-20">
//       <h1 className="text-4xl font-bold mb-4 text-text-primary">Build The Future.</h1>
//       <p className="text-lg text-text-secondary mb-12">
//         Let's connect about your project, strategy, or next big idea.
//       </p>
      
//       <div className={cardHoverEffect}>
//         <div className={`${cardInnerClass} text-left`}>
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Name</label>
//                 <input type="text" name="name" id="name" className="block w-full bg-base-bg border-base-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm p-3" />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email</label>
//                 <input type="email" name="email" id="email" className="block w-full bg-base-bg border-base-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm p-3" />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">Company</label>
//               <input type="text" name="company" id="company" className="block w-full bg-base-bg border-base-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm p-3" />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">How can I help?</label>
//               <textarea id="message" name="message" rows={4} className="block w-full bg-base-bg border-base-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm p-3"></textarea>
//             </div>
//             <div>
//               <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-base-bg bg-brand-primary hover:bg-brand-secondary transition-all transform hover:scale-105">
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className={animatedBorder}></div>
//       </div>

//       <div className="mt-12">
//         <p className="text-text-secondary">
//             Or, reach out directly.
//         </p>
//         <div className="flex justify-center items-center space-x-4 mt-4">
//              <a href="mailto:devashishjaiswal84@gmail.com" className="text-brand-primary hover:underline">devashishjaiswal84@gmail.com</a>
//              <span className="text-text-secondary">|</span>
//              <a href="https://www.linkedin.com/in/devajais/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">LinkedIn</a>
//              <span className="text-text-secondary">|</span>
//              <a href="https://topmate.io/devashish_jaiswal" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Schedule 1:1 call</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center pt-20 px-6">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">
        Build The Future.
      </h1>
      <p className="text-lg text-text-secondary mb-10">
        Let's connect about your project, strategy, or next big idea.
      </p>

      <div className="bg-base-card p-8 rounded-xl shadow-md border border-base-border">
        <h2 className="text-xl font-semibold text-text-primary mb-6">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="mailto:devashishjaiswal84@gmail.com"
            className="text-brand-primary hover:underline font-medium"
          >
            Email
          </a>
          <span className="hidden md:block text-text-secondary">|</span>
          <a
            href="https://www.linkedin.com/in/devajais/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline font-medium"
          >
            LinkedIn
          </a>
          <span className="hidden md:block text-text-secondary">|</span>
          <a
            href="https://topmate.io/devashish_jaiswal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline font-medium"
          >
            Schedule 1:1 Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
