import React from 'react';
import { Section, Heading2, FAQItem } from '../ui';
import { faqData } from '../../constants/content';

export const FAQSection: React.FC = () => {
  return (
    <Section className="bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto">
        <Heading2 className="text-center mb-16">Frequently Asked Questions</Heading2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Section>
  );
};
