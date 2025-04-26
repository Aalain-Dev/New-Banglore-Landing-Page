import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Speakers_Banner from '../Components/Speakers_Banner'
import Companies from '../Components/Companies'
import Timer from '../Components/Timer'

const Featured_Companies = () => {
    const data = [
        {
            head:"FEATURED COMPANIES",
            text:"Affiliate World Europe has a vibrant two-day exhibition. Explore opportunities that could change the game for your business."
        }
      ]
  return (
  <>
 <Navbar/>
<Speakers_Banner data = {data}/>
<Companies/>
 <Footer/>
 <Timer/>
  </>
  )
}

export default Featured_Companies
