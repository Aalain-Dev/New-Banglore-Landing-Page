import React, { useEffect } from "react";
import {
  FaUserFriends,
  FaLightbulb,
  FaUserLock,
  FaUsers,
} from "react-icons/fa";
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
      <div className="max-w-3xl mx-auto text-center relative z-10 pt-30 pb-30" data-aos="fade-up"
     data-aos-duration="3000">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          About #GROWTH Summit
        </h2>
        <p className="text-gray-700 mb-4">
          #GROWTH Summit is India’s largest invite-only conference for
          entrepreneurs, growth marketers, and product owners from consumer brands.
        </p>
        <p className="text-gray-700 mb-4">
          It aims at helping you network with and learn from experts and leaders
          responsible for building brands and driving growth in a digital-first world.
        </p>
        <p className="text-gray-700 mb-4">
          For us, building a long-lasting customer relationship is the biggest
          growth lever, and we invite leaders who share stories, discuss strategies,
          and teach frameworks on customer engagement and growth.
        </p>
        <p className="text-gray-700">
          For more details, please reach out to{" "}
          <a
            href="mailto:shitij.raj@moengage.info"
            className="text-blue-500 underline"
          >
            shitij.raj@moengage.info
          </a>
        </p>
      </div>
    </section>
  );
};

export default AboutGrowth;