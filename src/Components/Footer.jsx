import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Navbar/logo.svg";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="pb-20 pt-10">
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
        <div className="xl:w-1/2 w-full">
     <div className="gap-5 flex justify-center items-center">
        </div>
        <div className="flex xl:flex-row flex-col justify-center items-center space-x-4 blue-color font-bold">
          <Link to="/exhibitors">Exhibitors</Link>
          <Link to="/speakers-events-schedule">Speakers & Event Schedule</Link>
          <Link to="/featured-companies" >Featured Companies</Link>
          <a href="https://www.bizdateup.com/privacypolicy"target='_blank' rel="noopener noreferrer">Privacy Policy</a>
        </div>
        </div>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
