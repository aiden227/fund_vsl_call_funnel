import React from 'react';
import { Section, Heading2 } from '../ui';
import { socialProofData } from '../../constants/content';

export const SocialProofSection: React.FC = () => {
  return (
    <Section className="bg-white">
      <Heading2 className="text-center mb-16">Proven Results</Heading2>
      <div className="grid md:grid-cols-3 gap-12">
        {socialProofData.map((proof, index) => (
          <div key={index} className="text-center p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-all duration-300">
            <h4 className="font-serif font-bold text-xl text-[#0f172a] mb-4">{proof.title}</h4>
            <div className="h-px w-16 bg-[#11523c] mx-auto mb-6 opacity-30"></div>
            <p className="font-sans font-bold text-[#11523c] text-5xl mb-4">{proof.metric}</p>
            <p className="text-slate-600 font-medium">{proof.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
