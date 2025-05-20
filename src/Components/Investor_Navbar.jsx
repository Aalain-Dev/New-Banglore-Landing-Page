import React, { useState } from "react";
import logo from "../assets/Navbar/BizDateUp-logo.png";
import "../App.css";
const Investor_Navbar = () => {

  

  return (
    <>
      
      <div className="bg-[#211F52] fixed top-0 w-full z-50 ">
        <div className="container">
          <nav className="flex justify-between items-center px-5 py-5">
            <a  href="/">
              <img src={logo} alt="Logo" className="w-[210px]" />
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar */}
    </>
  );
};

export default Investor_Navbar;