import React from 'react';
import logo from "../assets/Navbar/BizDateUp-logo.png"
const Investor_Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 pt-10 pb-20">
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
             <a href="https://www.bizdateup.com/privacypolicy"  target= "_blank" className="text-white transition">Privacy Policy</a>
          <a href="https://www.bizdateup.com/termsOfService" target= "_blank"  className="text-white transition">Terms of Use</a>
         </div>
            <div className="text-white text-center">
          © Copyright 2025 BizDateUp - All Rights Reserved
        </div>
        </div>

        {/* Copyright */}
      
      </div>
    </footer>
  );
};

export default Investor_Footer;