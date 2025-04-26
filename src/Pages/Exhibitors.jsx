import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Speakers_Banner from '../Components/Speakers_Banner'
import Exhibitors_Card from '../Components/Exhibitors_Card'
import Company_Card from '../Components/Company_Card'
import All_Cards from '../Components/All_Cards'
import Timer from '../Components/Timer'

const Exhibitors = () => {
    const data = [
        {
            head:"PAST EXHIBITORS",
            text:"Affiliate World Europe has a vibrant two-day exhibition. Explore opportunities that could change the game for your business."
        }
      ]
  return (
    <>
    <Navbar/>
    <Speakers_Banner data = {data} />
    <Exhibitors_Card/>
   <All_Cards/>
    <Footer/>
<Timer/>
    
    </>
  )
}

export default Exhibitors
