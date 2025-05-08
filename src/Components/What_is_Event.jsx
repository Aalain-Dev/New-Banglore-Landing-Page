import React from 'react'
import video from "../assets/What_Is_Event/video.mp4"
const What_is_Event = () => {
  return (
  <div className="xl:mt-20 xl:mb-20  mt-5 mb-10">
      <section className="container py-12 px-6 md:px-20 flex xl:flex-row flex-col-reverse  lg:items-center lg:justify-between gap-10">
    {/* Left Content */}
    <div className="xl:w-1/2 w-full">
      <h3 className="blue-color font-semibold text-xl uppercase tracking-wide mb-2">
        What is
      </h3>
      <h2 className="text-[30px] font-bold blue-color mb-4">
      CAPITAL CONNECT?
      </h2>
     <div className="flex flex-col">
     <p className="blue-color mb-4 text-[16px] text-lg">
     Capital Connect is where India’s next unicorns get seen, scouted, and scaled.

      </p>
      <p className="blue-color mb-4 text-[16px] text-lg">
      Curated by <b>BizDateUp</b> This exclusive experience brings together the boldest founders, sharpest investors, and startup champions—all under one high-energy roof in Bangalore.
      </p>
      <p className="blue-color mb-8 text-[16px] text-lg">
      You’ll rub shoulders with top-tier VCs, pitch in front of cheque-ready angels, soak up startup secrets from powerhouse panels, and dive into immersive zones built for real capital conversations.

      </p>
      <p className="blue-color mb-8 text-[16px] text-lg">
      This is not just another startup event.  
It’s your <b>fast lane to funding, visibility, and scale</b>.

      </p>
    
     <div className="w-full">
     <a href="https://rzp.io/rzp/sZ9BQwCl" target="_blank" className="inline-block  uppercase pink-bg text-white text-center xl:text-lg px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-b-2 w-full">
        BUY TICKETS
      </a>
     </div>
     </div>
    </div>

    {/* Right Content */}
    <div className="mt-10 lg:mt-0 xl:w-1/2 relative w-full">
    <video src={video} autoPlay muted loop >
</video>

     
    </div>
  </section>
  </div>
  )
}

export default What_is_Event