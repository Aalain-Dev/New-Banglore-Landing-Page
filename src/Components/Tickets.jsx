import React from 'react'
const Tickets = () => {
  return (
 <div className="mt-10">
    <div className="container">
<h1 className='text-center  font-bold blue-color similar-head-buy-ticket '>Buy Tickets</h1>

<p className='text-center xl:text-2xl font-semibold mt-5 xl:mb-20 text-black'>Your ticket is the key to all Affiliate World has to offer – exhibition, stage, and networking events.

</p>
       <div className="flex flex-col md:flex-row gap-10 justify-center items-start py-10 ">
       <div className="flex flex-col justify-center items-center">
 <div className="line-wrapper border-[#211F52] border-2 xl:w-[500px] w-full pb-10 mb-5 flex justify-center">
    
 <div className="bg-blue-add z-10 text-white px-3 py-1 rounded-full xl:text-xl font-semibold inline-block mb-5 line absolute top-[-20px] ">FOR ATTENDEES</div>
 </div>
    <div className="w-full xl:w-[500px] border-2 border-[#211F52] rounded-xl  bg-white shadow-lg pb-2">
      <div className="text-center mb-4 ">
       <div className="flex rounded-tr-[10px] h-50 rounded-tl-[10px] bg-blue-add justify-center items-center    ">
       <h2 className="text-3xl font-bold text-white  "> ATTENDEES </h2>
       </div>
       
   <div className="flex items-center justify-center gap-10 mt-10">

   <div className="flex flex-col items-center justify-center  ">

      <p className="text-xl font-bold blue-color">Sale Price</p>
      <p className="xl:text-4xl font-bold blue-color">₹4,999</p>
      </div>
      <div className="flex flex-col items-center justify-center px-5 border-l-2">
      <p className="text-lg font-bold blue-color">Full Price</p>
      <p className="text-2xl font-bold blue-color line-through">₹10,000  </p>
      </div>
   </div>
        {/* <div className="flex  justify-center items-center mt-5 ">
      <p className="xl:text-xl text:lg font-semibold text-white p-2 mx-0 bg-blue-add border rounded-l-[10px] ">SAVE asdsd</p>
      <p className="xl:text-xl text:lg text-white  font-semibold  p-2 mx-0 bg-[#211F52d3] border rounded-r-[10px]">SALE ENDS IN 13 HOURS</p>
      </div> */}
      </div>
      <p className=" text-lg mb-4 font-semibold text-center border-t border-b pt-5 pb-5 bg-[#0a082f13] border-t-2 border-b-2 border-[#211F52] blue-color">
      Ideal for New Investors, Early-stage Founders, Consultants & Service Providers. 
      </p>
  <div className="p-5">
  <ul className="text-sm space-y-3  ">
  <li className="flex items-start text-lg blue-color">
  <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="blue-color font-bold mr-2">        Identified as Investor
        </span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="blue-color font-bold mr-2">        Full Day Access Pass
        </span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="blue-color font-bold mr-2">        3 Pitches, Panels, and Fireside Chats
        </span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="blue-color font-bold mr-2">        Networking Lunch & Hi-Tea
        </span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="blue-color font-bold mr-2">        Coffee Rave
        </span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="blue-color font-bold mr-2">        Live Chat with Attendees
        </span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-[#00000050] px-2 py-1 rounded">X</span>

        <span className="text-[#00000050] font-bold mr-2">        Company Logo, Name and Description on Startup page.
        </span>

      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-[#00000050] px-2 py-1 rounded">X</span>

        <span className="text-[#00000050] font-bold mr-2">        Access to Investor’s Lounge
        </span>
        </li>
        <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-[#00000050] px-2 py-1 rounded">X</span>
          
        <span className="text-[#00000050] font-bold mr-2 ">        Speed Dating with Investors
        </span>
        </li>
      </ul>
      <button className="light-blue-bg w-full mt-5 pb-5 text-white xl:text-lg px-5 py-5 rounded-xl font-bold cursor-pointer bg-blue-add ">
        BUY NOW
      </button>
  </div>
    </div>
    </div>
  
    {/* Company Card */}
        
    <div className="flex flex-col justify-center items-center">
 <div className="line-wrapper  border-[#FC466B] border-2 xl:w-[500px] w-full pb-10 mb-5 flex justify-center">
    
 <div className="dark-blue-bg z-10 text-white px-3 py-1 rounded-full xl:text-xl font-semibold inline-block mb-5 line absolute top-[-20px] bg-red-add  uppercase">FOR Startups</div>
 </div>
    <div className="w-full xl:w-[500px] border-2 border-[#FC466B] rounded-xl  bg-white shadow-lg pb-2">
      <div className="text-center mb-4 ">
       <div className="flex rounded-tr-[10px] h-50 rounded-tl-[10px] dark-blue-bg justify-center items-center  bg-red-add  ">
       <h2 className="text-3xl font-bold text-white uppercase ">Startups </h2>
       </div>
        {/* <img src="/your-image-path/company.png" alt="Company Badge" className="mx-auto w-16 my-2" /> */}
   <div className="flex items-center justify-center gap-10 mt-10">
   <div className="flex flex-col items-center justify-center  ">
      <p className="text-xl font-bold red-color">Sale Price</p>
      <p className="xl:text-4xl font-bold red-color">₹49,999</p>
      </div>
      <div className="flex flex-col items-center justify-center px-5 border-l-2">
      <p className="text-lg font-bold red-color">Full Price</p>
      <p className="text-2xl font-bold red-color line-through">₹ 75,000  </p>
      </div>
   </div>
        {/* <div className="flex  justify-center items-center mt-5 ">
      <p className="xl:text-xl text:lg font-semibold text-white p-2 mx-0 bg-red-add border rounded-l-[10px] ">SAVE €1,171</p>
      <p className="xl:text-xl text:lg text-white  font-semibold bg-red-add p-2 mx-0 bg-[#0a082fc4] border rounded-r-[10px]">SALE ENDS IN 13 HOURS</p>
      </div> */}
      </div>
      <p className="red-color text-lg mb-4 font-semibold text-center border-t border-b border-[#FC466B] pt-5 pb-5 bg-[#0a082f13] border-t-2 border-b-2">
      Ideal for Growth Stage Startup founders looking to raise funds.
      </p>
  <div className="p-5">
  <ul className="text-sm space-y-3  ">
  <li className="flex items-start text-lg blue-color">
        <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>
        <span className="red-color font-bold mr-2 ">        Identified as a Super Startup Founder
</span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="red-color font-bold mr-2">        Full Day Access Pass
        </span>
        </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="red-color font-bold mr-2">Company Logo, Name and Description on Startup page.</span>
        
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="red-color font-bold mr-2">        Access to Investor’s Lounge
        </span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="red-color font-bold mr-2">        Speed Dating with Investors
        </span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="red-color font-bold mr-2">        3 Pitches, Panels, and Fireside Chats
        </span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="red-color font-bold mr-2">        Networking Lunch & Hi-Tea
        </span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>

        <span className="red-color font-bold mr-2">        Coffee Rave
        </span>
      </li>
      <li className="flex items-start text-lg blue-color">
      <span className="text-white font-bold mr-2 bg-green-600 px-2 py-1 rounded">✔</span>
        
        <span className="red-color font-bold mr-2">        Live Chat with Attendees
        </span>
      </li>
      </ul>
      <a className="inline-block text-center dark-blue-bg w-full mt-5 pb-5 text-white xl:text-lg px-5 py-5 rounded-xl font-bold cursor-pointer bg-red-add">
        BUY NOW
      </a>
  </div>
    </div>
    </div>
  </div>
 </div>
 </div>
    
  )
}

export default Tickets