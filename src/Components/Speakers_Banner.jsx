import React from 'react'
import banner from "../assets/Speaker_Banner/banner.jpg"
const Speakers_Banner = ({data}) => {
  const bannner = data[0]
  return (
<>
<div className="flex flex-col justify-center items-center xl:h-80 h-80 px-2 pt-10 pb-30  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
<h1 className='xl:text-[4.688rem] text-[2rem] font-bold text-white mt-30 text-center'>{bannner.head}</h1>
<p className='xl:text-[1.1rem] text-white text-center lg:text-lg text-sm '>{bannner.text}
</p>  
</div>
</>
  )
}

export default Speakers_Banner