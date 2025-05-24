import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Speakers_Banner from '../Components/Speakers_Banner'
import Companies from '../Components/Companies'
import Timer from '../Components/Timer'
import Startup_Footer from '../Components/Startup_Footer'

const Featured_Companies = () => {
    const data = [
        {
            head:"FEATURED COMPANIES",
            text:"Capital Connect has a full day exhibition. Explore opportunities that could change the game for your business."
        }
      ]
  return (
  <>
 <Navbar/>
<Speakers_Banner data = {data}/>
<Companies/>
<Startup_Footer/>

 <Timer/>
  </>
  )
}

export default Featured_Companies
