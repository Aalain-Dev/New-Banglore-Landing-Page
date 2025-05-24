import React, { useEffect } from "react";
import {
  FaUserFriends,
  FaLightbulb,
  FaUserLock,
  FaUsers,
} from "react-icons/fa";
// import video from "../assets/What_Is_Event/video.mp4"
import video from "../assets/Investor/about_capital.mp4"
import grid_lines from "../assets/Investor/grid-lines.svg"
import interactive from "../assets/Investor/interactive-blur.webp"
import insightful from "../assets/Investor/insightful-blur.webp"
import invite from "../assets/Investor/invite-only-blur.webp"
import person from "../assets/Investor/in-person.webp"
import Aos from 'aos'
import "../aos-master/dist/aos.css"
const featureItems = [
  {
    label: "Interactive",
    icon: <FaUserFriends size={20} />,
    bg: "bg-red-500",
    shadow: "shadow-red-300",
    position: "top-10 left-[30px]",
             bg_img_position:" top-[-40px] left-[-40px]  w-[146px] h-[ 225px]",

    bg_img:interactive
  },
  {
    label: "Insightful",
    icon: <FaLightbulb size={20} />,
    bg: "bg-blue-500",
    shadow: "shadow-blue-300",
    position: "top-10 right-0",
          bg_img_position:" top-[-40px] left-[-40px]  w-[146px] h-[ 225px]",
    bg_img:insightful
  },
  {
    label: "Invite Only",
    icon: <FaUserLock size={20} />,
    bg: "bg-green-500",
    shadow: "shadow-green-300",
    position: "bottom-10 left-[30px]",
      bg_img_position:" top-[-40px] left-[-40px]  w-[146px] h-[ 225px]",
    bg_img:invite
  },
  {
    label: "In-Person",
    icon: <FaUsers size={20} />,
    bg: "bg-purple-500",
    shadow: "shadow-purple-300",
    position: "bottom-10 right-10",
         bg_img_position:"left-[-36px] top-[-42px] w-[146px] h-[ 225px]",
    bg_img:person
  },
];
    // width:  !important;
    // height: !important;
 
const AboutGrowth = () => {
   useEffect(() => {
      Aos.init()
    }, []);
  return (
    <section className="relative  md:px-10 bg-white  container pt-40 pb-20 overflow-hidden  " >
        <div className="absolute top-0  right-[-700px]">
                <img src={grid_lines} alt=""  />
              </div>
               <div className="absolute top-0 bg-white  blur-[100px] w-full h-full left-[-400px] z-1">
        </div>
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0"  />

      {/* Icons floating on sides */}
      {featureItems.map((item, idx) => (
        <div
          key={idx}
          className={`absolute ${item.position} bg-[#f7f7f7] rounded-md flex items-center gap-3 px-4 py-2 z-2` }
        >
          <div
            className={`text-white p-2 rounded-full ${item.bg} ${item.shadow} shadow-md z-2`}
          >
            {item.icon}
          </div>
          <span className="font-medium text-lg text-black">{item.label}
            <img src={item.bg_img} className={`${item.bg_img_position}  z-1 absolute`} alt=""  />
          </span>
        </div>
      ))}

      {/* Main Text Content */}
   <div className="flex xl:flex-row flex-col xl:gap-10 gap-0 items-center ">
       <div className="xl:w-1/2 w-full mx-auto text-center relative z-10 xl:pt-30 pt-30  xl:pb-30 pb-0 " data-aos="fade-up"
     data-aos-duration="3000">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-left">
       About Capital Connect
        </h2>
        <p className="text-gray-700 mb-4 text-left">
          Capital Connect Bangalore is an exclusive gathering designed for leading investors to connect with India's most promising early-stage startups. This invite-only event on June 21, 2025, at the Indian Craft Brewery, offers a unique opportunity to:

        </p>
        <p className="text-gray-700 mb-4 text-left">
         Scout high-potential startups by meeting face-to-face with carefully vetted ventures across diverse sectors. Network with top investors, including fellow angel investors, VC funds, and industry experts, to build meaningful connections and explore collaborative opportunities. Gain exclusive insights by attending curated talks and panel discussions focused on the evolving Indian startup ecosystem. Discover investment opportunities and potential partnerships in a focused environment designed to drive informed decisions and strategic growth.
        </p>
        <p className="text-gray-700 mb-4 text-left">
        We bring together 350+ attendees, including 100+ angel investors and 10+ VC funds.
        </p>
      </div>
        <div className="xl:w-1/2 w-full mx-auto text-center relative z-10 xl:pt-30 pb-30  xl:pb-30 pt-0 " data-aos="fade-up"
     data-aos-duration="3000">
      <video src={video} autoPlay muted loop  className="rounded">
     </video>
        
      </div>
   </div>
    </section>
  );
};

export default AboutGrowth;