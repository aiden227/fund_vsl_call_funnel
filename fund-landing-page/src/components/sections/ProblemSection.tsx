import React from 'react';
import { Section, Heading2, TextBody } from '../ui';

export const ProblemSection: React.FC = () => {
  return (
    <Section className="bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Heading2 className="mb-8">Your AUM growth has flatlined.</Heading2>
            <div className="w-16 h-1 bg-[#11523c] mb-8"></div>
            <TextBody className="mb-6">
              You're stuck at a fund size that limits the deals you can pursue, watching competitors with less experience raise larger funds. You know you're falling behind.
            </TextBody>
            <TextBody>
              The traditional model of capital raising—dinners, conferences, and referrals—has hit a hard ceiling. Your cost per acquisition is skyrocketing, and the time to close is lengthening.
            </TextBody>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-100">
            <h4 className="font-serif text-xl font-bold text-[#112e4a] mb-6">The Daily Reality:</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-red-50 rounded-full text-red-800">
                  <span className="block w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
                <p className="text-slate-600">Your calendar is a chaotic mix of coffee meetings that go nowhere.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-red-50 rounded-full text-red-800">
                  <span className="block w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
                <p className="text-slate-600">Expensive flights to conferences with no tangible ROI.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-red-50 rounded-full text-red-800">
                  <span className="block w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
                <p className="text-slate-600">Spending more time as a salesperson than a fund manager.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="font-serif text-xl md:text-2xl text-[#112e4a] italic leading-relaxed">
            "It feels like you're running a 21st-century fund with a 20th-century growth model... Your success shouldn't be a matter of luck; it should be a matter of system and strategy."
          </p>
        </div>
      </div>
    </Section>
  );
};
