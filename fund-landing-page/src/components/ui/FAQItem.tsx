import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TextBody } from './Typography';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-8 text-left flex justify-between items-center focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-xl font-medium text-[#0f172a] group-hover:text-[#11523c] transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="text-[#11523c]" />
        ) : (
          <ChevronDown className="text-[#475569]" />
        )}
      </button>
      {isOpen && (
        <div className="pb-8 pr-4">
          <TextBody>{answer}</TextBody>
        </div>
      )}
    </div>
  );
};
