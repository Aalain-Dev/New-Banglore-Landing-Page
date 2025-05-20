import React from 'react';

const cards = [
  {
    icon: 'https://www.hashgrowth.org/wp-content/uploads/2023/05/insight-icon-1.svg',
    title: 'Subject matter experts sharing practical insights',
    desc: 'All speakers are practitioners who are actually driving growth for some of the leading consumer brands in India.',
  },
  {
    icon: 'https://www.hashgrowth.org/wp-content/uploads/2023/05/insight-icon-2.svg',
    title: 'Sharp focus on customer engagement',
    desc: 'The sessions will cover best practices surrounding omnichannel marketing strategies and execution.',
  },
  {
    icon: 'https://www.hashgrowth.org/wp-content/uploads/2023/05/insight-icon-3.svg',
    title: 'Exclusive and high-quality conversations',
    desc: 'It’s an invite-only, exclusive conference for marketing and product leaders at consumer brands.',
  },
];

const WhyAttend = () => {
  return (
    <section className="relative bg-white pb-10 overflow-hidden">

      {/* Glow Backgrounds */}
      <div className="absolute top-0 left-[-100px] w-80 h-80 bg-red-300 blur-[120px] opacity-30 rounded-full -z-10" />
      <div className="absolute top-0 right-[-100px] w-80 h-80 bg-purple-300 blur-[120px] opacity-30 rounded-full -z-10" />

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">Why Attend?</h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="  rounded-card p-6 text-center bg-white "
          >
            <div className="flex justify-center mb-4">
              <img src={cards.icon} alt="" className="w-10 h-10 bg-black
              " />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAttend;