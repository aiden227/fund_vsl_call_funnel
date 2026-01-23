import React from 'react';
import { Section, Heading2, TextBody } from '../ui';
import { processSteps } from '../../constants/content';

export const ProcessSection: React.FC = () => {
  return (
    <Section className="bg-[#f8fafc]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Heading2>Our 4-Step Investor Acquisition System</Heading2>
        <TextBody className="mx-auto">Designed to be thorough, compliant, and completely turnkey.</TextBody>
      </div>

      <div className="space-y-16 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2 z-0"></div>

        {processSteps.map((item, index) => (
          <div key={index} className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Number Badge */}
            <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 bg-[#112e4a] text-white w-12 h-12 rounded-full items-center justify-center font-bold text-lg shadow-lg border-4 border-[#f8fafc]">
              {item.step}
            </div>

            <div className={`order-2 ${index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'}`}>
              <div className={`bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 ${index % 2 === 0 ? 'mr-0' : 'ml-0'}`}>
                <h3 className="font-serif text-2xl font-bold text-[#11523c] mb-4">{item.title}</h3>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2 block">What happens</span>
                  <p className="text-slate-700 leading-relaxed">{item.what}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2 block">Why it matters</span>
                  <p className="text-slate-600 italic">{item.why}</p>
                </div>
              </div>
            </div>
            <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}></div>
          </div>
        ))}
      </div>
    </Section>
  );
};
