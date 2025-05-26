import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img from "../../src/assets/Thank-you/thanks.webp"
import Startup_Footer from './Startup_Footer'

const Payment_Thanks = () => {
  return (
    <>
    <Navbar/>
     
    <div className="mt-30">
<div className="flex justify-center items-center flex-col">
<img src={img} alt="" className='xl:w-[400px] w-[300px]' />
  <h1 className='capitalize font-bold xl:text-3xl text-2xl blue-color mt-10 mb-2 text-center'>Our Team will get in Touch with you</h1>
  <h1 className='capitalize font-bold xl:text-2xl text-2xl blue-color mt-2 mb-10 text-center'>Alternatively you can contact <a href="https://wa.me/9987581351" target="_blank" className='underline'>Prasad On Whatsapp</a></h1>
</div>
<Startup_Footer/>
  </div>
    
    </>
  )
}

export default Payment_Thanks
