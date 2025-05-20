import React from 'react';

const ImageShapeOverlay = () => {
  return (
    <div className="relative w-[350px] h-[350px] bg-black">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "https://unsplash.com/photos/fire-spinning-in-a-circular-motion-EJBwRJZMOCQ", // Update with correct path
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 60% 70%, 60% 100%, 0 100%)',
        }}
      ></div>
    </div>

  );
};

export default ImageShapeOverlay;