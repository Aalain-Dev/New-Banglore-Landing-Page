import React from 'react'
import back_img from "../assets/Venue/bg.jpg"
const Venue = () => {
  return (
  <div className="w-full bg-amber-600">
    {/* Vidhana Soudha */}
      <div className="mt-10 h-[450px] w-full mx-auto relative  z-1
" style={{backgroundImage: `url(${back_img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[-2]"></div>
<div className="container " style={{zIndex: '100000'}}>
<div className="flex flex-col justify-center items-center h-full pt-30">
<h1 className='text-center text-white xl:text-[2.5rem] text-[2.5rem] font-bold'>THE VENUE
</h1>
<p className='text-center text-white xl:text-[2.5rem] text-[1.2rem] font-bold'>

Hungexpo Budapest Congress and Exhibition Center

</p>
<a href="" className='text-white mt-10 underline pb-2'>View In Maps</a>
</div>
</div>
    </div>
  </div>
  )
}

export default Venue