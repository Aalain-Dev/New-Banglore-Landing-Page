import React from 'react';

const AssociationStats = () => {
  return (
    <div className="bg-blue-add text-white w-full flex flex-col lg:flex-row justify-between items-center">
      {/* Left: Association Logos */}
   <div className="container flex xl:flex-row flex-col ">
       <div className="flex-1 w-full mb-10 lg:mb-0 border-r border-[#ffffff7e] px-6 py-10">
        <h2 className="text-lg font-light mb-6">In Association With</h2>
        <div className="flex flex-wrap items-center gap-8">
         <marquee behavior="" direction="" className = "flex ">
             <div className="flex gap-10 justify-center items-center">
                <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/DWAO-Logo-White.ai-1-e1746202177970.png" alt="Knowledge Partner" className="w-30" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/Untitled-design-2-3-e1746600850541.png" alt="Knowledge Partner" className="w-30 bg-white" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2022/03/Adjust-logo-250x100px.png" alt="Knowledge Partner" className="w-30 bg-white" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/DWAO-Logo-White.ai-1-e1746202177970.png" alt="Knowledge Partner" className="w-30" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/Untitled-design-2-3-e1746600850541.png" alt="Knowledge Partner" className="w-30 bg-white" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2022/03/Adjust-logo-250x100px.png" alt="Knowledge Partner" className="w-30 bg-white" />
                   <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/DWAO-Logo-White.ai-1-e1746202177970.png" alt="Knowledge Partner" className="w-30" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/Untitled-design-2-3-e1746600850541.png" alt="Knowledge Partner" className="w-30 bg-white" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2022/03/Adjust-logo-250x100px.png" alt="Knowledge Partner" className="w-30 bg-white" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/DWAO-Logo-White.ai-1-e1746202177970.png" alt="Knowledge Partner" className="w-30" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/Untitled-design-2-3-e1746600850541.png" alt="Knowledge Partner" className="w-30 bg-white" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2022/03/Adjust-logo-250x100px.png" alt="Knowledge Partner" className="w-30 bg-white" /> <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/DWAO-Logo-White.ai-1-e1746202177970.png" alt="Knowledge Partner" className="w-30" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/Untitled-design-2-3-e1746600850541.png" alt="Knowledge Partner" className="w-30 bg-white" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2022/03/Adjust-logo-250x100px.png" alt="Knowledge Partner" className="w-30 bg-white" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/DWAO-Logo-White.ai-1-e1746202177970.png" alt="Knowledge Partner" className="w-30" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2025/03/Untitled-design-2-3-e1746600850541.png" alt="Knowledge Partner" className="w-30 bg-white" />
                  <img src="https://www.hashgrowth.org/wp-content/uploads/2022/03/Adjust-logo-250x100px.png" alt="Knowledge Partner" className="w-30 bg-white" />
             </div>

           
     
         </marquee>
        </div>
      </div>

      {/* Right: Stats */}
      <div className="flex-1 w-full flex justify-around text-center  xl:px-6 p-1  xl:pt-20 pt-0 py-10">
        <div>
          <p className="xl:text-[2.5rem] text-4xl font-medium">350+</p>
          <p className="text-lg    mt-5 text-white capitalize">attendees</p>
        </div>
        <div>
          <p className="xl:text-[2.5rem] text-4xl font-medium">100+</p>
          <p className="text-lg    mt-5 text-white capitalize">angel investors</p>
        </div>
        <div>
          <p className="xl:text-[2.5rem] text-4xl font-medium">10+</p>
          <p className="text-lg    mt-5 text-white capitalize">VC funds</p>
        </div>
      </div>
   </div>
    </div>
  );
};

export default AssociationStats;
