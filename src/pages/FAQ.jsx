import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Dormly verify PGs?",
      answer: "Dormly's team personally connects with PG owners, inspects properties, and only lists trusted PGs after verification."
    },
    {
      question: "Can I list my PG on Dormly?",
      answer: "No. Listings are strictly managed by the Dormly team for quality control. Contact us for partnership."
    },
    {
      question: "Is there a fee to enquire or use Dormly?",
      answer: "No, Dormly is free for users to browse and enquire."
    },
    {
      question: "What areas does Dormly cover?",
      answer: "Currently, Dormly focuses on listings in major metropolitan areas. Check our listings page for specific locations."
    },
    {
      question: "How can I book a PG through Dormly?",
      answer: "You can enquire about a PG directly through its listing page. Our team will then assist you with the booking process."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-gray-800 hover:text-blue-600 focus:outline-none" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <svg className={`w-5 h-5 transition-transform transform ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-700 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}