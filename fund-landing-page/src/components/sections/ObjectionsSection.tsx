import React from 'react';
import { Section, Heading2 } from '../ui';
import { objections } from '../../constants/content';

export const ObjectionsSection: React.FC = () => {
  return (
    <Section className="bg-white">
      <Heading2 className="text-center mb-16">Addressing Your Concerns</Heading2>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {objections.map((objection, index) => (
          <div key={index} className="p-8 bg-white border border-slate-100 rounded-lg shadow-sm">
            <h4 className="font-serif font-bold text-xl text-[#112e4a] mb-4">{objection.question}</h4>
            <div
              className="font-sans text-lg text-[#475569] leading-loose max-w-3xl text-base"
              dangerouslySetInnerHTML={{ __html: objection.answer }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
