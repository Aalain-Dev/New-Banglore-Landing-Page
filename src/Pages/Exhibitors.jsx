import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Speakers_Banner from '../Components/Speakers_Banner'
import Exhibitors_Card from '../Components/Exhibitors_Card'
import Company_Card from '../Components/Company_Card'
import All_Cards from '../Components/All_Cards'
import Timer from '../Components/Timer'
import Exhibitors_Form from '../Components/Exhibitors_Form'

const Exhibitors = () => {
    const data = [
        {
            head:"Before EXHIBITORS",
            text:"Capital Connect has a full day exhibition. Explore opportunities that could change the game for your business."
        }
      ]
  return (
    <>
    <Navbar/>
    <Speakers_Banner data = {data} />
    {/* <Exhibitors_Card/> */}
   {/* <All_Cards/> */}
   <Exhibitors_Form/>
    <Footer/>
<Timer/>
    
    </>
  )
}

export default Exhibitors
