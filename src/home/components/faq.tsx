"use client";
import { useState } from "react";
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <div className="min-h-screen w-full bg-white dark:bg-neutral-950 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 mt-20 sm:mt-32 md:mt-40">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6">
            FAQs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto px-4 sm:px-0">
            Get answers to your most pressing questions about our MVP development process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0 mb-12 sm:mb-16">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-neutral-200 dark:border-neutral-800">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-4 sm:py-6 px-2 sm:px-0 text-left hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black dark:text-white pr-4">
                  {item.question}
                </h3>
                <IoChevronDown 
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-neutral-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-4 sm:pb-6 px-2 sm:px-0 pr-4">
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
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
            We're here to help you with any inquiries. Check out our <a href="/services" className="text-purple-600 hover:text-purple-800 underline" title="Explore our development services">services</a> or view our <a href="/pricing" className="text-purple-600 hover:text-purple-800 underline" title="See our pricing plans">pricing</a>.
          </p>
          <a 
            href="https://cal.com/ved-sinha-ai-mvp/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
