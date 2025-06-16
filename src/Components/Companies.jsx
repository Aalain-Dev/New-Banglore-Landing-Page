import React from 'react';
// import Company_Card_2 from './Company_Card_2';
import eranext from "../assets/Featured_Companies/eranext.png"
import pdrl from "../assets/Featured_Companies/pdrl.png"
import infinite from "../assets/Featured_Companies/infinite.jpg"
import boycot from "../assets/Featured_Companies/boycot.png"
import igo from "../assets/Featured_Companies/igo.png"
import prav from "../assets/Featured_Companies/prav.png"
const Companies = () => {
  const data = [
    {
      img: eranext,
      link:"https://www.eranext.in/"
    },
      {
      img: pdrl,
      link:"https://pdrl.in/"

    },
     {
      img: infinite,
      link:"https://www.10infinite.com/"

    },
      {
      img: igo,
      link:"https://beigo.in/"

    },
      {
      img: boycot,
      link:"https://boycottdenim.com/?srsltid=AfmBOopOqT3SKGyAELvskL36eK5hcTizzTfzTVNsyG3y0vVEEmOG1wOu"

    },
     {
      img: prav,
      link:""

    },
  ];
const soon = [
    {
      img: "Soone"
    },
    {
      img: "Soone"
    }, {
      img: "Soone"
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center xl:text-4xl text-[1.6rem] font-bold blue-color mt-5 xl:mt-10 mb-10">
        These innovative companies are waiting to close deals with you.
      </h1>
      <div className="w-24 h-1 bg-blue-400 mx-auto mt-2"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 mb-10">
        {/* Render company cards when ready */}
        {/* {data.map((company, index) => (
          <Company_Card_2 key={index} img={company.img} />
        ))} */}

        {/* Placeholder Coming Soon Cards */}
        {/* {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg rounded-lg shadow-lg h-64 w-full p-6"
          >
            <p className='blue-color text-2xl font-semibold'>Coming Soon</p>
          </div>
        ))} */}
        {
          data.map((item,index)=>{
            return(
                 <a href = {item.link} target='_blank'>
                  <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg rounded-lg shadow-lg h-64 w-full p-6"
          >
         <img src={item.img} alt="" />
          </div>
                 </a>
            )
          })
           
        }
        {
           soon.map((item,index)=>{
            return(
                 <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg rounded-lg shadow-lg h-64 w-full p-6"
          >
            <p className='blue-color text-2xl font-semibold'>Coming Soon</p>

          </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Companies;
