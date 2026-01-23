import React from 'react';
import { Play } from 'lucide-react';
import { Section, Heading1, TextBody, ButtonPrimary } from '../ui';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  return (
    <Section className="pt-24 pb-32 md:pt-40 md:pb-40 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-semibold text-[#11523c] uppercase tracking-widest mb-8 text-sm">
          The #1 reason funds fail to scale isn't deal flow—it's investor flow.
        </p>
        <Heading1 className="mb-10 max-w-4xl mx-auto">
          Stop Relying on Referrals.{' '}
          <span className="block mt-2">Start Building a Predictable Pipeline of Qualified Investors.</span>
        </Heading1>
        <TextBody className="text-xl md:text-2xl mb-12 mx-auto text-slate-500 font-light">
          Our turnkey, SEC-compliant system uses targeted digital advertising to attract, qualify, and book calls with accredited investors—so you can focus on closing deals, not chasing leads.
        </TextBody>

        {/* VSL Placeholder */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video bg-slate-100 rounded-xl overflow-hidden shadow-2xl mb-12 border border-slate-200 group cursor-pointer flex items-center justify-center">
          <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/10 transition-colors"></div>
          <div className="w-24 h-24 bg-[#11523c] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
            <Play className="w-10 h-10 text-white fill-white ml-1" />
          </div>
          <p className="absolute bottom-8 font-sans font-medium text-slate-500 bg-white/80 px-4 py-1 rounded-full backdrop-blur-sm">
            Watch the 2-Minute Breakdown
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <ButtonPrimary onClick={onCTAClick} className="text-lg px-10">
            Book Your Complimentary Strategy Session
          </ButtonPrimary>
        </div>
      </div>
    </Section>
  );
};
