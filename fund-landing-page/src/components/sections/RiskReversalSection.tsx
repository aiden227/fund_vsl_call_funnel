import React from 'react';
import { Shield } from 'lucide-react';
import { Section, Heading2, TextBody } from '../ui';

export const RiskReversalSection: React.FC = () => {
  return (
    <Section className="bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto text-center border border-[#11523c]/20 rounded-2xl p-12 md:p-16 bg-[#f8fafc] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-5">
          <Shield className="w-64 h-64 text-[#11523c]" />
        </div>

        <div className="relative z-10">
          <Shield className="w-16 h-16 text-[#11523c] mx-auto mb-6" />
          <Heading2 className="mb-6">Our 90-Day Guarantee</Heading2>
          <TextBody className="mx-auto text-lg mb-0">
            We guarantee a minimum of <strong>15 qualified, accredited investor calls</strong> for your fund within the first 90 days. If we fail to meet this benchmark, we work for free until we do. You will not pay another dollar in management fees until we've hit that target.
          </TextBody>
        </div>
      </div>
    </Section>
  );
};
