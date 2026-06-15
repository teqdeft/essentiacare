"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.question}
          content={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div
      className={cn(
        "border border-gray-200 rounded-xl overflow-hidden transition-all duration-300",
        isOpen && "border-primary/30 shadow-md shadow-primary/5"
      )}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4">{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-primary shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 pb-5 text-gray-600 leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}
