import React from 'react';
import video from ".././assets/Bannner-Top/banner-video.mp4";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
// import star from "../assets/Bannner-Top/star.svg"
import star from "../assets/Bannner-Top/star.png"
import Icon_Slider from './Icon_Slider';
import ChangingWordText from './ChangingWordText';
const Video = () => {
  return (
    <>
      <div className="relative w-full h-[770px] bg-red-600">
<video src={video} autoPlay muted loop className="w-full h-full object-cover" ></video>
        <div className=" absolute  top-0 w-full flex justify-center text-white font-bold text-2xl h-full flex-col z-3 gap-0">
          <div className="flex flex-col justify-center items-center gap-10">
          <h1 className = "xl:text-[5rem] text-[2.75rem] uppercase font-semibold mt-20 mb-[-20px]">CAPITAL CONNECT 

</h1>
          <h1  className = "xl:text-9xl text-white text-5xl">BANGALORE</h1>
          <h1 className="xl:text-2xl  font-bold mb-4 text-center">
            {/* <TypeAnimation
              sequence={[
                'A curated, high-voltage day right in the middle of India’s startup capital where startups pitch',
                1000,
                'A curated, high-voltage day right in the middle of India’s startup capital where  investors scout and   leaders connect VCs Fund',
                1000,

                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className=""
            /> */}
            <ChangingWordText/>
          </h1>
          <a href="https://rzp.io/rzp/sZ9BQwCl" target="_blank" className=" uppercase pink-bg text-white text-center xl:text-[20px] px-5 py-5 rounded-xl font-bold cursor-pointer gradient-bg border-2 w-90 ">
            Buy Tickets
          </a>
        <p className='flex gap-2 bg-[#bdb7b750] px-3 py-3  items-center rounded-2xl xl:text-xl text-lg xl:flex-row lg:flex-row flex-col'><img src= {star} className='w-40'/> 4.9 Google Review</p>
          </div>

        <Icon_Slider/>
        </div>
     
      </div>
    </>
  );
}

export default Video;
