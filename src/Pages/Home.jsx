import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import Performance_Strip from '../Components/Performance_Strip'
import What_is_Event from '../Components/What_is_Event'
import Speakers from '../Components/Speakers'
import Tickets from '../Components/Tickets'
import Who_will_you_run_into from '../Components/Who_will_you_run_into'
import One_Pass from '../Components/One_Pass'
import Collage from '../Components/Collage'
import Venue from '../Components/Venue'
import FAQ from '../Components/FAQ'
import Update from '../Components/Update'
import Footer from '../Components/Footer'
import Timer from '../Components/Timer'
import Thanks from '../Components/Thanks'
import Startup_Footer from '../Components/Startup_Footer'

const Home = () => {
  return (
<>
<Navbar/>
<Video/>
<Performance_Strip/>
<What_is_Event/>
<Speakers/>
<div className="tickets">
  <Tickets/>
</div>
<Who_will_you_run_into/>
<One_Pass/>
<Collage/>
<Venue/>
<FAQ/>
<Update/>
{/* <Footer/> */}
<Startup_Footer/>
<Timer/>
{/* <Thanks/> */}
</>
  )
}

export default Home