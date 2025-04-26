import React from 'react';
import card from '../assets/Company_Cards/card.png'; 

const Company_Card = () => {
  return (
    <div className="col-span-1  border-1 border-[#f7f7f7] hover:border-2 hover:border-blue-400 transition rounded-2xl p-4 flex flex-col items-center bg-white shadow-md">
      {/* Sponsor Tag */}
      <div className=" flex bg-blue-100 text-black text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1 mb-4">
      <p>  Official Stage & Business Hub Sponsor</p>
      </div>

      {/* Logo */}
      <img src={card} alt="Pin-Up Partners" className="w-full  object-contain" />
    </div>
    
  );
};

export default Company_Card;
