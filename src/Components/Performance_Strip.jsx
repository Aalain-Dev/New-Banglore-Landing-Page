import React from "react";

const Performance_Strip = () => {
    const data = [
        {
            id: 1,
            title: "350+",
            subtitle: "Attendees ",
        }
        ,
        {
            id: 2,
            title: "100+",
            subtitle: "Angel Investors",
        }
        ,
        {
            id: 3,
            title: "10+",
            subtitle: "VC Funds",
        }
        ,
        {
            id: 4,
            title: "200+",
            subtitle: "Founders",
        }
        ,
        {
            id: 5,
            title: "10+",
            subtitle: "Speakers",
        }
        ,
    ]
  return (
    <>
      <div className=" bg-[#211F52] pt-5 xl:mb-10 pb-5">
        <div className="pt-5 pb-5   ">
     <div className="container ">
     <h1 className="text-center similar-head font-bold text-white">Bangalore’s #1 Curated Startup Ecosystem Event

       </h1>
       <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 gap-10 grid-cols-1 place-items-center mt-10 justify-between">
      {
        data.map((item,index)=>{
            return(
                <div className="col-span-1">
                  <div className="flex flex-col  justify-center items-center xl:gap-5 gap-2">
                <p className="text-white xl:text-6xl text-[2.5rem] font-bold text-center">{item.title}
                </p>
                <p className="text-white xl:text-xl xl:font-bold text-[20px] text-center font-semibold">{item.subtitle}</p>
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

export default Performance_Strip;
