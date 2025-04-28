import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqss = [
  {
    question: "How many tickets are in Startup Pass?",
    answer: "Two people per Startup pass are allowed.",
  },
  {
    question: "Are there any networking event?",
    answer: "We have a Netowrking Lunch,  Coffee Rave and Networking hi-tea towards the end.",
  },
  {
    question: "Do you offer additional discounts?",
    answer: "We are unable to provide further discounts as our tickets are already offered at a discounted ticket rate. We do offer bundle discounts that you can get by connecting with Khushi@bizdateup.com",
  },
  {
    question: "Who attends Capital Connect?",
    answer: "Capital Connect -  This is one of your events from around the nation. It is a meeting place where newbies and experts come together to network, learn, and move the Ecosystem forward. Popular attendee backgrounds include VC, Investment banking and Mentorships.",
  },
  {
    question: "Can I speak or propose a speaker for Capital Connect?",
    answer: "We are always looking for interesting speakers and talks for our line-up. If you have someone in mind or would like to nominate a suggestion, please fill reach out with Khushi@bizdateup.com",
  },
  {
    question: "Where is the Event venue?",
    answer: "ICB INDIAN CRAFT BREWERY - Sy no 90/3, K, 572/90, Outer Ring Rd, beside Manhpo Convention Center, DadaMastan Layout, Manayata Tech Park, Nagawara, Bengaluru, Karnataka 560045",
  },
  {
    question: "Can I transfer my ticket to another person?",
    answer: "You may re-assign your ticket up to 48 hours before the event by contacting Khushi@bizdateup.com",
  },
  {
    question: "Can I get a refund if I am not able to attend?",
    answer: " Refunds are not allowed",
  },
];
const faqs = [
  {
    question: "How many tickets are in Company Pass?",
    answer: "It includes up to 4 tickets per company.",
  },
  {
    question: "Is there an after party / networking event?",
    answer: "Yes! We have dedicated networking sessions and an official after party.",
  },
  {
    question: "Do you offer additional discounts?",
    answer: "Group discounts are available. Reach out to our support team.",
  },
  {
    question: "Who attends Affiliate World?",
    answer: "Affiliate World brings together marketers, brands, agencies, and networks from around the globe.",
  },
  {
    question: "asdas?",
    answer: "Affiliate World brings together marketers, brands, agencies, and networks from around the globe.",
  },
  {
    question: "Where is the Event venue?",
    answer: "ICB INDIAN CRAFT BREWERY - Sy no 90/3, K, 572/90, Outer Ring Rd, beside Manhpo Convention Center, DadaMastan Layout, Manayata Tech Park, Nagawara, Bengaluru, Karnataka 560045",
  },
  {
    question: "Can I transfer my ticket to another person?",
    answer: "You may re-assign your ticket up to 48 hours before the event by contacting Khushi@bizdateup.com",
  },
  {
    question: "Can I get a refund if I am not able to attend?",
    answer: " Refunds are not allowed",
  },
];
export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (

<div className="container">
  <h1 className="similar-head blue-color font-extrabold text-center mb-2 mt-10">FREQUENTLY ASKED QUESTIONS
  </h1>
<div className="flex xl:flex-row flex-col gap-0">
{/* <div className="max-w-3xl mx-auto mt-5 p-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-4 cursor-pointer transition-all duration-300"
          onClick={() => toggle(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-[1.25rem] font-medium">{faq.question}</h3>
            <ChevronDown
              className={`w-5 h-5 transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180 -translate-x-1" : ""
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 text-[1rem]">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div> */}
    <div className="max-w-3xl mx-auto mt-5 p-4">
      {faqss.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-4 cursor-pointer transition-all duration-300"
          onClick={() => toggle(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-[1.25rem] font-medium capitalize">{faq.question}</h3>
            <ChevronDown
              className={`w-5 h-5 transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180 -translate-x-1" : ""
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 text-[1rem]">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
</div>
</div>
  );
}
