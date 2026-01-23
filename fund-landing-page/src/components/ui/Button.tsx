import React from 'react';

interface ButtonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`bg-[#11523c] hover:bg-[#0d4330] text-white font-sans font-semibold py-4 px-8 rounded-md shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 ${className}`}
  >
    {children}
  </button>
);
