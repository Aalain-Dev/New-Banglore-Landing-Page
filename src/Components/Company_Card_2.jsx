import React from 'react'

const Company_Card_2 = ({img}) => {
  return (
   <>
    <div className="col-span-1 cursor-pointer border-1 border-[#f7f7f7] hover:border-2 hover:border-blue-400 transition rounded-2xl p-4 flex flex-col items-center bg-white shadow-md">
         <img src={img} alt="Pin-Up Partners" className="w-full  object-contain" />
       </div>
   
   </>
  )
}

export default Company_Card_2
