'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items?.length) return null;

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className="border border-[#202128] rounded-xl overflow-hidden transition-colors duration-200"
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex items-center justify-between px-6 py-5 transition-colors duration-200 ${isOpen ? 'text-left bg-[#12132a]' : 'text-left bg-[#0B0C17] hover:bg-[#12132a]'}`}
              aria-expanded={isOpen}
            >
              <span className="text-[#E5E5E5] font-medium text-sm sm:text-base pe-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#937AFF] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5 pt-2 bg-[#0B0C17]">
                <p className="text-[#817E84] text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
