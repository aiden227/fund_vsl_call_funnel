import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Sequoia Icon"
            className="h-10 w-10 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl text-[#112e4a] leading-none">Sequoia</span>
            <span className="font-sans text-xs tracking-widest text-[#11523c] uppercase mt-1">Strategies</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <a href="#" className="text-slate-500 hover:text-[#11523c] text-sm font-medium transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-slate-500 hover:text-[#11523c] text-sm font-medium transition-colors">
            Terms of Service
          </a>
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Sequoia Strategies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
