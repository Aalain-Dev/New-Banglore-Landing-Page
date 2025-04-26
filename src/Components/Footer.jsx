import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Navbar/logo.svg";

const Footer = () => {
  return (
    <footer className="pb-20 pt-10">
      <div className="container mx-auto text-center space-y-6">
        <div className="gap-5 flex justify-center items-center">
          <Link to ="/"><img src={logo} alt="" className='w-50' /></Link>
        </div>
        <div className="flex xl:flex-row flex-col justify-center space-x-4 blue-color font-bold">
          <Link to="/exhibitors">Exhibitors</Link>
          <Link to="/speakers">Speakers</Link>
          <Link to="/featured-companies">Featured Companies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
