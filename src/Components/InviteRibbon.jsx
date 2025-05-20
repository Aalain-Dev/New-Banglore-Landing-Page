import React from 'react';

const InviteBanner = () => {
  return (
    <div className="container">
        <section className="relative bg-[#b4d6d2] overflow-hidden px-6 py-6 mb-10">
      {/* Optional background image */}
      <div className="absolute inset-0 opacity-20 bg-cover bg-center bg-[url('https://moengage-cdn.moengage.com/wp-content/uploads/2023/05/cubepattern.png')]"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
        <h2 className="text-xl md:text-2xl font-medium text-black text-center md:text-left">
          Get your invite <strong>NOW</strong> before seats run out
        </h2>

        <button className="bg-black text-white px-6 py-3 text-sm font-medium rounded hover:bg-gray-900 transition">
          Request Your Invite
        </button>
      </div>
    </section>
    </div>
  );
};

export default InviteBanner;