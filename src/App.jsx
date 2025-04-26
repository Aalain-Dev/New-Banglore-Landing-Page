  import { useState } from 'react'
  import './App.css'
  import { Route, Routes } from 'react-router-dom'
  import Home from './Pages/Home'
  import Speakers_Main from './Pages/Speakers'
  import Exhibitors from './Pages/Exhibitors'
  import Featured_Companies from './Pages/Featured_Companies'

  function App() {

    return (
  <>
  <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/speakers" element ={<Speakers_Main/>} />
          <Route path="/exhibitors" element ={<Exhibitors/>} />
          <Route path="/featured-companies" element ={<Featured_Companies/>} />
      
        </Routes>

  </>
    )
  }

  export default App
