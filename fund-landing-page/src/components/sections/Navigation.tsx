import React from 'react';
import { ButtonPrimary } from '../ui';

interface NavigationProps {
  onCTAClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onCTAClick }) => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-100 py-5 px-6 md:px-12 lg:px-24 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/logo-long.png"
            alt="Sequoia Strategies"
            className="h-10 md:h-12 w-auto object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.style.display = 'none';
              if (target.parentNode) {
                (target.parentNode as HTMLElement).innerHTML = '<span class="font-serif font-bold text-2xl text-[#112e4a]">Sequoia Strategies</span>';
              }
            }}
          />
        </div>
        <ButtonPrimary className="hidden md:flex py-3 px-6 text-sm" onClick={onCTAClick}>
          Book Strategy Session
        </ButtonPrimary>
      </div>
    </nav>
  );
};
