import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section, Heading2, TextBody, ButtonPrimary } from '../ui';

interface CTASectionProps {
  onCTAClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onCTAClick }) => {
  return (
    <Section id="cta-section" className="bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <Heading2 className="mb-8">Ready to Build Your Predictable Pipeline?</Heading2>
        <TextBody className="mb-10 mx-auto">
          Stop relying on unpredictable referrals. Book a complimentary, no-obligation Strategy Session. We will map out a customized plan and determine if our system is the right fit for your fund.
        </TextBody>

        <div className="flex flex-col items-center gap-6">
          <ButtonPrimary onClick={onCTAClick} className="text-lg px-12 py-5 w-full md:w-auto shadow-xl hover:shadow-2xl">
            BOOK YOUR STRATEGY SESSION <ArrowRight className="w-5 h-5 ml-2" />
          </ButtonPrimary>
          <p className="text-slate-400 text-sm italic">
            Pure value-add. No hard sell.
          </p>
        </div>
      </div>
    </Section>
  );
};
