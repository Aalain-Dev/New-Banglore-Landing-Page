import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img from "../../src/assets/Thank-you/thanks.webp"
const Thanks = () => {
  return (
 <>
  <Navbar/>

  <div className="mt-30">
<div className="flex justify-center items-center flex-col">
<img src={img} alt="" className='xl:w-[400px] w-[300px]' />
  <h1 className='capitalize font-bold xl:text-3xl text-2xl blue-color mt-10 mb-10 text-center'>Our Team will get in Touch with you</h1>
</div>
  <Footer/>
  </div>
 </>

  )
}

export default Thanks
