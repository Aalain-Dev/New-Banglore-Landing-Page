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
import Timer from './Timer'
import Speakers from './Speakers'
import Performance_Strip from './Performance_Strip'
import Investors_Sticky_Button from './Investors_Sticky_Button'
import WhatsAppIconButton from './WhatsAppIconButton'
import Venture_Capital from './Vc'

const InvestorsPage = () => {
  return (
   <>
   <Investor_Navbar/>
   <Bangalore/>
   <Performance_Strip/>
 <div className="tickets">
    <Investor_Form/>
 </div>
   <AboutGrowth/>
<Investors_Sticky_Button/>
   <ConferenceAgenda/>
   <Speakers/>
   <Venture_Capital/>
   <InviteBanner/>
   <WhyAttend/>
   <PastEventsGallery/>
   <Request/>
   <AboutSection/>
   <Investor_Footer/>
<WhatsAppIconButton/>

   </>
  )
}

export default InvestorsPage
