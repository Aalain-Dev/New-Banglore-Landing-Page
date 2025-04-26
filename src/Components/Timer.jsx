import React, { useState, useEffect } from "react";

const Timer = () => {
  // Set your countdown target date
  const targetDate = new Date("2025-05-17T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="fixed bottom-0 left-0 flex-col-h w-full bg-[#211F52] text-white py-2 px-6 flex items-center justify-center xl:gap-10 gap-5 rounded-t-3xl z-50 shadow-md">
      <div className="flex xl:flex-row flex-col items-center space-x-3 text-lg font-semibold gap-5">
       <div className="flex xl:gap-10 xl:flex-row flex-col gap-1">
       <div className="div">
        <span>Prices Increase In:</span>
        </div>
        <div className="flex gap-3 justify-center items-center">
        <span className="text-white xl:text-xl text-lg text-strip font-bold">{timeLeft.days}</span>
        <span className="text-strip">Days</span> :
        <span className="text-white xl:text-xl text-lg text-strip font-bold">{timeLeft.hours}</span>
        <span className="text-strip">Hrs</span> :
        <span className="text-white xl:text-xl text-lg text-strip font-bold">{timeLeft.minutes}</span>
        <span className="text-strip">Mins</span> :
        <span className="text-white xl:text-xl text-lg text-strip font-bold">{timeLeft.seconds}</span>
        <span className="text-strip">Secs</span>
        </div>
      </div>
       </div>

      <button className="uppercase pink-bg xl:w-80 lg:w-80 md:w-80  w-full text-white text-center xl:text-lg px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-b-2 ">
        BUY TICKETS
      </button>
    </div>
  );
};

export default Timer;
