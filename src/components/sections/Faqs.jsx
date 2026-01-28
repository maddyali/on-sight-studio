"use client";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who is this service best for?",
      answer:
        "Small businesses that need high-converting websites without the overhead of an agency. If you're launching a product, running ads, or need a site that actually drives revenue—not just looks good—we're built for you.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Most projects wrap in 4-8 weeks depending on scope. We'll give you a clear timeline upfront, and you'll get regular updates throughout the build",
    },
    {
      question: "What if something breaks after launch?",
      answer:
        "All projects include post-launch support. If something goes wrong, we fix it. We're not disappearing after you pay the invoice.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <p className="text-gray-600 text-sm font-medium mb-4 text-center">
          FAQ
        </p>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center">
          Questions? Answers.
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-900 rounded-3xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center gap-4 p-6 text-left hover:bg-gray-50 transition-colors"
              >
                {/* Number Badge */}
                <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-900">
                  {index + 1}
                </div>

                {/* Question Text */}
                <span className="flex-1 text-xl font-bold text-gray-900">
                  {faq.question}
                </span>

                {/* Plus/Minus Icon */}
                <div className="flex-shrink-0 w-10 h-10 border-2 border-gray-900 rounded-full flex items-center justify-center text-2xl font-light">
                  {openIndex === index ? "−" : "+"}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed ml-16">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
