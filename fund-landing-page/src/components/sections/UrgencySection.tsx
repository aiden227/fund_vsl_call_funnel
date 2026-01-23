import React from 'react';
import { Section, Heading3, ButtonPrimary } from '../ui';

interface UrgencySectionProps {
  onCTAClick: () => void;
}

export const UrgencySection: React.FC<UrgencySectionProps> = ({ onCTAClick }) => {
  return (
    <Section className="bg-[#0f172a] text-white text-center py-20">
      <div className="max-w-3xl mx-auto">
        <Heading3 className="text-white mb-6">A Note on Our Capacity</Heading3>
        <p className="text-slate-400 mb-8 leading-relaxed text-lg">
          We only partner with a limited number of new funds each month to ensure high performance. This is an operational reality, not a marketing tactic. If you are serious about building a pipeline this quarter, secure your spot today.
        </p>
        <ButtonPrimary
          className="w-full md:w-auto mx-auto bg-white text-[#11523c] hover:bg-slate-100 border border-transparent hover:border-slate-200"
          onClick={onCTAClick}
        >
          Secure Your Spot
        </ButtonPrimary>
      </div>
    </Section>
  );
};
