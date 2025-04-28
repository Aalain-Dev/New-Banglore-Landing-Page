import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Speakers_Banner from '../Components/Speakers_Banner'
import Speakers from '../Components/Speakers'
import BE_A_SPEAKER from '../Components/BE_A_SPEAKER'
import Timer from '../Components/Timer'
import ScheduleTable from '../Components/ScheduleTable'

const Speakers_Main = () => {
  const data = [
    {
      head:"Speakers",
      text:"Real performance and ecommerce marketers take stage to provide mastermind-level content for all attendees. Be the first to know cutting-edge strategies and tactics that provide instant ROI on attending."
    }
  ]

  const data2 = [
    {
        head:"Speakers",
        text:"Real performance and ecommerce marketers take stage to provide mastermind-level content for all attendees. Be the first to know cutting-edge strategies and tactics that provide instant ROI on attending."
    }
  ]
  return (
<>
<Navbar/>
<Speakers_Banner data = {data}/>
<Speakers/>
<ScheduleTable/>
<BE_A_SPEAKER />
<Footer/>
<Timer/>

</>
  )
}

export default Speakers_Main