import React from 'react'
import Company_Card from './Company_Card'

const All_Cards = () => {
  return (
    <>
   <div className="mt-10 mb-10">
 <div className="container">
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-10">
 <Company_Card/>
 <Company_Card/>
 <Company_Card/>
 <Company_Card/>
 <Company_Card/>
    
    </div>
 </div>
   </div>
    
    </>
  )
}

export default All_Cards
