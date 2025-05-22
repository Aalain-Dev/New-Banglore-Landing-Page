import React, { useState } from "react";
import logo from "../assets/Navbar/BizDateUp-logo.png";
import "../App.css";
import { Link as ScrollLink } from 'react-scroll';

const Investor_Navbar = () => {

  

  return (
    <>
      
      <div className="bg-[#211F52] fixed top-0 w-full z-50 ">
        <div className="container">
          <nav className="flex justify-between items-center px-5 py-5">
            <a  href="/">
              <img src={logo} alt="Logo" className="w-[210px]" />
            </a>
<ScrollLink to="tickets" smooth={true} duration={500}   className="uppercase pink-bg text-white text-center xl:text-[17px] px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-2 w-60">
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