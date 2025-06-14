import { time } from 'framer-motion'
import { title } from 'framer-motion/client'
import React from 'react'
import chiratae from "../assets/VC/chiratae.png"
import earth from "../assets/VC/earth.png"
import fluid from "../assets/VC/fluid.png"
import gsf from "../assets/VC/gsf.png"
import marwari from "../assets/VC/marwari.png"
import multiply from "../assets/VC/multiply.png"
import sharp from "../assets/VC/sharp.png"
import transition from "../assets/VC/transition.png"
const Venture_Capital = () => {
        const data = [
       {
        id:1,
        img:multiply,
        alt:"Multiply Ventures",
        title:"Multiply Ventures",
       },
          {
        id:2,
        img:sharp,
        alt:"Sharrp Ventures",
        title:"Sharrp Ventures",
       },
         {
        id:3,
        img:earth,
        alt:"Earth Fund",
        title:"Earth Fund",
        height:"100px",
        width:"100px"
       },
{
        id:4,
        img:transition,
        alt:"Transition",
        title:"Transition",
       },
       {
        id:5,
        img:chiratae,
        alt:"Chiratae Ventures",
        title:"Chiratae Ventures",
       },
       {
        id:5,
        img:gsf,
        alt:"GSF",
        title:"GSF",
       },
       {
        id:6,
        img:fluid,
        alt:"fluid Ventures",
        title:"fluid Ventures",
       },
       {
        id:7,
        img:marwari,
        alt:"Marwari Catalysts",
        title:"Marwari Catalysts",
       },
    ]
  return (
    <div className=" bg-[#211F52] pt-5 xl:mb-10 pb-5">
        <div className="pt-5 pb-5   ">
     <div className="container ">
     <h1 className="text-center similar-head font-bold text-white ">VCs at Capital Connect

       </h1>
       <div className="grid xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-2 gap-10 grid-cols-2 place-items-center mt-10 justify-between">
      {
        data.map((item,index)=>{
            return(
                <div className="col-span-1">
                  <div className="flex flex-col  justify-center items-center xl:gap-5 gap-2">
              <div className="bg-[#fffbfb] p-4 rounded-lg">
                 <img src={item.img} alt={item.alt} className='w-[150px] h-full' />
              </div>
                       </div>
                </div>
            )
        })
      }
       </div>
     </div>
        </div>
      </div>
  )
}

export default Venture_Capital