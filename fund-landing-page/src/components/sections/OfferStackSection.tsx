import React from 'react';
import { Check } from 'lucide-react';
import { Section, Heading2 } from '../ui';
import { offerStackItems } from '../../constants/content';

export const OfferStackSection: React.FC = () => {
  return (
    <Section className="bg-[#112e4a] text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Heading2 className="text-white mb-6">The Complete Investor Acquisition System</Heading2>
          <p className="text-slate-300 text-lg">Everything you need to scale your capital raising:</p>
        </div>

        <div className="bg-white text-slate-900 rounded-xl p-10 md:p-14 shadow-2xl">
          <div className="border-b border-slate-100 pb-8 mb-8">
            <h3 className="font-serif text-3xl font-bold text-[#11523c] mb-4">Core Offer: Done-For-You Acquisition</h3>
            <p className="text-slate-600 text-lg">A complete, end-to-end system designed to generate a predictable pipeline of qualified accredited investor calls.</p>
          </div>

          <ul className="grid md:grid-cols-2 gap-y-6 gap-x-12">
            {offerStackItems.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#11523c]/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#11523c]" />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
