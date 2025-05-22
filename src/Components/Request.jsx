import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Request = () => {
  return (
    <section className="pt-10 pb-10 flex flex-col items-center justify-center text-center bg-[#211F52] px-4">
      <h1 className="text-white text-[20px] xl:text-[36px] font-normal mb-8">
       Capital Connect : Bangalore Edition 
      </h1>
 <ScrollLink to="tickets" smooth={true} duration={500}   className="uppercase pink-bg text-white text-center xl:text-[17px] px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-2 w-60">
     Request Your Invite
      </ScrollLink>
    </section>  
  );
};

export default Request;
