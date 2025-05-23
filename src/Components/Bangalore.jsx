import React from "react";
import blue_blur from "../assets/Investor/blue-blur.webp"
import purple_shape from "../assets/Investor/purple-shape.svg"
import orange_shape from "../assets/Investor/orange-circle.svg"
import orange_blur from "../assets/Investor/orange-blur.webp"
import bangalore_banner from "../assets/Investor/bangalore-investor-banner.png"
import gateway_img from "../assets/Investor/gateway-img.png"
import { Link as ScrollLink } from 'react-scroll';

const Bangalore = () => {
  return (
 <>
    <section className="flex  mt-20 gap-10 flex-col overflow-hidden items-center justify-center xl:pt-30 relative pt-15 pb-20 bg-white text-center px-4" style={{ background: `url(${bangalore_banner})`, backgroundSize: 'cover' }}
>
     
         {/* <div className="absolute top-0  left-0">
          <img src={bangalore_banner} alt="" className="w-full h-full" />
        </div> */}
       
      <h1 className=" xl:text-[4rem] text-[2rem] font-bold   text-[#211F52] z-2 ">
       
        
       Capital Connect Bangalore  <br />
        Exclusive Investor Gathering
      </h1>
      <ul class="event-info-list mt-5 z-2 font-bold   text-[#211F52] ">
        <li className="xl:text-[20px] text-[15px] z-2 ">21 June, 2025</li>
        <li className="xl:text-[20px] text-[15px] z-2 ">10:30 am</li>

        <li className="xl:text-[20px] text-[15px] z-2  ">
          <a class="underline" target = "_blank" href="https://www.google.com/maps?sca_esv=3470b58f8723632d&rlz=1C1RXMK_enIN997IN997&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiHUlDQiBJTkRJQU4gQ1JBRlQgQlJFV0VSWSBtYXBzMgsQLhiABBjHARivATIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBSLcJUABY2AhwAHgAkAEAmAGHAqABkQeqAQUwLjEuM7gBA8gBAPgBAvgBAZgCBKACowfCAhAQLhiABBhDGMcBGIoFGK8BwgIFEAAYgATCAh8QLhiABBhDGMcBGIoFGK8BGJcFGNwEGN4EGOAE2AEBmAMA4gMFEgExIEC6BgYIARABGBSSBwUwLjEuM6AH6iGyBwUwLjEuM7gHowc&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KVfFE5vbF647MRgqfJGU7rWH&daddr=Sy+no+90/3,+K,+572/90,+Outer+Ring+Rd,+beside+Manhpo+Convention+Center,+DadaMastan+Layout,+Manayata+Tech+Park,+Nagawara,+Bengaluru,+Karnataka+560045" target="_blank">
            ICB INDIAN CRAFT BREWERY, Bangalore
          </a>
        </li>
      </ul>
      <p className="text-lg   z-2 font-bold   text-[#211F52] ">
        Discover India's Next Unicorns - By Invitation Only
      </p>
<ScrollLink to="tickets" smooth={true} duration={500}    className="z-2  bg-[#211F52] text-white px-6 py-3 cursor-pointer rounded transition-transform duration-300 transform hover:scale-105 w-100 xl:text-xl"
>
     Request Your Invite
      </ScrollLink>
    </section>
 
 </>
  );
};
export default Bangalore;
