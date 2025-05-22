import React, { useEffect } from 'react';
import Aos from 'aos'
import "../aos-master/dist/aos.css"
const InviteBanner = () => {

  useEffect(() => {
    Aos.init()
  }, []);
  return (
    <div className="container">
        <section className="relative bg-[#b4d6d2] overflow-hidden px-6 py-6 mb-10 pt-10 pb-10" data-aos="fade-down">
      {/* Optional background image */}
      <div className="absolute inset-0 opacity-20 bg-cover bg-center bg-[url('https://moengage-cdn.moengage.com/wp-content/uploads/2023/05/cubepattern.png')]"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
        <h2 className="text-xl md:text-2xl font-medium text-black text-center md:text-left capitalize">
          Get your invite <b>NOW before</b> the slots fill out 
        </h2>

        <button className="bg-black text-white px-6 py-3 text-lg font-medium rounded hover:bg-gray-900 transition">
          Request Your Invite
        </button>
      </div>
    </section>
    </div>
  );
};

export default InviteBanner;