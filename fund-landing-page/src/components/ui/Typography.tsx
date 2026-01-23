import React from 'react';
import { FontFamilies } from '../../constants/theme';

interface TypographyProps {
  children?: React.ReactNode;
  className?: string;
  dangerouslySetInnerHTML?: { __html: string };
}

export const Heading1: React.FC<TypographyProps> = ({ children, className = "" }) => (
  <h1
    className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-[1.15] tracking-tight ${className}`}
    style={{ fontFamily: FontFamilies.serif }}
  >
    {children}
  </h1>
);

export const Heading2: React.FC<TypographyProps> = ({ children, className = "" }) => (
  <h2
    className={`font-serif text-3xl md:text-4xl font-semibold text-[#0f172a] leading-tight mb-6 ${className}`}
    style={{ fontFamily: FontFamilies.serif }}
  >
    {children}
  </h2>
);

export const Heading3: React.FC<TypographyProps> = ({ children, className = "" }) => (
  <h3
    className={`font-serif text-2xl md:text-3xl font-semibold text-[#0f172a] leading-snug mb-4 ${className}`}
    style={{ fontFamily: FontFamilies.serif }}
  >
    {children}
  </h3>
);

export const TextBody: React.FC<TypographyProps> = ({ children, className = "", dangerouslySetInnerHTML }) => (
  <p
    className={`font-sans text-lg text-[#475569] leading-loose max-w-3xl ${className}`}
    style={{ fontFamily: FontFamilies.sans }}
    {...(dangerouslySetInnerHTML && { dangerouslySetInnerHTML })}
  >
    {!dangerouslySetInnerHTML && children}
  </p>
);
