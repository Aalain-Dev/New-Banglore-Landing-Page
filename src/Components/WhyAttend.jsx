import React, { useEffect } from 'react';
import insight from "../assets/Investor/insight-icon-2.svg"
import eye from "../assets/Investor/eye-icon.svg"
import gmail from "../assets/Investor/gmail.svg"
import purple from "../assets/Investor/purple-blur.webp"
import orange from "../assets/Investor/orange-blur.webp"
import Aos from 'aos'
import "../aos-master/dist/aos.css"
const cards = [
  {
    icon: insight,
    title: 'Curated Access to Top Startups',
    desc: 'Connect with high-potential, pre-vetted startups through 1:1 matchmaking and curated founder meetups.',
  },
  {
    icon:  eye,
    title: 'Insights & Pipeline Acceleration',
    desc: 'Gain investor-only market insights and spot co-investors to fast-track your deal pipeline with syndicates and strategic opportunities.',
  },
  {
    icon:  gmail,
    title: ' Exclusive, Outcome-Driven Networking',
    desc: 'Join a premium, invite-only space for real conversations with top VCs, angels, and brand leaders.',
  },
];

const WhyAttend = () => {
  useEffect(() => {
      Aos.init()
    }, []);
  return (
    <section className="relative bg-white pb-10 xl:pt-20 pt-5 overflow-hidden">
      {/* Glow Backgrounds */}
      <div className="image xl:block hidden">
        <img src={purple} alt="" className='absolute top-[-30px] right-[-200px] w-[500px] h-[500px]' />
      </div>
  <div className="image xl:block hidden">
        <img src={orange} alt="" className='absolute top-[10px] left-[-200px] w-[500px] h-[500px]' />
      </div>
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">Why Attend?</h2>
      </div>

      {/* Cards Grid */}
      <div className="f">
     

      </div>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 " >
        {cards.map((card, index) => (
          <div
            key={index}
            className="  rounded-card p-6 text-center bg-white " 
          >

            <div className="flex justify-center mb-4 ">
             <div className="bg-[#211F52] rounded-4xl p-3 border-3   border-[#3d3b8b]">
              <img src={card.icon} alt=""  className='text-black w-[30px] h-[30px] '/>
             </div>
            </div>
            <h3 className="font-semibold text-black text-[20px] mb-2 capitalize">
              {card.title}
            </h3>
            <p className="text-black text-lg">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAttend;