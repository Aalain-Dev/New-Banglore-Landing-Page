import React from "react";
import jcl from "../assets/sponsor/jcl.png";
import nscerl from "../assets/sponsor/nscerl.png";
import sbs from "../assets/sponsor/sbs.png";
const Sponsor = () => {
    const data = [
     {
        id:1,
        text:"Creative partner",
        img: jcl
     },
     {
        id:2,
        text:"ecosystem partner",
        img: nscerl
     }
    ,
    {
        id:3,
        text:"photography partner",
        img: sbs
     }
    ]
  return (
    <>
      <div className=" bg-[#211F52] pt-5 xl:mb-10 pb-5">
        <div className="pt-5 pb-5   ">
     <div className="container ">
     <h1 className="text-center similar-head font-bold text-white ">Sponsors

       </h1>
       <div className="grid xl:grid-cols-3 lg:grid-cols-5 md:grid-cols-2 gap-10 grid-cols-2  mt-10 justify-between">
      {
        data.map((item,index)=>{
            return(
                <div className="col-span-1">
                  <div className="flex flex-col  justify-center items-center xl:gap-5 gap-2">
                <p className="text-white xl:text-6xl uppercase xl:text-[1.5rem] text-[20px]  font-bold text-center">{item.text}
                </p>
                <img src={item.img} alt="" className="w-[250px]" />
                       </div>
                </div>
            )
        })
      }
       </div>
     </div>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
