import React from "react";

const PlusSection  = () => {
  return (
<div className="container">
<div className="relative h-screen w-full flex items-center justify-center bg-white">
      {/* Vertical Line */}
      <div className="absolute w-1 h-full bg-[#211F52] left-1/2 transform -translate-x-1/2" />
      {/* Horizontal Line */}
      <div className="absolute h-1 w-full bg-[#211F52] top-1/2 transform -translate-y-1/2" />

      {/* Top Left */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-xl font-medium">This is text 1</p>
      </div>

      {/* Top Right */}
      <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-xl font-medium">This is text 1</p>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 text-center">
        <p className="text-xl font-medium">This is text 1</p>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-center">
        <p className="text-xl font-medium">This is text 1</p>
      </div>
    </div>
</div>
  );
};

export default PlusSection ;
