import React from 'react'
import { Link } from 'react-scroll';
const Investors_Sticky_Button = () => {
  return (
    <>
    <div className=" fixed bottom-0 left-0 flex-col-h w-full bg-[#211F52] text-white py-2 px-6 flex items-center justify-center xl:gap-10 gap-5 rounded-t-3xl border-t-2 shadow-md z-10">
       <Link to="tickets" smooth={true} duration={500}   className="uppercase pink-bg xl:w-100 lg:w-80 md:w-80  w-full text-white text-center xl:text-lg px-10 py-3 rounded-xl font-bold cursor-pointer gradient-bg border-2 ">
           Request Your Invite
           </Link>
    </div>
    </>
  )
}

export default Investors_Sticky_Button