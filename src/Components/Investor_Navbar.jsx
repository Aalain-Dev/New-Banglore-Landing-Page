import React, { useState } from "react";
import logo from "../assets/Navbar/BizDateUp-logo.png";
import "../App.css";
import { Link as ScrollLink } from 'react-scroll';

const Investor_Navbar = () => {

  

  return (
    <>
      
      <div className="bg-[#211F52] fixed top-0 w-full z-50 ">
        <div className="container">
          <nav className="flex justify-between items-center px-5 py-5 xl:flex-row md:flex-row flex-col gap-2">
            <a  href="/">
              <img src={logo} alt="Logo" className="xl:w-[210px] w-[130px]" />
            </a>
<ScrollLink to="tickets" smooth={true} duration={500}   className="uppercase pink-bg text-white text-center xl:text-[17px] text-[13px] px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-2 xl:w-60 md:xl:w-60 w-50">
     Request Your Invite
      </ScrollLink>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar */}
    </>
  );
};

export default Investor_Navbar;