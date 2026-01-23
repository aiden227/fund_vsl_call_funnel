import React from 'react';
import { Shield } from 'lucide-react';
import { Section, Heading2, TextBody } from '../ui';
import { credibilityPoints } from '../../constants/content';

export const AuthoritySection: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f8fafc] mb-8">
          <Shield className="w-10 h-10 text-[#11523c]" />
        </div>
        <Heading2 className="mb-8">We are not a generalist marketing agency.</Heading2>
        <TextBody className="mx-auto text-xl">
          We are capital raising strategists who specialize in one thing: building compliant, high-performance investor acquisition systems for private equity and real estate funds.
        </TextBody>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {credibilityPoints.map((point, index) => (
            <div key={index} className="p-6 border-l-2 border-[#11523c]">
              <h4 className="font-bold text-[#0f172a] mb-2">{point.title}</h4>
              <p className="text-sm text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
