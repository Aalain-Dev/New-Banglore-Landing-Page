import React, { useEffect } from 'react';
import Aos from 'aos'
import "../aos-master/dist/aos.css"
import { Link as ScrollLink } from 'react-scroll';

const InviteBanner = () => {

  useEffect(() => {
    Aos.init()
  }, []);
  return (
    <div className="container">
        <section className="relative bg-[#b4d6d2] overflow-hidden px-6  py-2 mb-10 xl:pt-10 pt-5 pb-10" data-aos="fade-down">
      {/* Optional background image */}

      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
        <h2 className="text-xl md:text-2xl font-medium text-black text-center md:text-left capitalize">
          Get your invite <b>NOW before</b> the slots fill out 
        </h2>
        <ScrollLink to="tickets" smooth={true} duration={500}  className="bg-black text-white px-6 py-3 text-lg cursor-pointer font-medium rounded hover:bg-gray-900 transition">
     Request Your Invite
      </ScrollLink>
      </div>
    </section>
    </div>
  );
};

export default InviteBanner;