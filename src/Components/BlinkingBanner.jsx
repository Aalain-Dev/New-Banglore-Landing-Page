import React from 'react';
import { MegaphoneIcon } from '@heroicons/react/24/outline'; // Optional for icon

const BlinkingBanner = () => {
  return (
    <div className="w-full mt-5 bg-transparent text-white py-3 px-6 flex items-center justify-center gap-3  ">
      <MegaphoneIcon className="h-6 w-6 text-white animate-pulse" />
      <p className="text-lg font-semibold tracking-wide blinking-text">
        Hurry! Ticket prices go up on <span className="underline">May 25th</span> — <span className="font-bold">Book Now</span> 🎟️
      </p>
    </div>
  );
};

export default BlinkingBanner;
