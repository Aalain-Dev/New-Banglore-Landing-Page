  import { useState } from 'react'
  import './App.css'
  import { Route, Routes } from 'react-router-dom'
  import Home from './Pages/Home'
  import Speakers_Main from './Pages/Speakers'
  import Exhibitors from './Pages/Exhibitors'
  import Featured_Companies from './Pages/Featured_Companies'
import Thanks from './Components/Thanks'
import Payment_Thanks from './Components/Payment_Thanks'
import InvestorsPage from './Components/InvestorsPage'

  function App() {

    return (
  <>
  <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/investors" element ={<InvestorsPage/>} />
          <Route path="/speakers-events-schedule" element ={<Speakers_Main/>} />
          <Route path="/exhibitors" element ={<Exhibitors/>} />
          <Route path="/featured-companies" element ={<Featured_Companies/>} />
          <Route path="/thanks" element ={<Thanks/>} />
          <Route path="/payment-thanks" element ={<Payment_Thanks/>} />
      
        </Routes>

  </>
    )
  }

  export default App
