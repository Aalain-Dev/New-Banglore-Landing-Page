import React from 'react';
import logo from "../assets/Navbar/BizDateUp-logo.png"
const Investor_Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 pt-10 pb-20 h-[450px] xl:h-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col gap-4 justify-between  ">
      
        <div className="flex xl:flex-row flex-col gap-2  xl:justify-between items-center  justify-center">
 <a  href="/">
              <img src={logo} alt="Logo" className="w-[200px]" />
            </a>
              <div className="flex flex-col  xl:items-start items-center space-x-4 b font-bold">
       <p className='xl:text-left text-center'>  Contact Us:</p>
       <p className='xl:text-left text-center'>Aishwarya Purohit</p>
<a href="mailto:aishwarya@bizdateup.com" className='xl:text-left text-center' target='_blank'>
   aishwarya@bizdateup.com
</a>
<a className='xl:text-left text-center' href="tel:7738534896">
  7738534896

</a>
        </div>
        </div>
        <div className="flex gap-6 text-sm mt-5 text-white/80 flex-wrap xl:justify-between justify-center items-center ">
         <div className="flex gap-15" >
             <a href="https://www.bizdateup.com/privacypolicy"  target= "_blank" className="text-white transition">Privacy Policy</a>
          <a href="https://www.bizdateup.com/termsOfService" target= "_blank"  className="text-white transition">Terms of Use</a>
         </div>
            <div className="text-white text-center">
          © Copyright 2025 BizDateUp - All Rights Reserved
        </div>
        </div>
      </div>
    </footer>
  );
};
export default Investor_Footer;