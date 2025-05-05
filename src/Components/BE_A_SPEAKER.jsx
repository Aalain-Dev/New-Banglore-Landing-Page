import React from 'react'
import destkop from "../assets/BE_A_Speaker/destkop.png"
import mobile from "../assets/BE_A_Speaker/mobile.png"
const BE_A_SPEAKER = () => {
  return (
    <>
  <div className="mt-10 border-t-2 xl:pt-20">
  <div className="container">
   <div className="flex flex-col justify-center item-center xl:gap-5 gap-5">
   <h1 className='text-center xl:text-[3.125rem] pb-0 font-bold text-[1.5rem] blue-color'>BE A SPEAKER AT BizDateUp!
    </h1>
<div className="w-24 h-1 bg-blue-400 mx-auto mt-2"></div>

    <p className='text-center xl:text-[1.25rem] text-[1rem] text-black'>
    We’re always looking to collaborate with thought leaders who are willing to push the limits to shape the performance marketing industry. If you would like to propose a speaker, please submit your application by clicking on the button below. If we think there could be a good fit, a member of our team will be in touch with you. Applications close on August 31, 2025.

    </p>
   <div className="flex justify-center">
   <a  href = ""className=" uppercase  text-white text-center xl:text-lg px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-b-2 w-60 ">
                Buy Tickets
              </a> 
   </div>
     </div>
   </div>
  </div>
    <img src={destkop} alt="" className='mt-10 w-full none-600' />
    <img src={mobile} alt="" className='mt-10 w-full show-600' />
    </>
  )
}

export default BE_A_SPEAKER