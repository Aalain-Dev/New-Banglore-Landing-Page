import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Navbar/BizDateUp-logo.png";
import logo2 from "../assets/Navbar/logo.svg";
import "../App.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="bg-black fixed top-0 w-full z-50 xl:block hidden">
        <div className="container">
          <nav className="flex justify-between items-center px-5 py-5">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-[200px]" />
            </Link>
            <div className="flex gap-2 items-center">
              <Link to="/speakers">
                <button className="text-[16px] px-5 py-2 rounded-xl font-bold cursor-pointer text-white hover:bg-[#211F52] hover:text-white transition-all duration-300 ease-in-out hover:scale-105">
                  Speakers
                </button>
              </Link>
              <Link to="/featured-companies">
                <button className="text-[16px] px-5 py-2 rounded-xl font-bold cursor-pointer text-white hover:bg-[#211F52] hover:text-white transition-all duration-300 ease-in-out hover:scale-105">
                  Featured Companies
                </button>
              </Link>
              <a href="" className="uppercase pink-bg text-white text-center xl:text-lg px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-b-2 w-60">
                Buy Tickets
              </a>
              <Link to="/exhibitors">
                <p className="uppercase pink-bg text-white text-center xl:text-lg px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-b-2 w-60">
                Exhibitors
                </p>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="bg-black fixed top-0 w-full z-50 xl:hidden block">
        <div className="flex justify-between items-center px-5 py-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[150px]" />
          </Link>
          <button onClick={toggleSidebar} className="text-white text-2xl cursor-pointer">
            ☰
          </button>
        </div>

        {/* Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 glass" onClick={toggleSidebar}></div>
        )}

        {/* Sidebar */}
        <div className={`fixed top-0 right-0 w-[75%] h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-5 flex flex-col gap-5">
          <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo2} alt="Logo" className="w-[150px]" />
          </Link>
            <button onClick={toggleSidebar} className=" text-2xl font-bold">
              ×
            </button>
          </div>
            <Link to="/speakers" className="text-lg font-semibold" onClick={toggleSidebar}>Speakers</Link>
            <Link to="/featured-companies" className="text-lg font-semibold" onClick={toggleSidebar}>Featured Companies</Link>
            {/* <a href="#" className="text-lg font-semibold" onClick={toggleSidebar}>Buy Tickets</a> */}
            {/* <Link to="/exhibitors" className="text-lg font-semibold" onClick={toggleSidebar}>Exhibit</Link> */}
            <a href="" className="uppercase pink-bg text-white text-center xl:text-lg px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-b-2 w-full">
                Buy Tickets
              </a>
              <Link to="/exhibitors">
                <p className="uppercase pink-bg text-white text-center xl:text-lg px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-b-2 w-full">
                  Exhibitors
                </p>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
