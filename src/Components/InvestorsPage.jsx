import React from 'react'
import Investor_Navbar from './Investor_Navbar'
import Bangalore from './Bangalore'
import AssociationStats from './AssociationStats'
import Investor_Form from './Investor_Form'
import ConferenceAgenda from './Timeline'
import Investor_Speakers from './Investor_Speakers'
import InviteBanner from './InviteRibbon'
import WhyAttend from './WhyAttend'
import AboutGrowth from './Aboutup'
import PastEventsGallery from './past Events'
import Request from './Request'
import AboutSection from './Investor_About'
import Investor_Footer from './Investor_Footer'

const InvestorsPage = () => {
  return (
   <>
   <Investor_Navbar/>
   <Bangalore/>
   <AssociationStats/>
   <Investor_Form/>
   <ConferenceAgenda/>
   <Investor_Speakers/>
   <InviteBanner/>
   <WhyAttend/>
   <AboutGrowth/>
   <PastEventsGallery/>
   <Request/>
   <AboutSection/>
   <Investor_Footer/>
   </>
  )
}

export default InvestorsPage
