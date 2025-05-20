import React from 'react';
import logo from "../assets/Navbar/BizDateUp-logo.png"
const Investor_Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 pt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col gap-4">
        {/* Branding */}
        <div className="flex items-center gap-2">
 <a  href="/">
              <img src={logo} alt="Logo" className="w-[200px]" />
            </a>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm mt-5 text-white/80 flex-wrap justify-between">
         <div className="flex gap-15" >
             <a href="#" className="text-white transition">Privacy Policy</a>
          <a href="#" className="text-white transition">Terms of Use</a>
          <a href="#" className="text-white transition">Responsible Disclosure</a>
         </div>
            <div className="text-white text-center">
          © Copyright 2025 MoEngage - All Rights Reserved
        </div>
        </div>

        {/* Copyright */}
      
      </div>
    </footer>
  );
};

export default Investor_Footer;