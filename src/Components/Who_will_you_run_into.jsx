import React from 'react'
import image from "../assets/Who will you run into/image.jpg"
import img1 from "../assets/Who will you run into/img-one.svg"
import img2 from "../assets/Who will you run into/img-two.svg"
import img3 from "../assets/Who will you run into/img-three.svg"
import img4 from "../assets/Who will you run into/img-four.svg"
import img5 from "../assets/Who will you run into/img-five.svg"
import img from "../assets/Who will you run into/meta.png"
const Who_will_you_run_into = () => {

const data = [
    {
        id:1,
        img:img1,
        title:"Vc Funds ",
    },
    {
        id:2,
        img:img2,
        title:" Angel Platforms",
    },
    {
        id:3,
        img:img3,
        title:"Incubators",
    },
    {
        id:4,
        img:img4,
        title:"Mentors",
    },
    {
        id:5,
        img:img5,
        title: "Angel In",
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
                <div className="flex xl:flex-col lg:flex-col  md:flex-col flex-row items-center  gap-5">
                <img src={item.img} alt="" className='w-20' />
                <p className='text-white   xl:text-[1rem] xl:text-center lg:text-center text-left' >{item.title}
    </p>
            </div>
            )
        })
       }
        
    </div>
    <div className="text  xl:mt-20">
        <h2 className='text-center xl:text-[1.5rem] text-white xl:font-bold border-t-2 border-b-2 p-2 mt-10'>Plus reps, employees and owners of many of these companies and more:
</h2>
<div className="mt-10 grid xl:grid-cols-5 grid-cols-2 gap-10 place-items-center">
        <img src={img} alt="" className="w-25 col-span-1" />
    <img src={img} alt="" className="w-25 col-span-1" />
    <img src={img} alt="" className="w-25 col-span-1" />
    <img src={img} alt="" className="w-25 col-span-1" />
    <img src={img} alt="" className="w-25 col-span-1" />
    <img src={img} alt="" className="w-25 col-span-1" />
    </div>

    </div>
</div>
        </div>
    </div>
    </>
  )
}

export default Who_will_you_run_into