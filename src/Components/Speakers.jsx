import React, { useState } from 'react';
import Amit_Singhal from "../assets/Speakers/Amit_Singhal.png";
// import man from "../assets/Speakers/Amit_Singhal.png";
// import logo from "../assets/Speakers/inspire-logo.webp";
import Raveen_Sastry from "../assets/Speakers/Raveen Sastry.png";
import fluid_ventures from "../assets/Speakers/fluid-ventures.png";
import multiply_ventures from "../assets/Speakers/multiply_ventures.png";
import { a } from '@react-spring/web';

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const data = [
    {
      id: 1,
      name: "Amit Singhal",
      title: "General Partner",
      image: Amit_Singhal,
      logo: fluid_ventures,
      linkedin_profile: "https://www.linkedin.com/in/amitsingalca/"
    },
    {
      id: 2,
      name: "Raveen Sastry",
      title: "Founding Partner",
      image: Raveen_Sastry,
      logo: multiply_ventures,
      linkedin_profile: "https://www.linkedin.com/in/raveens/"
    },

  ];

  const openSidebar = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSelectedSpeaker(null);
    setIsSidebarOpen(false);
  };

  return (
    <div className="mt-10">
      <div className="container">
        <h1 className='text-center  mt-10 similar-head font-bold blue-color mt-5 xl:mt-10 mb-10'>
          UPCOMING & PAST SPEAKERS AT BizDateUp
        </h1>
        <div className="w-24 h-1 bg-blue-400 mx-auto mt-2"></div>

        {/* card Code */}
        <div className="flex justify-center">
          <div className="flex gap-10 mt-10 justify-center">
            {data.map((person) => (
            <a href = {person.linkedin_profile} target='_blank'>
                <div
                key={person.id}
                className="flex flex-col justify-center items-center cursor-pointer gap-5"
              >
                <div className="overflow-hidden rounded-lg relative group">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-70 transform transition-transform duration-300 hover:scale-110"
                  />
                  {/* <div className="absolute bottom-2 right-2 z-10 bg-white p-2 rounded font-bold text-[14px] opacity-0 group-hover:opacity-100 transition-all duration-300">
            More Info
          </div> */}
                </div>

                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <p className="xl:text-[1.5rem] mt-3 lg:text-[1.20rem] text-[1rem] font-bold dark-blue-color group-hover:opacity-0 transition-all duration-300">
                    {person.name}
                  </p>

                  <p className="xl:text-[1rem] lg:text-[0.75rem] font-bold text-[0.8rem] dark-blue-color group-hover:opacity-0 transition-all duration-300">
                    {person.title}
                  </p>

                  <img src={person.logo} alt="logo" className="xl:w-20 w-20" />
                </div>
              </div>
            </a>
            ))}
          </div>
        </div>

        {/* <div className="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 place-items-center mt-10 gap-10">
          {data.map((person) => (
            <div
              key={person.id}
              className="col-span-1 w-full"
            >
   <div className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-lg rounded-lg shadow-lg h-64 w-full p-6">
  <p className="blue-color text-2xl font-semibold">Coming Soon</p>
</div>




            
            </div>
          ))}
        </div> */}
      </div>

      {/* Sidebar */}
      {isSidebarOpen && selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-white bg-opacity-30 glass transform transition-transform duration-300 ease-in-out"
            onClick={closeSidebar}
          ></div>

          <div
            className={`relative bg-white bg-opacity-30 backdrop-blur-lg w-[300px] sm:w-[400px] h-full shadow-lg p-6 overflow-y-auto rounded-l-2xl transform transition-all duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
          >
            <button
              onClick={closeSidebar}
              className="absolute top-4 right-4 text-4xl font-bold cursor-pointer"
            >
              ×
            </button>
            <div className="flex mt-10 flex-row justify-center items-center px-0">
              <img
                src={selectedSpeaker.image}
                alt={selectedSpeaker.name}
                className=" w-30 mx-auto "
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-center">{selectedSpeaker.name}</h2>
                <p className="text-center text-gray-600">{selectedSpeaker.title}</p>
              </div>
            </div>

            <h3 className="text-md font-semibold mb-2 mt-10">About {selectedSpeaker.name.split(" ")[0]}:</h3>
            <p className="text-sm text-gray-700">
              {selectedSpeaker.name} is a key member of the Inspire team contributing to innovation and excellence.
            </p>


          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;
