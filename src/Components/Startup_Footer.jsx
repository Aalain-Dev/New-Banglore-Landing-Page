import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Navbar/logo.svg";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';

const Startup_Footer = () => {
  return (
    <footer className="pb-20 xl:pt-10 pt-3 xl:h-auto h-[550px]" >
      <div className="container mx-auto text-center space-y-6  xl:h-auto h-80">
       <div className="flex justify-between xl:flex-row flex-col gap-10">
     <div className="xl:w-1/2 w-full flex flex-col gap-10 justify-center items-center">
     <div className="gap-10 flex ">
          <Link to ="/"><img src={logo} alt="" className='w-50' /></Link>
        </div>
        <div className="flex gap-10">
             <a href="https://www.facebook.com/bizdateupindia/" target="_blank "  rel="noopener noreferrer"> <FaFacebookF className="text-2xl cursor-pointer blue-color" /></a>
             <a href="https://www.instagram.com/bizdateup/" target="_blank" rel="noopener noreferrer"> <PiInstagramLogoFill   className="text-2xl cursor-pointer blue-color" /></a>
             <a href="https://in.linkedin.com/company/bizdateup" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn    className="text-2xl cursor-pointer blue-color" /></a>
             <a href="https://www.youtube.com/channel/UCAwc4LgejYjGbeZu04wyZFA" target="_blank" rel="noopener noreferrer"> <FaYoutube     className="text-2xl cursor-pointer blue-color" /></a>
            </div>
        </div>
        <div className="xl:w-1/2 w-full flex flex-col xl:items-start items-center justify-center">
   <div className="gap-5 flex justify-center items-center">
        </div>
        <div className="flex xl:flex-row flex-col justify-center items-center space-x-4 blue-color font-bold">
          <Link to="/exhibitors">Exhibitors</Link>
          <Link to="/speakers-events-schedule">Speakers & Event Schedule</Link>
          <Link to="/featured-companies" >Featured Companies</Link>
          <a href="https://www.bizdateup.com/privacypolicy"target='_blank' rel="noopener noreferrer">Privacy Policy</a>
        </div>
           <div className="flex mt-5 flex-col ">
       <p className='xl:text-left text-center font-bold mb-3'>  Contact Us:</p>

           <div className="flex xl:gap-10 gap-2 flex-col xl:flex-row">
              <div className="flex flex-col  xl:items-start items-center space-x-4 blue-color font-bold">
       <p className='xl:text-left text-center'>Puneet</p>
<a href="mailto:puneet@bizdateup.com" className='xl:text-left text-center' target='_blank'>
   puneet@bizdateup.com
</a>
<a className='xl:text-left text-center' href="tel:+919769768793">
 +91 97697 68793

</a>
        </div>
        <div className="flex flex-col  xl:items-start items-center space-x-4 blue-color font-bold">
       <p className='xl:text-left text-center'>Prasad</p>
<a href="mailto:prasad@bizdateup.com" className='xl:text-left text-center' target='_blank'>
  prasad@bizdateup.com
</a>
<a className='xl:text-left text-center' href="tel:+91 99875 81351">
+91 99875 81351

</a>
        </div>
           </div>
           </div>
        
        </div>
       </div>
      </div>
    </footer>
  );
};

export default Startup_Footer;
