import React from 'react'
import angel_investor from "../assets/Who will you run into/Angel-Investor.png"
import angel_platform from "../assets/Who will you run into/Angel-Platforms.png"
import incubators from "../assets/Who will you run into/Incubators.png"
import mentors from "../assets/Who will you run into/Mentors.png"
import Vc_funds from "../assets/Who will you run into/Vc Funds.png"
const Who_will_you_run_into = () => {

const data = [
    {
        id:1,
        img:Vc_funds,
        title:"Vc Funds ",
    },
    {
        id:2,
        img:angel_platform,
        title:" Angel Platforms",
    },
    {
        id:3,
        img:incubators,
        title:"Incubators",
    },
    {
        id:4,
        img:mentors,
        title:"Mentors",
    },
    {
        id:5,
        img:angel_investor,
        title: "Angel Investor",
    }
]

  return (
    <>
    
    <div className="blue-back pt-15 pb-5 relative 	 bg-added" >
        <div className="triangle">

        </div>
        <div className="container">
<h1 className='down-border text-center text-white similar-head uppercase font-bold'>Who will you run into
</h1>

<div className="cards-section">
    <div className=" grid xl:grid-cols-5  lg:grid-cols-3 md:grid-cols-3 grid-cols-1 justify-between items-center mt-10 gap-10">
       {
        data.map((item,index)=>{
            return(
                <div className="flex xl:flex-col lg:flex-col flex-col   items-center  gap-5">
                <img src={item.img} alt="" className='w-40' />
                <p className='text-white   xl:text-[1.2rem] font-bold xl:text-center lg:text-center text-left' >{item.title}
    </p>
            </div>
            )
        })
       }
        
    </div>
 
</div>
        </div>
    </div>
    </>
  )
}

export default Who_will_you_run_into