import React from 'react';
import { Section, Heading2 } from '../ui';

export const SolutionSection: React.FC = () => {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#112e4a] text-white rounded-2xl p-10 md:p-20 shadow-2xl relative overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#11523c] rounded-full opacity-20 blur-3xl"></div>

          <div className="relative z-10">
            <Heading2 className="text-white mb-8 border-l-4 border-[#11523c] pl-6">
              What if you could install a system that delivers a predictable flow of qualified, accredited investors directly to your calendar?
            </Heading2>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h4 className="text-xl font-bold text-white mb-4 font-serif">The New Model</h4>
                <p className="text-slate-300 leading-relaxed text-lg">
                  A system that operates completely within SEC guidelines, giving you the confidence to scale without regulatory blowback. Replace the unpredictability of referrals with the reliability of a machine.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4 font-serif">Our Solution</h4>
                <p className="text-slate-300 leading-relaxed text-lg">
                  The only turnkey, SEC-compliant system designed specifically for PE and real estate funds. We handle ad creation, compliance, funnel management, and appointment setting.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="font-medium text-[#11523c] bg-white inline-block py-2 px-4 rounded text-sm uppercase tracking-wider">
                Hands-Free Capital Raising
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
