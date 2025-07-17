"use client";
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "What is an MVP?",
      answer: "An MVP, or Minimum Viable Product, is a basic version of your product. It includes only the essential features needed to satisfy early adopters. This approach helps you validate your idea quickly and cost-effectively."
    },
    {
      question: "How long does it take?",
      answer: "We pride ourselves on delivering your MVP in just 21 days. This rapid development process ensures you can test your concept in the market swiftly. Our streamlined approach maximizes efficiency without sacrificing quality."
    },
    {
      question: "What should I provide?",
      answer: "To get started, we need a clear idea of your product and its core features. Any existing designs or user research will also be beneficial. The more information you provide, the better we can tailor the MVP to your needs."
    },
    {
      question: "What happens after launch?",
      answer: "After launching your MVP, we recommend gathering user feedback to refine your product. This feedback loop is crucial for making informed decisions about future features. Our team can assist you in analyzing this data for optimal results."
    },
    {
      question: "Can I make changes?",
      answer: "Absolutely! We understand that ideas evolve. You can request changes during the development process, and we will accommodate them as best as we can within the timeline."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-screen w-full bg-white dark:bg-neutral-950 flex flex-col justify-center items-center px-4 md:px-8 lg:px-10">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
            FAQs
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            Get answers to your most pressing questions about our MVP development process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0 mb-16">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-neutral-200 dark:border-neutral-800">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white pr-4">
                  {item.question}
                </h3>
                <IoChevronDown 
                  className={`w-5 h-5 text-neutral-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-6 pr-4">
                  <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-8">
            We're here to help you with any inquiries.
          </p>
          <button className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
